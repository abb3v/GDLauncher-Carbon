use std::sync::Arc;

use crate::managers::{App, AppInner};
use crate::{app_version, managers};
use async_stream::stream;
use axum::extract::ws::Message;
use axum::extract::{State, WebSocketUpgrade};
use axum::response::IntoResponse;
use rspc::{RouterBuilderLike, Type};
use serde::{Deserialize, Serialize};
use tracing::{error, info};

mod account;
pub mod instance;
mod java;
pub mod keys;
mod mc;
mod metrics;
mod modplatforms;
pub mod router;
pub mod settings;
mod system_info;
pub mod translation;
mod vtask;

#[derive(Debug, Clone, Serialize, Deserialize, Type)]
pub struct InvalidationEvent {
    pub key: &'static str,
    pub args: Option<serde_json::Value>,
}

impl InvalidationEvent {
    pub fn new(key: &'static str, args: Option<serde_json::Value>) -> Self {
        Self { key, args }
    }
}

pub fn build_rspc_router() -> impl RouterBuilderLike<App> {
    let mut counter = Arc::new(0);

    rspc::Router::<App>::new()
        .query("echo", |t| t(|_ctx, args: String| async move { Ok(args) }))
        .query("getAppVersion", |t| {
            t(|_ctx, _: ()| async move { Ok(app_version::APP_VERSION) })
        })
        .yolo_merge(keys::account::GROUP_PREFIX, account::mount())
        .yolo_merge(keys::java::GROUP_PREFIX, java::mount())
        .yolo_merge(keys::mc::GROUP_PREFIX, mc::mount())
        .yolo_merge(keys::vtask::GROUP_PREFIX, vtask::mount())
        .yolo_merge(keys::instance::GROUP_PREFIX, instance::mount())
        .yolo_merge(keys::modplatforms::GROUP_PREFIX, modplatforms::mount())
        .yolo_merge(keys::settings::GROUP_PREFIX, settings::mount())
        .yolo_merge(keys::metrics::GROUP_PREFIX, metrics::mount())
        .yolo_merge(keys::systeminfo::GROUP_PREFIX, system_info::mount())
}

pub fn build_axum_vanilla_router() -> axum::Router<Arc<AppInner>> {
    axum::Router::new()
        .route("/", axum::routing::get(|| async { "Hello 'rspc'!" }))
        .route(
            "/invalidations",
            axum::routing::get(invalidation_ws_handler),
        )
        .route("/health", axum::routing::get(|| async { "OK" }))
        .nest("/account", account::mount_axum_router())
        .nest("/instance", instance::mount_axum_router())
}

async fn invalidation_ws_handler(
    req: WebSocketUpgrade,
    State(app): State<Arc<AppInner>>,
) -> impl IntoResponse {
    req.on_upgrade(|mut socket| async move {
        let mut channel = app.invalidation_channel.subscribe();
        info!("Invalidation channel connected");
        while let Ok(event) = channel.recv().await {
            let Ok(message) = serde_json::to_string(&event) else {
                error!("Failed to serialize invalidation event: {:?}", event);
                continue;
            };
            match socket.send(Message::Text(message)).await {
                Ok(_) => {}
                Err(e) => {
                    error!("Failed to send invalidation event: {:?}", e);
                }
            }
        }

        info!("Invalidation channel disconnected");
    })
}

#[derive(Type, Debug, Deserialize, Clone)]
pub enum Set<T> {
    Set(T),
}

impl<T> Set<T> {
    pub fn inner(self) -> T {
        match self {
            Self::Set(t) => t,
        }
    }
}

#[cfg(test)]
mod test {
    #[test]
    #[ignore]
    #[allow(clippy::assertions_on_constants)]
    fn verify_iridium_feature() {
        #[cfg(feature = "production")]
        {
            assert!(true);
        }
        #[cfg(not(feature = "production"))]
        {
            assert!(false);
        }
    }
}
