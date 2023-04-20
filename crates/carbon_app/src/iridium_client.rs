#[cfg(feature = "production")]
#[inline(always)]
pub fn get_client() -> reqwest_middleware::ClientWithMiddleware {
    iridium::get_client()
}

#[cfg(not(feature = "production"))]
#[inline(always)]
pub fn get_client() -> reqwest_middleware::ClientWithMiddleware {
    let client = reqwest::Client::builder().build().unwrap();
    reqwest_middleware::ClientBuilder::new(client).build()
}
