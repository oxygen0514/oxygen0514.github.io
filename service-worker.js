if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const a=e=>r(e,s),l={module:{uri:s},exports:n,require:a};i[s]=Promise.all(c.map((e=>l[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"4fd4a5de468cb55631f4b0adb3909a8e"},{url:"about/index.html",revision:"e948553c8c006045a4528e4cc6a33a7b"},{url:"archives/2022/03/index.html",revision:"774a2e0cc4817ad46566cab2972ae36b"},{url:"archives/2022/index.html",revision:"317c4b562a6b4ba5f73421669ae217b8"},{url:"archives/index.html",revision:"08b077403be5a5c604e232a95feb70c5"},{url:"categories/index.html",revision:"7f86fc669d4a7ad8ec3fa707947e876e"},{url:"css/index.css",revision:"bd74e996b0f9aac1155b56747984d29c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"d53cc6e4f5bec84b34b4ed9eea3e322a"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"12b4cc15f1e9232fdf7203fe060f7e57"},{url:"tags/index.html",revision:"0c969bea0fa081e019467d76e72e8197"},{url:"timeline/index.html",revision:"fcc35e7048d62de1a0f1aa200928d770"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
