if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const a=e=>d(e,s),f={module:{uri:s},exports:n,require:a};i[s]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"a65e8bccc183599707794dcd39dc1904"},{url:"about/index.html",revision:"a4f232d18dcce0fe67ed94135faa2a9c"},{url:"archives/2022/03/index.html",revision:"3f29714baf089b2f87f23f77477d3995"},{url:"archives/2022/index.html",revision:"369b03932ab88cfd1135b42e74e0e4f4"},{url:"archives/index.html",revision:"377ed45d780991f34d45fd3ecad38d77"},{url:"categories/index.html",revision:"f456a7117b06c68425c14fd07547605e"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"bd74e996b0f9aac1155b56747984d29c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"ef60a46bb2da48be85f76aa66cda0a21"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"f1b6e6234fba186dd4c443a7d8061b39"},{url:"tags/Begin/index.html",revision:"c6553eb7265b9e50772071f8f503dd43"},{url:"tags/index.html",revision:"441180ecd9ad65ce663799b012efcca3"},{url:"timeline/index.html",revision:"dcd6b94d14ac136123e85dab51ee9822"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
