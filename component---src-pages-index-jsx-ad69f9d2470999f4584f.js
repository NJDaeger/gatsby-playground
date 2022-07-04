"use strict";(self.webpackChunkgatsby_playground_repo=self.webpackChunkgatsby_playground_repo||[]).push([[230],{2518:function(e,t,n){var a=n(7294),l=function(e){var t=e.currentTarget.parentElement;if(!t.querySelector(".disabled")){var n=t.getBoundingClientRect(),a=document.createElement("span"),l=Math.max(t.clientWidth,t.clientHeight),r=l/2;a.style.width=a.style.height=l+"px",a.style.left=e.clientX-(n.left+r)+"px",a.style.top=e.clientY-(n.top+r)+"px",a.classList.add("ripple-effect");var i=t.getElementsByClassName("ripple-effect")[0];i&&i.remove(),t.appendChild(a)}},r=function(e){var t,n,r;return a.createElement("div",{className:null!==(t="ripple button-base "+e.outerClass)&&void 0!==t?t:"","data-type":e.dataType},null==e.href?a.createElement("button",{onClick:function(t){l(t),e.click()},className:null!==(n=e.innerClass)&&void 0!==n?n:""},e.text):a.createElement("a",{href:e.href,onClick:function(t){l(t),e.click()},className:null!==(r=e.innerClass)&&void 0!==r?r:""},e.text))};r.defaultProps={href:null,text:"Button",click:function(){},dataType:"",outerClass:"",innerClass:""},t.Z=r},9182:function(e,t,n){var a=n(7294),l=(n(2518),n(1489)),r=function(e){return a.createElement("div",{className:"justify-content-center slide align-items-center d-flex "+(e.startHidden?"hidden":"hidden showing"),id:e.id,index:e.index},a.createElement("div",{className:"slide-content"},a.createElement("h3",{className:"justify-content-center d-flex animateFirst"},e.title),a.createElement("h1",{className:"justify-content-center d-flex animateSecond"},e.focus),e.thirdRowContent),a.createElement(l.Z,{src:e.src,alt:e.alt}))};r.defaultProps={id:"",src:"",alt:"",title:"",focus:"",index:0,startHidden:!1,thirdRowContent:a.createElement(a.Fragment,null)},t.Z=r},1489:function(e,t,n){var a=n(7294),l=function(e){var t=(0,a.useState)(!1),n=t[0],l=t[1],r=(0,a.useState)(e.src),i=r[0],c=r[1],s=(0,a.useState)(!0),o=s[0],d=s[1];return(0,a.useEffect)((function(){o&&(l(!0),setTimeout((function(){c(e.src),l(!1),d(!1)}),500))}),[o]),e.src.endsWith(".mp4")?a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onEnded:function(e){return e.currentTarget.currentTime=1}},a.createElement("source",{src:e.src,type:"video/mp4",poster:e.poster})):a.createElement("div",{className:"screen-media"},a.createElement("img",{className:n?"fade animateThird":"",src:i,alt:e.alt}),a.createElement("img",{src:e.src,alt:e.alt,onLoad:function(){0==o&&d(!0)}}))};l.defaultProps={poster:"",src:"",alt:""},t.Z=l},1443:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n.p+"static/logo-ef317d79a9bb7afc8967d4fc84321955.svg",r=n(2518),i=JSON.parse('[{"id":"projectwiki","link":"https://wiki.greenfieldmc.net","name":"Project Wikipedia"},{"id":"wikipedia","link":"https://en.wikipedia.org/wiki/Greenfield_(Minecraft)","name":"Official Wikipedia"},{"id":"application","link":"https://docs.google.com/forms/d/e/1FAIpQLSenockClC1TOL4zEOZo_UMQSXgbiSjlK7F9KLCF_lgqdGT1LQ/viewform","name":"Apply"},{"id":"patreon","link":"https://patreon.greenfieldmc.net","name":"Patreon"},{"id":"discord","link":"https://discord.gg/greenfieldmc","name":"Discord"},{"id":"dynmap","link":"https://map.greenfieldmc.net"},{"id":"youtube","link":"https://www.youtube.com/channel/UCz2MGxUzFKoe4Djl1uhHf9w"},{"id":"twitter","link":"https://twitter.com/Greenfield_City"},{"id":"subreddit","link":"https://www.reddit.com/r/GreenfieldCity/"},{"id":"instagram","link":"https://www.instagram.com/greenfieldcitymc/"},{"id":"facebook","link":"https://www.facebook.com/greenfieldcityminecraft/"},{"id":"mappmc","link":"https://www.planetminecraft.com/project/greenfield---new-life-size-city-project/"},{"id":"packpmc","link":"https://www.planetminecraft.com/texture-pack/greenfield-official-texture-pack/"}]');function c(e){return i.find((function(t){return t.id===e})).link}var s=function(e){return a.createElement("div",{id:"menu",className:e.show?"show":""},a.createElement("ul",{className:"justify-content-end"},a.createElement("li",null,a.createElement(r.Z,{href:"/downloads",text:"Downloads",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/project",text:"Project Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/resourcepack",text:"Resourcepack Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:c("projectwiki"),text:"Project Wikipedia",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:c("application"),text:"Apply",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/photography",text:"Photography",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/staff",text:"Staff",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/links",text:"Official Links",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/about",text:"About",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:"/conditions",text:"Terms of Use",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"}))),a.createElement("div",{className:"container-fluid justify-content-center",id:"footer"},a.createElement("p",null,"The Greenfield Project © 2022"),a.createElement("p",null,"contact@greenfieldmc.net")))};s.defaultProps={show:!1};var o=s,d=function(){var e=(0,a.useState)(void 0),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar fixed-top"},a.createElement("div",{className:"container-fluid justify-content-start column col-3",id:"brand"},a.createElement("a",{href:"/",className:"navbar-brand"},a.createElement("img",{src:l,alt:"GFMC"}))),a.createElement("div",{className:"container-fluid justify-content-center col-6",id:"links"},a.createElement("ul",{className:"navbar-nav flex-fill"},a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:c("application"),className:"nav-link d-none d-md-block swift-link"},"Apply")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:"/downloads",className:"nav-link d-none d-sm-block swift-link"},"Downloads")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:c("dynmap"),className:"nav-link swift-link"},"Dynmap")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:c("patreon"),className:"nav-link d-none d-sm-block swift-link"},"Patreon")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:"/about",className:"nav-link d-none d-md-block swift-link"},"About")))),a.createElement("div",{className:"container-fluid justify-content-end col-3"},a.createElement("button",{id:"hamburger",className:"col-12 "+t===void 0?"":t?"active":"",onClick:function(e){return n(void 0===t||!t)}},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)))),void 0===t?a.createElement(a.Fragment,null):a.createElement(o,{show:t}))}},7221:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(7294),l=n(1443),r=n(9182),i=n.p+"static/skyline-886ee1950777fe7463c9c6d2c7e2b9e5.jpg",c=n.p+"static/stadium-642209e061136b4f813948bc30140cbc.jpg",s=n.p+"static/railyard-27ec628013bef224d6525d7c6107304b.jpg",o=n(453),d=n(2518),m=function(e){return a.createElement("div",{className:"fixed-top h-100 justify-content-center",id:"slidenav"},e.links.map((function(e,t){return a.createElement("div",{key:t,id:"nav-button-"+t},a.createElement("span",null),a.createElement(d.Z,{href:e.goto,text:e.text,innerClass:" px-4",dataType:"glass"}))})))};m.defaultProps={links:[{goto:"",text:""}]};var u=m,p={overflow:"scroll",scrollSnapType:"y mandatory",scrollBehavior:"smooth",height:"100vh",scrollSnapAlign:"start"},f=function(){return(0,a.useEffect)((function(){var e=document.querySelectorAll(".slide"),t=new IntersectionObserver((function(e){var t,n=document.querySelector(".showing");null!==n&&(n.classList.remove("showing"),n.classList.add("hiding"),document.getElementById("nav-button-"+n.attributes.getNamedItem("index").value).classList.remove("active"));var a=e[0],l=a.target.attributes.getNamedItem("index").value;a.target.classList.add("showing"),a.target.classList.remove("hiding"),document.getElementById(null!==(t="nav-button-"+l)&&void 0!==t?t:0).classList.add("active")}),{threshold:.75});e.forEach((function(e){t.observe(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement(u,{links:[{goto:"#welcome",text:"Welcome"},{goto:"#project",text:"Project"},{goto:"#pack",text:"Resource Pack"},{goto:"#apply",text:"Apply"}]}),a.createElement("div",{id:"home",style:p},a.createElement("title",null,"Home Page"),a.createElement(r.Z,{src:i,title:"Welcome To",focus:"Greenfield",startHidden:!0,id:"welcome"}),a.createElement(r.Z,{src:c,title:"Current Map Release",focus:a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"slateblue"}},"v "),"0.5.",a.createElement("span",{style:{color:"slateblue"}},"3")),startHidden:!0,id:"project",thirdRowContent:a.createElement(d.Z,{href:"/project",text:"Project Page",outerClass:"animateThird",innerClass:"p-3",dataType:"glass"}),index:1}),a.createElement(r.Z,{src:s,title:"Current Resourcepack Release",focus:"1.17+",startHidden:!0,id:"pack",thirdRowContent:a.createElement(d.Z,{href:"/resourcepack",text:"Resourcepack Page",outerClass:"animateThird",innerClass:"p-3",dataType:"glass"}),index:2}),a.createElement(r.Z,{src:o.Z,title:"Help Us Build!",focus:"Apply Now",startHidden:!0,id:"apply",thirdRowContent:a.createElement(d.Z,{href:"#",text:"Application Form",outerClass:"animateThird",innerClass:"p-3",dataType:"glass"}),index:3})))}},453:function(e,t,n){t.Z=n.p+"static/MartyStation-eb36ed01d513aef9ca66af753d64de70.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ad69f9d2470999f4584f.js.map