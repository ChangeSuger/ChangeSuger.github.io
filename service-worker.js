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
    "revision": "da25bdfead839c3b8d5899e367550d7b"
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
    "url": "assets/js/17.32c7ece1.js",
    "revision": "f32178fbd33297054c2578357f01174a"
  },
  {
    "url": "assets/js/18.305fef37.js",
    "revision": "46f768dce8cd3bf64485c85e0db9b478"
  },
  {
    "url": "assets/js/19.e9210e1a.js",
    "revision": "b9013a45a0f2739c4735088dd372d8df"
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
    "url": "assets/js/9.160b56f9.js",
    "revision": "d7d3770ab5976d0fbe40e2542a983d83"
  },
  {
    "url": "assets/js/app.9807d26b.js",
    "revision": "db791450bee72834532d474c1c71b23b"
  },
  {
    "url": "C_plus_plus.html",
    "revision": "9692baa13e4e443cf9e101905e8a870b"
  },
  {
    "url": "C_sharp.html",
    "revision": "3ba1f57ef16cdd511ab5af204bfb162a"
  },
  {
    "url": "categories/index.html",
    "revision": "ab2f6d23ab36d833d425b97628413b57"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "b6a1611625cde25e61930ea6e9ccc898"
  },
  {
    "url": "categories/测试/index.html",
    "revision": "5bacb3da3ed75826ddcb9cbd852f8418"
  },
  {
    "url": "html_css.html",
    "revision": "ebdb0456a91d66fba5225e2e558b5f57"
  },
  {
    "url": "index.html",
    "revision": "7a234cd8a1bcce93638cec5d4c052922"
  },
  {
    "url": "Java.html",
    "revision": "03691c4730ce81fbaeff6484e7629f18"
  },
  {
    "url": "Javascript.html",
    "revision": "0806854a9ee9b4dcb2b7e12b356faed2"
  },
  {
    "url": "regular_expression.html",
    "revision": "ffa3a933edfec4bca78809fdb7d1f637"
  },
  {
    "url": "tag/index.html",
    "revision": "360250d80509ed3fc853f785e72b9d9a"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "7c9b348a21618292b3164cd30d16e456"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "76707aa96c1f0e8e35fcae7a77a9d456"
  },
  {
    "url": "tag/测试/index.html",
    "revision": "0b86ea2858e3b71157184968454da16c"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "7d87b83f6455cbc1597ba7e8e9cbffa2"
  },
  {
    "url": "Test.html",
    "revision": "ba74b4bbb50c7626ccf375f7dbf2aaee"
  },
  {
    "url": "timeline/index.html",
    "revision": "ccda021544680530d0e44cd73228a3b7"
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
