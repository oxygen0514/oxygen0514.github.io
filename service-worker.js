if(!self.define){let i,e={};const r=(r,a)=>(r=new URL(r+".js",a).href,e[r]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=e,document.head.appendChild(i)}else i=r,importScripts(r),e()})).then((()=>{let i=e[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(a,o)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let d={};const c=i=>r(i,l),f={module:{uri:l},exports:d,require:c};e[l]=Promise.all(a.map((i=>f[i]||c(i)))).then((i=>(o(...i),d)))}}define(["./workbox-181670da"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"2022/04/26/Welcome/index.html",revision:"90852dc555af29e45f9b3f6ac4341cab"},{url:"about/index.html",revision:"13910175f4d88d1843f1957ffd6837c0"},{url:"archives/2022/04/index.html",revision:"6d4750e2777cf007828218dfc74a25d7"},{url:"archives/2022/index.html",revision:"9ba02c451a251427309afe864be75235"},{url:"archives/index.html",revision:"4784e9f9c7b682c55e73178cde3c6562"},{url:"books/index.html",revision:"ed39289472917b8e8818773b0ae21a3a"},{url:"categories/index.html",revision:"01e16d1952854b4fffa7ebbac92ce450"},{url:"categories/一切的开始/index.html",revision:"186bd08c8ae5cb9376f03e4f1635bc54"},{url:"css/iconfont-caidan.css",revision:"112a4aa38f4200fd34e227d899a00a2f"},{url:"css/iconfont.css",revision:"f2852190267b6892e6328c4706ebe54f"},{url:"css/index.css",revision:"8040295319f0540c89b6523f45690bde"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"f44c0d3852a3004de5668163e9a59f1e"},{url:"Gallery/yhhydiary/index.html",revision:"b0b6ef0fe85dea3a0b340def5302ca5e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Me.jpg",revision:"e6d084d98a52f16f09e989f1fac77f87"},{url:"img/Yourname_android.png",revision:"0d9046deac079f129924f31ac2c46cb1"},{url:"img/Yourname_pc.png",revision:"09a50636d99e39ba642c9d205d79323a"},{url:"img/氧化还原.png",revision:"8d2e9b55eff02d2ee958611de894eb6d"},{url:"index.html",revision:"54add7e32354c254076ea75535488743"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tagcanvas.js",revision:"222f58419252597da4e4b17828824a8f"},{url:"js/tagcloud.js",revision:"4d5b86e9e3c1180eeb33394c7a0937f0"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"25469f6471aa9931075c70d33c4a84d6"},{url:"messageboard/index.html",revision:"5505227153b77b52e5fda6a7bc92d588"},{url:"movies/index.html",revision:"7bd0c06d6b0d67a0b62e54c193f45833"},{url:"music/index.html",revision:"80bf7c9b3192b2bc30c838af1490fe35"},{url:"ourlove/all.min.css",revision:"119ca91c4b5cb5be7e0606101b60807d"},{url:"ourlove/all.min.js",revision:"a1b116a51691c4d53ed423876890531d"},{url:"ourlove/iali53.jpg",revision:"2bd412f60bd32c597cb42c792b9b0e3b"},{url:"ourlove/img/14915.jpg",revision:"ff3fa2df1dd12f0028a357e9126eab4b"},{url:"ourlove/img/319280.jpg",revision:"91274e69667d03ee4d31be531d0d1d1e"},{url:"ourlove/img/iali0.jpg",revision:"ff7385d91515dc9d3d22a3a9c961009a"},{url:"ourlove/img/iali10.gif",revision:"d219a1c64bc80b7a2036b85fd1a161ed"},{url:"ourlove/img/iali11.jpg",revision:"7e14dbb392f6a9e1b90baa8f8378a243"},{url:"ourlove/img/iali12.jpg",revision:"5e93e604898c511c3283788273441395"},{url:"ourlove/img/iali14.jpg",revision:"1a0cb49129428f5fcfd84845f8d0d961"},{url:"ourlove/img/iali16.jpg",revision:"51b4c061e694f41caf1417f6c47913a1"},{url:"ourlove/img/iali18.jpg",revision:"82a5fb12baf3aa2b4d762e6231e2639e"},{url:"ourlove/img/iali19.jpg",revision:"9d956bdec0e36465b55f5fa8e04c83b1"},{url:"ourlove/img/iali2_bg.jpg",revision:"5a302d6d5665da0798ea836dcbf458a9"},{url:"ourlove/img/iali2.jpg",revision:"e5276051b72707b9d4467a393f235229"},{url:"ourlove/img/iali20.jpg",revision:"72a400f267a30bd91176dd583cc72082"},{url:"ourlove/img/iali21.jpg",revision:"54d72d167bd430668b85cfce4459ce48"},{url:"ourlove/img/iali22_bg.jpg",revision:"ad7e4147f2be0118a52e28b72f2c834d"},{url:"ourlove/img/iali22.jpg",revision:"966728a1738b84a3571d6f1d8d18e018"},{url:"ourlove/img/iali24.jpg",revision:"7129791651088fd9d524cf6a1ed3d90f"},{url:"ourlove/img/iali25.jpg",revision:"d1345211a16a6b73a69c750eebd388cb"},{url:"ourlove/img/iali29.jpg",revision:"f439b32281e8e2ff606a9792dbac345b"},{url:"ourlove/img/iali3.jpg",revision:"a3e577c61da233777b5eb61c23f7ae76"},{url:"ourlove/img/iali30_1.jpg",revision:"1167b77cdcac33dcb19e88ab5b8a8d1c"},{url:"ourlove/img/iali30_2.jpg",revision:"38ec31f2c9108fc2e7ced1b7924fc33e"},{url:"ourlove/img/iali31.jpg",revision:"532fadec17ddf43798d818270292754a"},{url:"ourlove/img/iali32.jpg",revision:"0d35f4ad111b7e71f9a7022b5225c62b"},{url:"ourlove/img/iali35.jpg",revision:"6c3846d8c6456389f075e235fc862588"},{url:"ourlove/img/iali37.jpg",revision:"dfe0b6de30523c8fea6ba1186ae6d03d"},{url:"ourlove/img/iali4.jpg",revision:"2d2ae9cc25e7113c804de6513e9efc88"},{url:"ourlove/img/iali40_bg.jpg",revision:"151a4e743d4293e942c49fbb7311e4c8"},{url:"ourlove/img/iali40.jpg",revision:"d0475806cff50075612567c4e0f31268"},{url:"ourlove/img/iali42.jpg",revision:"d150c98e667750e232b8359035a408b4"},{url:"ourlove/img/iali44.jpg",revision:"5acf3c00bd1f6ae77a53dfdf37830669"},{url:"ourlove/img/iali45_bg.jpg",revision:"096a8a8fff67871baa86addbe3266a41"},{url:"ourlove/img/iali45.jpg",revision:"66651fa7b0198b66c5f9ffba6621f164"},{url:"ourlove/img/iali46.jpg",revision:"b1855662888954855073bf8812ab8d9f"},{url:"ourlove/img/iali49.jpg",revision:"ee9a9702f724d8a53f3c9cfa1a17268b"},{url:"ourlove/img/iali5.jpg",revision:"c9b9515f1e4c6eeac5034f871898b509"},{url:"ourlove/img/iali50_1.jpg",revision:"cdfebabe67eaf1440f429d16849972a0"},{url:"ourlove/img/iali50_2.jpg",revision:"902f701d8315d0612c0e39a8b5dd9624"},{url:"ourlove/img/iali51.jpg",revision:"249ee693461ea7c04c179cddcf42b3d1"},{url:"ourlove/img/iali52.jpg",revision:"d607034750685f592e86f164ab5497e7"},{url:"ourlove/img/iali53.jpg",revision:"2bd412f60bd32c597cb42c792b9b0e3b"},{url:"ourlove/img/iali57.gif",revision:"23e5a1b65d4613bd002bb46d7f4896ff"},{url:"ourlove/img/iali57.jpg",revision:"6ae2c6279ba33e7870ff343af3c18ab0"},{url:"ourlove/img/iali58.jpg",revision:"e5791b3e42b6ae5b919fe38210ced188"},{url:"ourlove/img/iali59_bg.jpg",revision:"ae16253f779ee99a6544e78390aec93c"},{url:"ourlove/img/iali59.png",revision:"7787651800c6bf9b7981821c3688f6ce"},{url:"ourlove/img/iali6.jpg",revision:"9db5085f7b0e06126e2306177f21e122"},{url:"ourlove/img/iali60.jpg",revision:"a90c024df9c4c94b3dee8469dacca551"},{url:"ourlove/img/iali62.jpg",revision:"74cfa796abfd40209b4568ae8d8d24e2"},{url:"ourlove/img/iali63.jpg",revision:"e388906da346acaf3d737336c02833fc"},{url:"ourlove/img/iali64.jpg",revision:"33c23fff497c3a0716fde15d3c35c1d8"},{url:"ourlove/img/iali65.jpg",revision:"54a42b8adcb923538e6dec7c530ebc08"},{url:"ourlove/img/iali66.jpg",revision:"0bf2d5fddd82fd242a61dc8e9dabec5e"},{url:"ourlove/img/iali67.jpg",revision:"d2a81ffd7fd4dad99b7b6a01b8709b78"},{url:"ourlove/img/iali68.jpg",revision:"d744406ec192e89e56c6927aaa152b5d"},{url:"ourlove/img/iali69.jpg",revision:"48037300c2bfa7004c1d48a09ba9f12e"},{url:"ourlove/img/iali71.jpg",revision:"ec5998020ee3915819f0f53436cb7ccc"},{url:"ourlove/img/iali75_bg.jpg",revision:"f95386597540b3f2135208fb3b0bc132"},{url:"ourlove/img/iali75.jpg",revision:"fbc4c2ac42cc7f22d0cf863fcbc30951"},{url:"ourlove/img/iali76_bg.png",revision:"ecd38fce3192812aeb3239e3df30834b"},{url:"ourlove/img/iali76.gif",revision:"0fe5d4d5711aa76a4476fdb19e92bd9c"},{url:"ourlove/img/iali77.jpg",revision:"141a6f17e060d80da0147cecb00dce0b"},{url:"ourlove/img/iali8_bg.png",revision:"a1710cb26d94647e8a236ba62e45e491"},{url:"ourlove/img/iali8.gif",revision:"8625351824d4259ac5aa9ca202320151"},{url:"ourlove/img/iali9.jpg",revision:"f6893b8a69037a653db5cc8ffb74c80a"},{url:"ourlove/img/music.png",revision:"2dba7dfaafd6fec577bf372b85a25e7d"},{url:"ourlove/img/mute.png",revision:"dafe486a576795d39683d6e96b2884f6"},{url:"ourlove/index.html",revision:"abd6ba7bdb9a6af233b3b6bea68de7a4"},{url:"ourlove/jquery.min.js",revision:"3576a6e73c9dccdbbc4a2cf8ff544ad7"},{url:"ourlove/love.min.js",revision:"98a427c2573b4799164f02f870f83972"},{url:"tags/index.html",revision:"5f5eac9d5610b8323a052f884a10a45f"},{url:"tags/一切的开始/index.html",revision:"3c82b75002842a5aaaa5cbb0478a5958"},{url:"timeline/index.html",revision:"16fe45aaca3dda242a36f76eb5f0e1f1"}],{}),i.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new i.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
