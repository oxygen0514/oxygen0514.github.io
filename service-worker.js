if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>d(e,c),a={module:{uri:c},exports:n,require:f};i[c]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(s(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"f820b9dfe8ca33b10e090ab5b3f8cf25"},{url:"about/index.html",revision:"04e9c9dafe4ccbcb9af5476069852bbc"},{url:"archives/2022/03/index.html",revision:"6eca576da5070c153d677ef0f641e017"},{url:"archives/2022/index.html",revision:"69d1467d5a7c64aa02da4ab184e848db"},{url:"archives/index.html",revision:"abe82fd8ef3608602362a2167f394f51"},{url:"categories/index.html",revision:"8491078b9b457f25b54976f02414c985"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"8040295319f0540c89b6523f45690bde"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"f55d5c7054d0dc9f616adeec48e4e178"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tagcanvas.js",revision:"222f58419252597da4e4b17828824a8f"},{url:"js/tagcloud.js",revision:"4d5b86e9e3c1180eeb33394c7a0937f0"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"b15ab3edcefbdf5212d77fbf07899f8d"},{url:"tags/Begin/index.html",revision:"b8d18a8ae931f0c281dc28a7e894c994"},{url:"tags/index.html",revision:"f01502f9743d2e34453e2afafd48cf19"},{url:"timeline/index.html",revision:"f656f582968d18d0df4371596c011b35"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
