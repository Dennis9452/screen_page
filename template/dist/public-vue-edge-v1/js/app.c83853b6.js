(function(){"use strict";var n={549:function(n,e,t){var i=t(9242),r=t(3396),o=t(4870),c=t(7139),u=t(2350);function l(n){return new Promise((e=>{const t="99"===n?"/edgeReceive/deviceList":"http://192.168.22.100/edgeReceive/deviceList";u.Z.get(t,{headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>{if(t){console.log(t);const i={};i[n]={data:t.data,isEmpty:!1},e(i)}})).catch((()=>{const t={};t[n]={isEmpty:!0},e(t),console.error("connection error")}))}))}const s={key:0},a=["onClick"],f={key:1,class:"emptyList"},v=(0,r._)("div",null,"can't get screen list from this server.",-1),d=[v],p=(0,r._)("div",{class:"divider"},null,-1);var w={__name:"App",setup(n){let e=(0,o.iH)({}),t=(0,o.iH)(["99","100"]);return t.value.map((n=>{l(n).then((t=>{e.value[n]=t}))})),(n,i)=>((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(t),(t=>((0,r.wg)(),(0,r.iD)("div",{class:"screenList",key:t},[(0,r._)("p",null," 192.168.22."+(0,c.zw)(t),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(e)[t],(e=>((0,r.wg)(),(0,r.iD)("div",{key:e},[e.isEmpty?((0,r.wg)(),(0,r.iD)("div",f,d)):((0,r.wg)(),(0,r.iD)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.data,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.token,class:"screenItem"},[(0,r._)("div",null,"ip : "+(0,c.zw)(e.ip),1),(0,r._)("div",null,"uuid : "+(0,c.zw)(e.uuid),1),(0,r._)("div",null,"screenKind : "+(0,c.zw)(e.screenKind),1),(0,r._)("div",null,"type : "+(0,c.zw)(e.type),1),(0,r._)("a",null,[(0,r._)("div",{class:"screenType",onClick:i=>n.onclick(t,e.token)}," Open ",8,a)])])))),128))])),p])))),128))])))),128))}};const g=w;var h=g;(0,i.ri)(h).mount("#app")}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return n[i].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,i,r,o){if(!i){var c=1/0;for(a=0;a<n.length;a++){i=n[a][0],r=n[a][1],o=n[a][2];for(var u=!0,l=0;l<i.length;l++)(!1&o||c>=o)&&Object.keys(t.O).every((function(n){return t.O[n](i[l])}))?i.splice(l--,1):(u=!1,o<c&&(c=o));if(u){n.splice(a--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var a=n.length;a>0&&n[a-1][2]>o;a--)n[a]=n[a-1];n[a]=[i,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var r,o,c=i[0],u=i[1],l=i[2],s=0;if(c.some((function(e){return 0!==n[e]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var a=l(t)}for(e&&e(i);s<c.length;s++)o=c[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(a)},i=self["webpackChunktemplate"]=self["webpackChunktemplate"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(549)}));i=t.O(i)})();
//# sourceMappingURL=app.c83853b6.js.map