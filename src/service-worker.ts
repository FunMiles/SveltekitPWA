import { build, files, timestamp } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

console.log('SW build', build, 'files', files, 'timestamp', timestamp);


// // @ts-ignore
precacheAndRoute([...build.map(f=>{return {url: f, revision: null}}), 
    ...files.map(f=>{return {url: f, revision: `${timestamp}`}})]);
console.log('Done passing things to workbox.');