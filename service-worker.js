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
    "revision": "23f0cf9d23fc89da9f4c15b9764abe91"
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
    "url": "assets/js/12.4a42e8e9.js",
    "revision": "5b047dd0e2d11ca0edcc80f8a44de616"
  },
  {
    "url": "assets/js/13.86e7cf61.js",
    "revision": "08a80a3030d97605fcf218a85e8d5cd8"
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
    "url": "assets/js/app.f2e89bb2.js",
    "revision": "2e5c0929aae0d611cd549a5494431f0b"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "d7264fc1172d71a6f492302e9e5b53fc"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "c3559d37227f86400464287114938a94"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "7e647a735a5804f6f73c972107ec70a5"
  },
  {
    "url": "blogs/Java.html",
    "revision": "7674e1310788a221ae165cec4cc235f5"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "41fcc8c1b50c141e09e5e46a36a620ae"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "d09be1f31c88ac1a94085def8abc2f7c"
  },
  {
    "url": "categories/index.html",
    "revision": "8603d9069d9126310acd1c28b8c3b898"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "b357b3d5833f98c05c858c07dd64a8ee"
  },
  {
    "url": "index.html",
    "revision": "14d51a900e5aba8a24eb879d12ced117"
  },
  {
    "url": "tag/index.html",
    "revision": "e2a86d5692959ae960adda1891de37c8"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "5f257ae079dee2d2f74baae0c16b8a44"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fe3aa05c021d608e02fe8c86693d1108"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "54a646efe00688e175a56cbc86dbad1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "047b2baea6e2e2c44b1e47bb9b1b0330"
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
