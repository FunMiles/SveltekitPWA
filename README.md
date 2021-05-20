# Svelte-kit Progressive Web App skeleton.

Everything you need to build a Progressive Web App Svelte-kit project.

## Creating a project

```bash
# Clone the project, free of git for your own project
degit git@github.com:FunMiles/SveltekitPWA.git MyApp
cd MyApp
# Install the dependencies
npm install
# or use pnpm install
```

## Developing your code

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Testing the service-worker locally
To test the service worker code and obtaining a lighthouse score, do the following operations:
```bash
# build the compiled code.
npm run build
# run the preview server.
npm run preview
```
## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can still preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

The degit code has the vercel adapter by default. If you plan to use vercel, you are set. Otherwise, replace the default with your prefered adapter.

## Basic App
The git app is available as a vercel app for yours to try installing as a PWA: https://sveltekit-pwa.vercel.app/

## Adjusting the list of routes
Because of the way svelte-kit serves the various routes, to be able to cold start or force-reload the PWA while offline, the service-worker needs to pre-cache all of the routes URLs. Whenever you add or remove routes, edit service-worker.js and modify the line specifying the routes to cache with your own list of routes:
```ts
// Edit the list of routes so they get cached and routed correctly, allowing
// cold start or hot reload to work offline.
const skRoutes = [ '/', '/about', '/todos' ];
```
## Manifest, icons and description meta-data
Before publishing your own app, do not forget to modify the manifest file (static/manifest.webmanifest), overwriting the icon files (see https://github.com/onderceylan/pwa-asset-generator for an easy generator) and the meta description tag in src/routes/__layout.svelte