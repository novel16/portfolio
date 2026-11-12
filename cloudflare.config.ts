import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "78c66de0da1a9899694f3976cfdb42e0",
  worker: defineWorker({
    name: "portfolio",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-12",
    workersDev: true,
    previewUrls: false,
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
