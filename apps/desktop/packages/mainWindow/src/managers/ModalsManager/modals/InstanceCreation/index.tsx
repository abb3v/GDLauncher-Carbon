import { Button, Dropdown, Input, TextArea, createNotification } from "@gd/ui";
import { ModalProps, useModal } from "../..";
import ModalLayout from "../../ModalLayout";
import { Trans, useTransContext } from "@gd/i18n";
import { Match, Show, Switch, createEffect, createSignal } from "solid-js";
import { forgeVersions, mcVersions } from "@/utils/mcVersion";
import { port, rspc } from "@/utils/rspcClient";
import { ModLoaderType } from "@gd/core_module/bindings";
import { blobToBase64 } from "@/utils/helpers";

type MappedVersion = {
  label: string;
  key: string;
};

const InstanceCreation = (props: ModalProps) => {
  const [t] = useTransContext();
  const [mappedMcVersions, setMappedMcVersions] = createSignal<MappedVersion[]>(
    []
  );
  const [title, setTitle] = createSignal("");
  const [notes, setNotes] = createSignal("");
  const [error, setError] = createSignal("");
  const [bgPreview, setBgPreview] = createSignal<string | null>(null);
  const [loader, setLoader] = createSignal<ModLoaderType | undefined>(
    undefined
  );
  const [loaderVersions, setLoaderVersions] = createSignal<
    MappedVersion[] | undefined
  >(undefined);
  const [mcVersion, setMcVersion] = createSignal("");

  const addNotification = createNotification();
  const modalsContext = useModal();

  createEffect(() => {
    const mcVersionLoaderVersions = forgeVersions()?.gameVersions.find(
      (version) => version.id === mcVersion()
    )?.loaders;

    const mappedVersion = mcVersionLoaderVersions?.map((version) => ({
      label: version.id,
      key: version.id,
    }));

    setLoaderVersions(mappedVersion);
  });

  createEffect(() => {
    const versions = mcVersions().map((version) => ({
      label: `${version.id} - ${version.type}`,
      key: version.id,
    }));
    setMappedMcVersions(versions);
  });

  const defaultGroup = rspc.createQuery(() => ["instance.getDefaultGroup"]);

  const createInstanceMutation = rspc.createMutation(
    ["instance.createInstance"],
    {
      onSuccess() {
        addNotification("Instance saccessfully created.");
        modalsContext?.closeModal();
      },
      onError() {
        addNotification("Error while creating the instance.");
        modalsContext?.closeModal();
      },
    }
  );

  const handleCreate = () => {
    if (!title() || !mcVersion() || !loader()) {
      setError("Fields must be filled in!");
    } else {
      setError("");

      createInstanceMutation.mutate({
        group: defaultGroup.data || 1,
        use_loaded_icon: true,
        notes: notes(),
        name: title(),
        version: {
          Version: {
            Standard: {
              release: mcVersion(),
              modloaders: loader()
                ? [
                    {
                      type_: loader() as ModLoaderType,
                      version: "1.2.3",
                    },
                  ]
                : [],
            },
          },
        },
      });
    }
  };

  return (
    <ModalLayout
      noHeader={props.noHeader}
      title={props?.title}
      overflowHiddenDisabled={true}
      noPadding={true}
    >
      <div class="flex flex-col justify-between overflow-y-scroll max-h-128 w-120">
        <div class="flex flex-col justify-between gap-4 p-5">
          <div
            class="relative flex justify-center items-center w-20 bg-darkSlate-900 rounded-xl cursor-pointer h-20 bg-center bg-cover"
            style={{
              "background-image": `url("${bgPreview()}")`,
            }}
            onClick={() => {
              if (bgPreview()) return;
              window
                .openFileDialog([
                  { name: "Image", extensions: ["png", "jpg", "jpeg"] },
                ])
                .then((files) => {
                  fetch(
                    `http://localhost:${port}/instance/loadIcon?path=${files.filePaths[0]}`
                  ).then(async (img) => {
                    const blob = await img.blob();
                    const b64 = (await blobToBase64(blob)) as string;

                    setBgPreview(
                      `data:image/png;base64, ${b64.substring(
                        b64.indexOf(",") + 1
                      )}`
                    );
                  });
                });
            }}
          >
            <Switch>
              <Match when={!bgPreview()}>
                <h3 class="text-center">
                  <Trans
                    key="instance.upload_image"
                    options={{
                      defaultValue: "Upload image",
                    }}
                  />
                </h3>
              </Match>
              <Match when={bgPreview()}>
                <div class="absolute top-0 right-0 pl-2 pb-2 bg-darkSlate-700 rounded-bl-2xl">
                  <div
                    class="text-white i-ri:close-circle-fill hover:color-red-500 transition-all duration-100 ease-in-out text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      setBgPreview(null);
                    }}
                  />
                </div>
              </Match>
            </Switch>
          </div>

          <div>
            <h5 class="mt-0 mb-2">
              <Trans
                key="instance.instance_name"
                options={{
                  defaultValue: "Instance name",
                }}
              />
            </h5>
            <Input
              required
              placeholder="New instance"
              inputColor="bg-darkSlate-800"
              onInput={(e) => {
                setTitle(e.currentTarget.value);
              }}
              error={
                error() &&
                !title() &&
                (t("error.missing_field_title") as string)
              }
            />
          </div>
          <div>
            <h5 class="mt-0 mb-2">
              <Trans
                key="instance.instance_notes"
                options={{
                  defaultValue: "Notes",
                }}
              />
            </h5>
            <TextArea
              required
              placeholder="New instance"
              class="min-h-40 resize-none"
              onInput={(e) => {
                setNotes(e.currentTarget.value);
              }}
              error={
                error() &&
                !notes() &&
                (t("error.missing_field_description") as string)
              }
            />
          </div>
          <div>
            <h5 class="mt-0 mb-2">
              <Trans
                key="instance.instance_mc_version"
                options={{
                  defaultValue: "Minecraft Version",
                }}
              />
            </h5>
            <Show when={mappedMcVersions().length > 0}>
              <Dropdown
                options={mappedMcVersions()}
                bgColorClass="bg-darkSlate-800"
                containerClass="w-full"
                class="w-full"
                value={mappedMcVersions()[0].key}
                placement="bottom"
                onChange={(loader) => {
                  setMcVersion(loader.key);
                }}
                error={
                  error() &&
                  !mcVersion() &&
                  (t("error.missing_field_mc_version") as string)
                }
              />
            </Show>
          </div>
          <div>
            <h5 class="mt-0 mb-2">
              <Trans
                key="instance.instance_loader"
                options={{
                  defaultValue: "Loader",
                }}
              />
            </h5>
            <Dropdown
              options={[
                { label: t("instance.vanilla"), key: "Vanilla" },
                { label: t("instance.forge"), key: "Forge" },
                // { label: t("instance.fabric"), key: "Fabric" },
              ]}
              bgColorClass="bg-darkSlate-800"
              containerClass="w-full"
              class="w-full"
              value="vanilla"
              onChange={(loader) => {
                if (loader.key !== "Vanilla") {
                  setLoader(loader.key as ModLoaderType);
                }
              }}
              error={
                error() &&
                !loader() &&
                (t("error.missing_field_loader") as string)
              }
            />
          </div>
          <Show when={loaderVersions() && loader() === "Forge"}>
            <div>
              <h5 class="mt-0 mb-2">
                <Trans
                  key="instance.instance_loader_version"
                  options={{
                    defaultValue: "Loader version",
                  }}
                />
              </h5>
              <Dropdown
                options={loaderVersions() as MappedVersion[]}
                bgColorClass="bg-darkSlate-800"
                containerClass="w-full"
                class="w-full"
                disabled={!loaderVersions()}
                value={loaderVersions()?.[0]?.key}
                placement="bottom"
                onChange={(loader) => {
                  setMcVersion(loader.key);
                }}
                error={
                  error() &&
                  !loader() &&
                  (t("error.missing_field_loader_version") as string)
                }
              />
            </div>
          </Show>
          <div class="flex w-full justify-between">
            <Button
              variant="secondary"
              style={{ width: "100%", "max-width": "200px" }}
            >
              <Trans
                key="instance.instance_modal_instance_creation_cancel"
                options={{
                  defaultValue: "Cancel",
                }}
              />
            </Button>
            <Button
              variant="primary"
              style={{ width: "100%", "max-width": "200px" }}
              onClick={() => {
                handleCreate();
              }}
            >
              <Trans
                key="instance.instance_modal_instance_creation_create"
                options={{
                  defaultValue: "Create",
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default InstanceCreation;
