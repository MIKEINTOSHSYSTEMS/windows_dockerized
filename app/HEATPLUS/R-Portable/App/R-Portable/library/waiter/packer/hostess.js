!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hostess=e():t.hostess=e()}(self,(function(){return(()=>{var t={45:(t,e,r)=>{var i,n,a=[].slice,s={}.toString;function l(t,e){var r={}.hasOwnProperty;for(var i in e)r.call(e,i)&&(t[i]=e[i]);return t}i=r(462).presets,n=function(t){return"data:image/svg+xml;base64,"+btoa(t)},function(){var t,e,r;t={head:function(t){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+t+'">'},gradient:function(t,e){var r,i,s,l,o,d,h,u,c,f;for(null==t&&(t=45),null==e&&(e=1),r=a.call(arguments,2),i=[this.head("0 0 100 100")],s=4*r.length+1,t=t*Math.PI/180,l=Math.pow(Math.cos(t),2),o=Math.sqrt(l-Math.pow(l,2)),t>.25*Math.PI&&(o=Math.pow(Math.sin(t),2),l=Math.sqrt(o-Math.pow(o,2))),d=100*l,h=100*o,i.push('<defs><linearGradient id="gradient" x1="0" x2="'+l+'" y1="0" y2="'+o+'">'),u=0;u<s;++u)f=100*(c=u)/(s-1),i.push('<stop offset="'+f+'%" stop-color="'+r[c%r.length]+'"/>');return i.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+d+",-"+h+'"\nto="0,0" dur="'+e+'s" repeatCount="indefinite"/></rect></svg>'),n(i.join(""))},stripe:function(t,e,r){var i,a;return null==t&&(t="#b4b4b4"),null==e&&(e="#e6e6e6"),null==r&&(r=1),i=(i=[this.head("0 0 100 100")]).concat(['<rect fill="'+e+'" width="100" height="100"/>',"<g><g>",function(){var e,r=[];for(e=0;e<13;++e)a=e,r.push('<polygon fill="'+t+'" points="'+(20*a-90)+",100 "+(20*a-100)+",100 "+(20*a-60)+",0 "+(20*a-50)+',0 "/>');return r}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+r+'s" repeatCount="indefinite"/></g></svg>'].join("")),n(i)},bubble:function(t,e,r,i,a,s){var l,o,d,h,u,c;for(null==t&&(t="#39d"),null==e&&(e="#9cf"),null==r&&(r=15),null==i&&(i=1),null==a&&(a=6),null==s&&(s=1),l=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+t+'"/>'],o=0;o<r;++o)d=-o/r*i,h=184*Math.random()+8,u=(.7*Math.random()+.3)*a,c=i*(1+.5*Math.random()),l.push(['<circle cx="'+h+'" cy="0" r="'+u+'" fill="none" stroke="'+e+'" stroke-width="'+s+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+c+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+h+'" cy="0" r="'+u+'" fill="none" stroke="'+e+'" stroke-width="'+s+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+c+'s" begin="'+d+'s" repeatCount="indefinite"/>',"</circle>"].join(""));return n(l.join("")+"</svg>")}},e={queue:{},running:!1,main:function(t){var e,r,i,n,a,s,l=this;for(i in e=!1,r=[],n=this.queue)(s=(a=n[i])(t))||r.push(a),e=e||s;for(i in n=this.queue)a=n[i],r.indexOf(a)>=0&&delete this.queue[i];return e?requestAnimationFrame((function(t){return l.main(t)})):this.running=!1},add:function(t,e){var r=this;if(this.queue[t]||(this.queue[t]=e),!this.running)return this.running=!0,requestAnimationFrame((function(t){return r.main(t)}))}},window.ldBar=r=function(r,n){var a,o,d,h,u,c,f,p,g,m,b,w,y,v,x,k,M,S,C,A,B,q,I,L,E=this;if(null==n&&(n={}),a={xlink:"http://www.w3.org/1999/xlink"},(o="String"===s.call(r).slice(8,-1)?document.querySelector(r):r).ldBar)return o.ldBar;for(m in o.ldBar=this,~(d=o.getAttribute("class")||"").indexOf("ldBar")||o.setAttribute("class",d+" ldBar"),h="ldBar-"+Math.random().toString(16).substring(2),u={key:h,clip:h+"-clip",filter:h+"-filter",pattern:h+"-pattern",mask:h+"-mask",maskPath:h+"-mask-path"},c=function(t,e){var r,i;for(r in t=f(t),e)i=e[r],"attr"!==r&&t.appendChild(c(r,i||{}));return t.attrs(e.attr||{}),t},f=function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},(p=document.body.__proto__.__proto__.__proto__).text=function(t){return this.appendChild(document.createTextNode(t))},p.attrs=function(t){var e,r,i,n=[];for(e in t)r=t[e],(i=/([^:]+):([^:]+)/.exec(e))&&a[i[1]]?n.push(this.setAttributeNS(a[i[1]],e,r)):n.push(this.setAttribute(e,r));return n},p.styles=function(t){var e,r,i=[];for(e in t)r=t[e],i.push(this.style[e]=r);return i},p.append=function(t){return this.appendChild(document.createElementNS("http://www.w3.og/2000/svg",t))},p.attr=function(t,e){return null!=e?this.setAttribute(t,e):this.getAttribute(t)},(g={type:"stroke",img:"",path:"M10 10L90 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":!0,"aspect-ratio":"xMidYMid"}).preset=o.attr("data-preset")||n.preset,null!=g.preset&&l(g,i[g.preset]),g)(b=b=o.attr("data-"+m))&&(g[m]=b);return l(g,n),g.img&&(g.path=null),w="stroke"===g.type,y=function(e){var r;return(r=/data:ldbar\/res,([^()]+)\(([^)]+)\)/.exec(e))?t[r[1]].apply(t,r[2].split(",")):e},g.fill=y(g.fill),g.stroke=y(g.stroke),"false"===g["set-dim"]&&(g["set-dim"]=!1),v={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:g["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:u.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+g["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+g["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:u.mask},image:{attr:{"xlink:href":g.img,filter:"url(#"+u.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:g["aspect-ratio"]}}},g:{mask:{attr:{id:u.maskPath},path:{attr:{d:g.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+u.filter+")"}}}},clipPath:{attr:{id:u.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:u.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}},x=c("svg",v),(k=document.createElement("div")).setAttribute("class","ldBar-label"),o.appendChild(x),o.appendChild(k),M=[0,0],S=0,this.fit=function(){var t,e,r,i;if((e=(t=g.bbox)?{x:(e=t.split(" ").map((function(t){return+t.trim()})))[0],y:e[1],width:e[2],height:e[3]}:M[1].getBBox())&&0!==e.width&&0!==e.height||(e={x:0,y:0,width:100,height:100}),r=1.5*Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map((function(t){return g[t]}))),x.attrs({viewBox:[e.x-r,e.y-r,e.width+2*r,e.height+2*r].join(" ")}),g["set-dim"]&&["width","height"].map((function(t){if(!o.style[t]||E.fit[t])return o.style[t]=e[t]+2*r+"px",E.fit[t]=!0})),i=M[0].querySelector("rect"))return i.attrs({x:e.x-r,y:e.y-r,width:e.width+2*r,height:e.height+2*r})},g.path?(M[0]=c("g",w?{path:{attr:{d:g.path,fill:"none",class:"baseline"}}}:{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+u.maskPath+")",fill:g["fill-background"],class:"frame"}}}),x.appendChild(M[0]),M[1]=c("g",{path:{attr:{d:g.path,class:w?"mainline":"solid","clip-path":"fill"===g.type?"url(#"+u.clip+")":""}}}),x.appendChild(M[1]),C=M[0].querySelector(w?"path":"rect"),A=M[1].querySelector("path"),w&&A.attrs({fill:"none"}),B=x.querySelector("pattern image"),(q=new Image).addEventListener("load",(function(){var t,e;return t=(e=g["pattern-size"])?{width:+e,height:+e}:q.width&&q.height?{width:q.width,height:q.height}:{width:300,height:300},x.querySelector("pattern").attrs({width:t.width,height:t.height}),B.attrs({width:t.width,height:t.height})})),/.+\..+|^data:/.exec(w?g.stroke:g.fill)&&(q.src=w?g.stroke:g.fill,B.attrs({"xlink:href":q.src})),w&&(C.attrs({stroke:g["stroke-trail"],"stroke-width":g["stroke-trail-width"]}),A.attrs({"stroke-width":g["stroke-width"],stroke:/.+\..+|^data:/.exec(g.stroke)?"url(#"+u.pattern+")":g.stroke})),g.fill&&!w&&A.attrs({fill:/.+\..+|^data:/.exec(g.fill)?"url(#"+u.pattern+")":g.fill}),S=A.getTotalLength(),this.fit(),this.inited=!0):g.img&&(L=g["img-size"]?{width:+(I=g["img-size"].split(","))[0],height:+I[1]}:{width:100,height:100},M[0]=c("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+u.mask+")",fill:g["fill-background"]}}}),x.querySelector("mask image").attrs({width:L.width,height:L.height}),M[1]=c("g",{image:{attr:{width:L.width,height:L.height,x:0,y:0,preserveAspectRatio:g["aspect-ratio"],"clip-path":"fill"===g.type?"url(#"+u.clip+")":"","xlink:href":g.img,class:"solid"}}}),(q=new Image).addEventListener("load",(function(){var t,e;return e=g["img-size"]?{width:+(t=g["img-size"].split(","))[0],height:+t[1]}:q.width&&q.height?{width:q.width,height:q.height}:{width:100,height:100},x.querySelector("mask image").attrs({width:e.width,height:e.height}),M[1].querySelector("image").attrs({width:e.width,height:e.height}),E.fit(),E.set(void 0,!1),E.inited=!0})),q.src=g.img,x.appendChild(M[0]),x.appendChild(M[1])),x.attrs({width:"100%",height:"100%"}),this.transition={value:{src:0,des:0},time:{},ease:function(t,e,r,i){return(t/=.5*i)<1?.5*r*t*t+e:.5*-r*((t-=1)*(t-2)-1)+e},handler:function(t,e){var r,i,n,a,s,l,o,d,h;return null==e&&(e=!0),null==this.time.src&&(this.time.src=t),i=(r=[this.value.des-this.value.src,.001*(t-this.time.src),+g.duration||1])[0],n=r[1],a=r[2],k.textContent=s=e?Math.round(this.ease(n,this.value.src,i,a)):this.value.des,w?(l=A,o={"stroke-dasharray":"reverse"===g["stroke-dir"]?"0 "+S*(100-s)*.01+" "+S*s*.01+" 0":.01*s*S+" "+(.01*(100-s)*S+1)}):(d=M[1].getBBox(),o="btt"!==(h=g["fill-dir"])&&h?"ttb"===h?{y:d.y,height:d.height*s*.01,x:d.x,width:d.width}:"ltr"===h?{y:d.y,height:d.height,x:d.x,width:d.width*s*.01}:"rtl"===h?{y:d.y,height:d.height,x:d.x+d.width*(100-s)*.01,width:d.width*s*.01}:void 0:{y:d.y+d.height*(100-s)*.01,height:d.height*s*.01,x:d.x,width:d.width},l=x.querySelector("rect")),l.attrs(o),!(n>=a&&(delete this.time.src,1))},start:function(t,r,i){var n,a=this;return(n=this.value).src=t,n.des=r,o.offsetWidth||o.offsetHeight||o.getClientRects().length,i&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)?e.add(u.key,(function(t){return a.handler(t)})):(this.time.src=0,void this.handler(1e3,!1))}},this.set=function(t,e){var r,i;return null==e&&(e=!0),r=this.value||0,null!=t?this.value=t:t=this.value,i=this.value,this.transition.start(r,i,e)},this.set(+g.value||0,!1),this},window.addEventListener("load",(function(){var t,e,i,n,a=[];for(t=0,i=(e=document.querySelectorAll(".ldBar")).length;t<i;++t)(n=e[t]).ldBar||a.push(n.ldBar=new r(n));return a}),!1)}(),t.exports=ldBar},462:function(t,e){(e||this).presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},705:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(n[s]=!0)}for(var l=0;l<t.length;l++){var o=[].concat(t[l]);i&&n[o[0]]||(r&&(o[2]?o[2]="".concat(r," and ").concat(o[2]):o[2]=r),e.push(o))}},e}},51:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var i=r(705),n=r.n(i)()((function(t){return t[1]}));n.push([t.id,'.ldBar{position:relative;}.ldBar.label-center > .ldBar-label{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:0 0 3px #fff}.ldBar-label:after{content:"%";display:inline}.ldBar.no-percent .ldBar-label:after{content:""}',""]);const a=n},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,i=0;i<e.length;i++)if(e[i].identifier===t){r=i;break}return r}function i(t,i){for(var a={},s=[],l=0;l<t.length;l++){var o=t[l],d=i.base?o[0]+i.base:o[0],h=a[d]||0,u="".concat(d," ").concat(h);a[d]=h+1;var c=r(u),f={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==c)e[c].references++,e[c].updater(f);else{var p=n(f,i);i.byIndex=l,e.splice(l,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var a=i(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var l=r(a[s]);e[l].references--}for(var o=i(t,n),d=0;d<a.length;d++){var h=r(a[d]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}a=o}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var i=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,n&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={id:i,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i);var t=r(45),e=r.n(t),n=r(379),a=r.n(n),s=r(795),l=r.n(s),o=r(569),d=r.n(o),h=r(565),u=r.n(h),c=r(216),f=r.n(c),p=r(589),g=r.n(p),m=r(51),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=d().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f(),a()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;let w=[],y=[];Shiny.addCustomMessageHandler("hostess-init",(t=>{if(w[t.id]=new(e())("#"+t.id),!t.infinite)return;let r=0,i=0;y[t.id]=setInterval((function(){i=(100-r)/(100+r),r=Math.round(1e3*(r+i+Number.EPSILON))/1e3,w[t.id].set(r)}),350)})),Shiny.addCustomMessageHandler("hostess-set",(t=>{if(w[t.id].set(t.value),100!=t.value)return;let e=document.getElementById(t.id);null!=e&&e.remove()})),Shiny.addCustomMessageHandler("hostess-notify",(t=>{let r=document.createElement("DIV"),i=v(t.position);if(r.style.bottom=i.bottom,r.style.right=i.right,r.style.left=i.left,r.style.top=i.top,r.height="100px",r.style.color=t.text_color,r.style.backgroundColor=t.background_color,r.style.position="fixed",r.innerHTML=t.html,r.style.zIndex=999,r.id=t.id,r.classList.add("waitress-notification"),document.body.appendChild(r),w[t.id]=new(e())("#"+t.id),!t.infinite)return;let n=0,a=0;y[t.id]=setInterval((function(){a=(100-n)/(100+n),n=Math.round(1e3*(n+a+Number.EPSILON))/1e3,w[t.id].set(n)}),350)})),Shiny.addCustomMessageHandler("hostess-end",(t=>{let e=document.getElementById(t.id);t.infinite&&(clearInterval(y[t.id]),w[t.id].set(95)),null!=e&&setTimeout((function(){e.remove()}),350)}));const v=t=>{let e={},r=100,i=document.getElementsByClassName("waitress-notification");for(let t of i)r=r+100+t.offsetHeight;return"bl"==t?(e.top="auto",e.bottom=r+10+"px",e.left="10px",e.right="auto"):"tl"==t?(e.top=r+10+"px",e.bottom="auto",e.left="10px",e.right="auto"):"br"==t?(e.top="auto",e.bottom=r+10+"px",e.left="auto",e.right="10px"):"tr"==t&&(e.top=r+10+"px",e.bottom="auto",e.left="auto",e.right="10px"),e}})(),i})()}));