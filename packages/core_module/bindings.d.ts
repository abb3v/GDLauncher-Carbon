// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "account.enroll.getStatus", input: never, result: EnrollmentStatus | null } | 
        { key: "account.getAccountStatus", input: string, result: AccountStatus | null } | 
        { key: "account.getAccounts", input: never, result: AccountEntry[] } | 
        { key: "account.getActiveUuid", input: never, result: string | null } | 
        { key: "account.getHead", input: string, result: null } | 
        { key: "echo", input: string, result: string } | 
        { key: "getAppVersion", input: never, result: string } | 
        { key: "instance.getDefaultGroup", input: never, result: number } | 
        { key: "instance.getGroups", input: never, result: ListGroup[] } | 
        { key: "instance.getImportableEntities", input: never, result: FEEntity[] } | 
        { key: "instance.getImportableInstances", input: FEEntity, result: FEImportableInstance[] } | 
        { key: "instance.getInstanceDetails", input: FEInstanceId, result: InstanceDetails } | 
        { key: "instance.getInstancesUngrouped", input: never, result: UngroupedInstance[] } | 
        { key: "instance.getLogs", input: never, result: GameLogEntry[] } | 
        { key: "java.getAvailableJavas", input: never, result: { [key: number]: FEJavaComponent[] } } | 
        { key: "java.getManagedArch", input: never, result: FEManagedJavaArch[] } | 
        { key: "java.getManagedOS", input: never, result: FEManagedJavaOs[] } | 
        { key: "java.getManagedVendors", input: never, result: FEVendor[] } | 
        { key: "java.getManagedVersionsByVendor", input: FEVendor, result: FEManagedJavaOsMap } | 
        { key: "java.getSetupManagedJavaProgress", input: never, result: FEManagedJavaSetupProgress } | 
        { key: "java.getSystemJavaProfiles", input: never, result: FESystemJavaProfile[] } | 
        { key: "mc.getFabricVersions", input: never, result: FEModdedManifest } | 
        { key: "mc.getForgeVersions", input: never, result: FEModdedManifest } | 
        { key: "mc.getMinecraftVersions", input: never, result: ManifestVersion[] } | 
        { key: "mc.getQuiltVersions", input: never, result: FEModdedManifest } | 
        { key: "modplatforms.curseforge.getModloaders", input: never, result: FEModLoaderType[] } | 
        { key: "modplatforms.curseforgeGetCategories", input: never, result: FECategoriesResponse } | 
        { key: "modplatforms.curseforgeGetFiles", input: FEFilesParameters, result: FEFilesResponse } | 
        { key: "modplatforms.curseforgeGetMod", input: FEModParameters, result: FEModResponse } | 
        { key: "modplatforms.curseforgeGetModDescription", input: FEModDescriptionParameters, result: FEModDescriptionResponse } | 
        { key: "modplatforms.curseforgeGetModFile", input: FEModFileParameters, result: FEModFileResponse } | 
        { key: "modplatforms.curseforgeGetModFileChangelog", input: FEModFileChangelogParameters, result: FEModFileChangelogResponse } | 
        { key: "modplatforms.curseforgeGetModFiles", input: FEModFilesParameters, result: FEModFilesResponse } | 
        { key: "modplatforms.curseforgeGetMods", input: FEModsParameters, result: FEModsResponse } | 
        { key: "modplatforms.curseforgeSearch", input: FEModSearchParameters, result: FEModSearchResponse } | 
        { key: "modplatforms.modrinthGetCategories", input: never, result: FEModrinthCategoriesResponse } | 
        { key: "modplatforms.modrinthGetProject", input: FEModrinthProjectID, result: FEModrinthProject } | 
        { key: "modplatforms.modrinthGetProjectTeam", input: FEModrinthProjectID, result: FEModrinthTeamResponse } | 
        { key: "modplatforms.modrinthGetProjects", input: FEModrinthProjectIDs, result: FEModrinthProjectsResponse } | 
        { key: "modplatforms.modrinthGetTeam", input: FEModrinthTeamID, result: FEModrinthTeamResponse } | 
        { key: "modplatforms.modrinthGetVersion", input: FEModrinthVersionID, result: FEModrinthVersion } | 
        { key: "modplatforms.modrinthGetVersions", input: FEModrinthVersionIDs, result: FEModrinthVersionsResponse } | 
        { key: "modplatforms.modrinthSearch", input: FEModrinthProjectSearchParameters, result: FEModrinthProjectSearchResponse } | 
        { key: "modplatforms.unifiedSearch", input: FEUnifiedSearchParameters, result: FEUnifiedSearchResponse } | 
        { key: "settings.getSettings", input: never, result: FESettings } | 
        { key: "systeminfo.getTotalRAM", input: never, result: string } | 
        { key: "systeminfo.getUsedRAM", input: never, result: string } | 
        { key: "vtask.getTask", input: FETaskId, result: FETask | null } | 
        { key: "vtask.getTasks", input: never, result: FETask[] },
    mutations: 
        { key: "account.deleteAccount", input: string, result: null } | 
        { key: "account.enroll.begin", input: never, result: null } | 
        { key: "account.enroll.cancel", input: never, result: null } | 
        { key: "account.enroll.finalize", input: never, result: null } | 
        { key: "account.refreshAccount", input: string, result: null } | 
        { key: "account.setActiveUuid", input: string | null, result: null } | 
        { key: "instance.createGroup", input: string, result: FEGroupId } | 
        { key: "instance.createInstance", input: CreateInstance, result: FEInstanceId } | 
        { key: "instance.deleteGroup", input: FEGroupId, result: null } | 
        { key: "instance.deleteInstance", input: FEInstanceId, result: null } | 
        { key: "instance.deleteLog", input: GameLogId, result: null } | 
        { key: "instance.deleteMod", input: InstanceMod, result: null } | 
        { key: "instance.disableMod", input: InstanceMod, result: null } | 
        { key: "instance.duplicateInstance", input: DuplicateInstance, result: FEInstanceId } | 
        { key: "instance.enableMod", input: InstanceMod, result: null } | 
        { key: "instance.importInstance", input: FEImportInstance, result: FETaskId } | 
        { key: "instance.installMod", input: InstallMod, result: FETaskId } | 
        { key: "instance.killInstance", input: FEInstanceId, result: null } | 
        { key: "instance.launchInstance", input: FEInstanceId, result: null } | 
        { key: "instance.loadIconUrl", input: string, result: null } | 
        { key: "instance.moveGroup", input: MoveGroup, result: null } | 
        { key: "instance.moveInstance", input: MoveInstance, result: null } | 
        { key: "instance.openInstanceFolder", input: OpenInstanceFolder, result: null } | 
        { key: "instance.prepareInstance", input: FEInstanceId, result: null } | 
        { key: "instance.scanImportableInstances", input: FEEntity, result: null } | 
        { key: "instance.setFavorite", input: SetFavorite, result: null } | 
        { key: "instance.updateInstance", input: UpdateInstance, result: null } | 
        { key: "java.deleteJavaVersion", input: string, result: null } | 
        { key: "java.setupManagedJava", input: FEManagedJavaSetupArgs, result: string } | 
        { key: "java.updateSystemJavaProfilePath", input: FEUpdateSystemJavaProfileArgs, result: null } | 
        { key: "metrics.sendEvent", input: FEEvent, result: null } | 
        { key: "metrics.sendPageview", input: FEPageview, result: null } | 
        { key: "settings.setSettings", input: FESettingsUpdate, result: null } | 
        { key: "vtask.dismissTask", input: FETaskId, result: null },
    subscriptions: 
        { key: "invalidateQuery", input: never, result: InvalidationEvent }
};

