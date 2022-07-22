"use strict";(self.webpackChunkgatsby_playground_repo=self.webpackChunkgatsby_playground_repo||[]).push([[354],{2518:function(e,t,n){var a=n(7294),l=function(e){var t=e.currentTarget.parentElement;if(!t.querySelector(".disabled")){var n=t.getBoundingClientRect(),a=document.createElement("span"),l=Math.max(t.clientWidth,t.clientHeight),r=l/2;a.style.width=a.style.height=l+"px",a.style.left=e.clientX-(n.left+r)+"px",a.style.top=e.clientY-(n.top+r)+"px",a.classList.add("ripple-effect");var i=t.getElementsByClassName("ripple-effect")[0];i&&i.remove(),t.appendChild(a)}},r=function(e){var t,n,r;return a.createElement("div",{className:null!==(t="ripple button-base "+e.outerClass)&&void 0!==t?t:"","data-type":e.dataType},null==e.href?a.createElement("button",{onClick:function(t){l(t),e.click()},className:null!==(n=e.innerClass)&&void 0!==n?n:""},e.text):a.createElement("a",{href:e.href,onClick:function(t){l(t),e.click()},className:null!==(r=e.innerClass)&&void 0!==r?r:""},e.text))};r.defaultProps={href:null,text:"Button",click:function(){},dataType:"",outerClass:"",innerClass:""},t.Z=r},1489:function(e,t,n){var a=n(7294),l=function(e){var t=(0,a.useState)(!1),n=t[0],l=t[1],r=(0,a.useState)(e.src),i=r[0],s=r[1],c=(0,a.useState)(!0),o=c[0],u=c[1];return(0,a.useEffect)((function(){o&&(l(!0),setTimeout((function(){s(e.src),l(!1),u(!1)}),500))}),[o]),e.src.endsWith(".mp4")?a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onEnded:function(e){return e.currentTarget.currentTime=1}},a.createElement("source",{src:e.src,type:"video/mp4",poster:e.poster})):a.createElement("div",{className:"screen-media"},a.createElement("img",{className:n?"fade animateThird":"",src:i,alt:e.alt}),a.createElement("img",{src:e.src,alt:e.alt,onLoad:function(){0==o&&u(!0)}}))};l.defaultProps={poster:"",src:"",alt:""},t.Z=l},9233:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n.p+"static/logo-ef317d79a9bb7afc8967d4fc84321955.svg",r=n(2518),i=n(941),s=function(e){return a.createElement("div",{id:"menu",className:e.show?"show":""},a.createElement("ul",{className:"justify-content-end overflow-scroll"},a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./downloads"),text:"Downloads",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./project"),text:"Project Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./resourcepack"),text:"Resourcepack Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.Rg)("projectwiki"),text:"Project Wiki",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.Rg)("application"),text:"Apply",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./official-links"),text:"Official Links",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./about"),text:"About",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(r.Z,{href:(0,i.F_)("./conditions"),text:"Terms of Use",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"}))),a.createElement("div",{className:"container-fluid justify-content-center",id:"footer"},a.createElement("p",null,"The Greenfield Project © 2022"),a.createElement("p",null,"contact@greenfieldmc.net")))},c=function(){var e=(0,a.useState)(void 0),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar fixed-top"},a.createElement("div",{className:"container-fluid justify-content-start column col-3",id:"brand"},a.createElement("a",{href:(0,i.w8)().replace("/undefined",""),className:"navbar-brand"},a.createElement("img",{src:l,alt:"GFMC"}))),a.createElement("div",{className:"container-fluid justify-content-center col-6",id:"links"},a.createElement("ul",{className:"navbar-nav flex-fill"},a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("application"),className:"nav-link d-none d-md-block swift-link"},"Apply")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.F_)("./downloads"),className:"nav-link d-none d-sm-block swift-link"},"Downloads")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("dynmap"),className:"nav-link swift-link"},"Dynmap")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.Rg)("patreon"),className:"nav-link d-none d-sm-block swift-link"},"Patreon")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,i.F_)("./about"),className:"nav-link d-none d-md-block swift-link"},"About")))),a.createElement("div",{className:"container-fluid justify-content-end col-3"},a.createElement("button",{id:"hamburger",className:"col-12 "+t===void 0?"":t?"active":"",onClick:function(e){return n(void 0===t||!t)}},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)))),void 0===t?a.createElement(a.Fragment,null):a.createElement(s,{show:t}))}},1911:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),l=n(9233),r=n(1489),i=n.p+"static/megagreenfield-7333dd5664aca183ceb96f674b5f6d0d.jpg",s=function(){return a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement(r.Z,{src:i}),a.createElement("div",{className:"position-absolute w-100 h-100 top-0 d-flex"},a.createElement("div",{className:"about-container align-items-center d-xl-flex h-100 justify-content-center overflow-scroll position-absolute w-100"},a.createElement("div",{className:"about-card-container d-flex flex-column flex-xl-row justify-content-center overflow-scroll position-absolute w-100 pt-5"},a.createElement("div",{className:"about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5"},a.createElement("span",{className:"fs-1 bebas"},"Founder"),a.createElement("hr",null),a.createElement("p",null,"Greenfield was founded by ",a.createElement("a",{href:"https://namemc.com/profile/THEJESTR11.1",className:"link swift-link"},"THEJESTR")," back in August 2011. The map started with a single gas station, built by him, that still resides in its original form and location in Hunterspoint. In the last 11 years, he has led over 20 different staff members and 400+ builders to make the map what it is today.")),a.createElement("div",{className:"about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5"},a.createElement("span",{className:"fs-1 bebas"},"The City"),a.createElement("hr",null),a.createElement("p",null,"Greenfield is a fictional city designed to resemble the West Coast of America, laboriously inspired by Los Angeles. Built to a one-to-one scale, every single building in Greenfield has substantial detail with carefully detailed elaborate surroundings. With a substantially sizable airport to lavish homes and businesses, Greenfield is one of the largest, most complex, and detailed original cities in Minecraft. As of July 2022, the in-progress map is now about 6500x8800 blocks, or about 57 square kilometers.")),a.createElement("div",{className:"about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5"},a.createElement("span",{className:"fs-1 bebas"},"Our Builders"),a.createElement("hr",null),a.createElement("p",null,"Our builders are an essential part to the production of our map. Over the past 11 years, we have seen hundreds of builders come and go, helping us reach our current project state. They range from high school students to retirees and come from a wide variety of backgrounds and education. Some of us are software engineers, others are architect students- our builders' backgrounds all combine together to create an interesting atmosphere on the server and create a product everyone enjoys."))))))}},941:function(e,t,n){n.d(t,{w8:function(){return s},F_:function(){return i},Rg:function(){return r}});var a=n(7892),l=n(9499);function r(e){return a.find((function(t){return t.id===e})).link}function i(e){var t=(0,l.useLocation)();void 0===t&&(window.location,function(e){throw new TypeError('"'+e+'" is read-only')}("loc"));var n=t.href,a=t.origin;if((void 0===a||a.includes("njdaeger.github.io"))&&(a="https://njdaeger.github.io/gatsby-playground"),e.startsWith(".."))return n+e;if(e.startsWith("/"))return n+e.slice(1);var r;e.slice(2);return null!==(r=a+"/"+e.slice(2))&&void 0!==r?r:""}function s(){return i("./").replace("/undefined","")}},7892:function(e){e.exports=JSON.parse('[{"id":"projectwiki","link":"https://wiki.greenfieldmc.net","name":"Project Wiki","social":true},{"id":"wikipedia","link":"https://en.wikipedia.org/wiki/Greenfield_(Minecraft)","name":"Official Wikipedia","social":true},{"id":"application","link":"https://docs.google.com/forms/d/e/1FAIpQLSenockClC1TOL4zEOZo_UMQSXgbiSjlK7F9KLCF_lgqdGT1LQ/viewform","name":"Apply","social":false},{"id":"patreon","link":"https://patreon.greenfieldmc.net","name":"Patreon","social":true},{"id":"discord","link":"https://discord.gg/greenfieldmc","name":"Discord","social":true},{"id":"dynmap","link":"https://map.greenfieldmc.net","name":"Dynmap","social":true},{"id":"youtube","link":"https://www.youtube.com/channel/UCz2MGxUzFKoe4Djl1uhHf9w","name":"YouTube","social":true},{"id":"twitter","link":"https://twitter.com/Greenfield_City","name":"Twitter","social":true},{"id":"subreddit","link":"https://www.reddit.com/r/GreenfieldCity/","name":"Subreddit","social":true},{"id":"instagram","link":"https://www.instagram.com/greenfieldcitymc/","name":"Instagram","social":true},{"id":"facebook","link":"https://www.facebook.com/greenfieldcityminecraft/","name":"Facebook","social":true},{"id":"mappmc","link":"https://www.planetminecraft.com/project/greenfield---new-life-size-city-project/","name":"Map PMC Page","social":true},{"id":"packpmc","link":"https://www.planetminecraft.com/texture-pack/greenfield-official-texture-pack/","name":"Resourcepack PMC Page","social":true}]')}}]);
//# sourceMappingURL=component---src-pages-about-jsx-50d55e586b00ae757c9c.js.map