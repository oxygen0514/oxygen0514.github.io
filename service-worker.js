if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const a=e=>d(e,n),f={module:{uri:n},exports:c,require:a};i[n]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(s(...e),c)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"4fd4a5de468cb55631f4b0adb3909a8e"},{url:"about/index.html",revision:"695824ea683108fc379496d5eb59346d"},{url:"archives/2022/03/index.html",revision:"27ef696ed8a7e2c70abcee2aa37c0093"},{url:"archives/2022/index.html",revision:"5e9560aa0d04d4a3749b3f1c795e378b"},{url:"archives/index.html",revision:"4a92be5519940e94eb6c9da101fa1195"},{url:"categories/index.html",revision:"f7d72f64fb36e5e805593d56f91adb13"},{url:"css/index.css",revision:"bd74e996b0f9aac1155b56747984d29c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"099e28a4a3bb9ddaa16397b57d91c4f3"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"f4683c4de1b7ea9d33fc00e7a73df6b0"},{url:"tags/index.html",revision:"69e96e870b5646b77ce397f85e55fa9c"},{url:"timeline/index.html",revision:"08b7e14ee1af7f648371decf18f0245a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
