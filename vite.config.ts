// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static export: no server functions/loaders in this app, so prerender every
    // route to plain HTML and skip shipping a server runtime.
    // failOnError: false — the marketing CTAs link to /dashboard, which isn't a
    // real route yet; skip it instead of failing the whole static build.
    prerender: { enabled: true, crawlLinks: true, failOnError: false },
  },
  // Skip the Cloudflare worker build — we're deploying static files only.
  nitro: false,
  vite: {
    environments: {
      // Flatten output: static site lands directly in dist/ instead of dist/client.
      client: { build: { outDir: "dist" } },
      // Build artifact only used internally to render pages during `build`; discarded after.
      ssr: { build: { outDir: "node_modules/.tmp-ssr-build" } },
    },
  },
});
