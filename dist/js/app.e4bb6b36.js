(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3f3adb6b"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4708:function(t,e,a){"use strict";var n=a("7bab"),i=a.n(n);i.a},"4da3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"font-bold px-2 py-2 mt-4 mb-4",attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{staticClass:"font-bold px-2 py-2 mt-4 mb-4",attrs:{to:"/project"}},[t._v("Project")]),t._v(" | "),a("router-link",{staticClass:"font-bold px-2 py-2 mt-4 mb-4",attrs:{to:"/profile"}},[t._v("Profile")])],1),a("router-view")],1)},r=[],o=(a("4708"),a("5c64"),a("2877")),s={},l=Object(o["a"])(s,i,r,!1,null,null,null),c=l.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-6"},[a("h3",[t._v("This is Home page")])])}],p={name:"Home",components:{}},m=p,v=Object(o["a"])(m,d,f,!1,null,null,null),b=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-6 px-2 md:px-20 lg:px-40 font-mono"},[a("div",{staticClass:"mb-3"},[a("h3",{staticClass:"pt-4 underline text-lg"},[t._v("Personal Informations")]),a("div",{staticClass:"flex flex-wrap justify-end py-1"},[a("div",{staticClass:"w-full md:w-1/4 lg:w-1/5 rounded"},[a("div",{staticClass:"mx-auto w-full h-auto my-auto"},[a("fa-icon",{attrs:{icon:["fas","users"],size:"8x"}})],1)]),a("div",{staticClass:"w-full md:w-2/4 lg:w-3/5 text-left py-2 px-4"},[a("div",{staticClass:" flex-col justify-between"},[a("div",{staticClass:"text-md md:text-lg font-semibold antialiased px-0 py-1 my-2"},[a("div",{staticClass:"inline-block w-6 h-6 mr-2 ml-2"},[a("fa-icon",{attrs:{icon:["fas","user"],size:"1x"}})],1),a("span",{},[t._v("Danny Fachrul Aliansyah Nurdin")])]),a("div",{staticClass:"text-md md:text-lg font-semibold antialiased px-0 py-1 my-2"},[a("div",{staticClass:"inline-block w-6 h-6 mr-2 ml-2"},[a("fa-icon",{attrs:{icon:["fas","mail-bulk"],size:"1x"}})],1),a("span",{},[t._v("dannyfachrul@gmail.com")])]),a("div",{staticClass:"text-md md:text-lg font-semibold antialiased px-0 py-1 my-2"},[a("div",{staticClass:"inline-block w-6 h-6 mr-2 ml-2"},[a("fa-icon",{attrs:{icon:["fab","github"],size:"1x"}})],1),a("span",{},[t._v("Danny Nurdin")])]),a("div",{staticClass:"text-md md:text-lg font-semibold antialiased px-0 py-1 my-2"},[a("div",{staticClass:"inline-block w-6 h-6 mr-2 ml-2"},[a("fa-icon",{attrs:{icon:["fab","twitter"],size:"1x"}})],1),a("span",{},[t._v("@dannyfachrul ")])])])])])]),a("div",{staticClass:"mb-3 md:mt-6"},[a("span",{staticClass:"underline text-lg"},[t._v("What i like?")]),a("div",{},[a("div",{staticClass:"flex flex-wrap justify-center"},[a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fas","coffee"],size:"3x"}})],1),a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fab","python"],size:"3x"}})],1),a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fab","css3"],size:"3x"}})],1),a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fab","html5"],size:"3x"}})],1),a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fab","git"],size:"3x"}})],1),a("div",{staticClass:"w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"},[a("fa-icon",{attrs:{icon:["fab","js"],size:"3x"}})],1)])])])])},y=[],x={name:"Home",components:{}},w=x,g=Object(o["a"])(w,h,y,!1,null,null,null),C=g.exports;n["a"].use(u["a"]);var _=[{path:"/",name:"Home",component:b},{path:"/profile",name:"Profile",component:C},{path:"/project",name:"Project",component:function(){return a.e("about").then(a.bind(null,"07bd"))}}],j=new u["a"]({mode:"history",base:"/",routes:_}),k=j,O=a("ecee"),P=a("c074"),z=a("f2d1"),E=a("ad3d");O["c"].add(P["c"],P["a"],P["d"],P["b"],z["f"],z["a"],z["d"],z["b"],z["e"],z["g"],z["c"]),n["a"].component("fa-icon",E["a"]);a("4da3");n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(t){return t(c)}}).$mount("#app")},"5c64":function(t,e,a){"use strict";var n=a("d32a"),i=a.n(n);i.a},"7bab":function(t,e,a){},d32a:function(t,e,a){}});
//# sourceMappingURL=app.e4bb6b36.js.map