export type FEModsParameters = { body: FEModsParametersBody }

export type FEManagedJavaSetupArgs = { os: FEManagedJavaOs; arch: FEManagedJavaArch; vendor: FEVendor; id: string }

export type SetFavorite = { instance: FEInstanceId; favorite: boolean }

export type FEModrinthProjectSearchResult = { slug: string; title: string; description: string; categories: string[] | null; client_side: FEModrinthProjectSupportRange; server_side: FEModrinthProjectSupportRange; project_type: FEModrinthProjectType; downloads: number; icon_url: string | null; color: number | null; project_id: string; author: string; display_categories: string[] | null; versions: string[]; follows: number; date_created: string; date_modified: string; latest_version: string | null; license: string; gallery: string[] | null; featured_gallery: string | null }

export type FEUnifiedModSortIndex = { curseForge: FEModSearchSortField } | { modrinth: FEModrinthSearchIndex }

export type ListGroup = { id: FEGroupId; name: string; instances: ListInstance[] }

export type CurseforgeMod = { project_id: number; file_id: number }

export type FESubtask = { name: Translation; progress: FESubtaskProgress }

export type ModLoader = { type_: FEInstanceModLoaderType; version: string }

export type FEModrinthLicense = { id: string; name: string; url: string | null }

export type FEModrinthCategoriesResponse = FEModrinthCategory[]

