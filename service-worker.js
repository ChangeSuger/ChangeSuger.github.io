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
    "revision": "fda9164e31b7af8e766a218c6b114d7e"
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
    "url": "assets/js/app.345a1441.js",
    "revision": "6dbe875b56cadf101b50360327f079e1"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "95c73d6b118d2bfcf35d6c761b19639a"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "7794776040b668c12f9b8061fb71f962"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "bfcc75e68ca765c6cb312d0b24c78b85"
  },
  {
    "url": "blogs/Java.html",
    "revision": "b548373e841f422b6ce790d7677c2764"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "25f6a6822ab8bef9498ad633661deb38"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "e37c2c1309221632ba07a71bc241d6a8"
  },
  {
    "url": "categories/index.html",
    "revision": "4a4144fb35ad53a8acacc9d559d73506"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "bc1c70fcdddadf60e6e5cd34e40bee9a"
  },
  {
    "url": "index.html",
    "revision": "9da11bdef806acdae37c26420b2ab4db"
  },
  {
    "url": "tag/index.html",
    "revision": "930e1db46e86a607251db8fc5af1f926"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "0ddefb585d21ab55e4a05db954c07ee1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "d6b354fe64267c50519dba72deb74088"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "8b5a35b3c415a3f22d8b5c75cdd3396d"
  },
  {
    "url": "timeline/index.html",
    "revision": "a82e0f98c8f5c105280a87b63901b091"
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
