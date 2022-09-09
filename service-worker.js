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
    "revision": "61bbd18500ff8168e7431c8feaf80e50"
  },
  {
    "url": "airplan.png",
    "revision": "c02e47fbd3838f06655d7dab0ecff7e8"
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
    "url": "assets/js/1.c2f06137.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.155aa0a4.js",
    "revision": "730a97c02536c97948d57059c848e7da"
  },
  {
    "url": "assets/js/11.49272ff4.js",
    "revision": "a244b4780a44658921d214c82e571f7d"
  },
  {
    "url": "assets/js/12.6a578366.js",
    "revision": "3652b9b3ebd752866af3b8d0154e5597"
  },
  {
    "url": "assets/js/13.b0feb930.js",
    "revision": "1ed89c01ddf519f25d1276a281f8ffdd"
  },
  {
    "url": "assets/js/14.3bf8d65b.js",
    "revision": "93a508c57f8125540d47bc1231ffedee"
  },
  {
    "url": "assets/js/15.a5c7178c.js",
    "revision": "da6eb1590144e288aebf7cab228d1ab4"
  },
  {
    "url": "assets/js/16.10f0266d.js",
    "revision": "7d00575a0363a4c24d7936c460c34cd8"
  },
  {
    "url": "assets/js/17.ab30e5a8.js",
    "revision": "2a3bbbbe10a5888bd116ca0c2f791b3a"
  },
  {
    "url": "assets/js/18.58397cad.js",
    "revision": "f9f639897da7a968c530bd5adceb4fc1"
  },
  {
    "url": "assets/js/3.95482d6e.js",
    "revision": "f99abf1657ee43287bb56f9eacf8e844"
  },
  {
    "url": "assets/js/4.db3e6b1b.js",
    "revision": "984a1c34ddba81027abc75ba3d7219e8"
  },
  {
    "url": "assets/js/5.d2c3254e.js",
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
    "url": "assets/js/app.d6bace54.js",
    "revision": "4c1401f45a5cd9776f907542559b5c1c"
  },
  {
    "url": "C_plus_plus.html",
    "revision": "d37339afb7064a8c006bc9330d5fbe42"
  },
  {
    "url": "C_sharp.html",
    "revision": "659be53087b63f06364ed505ed751d4c"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "4afb1041c986e55aa05161932860b7a0"
  },
  {
    "url": "categories/index.html",
    "revision": "99b86b07ddad8fb9d579ea1e6ba79ffc"
  },
  {
    "url": "face.png",
    "revision": "3e7701616f3bcd223a54a8263cc9712a"
  },
  {
    "url": "html_css.html",
    "revision": "74a8e12ed0a397d7305eefce9eb78083"
  },
  {
    "url": "index.html",
    "revision": "a6972c12ce94d64345a0855694216489"
  },
  {
    "url": "Java.html",
    "revision": "7222c33e4b3a5d4044e7840dd1b32ba9"
  },
  {
    "url": "Javascript.html",
    "revision": "a0aacca89bbb1127f66a5c35ac45bbdb"
  },
  {
    "url": "regular_expression.html",
    "revision": "2b380ea96b254fe1ea4c6f0f09c0104d"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "15c9ad6f3b8723c78a83c7ecb4a199e1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "5f62bd3b6af8aecd0c344a7441612767"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "b515ac49addd9bc82efbc2946de2c9d5"
  },
  {
    "url": "tag/index.html",
    "revision": "9f19875ff92c287e979dcfb5b5c5cc31"
  },
  {
    "url": "timeline/index.html",
    "revision": "41720f9e6e14ee2874593dd47f061ef7"
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