export type FESystemJavaProfile = { name: FESystemJavaProfileName; javaId: string | null }

export type FETask = { name: Translation; progress: Progress; downloaded: number; download_total: number; active_subtasks: FESubtask[] }

export type CurseforgeModpack = { project_id: number; file_id: number }

export type GameVersion = { Standard: StandardVersion }

export type FEUpdateSystemJavaProfileArgs = { profileName: FESystemJavaProfileName; javaId: string }

export type FEModrinthVersion = { name: string; version_number: string; changelog: string | null; dependencies: FEModrinthDependency[]; game_versions: string[]; version_type: FEModrinthVersionType; loaders: string[]; featured: boolean; status: FEModrinthStatus | null; requested_status: FEModrinthRequestedVersionStatus | null; id: string; project_id: string; author_id: string; date_published: string; downloads: number; files: FEModrinthVersionFile[] }

export type FEFileStatus = "processing" | "changesRequired" | "underReview" | "approved" | "rejected" | "malwareDetected" | "deleted" | "archived" | "testing" | "released" | "readyForReview" | "deprecated" | "baking" | "awaitingPublishing" | "failedPublishing"

export type OpenInstanceFolder = { instance_id: FEInstanceId; folder: InstanceFolder }

export type ModSource = { Curseforge: CurseforgeMod } | { Modrinth: ModrinthMod }

export type FESettings = { theme: string; language: string; reducedMotion: boolean; discordIntegration: boolean; releaseChannel: string; concurrentDownloads: number; showNews: boolean; xmx: number; xms: number; isFirstLaunch: boolean; startupResolution: string; javaCustomArgs: string; autoManageJava: boolean; isLegalAccepted: boolean; metricsLevel: number | null }

export type FEManagedJavaOsMap = { [key: FEManagedJavaOs]: FEManagedJavaArchMap }

export type FEManagedJavaArch = "x64" | "x86" | "arm32" | "arm64"

export type FEModrinthRequestedVersionStatus = "listed" | "archived" | "draft" | "unlisted"

export type FEImportableInstance = { name: string }

export type FEManagedJavaOs = "windows" | "linux" | "macOs"

export type FEModsParametersBody = { modIds: number[] }

export type LaunchState = { Inactive: { failed_task: FETaskId | null } } | { Preparing: FETaskId } | { Running: { start_time: string; log_id: number } }

export type EnrollmentError = "deviceCodeExpired" | { xboxAccount: XboxError } | "noGameOwnership" | "noGameProfile"

export type ModpackPlatform = "Curseforge" | "Modrinth"

export type FEUnifiedPagination = { index: number; pageSize: number; resultCount: number; totalCount: number }

export type FEModDescriptionParameters = { modId: number }

export type Progress = "Indeterminate" | { Known: number } | { Failed: FeError }

export type XboxError = "noAccount" | "xboxServicesBanned" | "adultVerificationRequired" | "childAccount" | { unknown: number }

export type Mod = { id: string; filename: string; enabled: boolean; modloaders: FEInstanceModLoaderType[]; metadata: ModFileMetadata }

export type FEImportInstance = { entity: FEEntity; index: number }

export type FEUnifiedSearchParameters = { searchQuery: string | null; categories: And<FEUnifiedSearchCategoryID> | null; gameVersions: Or<string> | null; modloaders: Or<FEQueryModLoaderType> | null; projectType: FEUnifiedSearchType | null; sortIndex: FEUnifiedModSortIndex | null; sortOrder: FEModSearchSortOrder | null; index: number | null; pageSize: number | null; searchApi: FESearchAPI }

