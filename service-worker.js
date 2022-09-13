/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bbefcfba42753615b26113f7b77c643b"
  },
  {
    "url": "assets/css/0.styles.b6a82f64.css",
    "revision": "13e227e6fcd10fb680896563edc5d916"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.90db5f9c.js",
    "revision": "a690238cfd8125cf7d856440d414eaf0"
  },
  {
    "url": "assets/js/10.8e2d6925.js",
    "revision": "bf026f4da3a94270e84afa4aaf5d86e4"
  },
  {
    "url": "assets/js/11.e36e17b1.js",
    "revision": "db2344986ab07330c38fc800de39ed9d"
  },
  {
    "url": "assets/js/12.77926de4.js",
    "revision": "d4b94394291c39b82c8336a42d666b54"
  },
  {
    "url": "assets/js/13.54581789.js",
    "revision": "3325a29380a3d87253cdcd22714e5123"
  },
  {
    "url": "assets/js/14.7bda337e.js",
    "revision": "502ca2b0ba6a800a162ea5c2dae4afa2"
  },
  {
    "url": "assets/js/15.036a0de5.js",
    "revision": "fe91e1f375f48374d3afd1a1cab72a03"
  },
  {
    "url": "assets/js/16.683c4ce4.js",
    "revision": "4dcd4fcf7cb59faab90b71ef8ecada64"
  },
  {
    "url": "assets/js/17.97092f9e.js",
    "revision": "bc4a8349a4ffe4679eafebbe66318d82"
  },
  {
    "url": "assets/js/18.60de9958.js",
    "revision": "501420f8d374030ae770514f5f5c6291"
  },
  {
    "url": "assets/js/19.2c9540c3.js",
    "revision": "0baaced52270b1caf30c0b9bf03fa0a9"
  },
  {
    "url": "assets/js/4.64a0d5d7.js",
    "revision": "0e2f010c9abf018537754b21a44081e8"
  },
  {
    "url": "assets/js/5.e81ec24e.js",
    "revision": "9de6780a0e7a84147dcb59b61ecd9960"
  },
  {
    "url": "assets/js/6.5b374c86.js",
    "revision": "133159533080928aab913a70b3d7a7a0"
  },
  {
    "url": "assets/js/7.d51fad03.js",
    "revision": "c6fb5f6b845a226bff7e0877db39b22c"
  },
  {
    "url": "assets/js/8.46ce9b5e.js",
    "revision": "293b108e0ad2118d08ea2fd73e05b3c2"
  },
  {
    "url": "assets/js/9.e54b38f6.js",
    "revision": "4e97d7d47b92c77c6d8ce8dfd65df871"
  },
  {
    "url": "assets/js/app.09ad5576.js",
    "revision": "e67ef5dd49743305dc25d3e36e56c474"
  },
  {
    "url": "assets/js/vendors~flowchart.d4c316e2.js",
    "revision": "8d1e1c606ab8c8cb9591126c795115d1"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "0b3e229904b1f1a000981ba9c32eaa68"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "3920afac6fe0f5f639d0aedc9ad560b7"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "b640b7fb2a48ee001e708dfca56b4514"
  },
  {
    "url": "blogs/Java.html",
    "revision": "5b6b8a250e5dcbc9b466e6fe5b329c86"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "bc98be5765961c7f24fe959043fc230e"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "71359846376887a38c555c1b0f47af64"
  },
  {
    "url": "categories/index.html",
    "revision": "8e81631a4df692316c111ae66de0ae3b"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "bfcff973c19484013080ede743bc9035"
  },
  {
    "url": "index.html",
    "revision": "bffb5d06f71587683d6dcffc8a8cbdc2"
  },
  {
    "url": "tag/index.html",
    "revision": "eeeb787b6e414f66103f59c9b6d167ac"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "9ce665cafd4ca13923e749192e88372d"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "66b2c09b8ac5b3fb3cf81f6d1c5dd475"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "5567504b0b9349afa00e4969e31b8801"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c77915d34c96b458248e3feaace955a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
