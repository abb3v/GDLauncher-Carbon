module.exports = {
  normalizeFilenames: /^.+?(\.\w+?)?\..+$/,
  files: [
    {
      path: "apps/desktop/dist/main/**/*.*",
    },
    {
      path: "apps/desktop/dist/mainWindow/**/*.*",
    },
    {
      path: "apps/desktop/dist/preload/**/*.*",
    },
    {
      path: "packages/ui/dist/**/*.*",
    },
    {
      path: "packages/core/core.node",
    },
  ],
  defaultCompression: "none",
};
