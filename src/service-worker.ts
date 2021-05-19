import { build, files, timestamp } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope

console.log('SW build', build, 'files', files, 'timestamp', timestamp);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING')
        self.skipWaiting()
})


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
            revision: `${timestamp}`
        }
    })
]);

console.log('Done passing things to workbox.');


