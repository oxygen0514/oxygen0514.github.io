if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const a=e=>c(e,s),f={module:{uri:s},exports:n,require:a};i[s]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"0cf39bd2a750e8a0e4a4f21c88b17085"},{url:"about/index.html",revision:"ecc02918aad55e9eea036da6e2b39b8a"},{url:"archives/2022/03/index.html",revision:"90aa811c6fc937286441d2954f3d0947"},{url:"archives/2022/index.html",revision:"c6336a9c98447ba3570276e11a7bec88"},{url:"archives/index.html",revision:"0764419373ff3311f789f6dd70a9c7c8"},{url:"categories/index.html",revision:"a0f80793645a0b8c4e14d879fbc36634"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"8040295319f0540c89b6523f45690bde"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"1890b218208478f15854553d79712d84"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tagcanvas.js",revision:"222f58419252597da4e4b17828824a8f"},{url:"js/tagcloud.js",revision:"4d5b86e9e3c1180eeb33394c7a0937f0"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"4c2c6a1e81a2861ffdf2127b68c07094"},{url:"tags/Begin/index.html",revision:"db7fddceb85455d3484cce91bffcf465"},{url:"tags/index.html",revision:"ed19fe5622b61ef35fbc80d99d2680da"},{url:"timeline/index.html",revision:"a740fc99cdda4b67bcccb36150ef4cb8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
