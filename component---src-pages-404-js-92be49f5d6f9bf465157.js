"use strict";(self.webpackChunkgatsby_playground_repo=self.webpackChunkgatsby_playground_repo||[]).push([[883],{2518:function(e,t,n){var l=n(7294),a=function(e){var t=e.currentTarget.parentElement;if(!t.querySelector(".disabled")){var n=t.getBoundingClientRect(),l=document.createElement("span"),a=Math.max(t.clientWidth,t.clientHeight),r=a/2;l.style.width=l.style.height=a+"px",l.style.left=e.clientX-(n.left+r)+"px",l.style.top=e.clientY-(n.top+r)+"px",l.classList.add("ripple-effect");var c=t.getElementsByClassName("ripple-effect")[0];c&&c.remove(),t.appendChild(l)}},r=function(e){var t,n,r;return l.createElement("div",{className:null!==(t="ripple button-base "+e.outerClass)&&void 0!==t?t:"","data-type":e.dataType},null==e.href?l.createElement("button",{onClick:function(t){a(t),e.click()},className:null!==(n=e.innerClass)&&void 0!==n?n:""},e.text):l.createElement("a",{href:e.href,onClick:function(t){a(t),e.click()},className:null!==(r=e.innerClass)&&void 0!==r?r:""},e.text))};r.defaultProps={href:null,text:"Button",click:function(){},dataType:"",outerClass:"",innerClass:""},t.Z=r},1489:function(e,t,n){var l=n(7294),a={width:"100%",height:"100vh",zIndex:1,objectFit:"cover",margin:0,overflow:"hidden"},r=function(e){return(0,l.useEffect)((function(){})),e.src.endsWith(".mp4")?l.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onEnded:function(e){return e.currentTarget.currentTime=1},className:"testvideo"},l.createElement("source",{src:e.src,type:"video/mp4",poster:e.poster})):l.createElement(l.Fragment,null,l.createElement("img",{className:"screen-media",src:e.src,alt:e.alt,style:a}))};r.defaultProps={poster:"",src:"",alt:""},t.Z=r},9233:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n.p+"static/logo-ef317d79a9bb7afc8967d4fc84321955.svg",r=n(2518),c=function(e){return l.createElement("div",{id:"menu",className:e.show?"show":""},l.createElement("ul",{className:"justify-content-end"},l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Downloads",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Project Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Apply",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Photography",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Staff",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Official Links",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"About",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"})),l.createElement("li",null,l.createElement(r.Z,{href:"#",text:"Terms of Use",outerClass:"",innerClass:"py-1 ps-2",dataType:"light nooutline"}))),l.createElement("div",{className:"container-fluid justify-content-center",id:"footer"},l.createElement("p",null,"The Greenfield Project © 2022"),l.createElement("p",null,"contact@greenfieldmc.net")))};c.defaultProps={show:!1};var s=c,i=function(){var e=(0,l.useState)(void 0),t=e[0],n=e[1];return l.createElement(l.Fragment,null,l.createElement("nav",{className:"navbar fixed-top"},l.createElement("div",{className:"container-fluid justify-content-start column col-3",id:"brand"},l.createElement("a",{href:"../",className:"navbar-brand"},l.createElement("img",{src:a,alt:"GFMC"}))),l.createElement("div",{className:"container-fluid justify-content-center col-6",id:"links"},l.createElement("ul",{className:"navbar-nav flex-fill"},l.createElement("li",{className:"navbar-item"},l.createElement("a",{href:"#",className:"nav-link d-none d-md-block swift-link"},"Apply")),l.createElement("li",{className:"navbar-item"},l.createElement("a",{href:"#",className:"nav-link d-none d-sm-block swift-link"},"Downloads")),l.createElement("li",{className:"navbar-item"},l.createElement("a",{href:"https://map.greenfieldmc.net",className:"nav-link swift-link"},"Dynmap")),l.createElement("li",{className:"navbar-item"},l.createElement("a",{href:"#",className:"nav-link d-none d-sm-block swift-link"},"Patreon")),l.createElement("li",{className:"navbar-item"},l.createElement("a",{href:"#",className:"nav-link d-none d-md-block swift-link"},"About")))),l.createElement("div",{className:"container-fluid justify-content-end col-3"},l.createElement("button",{id:"hamburger",className:"col-12 "+t===void 0?"":t?"active":"",onClick:function(e){return n(void 0===t||!t)}},l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)))),void 0===t?l.createElement(l.Fragment,null):l.createElement(s,{show:t}))}},775:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(7294),a=n(9233),r=n(1489),c=n.p+"static/Construction-ebc55117ce3de041d549b40582b67089.jpg",s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,null),l.createElement("div",{className:"d-flex position-absolute text-white top-50 w-100 flex-column align-items-center"},l.createElement("h1",{style:{fontSize:"45pt",fontWeight:"bold",textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}},"404"),l.createElement("h2",{style:{fontSize:"35pt",fontWeight:"bold",textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}},"This is not the shit you are looking for")),l.createElement(r.Z,{src:c}))}}}]);
//# sourceMappingURL=component---src-pages-404-js-92be49f5d6f9bf465157.js.map