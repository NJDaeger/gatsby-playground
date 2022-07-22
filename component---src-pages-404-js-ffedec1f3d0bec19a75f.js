"use strict";(self.webpackChunkgatsby_playground_repo=self.webpackChunkgatsby_playground_repo||[]).push([[883],{2518:function(e,t,n){var a=n(7294),l=function(e){var t=e.currentTarget.parentElement;if(!t.querySelector(".disabled")){var n=t.getBoundingClientRect(),a=document.createElement("span"),l=Math.max(t.clientWidth,t.clientHeight),r=l/2;a.style.width=a.style.height=l+"px",a.style.left=e.clientX-(n.left+r)+"px",a.style.top=e.clientY-(n.top+r)+"px",a.classList.add("ripple-effect");var i=t.getElementsByClassName("ripple-effect")[0];i&&i.remove(),t.appendChild(a)}},r=function(e){var t,n,r;return a.createElement("div",{className:null!==(t="ripple button-base "+e.outerClass)&&void 0!==t?t:"","data-type":e.dataType},null==e.href?a.createElement("button",{onClick:function(t){l(t),e.click()},className:null!==(n=e.innerClass)&&void 0!==n?n:""},e.text):a.createElement("a",{href:e.href,onClick:function(t){l(t),e.click()},className:null!==(r=e.innerClass)&&void 0!==r?r:""},e.text))};r.defaultProps={href:null,text:"Button",click:function(){},dataType:"",outerClass:"",innerClass:""},t.Z=r},1489:function(e,t,n){var a=n(7294),l=function(e){var t=(0,a.useState)(!1),n=t[0],l=t[1],r=(0,a.useState)(e.src),i=r[0],c=r[1],o=(0,a.useState)(!0),s=o[0],m=o[1];return(0,a.useEffect)((function(){s&&(l(!0),setTimeout((function(){c(e.src),l(!1),m(!1)}),500))}),[s]),e.src.endsWith(".mp4")?a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onEnded:function(e){return e.currentTarget.currentTime=1}},a.createElement("source",{src:e.src,type:"video/mp4",poster:e.poster})):a.createElement("div",{className:"screen-media"},a.createElement("img",{className:n?"fade animateThird":"",src:i,alt:e.alt}),a.createElement("img",{src:e.src,alt:e.alt,onLoad:function(){0==s&&m(!0)}}))};l.defaultProps={poster:"",src:"",alt:""},t.Z=l},9233:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n.p+"static/logo-ef317d79a9bb7afc8967d4fc84321955.svg",r=n(2518),i=n(941),c=function(e){return a.createElement("div",{id:"menu",className:e.show?"show":""},a.createElement("ul",{className:"justify-content-end overflow-scroll"},a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./downloads"),text:"Downloads",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./project"),text:"Project Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./resourcepack"),text:"Resourcepack Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.Rg)("projectwiki"),text:"Project Wikipedia",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.Rg)("application"),text:"Apply",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./official-links"),text:"Official Links",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./about"),text:"About",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./conditions"),text:"Terms of Use",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"}))),a.createElement("div",{className:"container-fluid justify-content-center",id:"footer"},a.createElement("p",null,"The Greenfield Project © 2022"),a.createElement("p",null,"contact@greenfieldmc.net")))},o=function(){var e=(0,a.useState)(void 0),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar fixed-top"},a.createElement("div",{className:"container-fluid justify-content-start column col-3",id:"brand"},a.createElement("a",{href:(0,i.w8)().replace("/undefined",""),className:"navbar-brand"},a.createElement("img",{src:l,alt:"GFMC"}))),a.createElement("div",{className:"container-fluid justify-content-center col-6",id:"links"},a.createElement("ul",{className:"navbar-nav flex-fill"},a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("application"),className:"nav-link d-none d-md-block swift-link"},"Apply")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.F_)("./downloads"),className:"nav-link d-none d-sm-block swift-link"},"Downloads")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("dynmap"),className:"nav-link swift-link"},"Dynmap")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("patreon"),className:"nav-link d-none d-sm-block swift-link"},"Patreon")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.F_)("./about"),className:"nav-link d-none d-md-block swift-link"},"About")))),a.createElement("div",{className:"container-fluid justify-content-end col-3"},a.createElement("button",{id:"hamburger",className:"col-12 "+t===void 0?"":t?"active":"",onClick:function(e){return n(void 0===t||!t)}},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)))),void 0===t?a.createElement(a.Fragment,null):a.createElement(c,{show:t}))}},775:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),l=n(9233),r=n(1489),i=n.p+"static/Construction-ebc55117ce3de041d549b40582b67089.jpg",c=n(2518),o=n(941),s=function(){return a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement("div",{className:"d-flex position-absolute text-white top-50 w-100 flex-column align-items-center",style:{zIndex:1}},a.createElement("h1",{className:"text-center",style:{fontSize:"45pt",fontWeight:"bold",textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}},"404"),a.createElement("h2",{className:"text-center",style:{fontSize:"35pt",fontWeight:"bold",textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}},"This is not the shit you are looking for"),a.createElement(c.Z,{href:(0,o.F_)("./"),text:"Go Home",innerClass:"py-2 px-4",dataType:"glass"})),a.createElement(r.Z,{src:i}))}},941:function(e,t,n){n.d(t,{w8:function(){return c},F_:function(){return i},Rg:function(){return r}});var a=n(7892),l=n(9499);function r(e){return a.find((function(t){return t.id===e})).link}function i(e){var t=(0,l.useLocation)();void 0===t&&(console.log("using window location"),window.location,function(e){throw new TypeError('"'+e+'" is read-only')}("loc"));var n=t.href,a=t.origin;if(console.log(a),(void 0===a||a.includes("njdaeger.github.io"))&&(a="https://njdaeger.github.io/gatsby-playground"),console.log(a),console.log(e),e.startsWith(".."))return n+e;if(e.startsWith("/"))return n+e.slice(1);var r,i,c=e.slice(2);return console.log(c),console.log(null!==(r=a+"/"+c)&&void 0!==r?r:""),null!==(i=a+"/"+e.slice(2))&&void 0!==i?i:""}function c(){return i("./").replace("/undefined","")}},7892:function(e){e.exports=JSON.parse('[{"id":"projectwiki","link":"https://wiki.greenfieldmc.net","name":"Project Wikipedia","social":true},{"id":"wikipedia","link":"https://en.wikipedia.org/wiki/Greenfield_(Minecraft)","name":"Official Wikipedia","social":true},{"id":"application","link":"https://docs.google.com/forms/d/e/1FAIpQLSenockClC1TOL4zEOZo_UMQSXgbiSjlK7F9KLCF_lgqdGT1LQ/viewform","name":"Apply","social":false},{"id":"patreon","link":"https://patreon.greenfieldmc.net","name":"Patreon","social":true},{"id":"discord","link":"https://discord.gg/greenfieldmc","name":"Discord","social":true},{"id":"dynmap","link":"https://map.greenfieldmc.net","name":"Dynmap","social":true},{"id":"youtube","link":"https://www.youtube.com/channel/UCz2MGxUzFKoe4Djl1uhHf9w","name":"YouTube","social":true},{"id":"twitter","link":"https://twitter.com/Greenfield_City","name":"Twitter","social":true},{"id":"subreddit","link":"https://www.reddit.com/r/GreenfieldCity/","name":"Subreddit","social":true},{"id":"instagram","link":"https://www.instagram.com/greenfieldcitymc/","name":"Instagram","social":true},{"id":"facebook","link":"https://www.facebook.com/greenfieldcityminecraft/","name":"Facebook","social":true},{"id":"mappmc","link":"https://www.planetminecraft.com/project/greenfield---new-life-size-city-project/","name":"Map PMC Page","social":true},{"id":"packpmc","link":"https://www.planetminecraft.com/texture-pack/greenfield-official-texture-pack/","name":"Resourcepack PMC Page","social":true}]')}}]);
//# sourceMappingURL=component---src-pages-404-js-ffedec1f3d0bec19a75f.js.map