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
    "revision": "ef379a65d7fef1c6299646704a658d40"
  },
  {
    "url": "assets/css/0.styles.97a0c9ba.css",
    "revision": "78e0888db9df3cc0e6269d3216cdc7cb"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b1d089fb.js",
    "revision": "1bfde1a0d79960efe0c3042b5aab9306"
  },
  {
    "url": "assets/js/10.b18f2250.js",
    "revision": "4db98e01a21dc0f47c733f71202f9a4a"
  },
  {
    "url": "assets/js/11.69a9fbd9.js",
    "revision": "381ea40573dfd488a56d4fb68af1b234"
  },
  {
    "url": "assets/js/12.636d7ee6.js",
    "revision": "2a478bf5040f4e4d90b09551dbfe9d26"
  },
  {
    "url": "assets/js/13.d3e1f99a.js",
    "revision": "becec59749e8d5a01249c2c86571eecb"
  },
  {
    "url": "assets/js/14.04f1e599.js",
    "revision": "46dbdeb5c8ec2a8aeadd4d69303dbb8a"
  },
  {
    "url": "assets/js/15.bfbb158e.js",
    "revision": "405f548067ef42e73f82a7da4afd9a58"
  },
  {
    "url": "assets/js/16.55455b95.js",
    "revision": "d34ca28acea9240b555488c2aee2e693"
  },
  {
    "url": "assets/js/17.38a32f1d.js",
    "revision": "66abc39e4ff2cac772edee60d2a4a57c"
  },
  {
    "url": "assets/js/18.c34514af.js",
    "revision": "f5d269f5655b551f74e48cf3ff149340"
  },
  {
    "url": "assets/js/19.63a90584.js",
    "revision": "bf3d85bae4f6793242a165bf26c301cf"
  },
  {
    "url": "assets/js/4.16efebf7.js",
    "revision": "c98bdf72a72b4336d84b54bfaa45e4e7"
  },
  {
    "url": "assets/js/5.c13867fe.js",
    "revision": "c336702a13ded3441ddd0ca50e2c5a29"
  },
  {
    "url": "assets/js/6.881be80e.js",
    "revision": "b81c507d39145f9f500bf158254cb6a3"
  },
  {
    "url": "assets/js/7.be61fad1.js",
    "revision": "88ee0b33c9fd74e0dc7ebb582eedc7d2"
  },
  {
    "url": "assets/js/8.098b046b.js",
    "revision": "7cdf4877ff06a43cfb384a4044a32527"
  },
  {
    "url": "assets/js/9.b3e7e982.js",
    "revision": "c479e8c8ccfc4ecdb1666ced38eeb7fd"
  },
  {
    "url": "assets/js/app.e12a8095.js",
    "revision": "720af4736772f007f131e66a292e8c26"
  },
  {
    "url": "assets/js/vendors~flowchart.ea0e78ad.js",
    "revision": "6349c2f96845ac4abe19a9cb0cd77d10"
  },
  {
    "url": "blogs/C_plus_plus.html",
    "revision": "f94e17559fc4b2c1b0ce6e5f3f787b62"
  },
  {
    "url": "blogs/C_sharp.html",
    "revision": "881f160256d614e47d42cbdbf96129a7"
  },
  {
    "url": "blogs/html_css.html",
    "revision": "ed2ae9178925f4c8140301848f8a720b"
  },
  {
    "url": "blogs/Java.html",
    "revision": "0b742a9002ad44b895d2f7353e769e54"
  },
  {
    "url": "blogs/Javascript.html",
    "revision": "0c37c28168455466a93a2421d302cc02"
  },
  {
    "url": "blogs/regular_expression.html",
    "revision": "a076eb3440671943f2c0fbaf834b831e"
  },
  {
    "url": "categories/index.html",
    "revision": "356f46312651412d0b6b54c2ed6d75ff"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "829c92de9991e3c0566b84ede4f87d0b"
  },
  {
    "url": "index.html",
    "revision": "bf7f4478f47d3d852b54e4d073f2925c"
  },
  {
    "url": "tag/index.html",
    "revision": "5b7777c166d0e3670c1db05b78be9941"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "f0274a8f29d718479bea193cfc4afe1e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8615603a2262d467f7b42e3d366b5d52"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "a736e5cb55800529fbca077b8aade88e"
  },
  {
    "url": "timeline/index.html",
    "revision": "3382dcb84fd49b69eaf4012de32f3217"
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