export type AccountEntry = { username: string; uuid: string; lastUsed: string; type: AccountType }

export type FEMod = { id: number; gameId: number; name: string; slug: string; links: FEModLinks; summary: string; status: FEModStatus; downloadCount: number; isFeatured: boolean; primaryCategoryId: number; categories: FECategory[]; classId: number | null; authors: FEModAuthor[]; logo: FEModAsset; screenshots: FEModAsset[]; mainFileId: number; latestFiles: FEFile[]; latestFilesIndexes: FEFileIndex[]; dateCreated: string; dateModified: string; dateReleased: string; allowModDistribution: boolean | null; gamePopularityRank: number; isAvailable: boolean; thumbsUpCount: number }

export type FEModSearchSortField = "featured" | "popularity" | "lastUpdated" | "name" | "author" | "totalDownloads" | "category" | "gameVersion"

export type FEModrinthSearchFacet = { Category: string } | { Version: string } | { License: string } | { ProjectType: string }

export type FEManagedJavaVersion = { id: string; name: string; downloadUrl: string; javaVersion: string }

export type FEFileReleaseType = "stable" | "beta" | "alpha"

export type FEModFilesParameters = { modId: number; query: FEModFilesParametersQuery }

export type InstallMod = { instance_id: FEInstanceId; mod_source: ModSource }

export type UpdateInstance = { instance: FEInstanceId; name?: Set<string> | null; use_loaded_icon?: Set<boolean> | null; notes?: Set<string> | null; version?: Set<string> | null; modloader?: Set<ModLoader | null> | null; global_java_args?: Set<boolean> | null; extra_java_args?: Set<string | null> | null; memory?: Set<MemoryRange | null> | null }

export type CreateInstanceVersion = { Version: GameVersion } | { Modpack: Modpack }

export type ListInstanceStatus = { Valid: ValidListInstance } | { Invalid: InvalidListInstance }

export type FEQueryModLoaderType = "forge" | "fabric" | "quilt"

export type FEModSearchParameters = { query: FEModSearchParametersQuery }

export type FETaskId = number

export type FEUnifiedSearchResponse = { searchApi: FESearchAPI; data: FEUnifiedSearchResult[]; pagination: FEUnifiedPagination | null }

export type FEModFileChangelogParameters = { modId: number; fileId: number }

export type FEInstanceModLoaderType = "forge" | "fabric" | "quilt" | "unknown"

export type ModFileMetadata = { modid: string; name: string | null; version: string | null; description: string | null; authors: string | null; modloaders: FEInstanceModLoaderType[] | null }

export type FEHashAlgo = "sha1" | "md5"

export type FEModrinthProjectType = "mod" | "shader" | "modpack" | "resourcepack"

export type ConfigurationParseErrorType = "Syntax" | "Data" | "Eof"

export type FEManagedJavaArchMap = { [key: FEManagedJavaArch]: FEManagedJavaVersion[] }

export type FEModrinthStatus = "listed" | "archived" | "draft" | "unlisted" | "scheduled" | "unknown"

export type FEModrinthVersionsResponse = FEModrinthVersion[]

export type InstanceDetails = { name: string; favorite: boolean; version: string | null; modpack: Modpack | null; global_java_args: boolean; extra_java_args: string | null; memory: MemoryRange | null; last_played: string; seconds_played: number; modloaders: ModLoader[]; notes: string; state: LaunchState; mods: Mod[]; icon_revision: number }

export type FESortableGameVersion = { gameVersionName: string; gameVersionPadded: string; gameVersion: string; gameVersionReleaseDate: string; gameVersionTypeId: number | null }

/**
 * An image that have been uploaded to a project's gallery
 */
export type FEModrinthGalleryItem = { url: string; featured: boolean; title: string | null; description: string | null; created: string; ordering: number }

export type InvalidListInstance = "JsonMissing" | { JsonError: ConfigurationParseError } | { Other: string }

export type McType = "old_alpha" | "old_beta" | "release" | "snapshot"

export type FEModrinthSearchIndex = "relevance" | "downloads" | "follows" | "newest" | "updated"

export type FESearchAPI = "curseforge" | "modrinth"

export type MoveInstanceTarget = { BeforeInstance: FEInstanceId } | { BeginningOfGroup: FEGroupId } | { EndOfGroup: FEGroupId }

