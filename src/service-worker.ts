import { build, files, version } from '$service-worker';
import { precacheAndRoute, precache } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});


precacheAndRoute([
    ...build.map(f => {
        return {
            url: f,
            revision: null
        }
    }),
    ...files.map(f => {
        return {
            url: f,
            revision: `${version}`
        }
    })
]);

// Edit the list of routes so they get cached and routed correctly, allowing
// cold start or hot reload to work offline.
const skRoutes = ['/', '/about', '/todos'];

precache(skRoutes.map(f => {
    return {
        url: f,
        revision: `${version}`
    }
}));

const matchCb = ({ url, request, event }) => {
    return skRoutes.some(path => url.pathname === path);
};
registerRoute(matchCb, new StaleWhileRevalidate({}));



