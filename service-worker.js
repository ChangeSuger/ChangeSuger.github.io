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
    "revision": "a80388f53ccb10d792b45d1e67aae55e"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.97907241.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.155aa0a4.js",
    "revision": "730a97c02536c97948d57059c848e7da"
  },
  {
    "url": "assets/js/11.09cf4136.js",
    "revision": "62c31a748c9ea7297d1d8296755c6ab8"
  },
  {
    "url": "assets/js/12.6667afa3.js",
    "revision": "04482081da7638da02fb021f242edaa3"
  },
  {
    "url": "assets/js/13.99575c55.js",
    "revision": "2891dbf85c327d4fa8d31bea6f471e25"
  },
  {
    "url": "assets/js/14.3bf8d65b.js",
    "revision": "93a508c57f8125540d47bc1231ffedee"
  },
  {
    "url": "assets/js/15.f2fc6458.js",
    "revision": "caadbc68e91ed10033b90d3754daf86f"
  },
  {
    "url": "assets/js/16.736eacb0.js",
    "revision": "96015bff0a48cd5f222b675a1a3c18cb"
  },
  {
    "url": "assets/js/17.79d4ea9f.js",
    "revision": "5dc9d94e5e382c68a52c0a8d8e63e43f"
  },
  {
    "url": "assets/js/18.58397cad.js",
    "revision": "f9f639897da7a968c530bd5adceb4fc1"
  },
  {
    "url": "assets/js/3.ed731e83.js",
    "revision": "f99abf1657ee43287bb56f9eacf8e844"
  },
  {
    "url": "assets/js/4.64b0af8d.js",
    "revision": "984a1c34ddba81027abc75ba3d7219e8"
  },
  {
    "url": "assets/js/5.04e18673.js",
    "revision": "1743bbb71da740cffa9d4044ece2db4a"
  },
  {
    "url": "assets/js/6.970cad6e.js",
    "revision": "efba2d742619e1a936d5fba2a1adfb88"
  },
  {
    "url": "assets/js/7.42eb45b2.js",
    "revision": "53db31416e830e30dcc766c9e2ad0778"
  },
  {
    "url": "assets/js/8.24763d6f.js",
    "revision": "05769d90287b33a1a3292743c2622742"
  },
  {
    "url": "assets/js/9.28afdef4.js",
    "revision": "09f419551edede23854ec5181a7cee7f"
  },
  {
    "url": "assets/js/app.7f7d64fa.js",
    "revision": "8ffabd752b7f927f3c3e99865994f470"
  },
  {
    "url": "C_plus_plus.html",
    "revision": "1a9d69346e6bf85a98d0b1f73bda6d71"
  },
  {
    "url": "C_sharp.html",
    "revision": "4c1e9d2bb53eb64f68d20a3005f5e7b1"
  },
  {
    "url": "categories/index.html",
    "revision": "edf9e838478eb16fcafea57fb6e6c59e"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "f5dda08543d331e10bda93f1a94db390"
  },
  {
    "url": "html_css.html",
    "revision": "e77be651e97cb2f4ce7c0124106f900e"
  },
  {
    "url": "index.html",
    "revision": "6810a9a61e0b095e89db4252be7b8479"
  },
  {
    "url": "Java.html",
    "revision": "22afb0432ca69792761ef2a5d25da81f"
  },
  {
    "url": "Javascript.html",
    "revision": "fd6265511cd888694a59c1f368ae7cd0"
  },
  {
    "url": "regular_expression.html",
    "revision": "398058b096b75fdafe96eae6c09a2935"
  },
  {
    "url": "tag/index.html",
    "revision": "12a7751293dc7af85db042ddfb1922f6"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "02d6bb0f1c18d463515a862c5a9dbae6"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "20d6d7e1ddc81a0fbf15409b09959a08"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "198a24d3e8431a397d560052d95295be"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ddb7c0885e10f6e7b54228e11693f71"
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
