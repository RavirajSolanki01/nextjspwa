if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>n(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/190-e994f9081b245223.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/231-b6d2ac2bdc1b169f.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/_not-found/page-06d544a4e4b97602.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/color/page-57b4cefd1d8ab100.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/layout-263103db1973535f.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/offline/page-6774c875ae81f94c.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/page-f627c4d75f6dc09e.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/sum/page-3b3fe7d708dd971f.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/app/todo/page-3cb19bbcf4716149.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/fd9d1056-be48aeae6e94b8d1.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/main-8bb3d906873654ca.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/main-app-b6727f23f7970e4f.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-365fe83a4310541d.js",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/_next/static/css/88f92f73b30df884.css",revision:"88f92f73b30df884"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/onKw1Vli5Qe18JBplRXk9/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/onKw1Vli5Qe18JBplRXk9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fallback-ce627215c0e4a9af.js",revision:"a5281aa1504c5d6bcd7ba1097870376a"},{url:"/icons-192.png",revision:"f4fb4f2d1b869c5185861832c5217c74"},{url:"/icons-256.png",revision:"502504fdb507a1130de79f566a35ee7a"},{url:"/icons-512.png",revision:"4e9b4fba91284488bd2a0a5cdede2a47"},{url:"/manifest.json",revision:"9d68132091d5bd7a615c98e5e0ac36c5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"onKw1Vli5Qe18JBplRXk9"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
