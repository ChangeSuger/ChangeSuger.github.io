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
    "revision": "ef8de1262acdf1e8473f4c127deb436a"
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
    "url": "assets/js/13.86e7cf61.js",
    "revision": "08a80a3030d97605fcf218a85e8d5cd8"
  },
  {
    "url": "assets/js/14.3bf8d65b.js",
    "revision": "93a508c57f8125540d47bc1231ffedee"
  },
  {
    "url": "assets/js/15.3a3ae3db.js",
    "revision": "5f281d1effcdb786ebe1571cdf834c7a"
  },
  {
    "url": "assets/js/16.deeda740.js",
    "revision": "0c6cdac668b7698c578d93c3defccd0e"
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
    "url": "assets/js/app.ae814184.js",
    "revision": "26a6227fd36bdd35c39b350e9c84eeae"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "0f2e6a83dfb09f63f6c233cf9729787e"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "9020099b4c103fa938361827f7342629"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "284a22705ec554dda7375798e8a6a3a5"
  },
  {
    "url": "blogs/Java.html",
    "revision": "e8ffe7a28bcd0975cd8ee0d80e7c8216"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "95a763cacc53fa659f9036951842118e"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "b49cc8338699dd424321357d41315890"
  },
  {
    "url": "categories/index.html",
    "revision": "1bedee8cf188d359dc37d6a9925e1e4b"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "6810ca9a612a0ecbfc24e32f7b5cef37"
  },
  {
    "url": "index.html",
    "revision": "991558b2cc3e53c36fba1e4907ec6a0d"
  },
  {
    "url": "tag/index.html",
    "revision": "ee51718d6659722cec4da8e67bfaae60"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "c4291df6881c2fa8a39b87378080ab6e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "dbb45edd03ad4986a63ec1debb2cea39"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "e3ce100b5c9a3ff3ec0bc74c3df7e7bb"
  },
  {
    "url": "timeline/index.html",
    "revision": "93495b86bbbc578e34d2365cd3af5658"
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
