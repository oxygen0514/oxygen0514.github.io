if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const a=e=>d(e,s),f={module:{uri:s},exports:n,require:a};i[s]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(c(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"9eef34abb707ecf08c577a78f03af28f"},{url:"about/index.html",revision:"6738a82d767fe0107657966fa5167563"},{url:"archives/2022/03/index.html",revision:"364b56bc727cf554a2cabdc4cd46661c"},{url:"archives/2022/index.html",revision:"34b367744b52d21214c3c4f798a0825d"},{url:"archives/index.html",revision:"86007cc6192330ec4e49e14b94a6dd2f"},{url:"books/index.html",revision:"6db076a6ed0f62a9027c1e252adbe941"},{url:"categories/index.html",revision:"674e2d0bbef64a908fc9493b912efce0"},{url:"categories/test/index.html",revision:"f1894ecba679ff29c35bce6db03a6703"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"8040295319f0540c89b6523f45690bde"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"060f91604acb4b9a25db677c280bfdb3"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"0ce50a37b1e32724bc520458adbe30d8"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tagcanvas.js",revision:"222f58419252597da4e4b17828824a8f"},{url:"js/tagcloud.js",revision:"4d5b86e9e3c1180eeb33394c7a0937f0"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"1bc158ad4cc3f494cca298006df9166f"},{url:"messageboard/index.html",revision:"a77c31b0a66becfb44da1787037bfd44"},{url:"movies/index.html",revision:"71494a83e2429ee1312a2a12b49e3e1c"},{url:"music/index.html",revision:"60621138e8eda62f56c7a12164a425c1"},{url:"tags/Begin/index.html",revision:"c85f2c46df04341b58d6af7b257d48e2"},{url:"tags/index.html",revision:"2b8d1b9037656f96135d067ad7148610"},{url:"timeline/index.html",revision:"8c064d883ebef59f992d564aea55df92"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