export type UngroupedInstance = ({ id: FEInstanceId; name: string; favorite: boolean; status: ListInstanceStatus; icon_revision: number }) & { favorite: boolean }

export type Translation = { translation: "ModCacheTaskUpdate" } | { translation: "ModCacheTaskUpdateScanFiles" } | { translation: "ModCacheTaskUpdateQueryApis" } | { translation: "InstanceTaskLaunch"; args: { name: string } } | { translation: "InstanceTaskPrepare"; args: { name: string } } | { translation: "InstanceTaskLaunchWaiting" } | { translation: "InstanceTaskLaunchRequestVersions" } | { translation: "InstanceTaskLaunchRequestModpack" } | { translation: "InstanceTaskLaunchDownloadModpackFiles" } | { translation: "InstanceTaskLaunchExtractModpackFiles" } | { translation: "InstanceTaskLaunchDownloadAddonMetadata" } | { translation: "InstanceTaskLaunchInstallJava" } | { translation: "InstanceTaskLaunchDownloadFiles" } | { translation: "InstanceTaskLaunchExtractNatives" } | { translation: "InstanceTaskLaunchRunForgeProcessors" } | { translation: "InstanceTaskInstallMod"; args: { mod_name: string; instance_name: string } } | { translation: "InstanceTaskInstallModDownloadFile" }

export type FESettingsUpdate = { theme?: string | null; language?: string | null; reducedMotion?: boolean | null; discordIntegration?: boolean | null; releaseChannel?: string | null; concurrentDownloads?: number | null; showNews?: boolean | null; xmx?: number | null; xms?: number | null; isFirstLaunch?: boolean | null; startupResolution?: string | null; javaCustomArgs?: string | null; autoManageJava?: boolean | null; isLegalAccepted?: boolean | null; metricsLevel?: number | null }

export type FEModFileParameters = { modId: number; fileId: number }

export type FEModLinks = { websiteUrl: string | null; wikiUrl: string | null; issuesUrl: string | null; sourceUrl: string | null }

export type FEEvent = { name: FEEventName; properties: { [key: string]: string } }

export type Set<T> = { Set: T }

export type FEModrinthTeamResponse = FEModrinthTeamMember[]

export type FEModrinthAdditionalFileType = "requiredResourcePack" | "optionalResourcePack"

export type FEModrinthProjectSearchResponse = { hits: FEModrinthProjectSearchResult[]; offset: number; limit: number; total_hits: number }

export type FEFileIndex = { gameVersion: string; fileId: number; filename: string; releaseType: FEFileReleaseType; gameVersionTypeId: number | null; modLoader: FEModLoaderType | null }

export type FEPagination = { index: number; pageSize: number; resultCount: number; totalCount: number }

export type FEModrinthSearchFacetOr = FEModrinthSearchFacet[]

export type FEGroupId = number

export type ListInstance = { id: FEInstanceId; name: string; favorite: boolean; status: ListInstanceStatus; icon_revision: number }

export type FEFilesParameters = { body: FEFilesParametersBody }

export type FEModdedManifest = { gameVersions: FEModdedManifestVersion[] }

export type FEUnifiedSearchCategoryID = { curseforge: number } | { modrinth: string }

export type FEModrinthDependencyType = "required" | "optional" | "incompatible" | "embedded"

export type FEEventName = "AppClosed"

export type FEModFileResponse = { data: FEFile; pagination: FEPagination | null }

export type Modpack = { Curseforge: CurseforgeModpack } | { Modrinth: ModrinthModpack }

export type FEFileDependency = { modId: number; relationType: FEFileRelationType }

export type AccountStatus = "ok" | "expired" | "refreshing" | "invalid"

export type FEModResponse = { data: FEMod; pagination: FEPagination | null }

export type FEFileModule = { name: string; fingerprint: string }

export type FEModFilesResponse = { data: FEFile[]; pagination: FEPagination | null }

export type CreateInstance = { group: FEGroupId; name: string; use_loaded_icon: boolean; version: CreateInstanceVersion; notes: string }

export type FEModrinthHashes = ({ [key: string]: string }) & { sha512: string; sha1: string }

export type MoveInstance = { instance: FEInstanceId; target: MoveInstanceTarget }

