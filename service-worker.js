if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>d(e,c),f={module:{uri:c},exports:n,require:a};i[c]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(s(...e),n)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/18/hello-world/index.html",revision:"47527fa91af962999acbca35d465779f"},{url:"about/index.html",revision:"283bfb99fc8aae286895272e138245d0"},{url:"archives/2022/03/index.html",revision:"f181b4d05020d4cf339bfe9d325280b0"},{url:"archives/2022/index.html",revision:"aa39472a7e1760e02af7eafa53899f16"},{url:"archives/index.html",revision:"d957957543efbbd2fd34ec4c068acc87"},{url:"books/index.html",revision:"9f263b3bf0ab772a55cbf0ceb1a528db"},{url:"categories/index.html",revision:"85391c262d96617a6933705217c98ad7"},{url:"categories/test/index.html",revision:"2299da3630edbb1fdc8ee5da52c3ebeb"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"8040295319f0540c89b6523f45690bde"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"aebe4290961b1bbb37a8a43946a96dc8"},{url:"Gallery/ohmygirl/index.html",revision:"f0b795f0cb37e53c638354935c278403"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"ee225fec2d0c4d483487db6553f1b172"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tagcanvas.js",revision:"222f58419252597da4e4b17828824a8f"},{url:"js/tagcloud.js",revision:"4d5b86e9e3c1180eeb33394c7a0937f0"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d49fa597578e788ee49da304f95299d9"},{url:"messageboard/index.html",revision:"32624d8b115655d7df50b7e9c89caa05"},{url:"movies/index.html",revision:"89c79be9510b5b8045193681603223fe"},{url:"music/index.html",revision:"c222b5305138f75fa6ab5ee819ac5bcc"},{url:"tags/Begin/index.html",revision:"b85190e3102f09db6cfffbe67718dd55"},{url:"tags/index.html",revision:"bf2f31ceab6d32d3d63d748634b97eff"},{url:"timeline/index.html",revision:"4c0211850d159a0972e82c5c9963927a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
