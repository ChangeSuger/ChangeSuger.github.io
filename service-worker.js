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
    "revision": "f6cd6e8fa37ebaccc9fa4452af89d7b2"
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
    "url": "assets/js/app.56bbd1ba.js",
    "revision": "4314ffd94e1f0265ad0a6e35fd67f1dd"
  },
  {
    "url": "assets/js/vendors~flowchart.d4c316e2.js",
    "revision": "8d1e1c606ab8c8cb9591126c795115d1"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "2e62b9cdcdaf323ec9644db8874da7dc"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "17bdc8ef5e3fbf3b96e0a09984794b0b"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "e0db7b449822446f5902dbcee87af915"
  },
  {
    "url": "blogs/Java.html",
    "revision": "0d386a0f6f310a9de26abf358c039de8"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "d614eb60da745cbed9a448b9e89b03a9"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "53daeee80c4ecc3cfd197fd1c536938e"
  },
  {
    "url": "categories/index.html",
    "revision": "57f21d833286181015ab36d5b0dd3922"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "92ed7ca6d50cc42410f9c4333a78e694"
  },
  {
    "url": "index.html",
    "revision": "f4f3a74745ddb06dd5229dc0b0a7f295"
  },
  {
    "url": "tag/index.html",
    "revision": "2474a261c7ba57c67e1205cfb4ce2bbb"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "de7ecf56c8f6ff87a4aabeb92ac79907"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d0d2d00f15e2e4808280d91ef233e0b1"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "0436a47005e95ba778976563ee477871"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9d2df6cbeb391d7593926658aba689e"
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