export type ValidListInstance = { mc_version: string | null; modloader: FEInstanceModLoaderType | null; modpack_platform: ModpackPlatform | null; state: LaunchState }

export type FEFileRelationType = "embeddedLibrary" | "optionalDependency" | "requiredDependency" | "tool" | "incompatible" | "include"

export type InstanceMod = { instance_id: FEInstanceId; mod_id: string }

export type FEModrinthUserRole = "developer" | "moderator" | "admin"

export type GameLogId = number

export type FEModrinthVersionFile = { hashes: FEModrinthHashes; url: string; filename: string; primary: boolean; size: number; file_type: FEModrinthAdditionalFileType | null }

export type ManifestVersion = { id: string; type: McType }

export type FECategory = { id: number; name: string; slug: string; url: string; iconUrl: string; dateModified: string; isClass: boolean | null; classId: number | null; parentCategoryId: number | null; displayIndex: number | null }

export type FEUnifiedSearchType = "mod" | "modPack"

export type FEModrinthProjectStatus = "approved" | "rejected" | "draft" | "unlisted" | "archived" | "processing" | "unknown"

export type FEModParameters = { modId: number }

export type FEPageview = { path: string }

export type FEFileHash = { value: string; algo: FEHashAlgo }

export type FEModrinthProjectsResponse = FEModrinthProject[]

export type FEModrinthTeamMember = { team_id: string; user: FEModrinthUser; role: string; ordering: number | null }

export type FEModStatus = "new" | "changesRequired" | "underSoftReview" | "approved" | "rejected" | "changesMade" | "inactive" | "abandoned" | "deleted" | "underReview"

export type InvalidationEvent = { key: string; args: any | null }

export type FEClassId = "mods" | "modpacks"

export type FEModSearchSortOrder = "ascending" | "descending"

export type FEJavaComponent = { id: string; path: string; version: string; type: FEJavaComponentType; isValid: boolean }

export type InstanceFolder = "Root" | "Data" | "Mods" | "Configs" | "Screenshots" | "Saves" | "Logs" | "CrashReports" | "ResourcePacks" | "TexturePacks" | "ShaderPacks"

export type FEModrinthProjectSearchParameters = { query: string | null; facets: FEModrinthSearchFacetAnd | null; index: FEModrinthSearchIndex | null; offset: number | null; limit: number | null; filters: string | null }

export type FESubtaskProgress = { download: { downloaded: number; total: number } } | { item: { current: number; total: number } } | "opaque"

export type CauseSegment = { display: string; debug: string }

export type EnrollmentStatus = "requestingCode" | { pollingCode: DeviceCode } | "queryingAccount" | { complete: AccountEntry } | { failed: EnrollmentError }

export type FEModDescriptionResponse = { data: string; pagination: FEPagination | null }

export type FEModrinthDependency = { version_id: string | null; project_id: string | null; file_name: string | null; dependency_type: FEModrinthDependencyType }

export type FEModrinthSearchFacetAnd = FEModrinthSearchFacetOr[]

export type DeviceCode = { userCode: string; verificationUri: string; expiresAt: string }

export type FEModrinthProjectID = string

export type FEModrinthProject = { slug: string; title: string; description: string; categories: string[]; client_side: FEModrinthProjectSupportRange; server_side: FEModrinthProjectSupportRange; body: string; additional_categories: string[]; issues_url: string | null; source_url: string | null; wiki_url: string | null; discord_url: string | null; donation_urls: FEModrinthDonationLink[]; project_type: FEModrinthProjectType; downloads: number; icon_url: string | null; color: number | null; id: string; team: string; moderator_message: FEModrinthModeratorMessage | null; published: string; updated: string; approved: string | null; followers: number; status: FEModrinthProjectStatus; license: FEModrinthLicense; versions: string[]; game_versions: string[]; loaders: string[]; gallery: FEModrinthGalleryItem[] }

export type FEModLoaderType = "forge" | "cauldron" | "liteLoader" | "fabric" | "quilt"

export type FEModrinthUser = { username: string; name: string | null; email: string | null; bio: string | null; id: string; github_id: number | null; avatar_url: string; created: string; role: FEModrinthUserRole; badges: number }

export type FEModSearchResponse = { data: FEMod[]; pagination: FEPagination | null }

