(function(){"use strict";var e={568:function(e,n,t){var i=t(242),r=t(396),o=t(870),c=t(139),u=t(350);function l(e){return new Promise((n=>{const t="99"===e?"/edgeReceive/deviceList":"http://192.168.22.100/edgeReceive/deviceList";u.Z.get(t,{headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>{if(t){console.log(t);const i={};i[e]={data:t.data,isEmpty:!1},n(i)}})).catch((()=>{const t={};t[e]={isEmpty:!0},n(t),console.error("connection error")}))}))}const s={key:0},a=["onClick"],f=["onClick"],v=["href"],p={key:1,class:"emptyList"},d=(0,r._)("div",null,"can't get screen list from this server.",-1),h=[d],w=(0,r._)("div",{class:"divider"},null,-1);var g={__name:"App",setup(e){let n=(0,o.iH)({}),t=(0,o.iH)(["99","100"]);function u(e,n,t){t.preventDefault(),window.open(`http://192.168.22.${e}/player/${n}`)}function d(e,n){return`http://192.168.22.${e}/player/${n}`}return t.value.map((e=>{l(e).then((t=>{n.value[e]=t}))})),(e,l)=>((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(t),(e=>((0,r.wg)(),(0,r.iD)("div",{class:"screenList",key:e},[(0,r._)("p",null," 192.168.22."+(0,c.zw)(e),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,o.SU)(n)[e],(n=>((0,r.wg)(),(0,r.iD)("div",{key:n},[n.isEmpty?((0,r.wg)(),(0,r.iD)("div",p,h)):((0,r.wg)(),(0,r.iD)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data,(n=>((0,r.wg)(),(0,r.iD)("div",{key:n.token,class:"screenItem",onClick:(0,i.iM)((t=>u(e,n.token,t)),["self","stop"])},[(0,r._)("div",null,"ip : "+(0,c.zw)(n.ip),1),(0,r._)("div",null,"uuid : "+(0,c.zw)(n.uuid),1),(0,r._)("div",null,"screenKind : "+(0,c.zw)(n.screenKind),1),(0,r._)("div",null,"type : "+(0,c.zw)(n.type),1),(0,r._)("div",{class:"screenType",onClick:(0,i.iM)((t=>u(e,n.token,t)),["stop"])},[(0,r._)("a",{href:d(e,n.token)}," Open ",8,v)],8,f)],8,a)))),128))])),w])))),128))])))),128))}};const y=g;var k=y;(0,i.ri)(k).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var c=1/0;for(a=0;a<e.length;a++){i=e[a][0],r=e[a][1],o=e[a][2];for(var u=!0,l=0;l<i.length;l++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(u=!1,o<c&&(c=o));if(u){e.splice(a--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[i,r,o]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,c=i[0],u=i[1],l=i[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var a=l(t)}for(n&&n(i);s<c.length;s++)o=c[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(a)},i=self["webpackChunkvue3"]=self["webpackChunkvue3"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(568)}));i=t.O(i)})();
//# sourceMappingURL=app.fbb5026d.js.map