export type And<T> = Or<T>[]

export type ConfigurationParseError = { type_: ConfigurationParseErrorType; message: string; line: number; config_text: string }

export type FEModrinthDonationLink = { id: string; platform: string; url: string }

export type MoveGroup = { group: FEGroupId; before: FEGroupId | null }

export type FEModSearchParametersQuery = { gameId: number; searchFilter: string | null; gameVersion: string | null; categoryIds: number[] | null; sortOrder: FEModSearchSortOrder | null; sortField: FEModSearchSortField | null; classId: FEClassId | null; modLoaderTypes: FEModLoaderType[] | null; gameVersionTypeId: number | null; authorId: number | null; slug: string | null; index: number | null; pageSize: number | null }

export type StandardVersion = { release: string; modloaders: ModLoader[] }

export type ModrinthModpack = { project_id: string; version_id: string }

export type FECategoriesResponse = { data: FECategory[]; pagination: FEPagination | null }

export type FEFile = { id: number; gameId: number; modId: number; isAvailable: boolean; displayName: string; fileName: string; releaseType: FEFileReleaseType; fileStatus: FEFileStatus; hashes: FEFileHash[]; fileDate: string; fileLength: number; downloadCount: number; downloadUrl: string | null; gameVersions: string[]; sortableGameVersions: FESortableGameVersion[]; dependencies: FEFileDependency[]; exposeAsAlternative: boolean | null; parentProjectFileId: number | null; alternateFileId: number | null; isServerPack: boolean | null; serverPackFileId: number | null; isEarlyAccessContent: boolean | null; earlyAccessEndDate: string | null; fileFingerprint: string; modules: FEFileModule[] }

export type FeError = { cause: CauseSegment[]; backtrace: string }

export type FEJavaComponentType = "local" | "managed" | "custom"

export type FEModrinthCategory = { icon: string; name: string; project_type: FEModrinthProjectType; header: string }

export type FEVendor = "azul"

export type FEFilesParametersBody = { fileIds: number[] }

export type FEModFilesParametersQuery = { gameVersion?: string | null; modLoaderType?: FEModLoaderType | null; gameVersionTypeId?: number | null; index?: number | null; pageSize?: number | null }

export type FEModrinthVersionType = "alpha" | "beta" | "release"

export type Or<T> = T[]

export type FEModrinthModeratorMessage = { message: string; body: string | null }

export type FEModrinthTeamID = string

export type FEFilesResponse = { data: FEFile[]; pagination: FEPagination | null }

export type FEInstanceId = number

export type FEModAsset = { id: number; modId: number; title: string; description: string; thumbnailUrl: string; url: string }

export type FEModFileChangelogResponse = { data: string; pagination: FEPagination | null }

export type FESystemJavaProfileName = "legacy" | "alpha" | "beta" | "gamma" | "minecraftJavaExe"

export type FEModAuthor = { id: number; name: string; url: string }

export type ModrinthMod = { project_id: string; version_id: string }

export type FEModrinthProjectIDs = string[]

export type FEModdedManifestLoaderVersion = { id: string }

export type DuplicateInstance = { instance: FEInstanceId; new_name: string }

export type FEModdedManifestVersion = { id: string; stable: boolean; loaders: FEModdedManifestLoaderVersion[] }

export type FEModsResponse = { data: FEMod[]; pagination: FEPagination | null }

export type FEUnifiedSearchResult = { curseforge: FEMod } | { modrinth: FEModrinthProjectSearchResult }

export type FEEntity = "legacyGDLauncher" | "mrpack" | "modrinth" | "curseForgeZip" | "curseForge" | "atlauncher" | "technic" | "ftb" | "multiMC" | "prismLauncher"

export type GameLogEntry = { id: GameLogId; instance_id: FEInstanceId; active: boolean }

export type AccountType = "microsoft" | "offline"

export type FEManagedJavaSetupProgress = "idle" | { downloading: [string, string] } | { extracting: [string, string] } | "done"

export type FEModrinthProjectSupportRange = "required" | "optional" | "unsupported" | "unknown"

export type FEModrinthVersionID = string

export type MemoryRange = { min_mb: number; max_mb: number }

export type FEModrinthVersionIDs = string[]
