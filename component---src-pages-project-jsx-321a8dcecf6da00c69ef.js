"use strict";(self.webpackChunkgatsby_playground_repo=self.webpackChunkgatsby_playground_repo||[]).push([[867],{2518:function(e,t,n){var a=n(7294),l=function(e){var t=e.currentTarget.parentElement;if(!t.querySelector(".disabled")){var n=t.getBoundingClientRect(),a=document.createElement("span"),l=Math.max(t.clientWidth,t.clientHeight),i=l/2;a.style.width=a.style.height=l+"px",a.style.left=e.clientX-(n.left+i)+"px",a.style.top=e.clientY-(n.top+i)+"px",a.classList.add("ripple-effect");var r=t.getElementsByClassName("ripple-effect")[0];r&&r.remove(),t.appendChild(a)}},i=function(e){var t,n,i;return a.createElement("div",{className:null!==(t="ripple button-base "+e.outerClass)&&void 0!==t?t:"","data-type":e.dataType},null==e.href?a.createElement("button",{onClick:function(t){l(t),e.click()},className:null!==(n=e.innerClass)&&void 0!==n?n:""},e.text):a.createElement("a",{href:e.href,onClick:function(t){l(t),e.click()},className:null!==(i=e.innerClass)&&void 0!==i?i:""},e.text))};i.defaultProps={href:null,text:"Button",click:function(){},dataType:"",outerClass:"",innerClass:""},t.Z=i},9923:function(e,t,n){var a=n(5785),l=n(7294),i=n(2518),r=function(e){var t=(0,l.useState)(!1),n=t[0],r=t[1],o=(0,l.useState)(e.reverseOptions?(0,a.Z)(e.options).reverse():e.options),c=o[0],s=(o[1],(0,l.useState)(e.options[e.defaultOptionIndex])),d=s[0],m=s[1];return l.createElement(l.Fragment,null,l.createElement("div",{className:"dropdown-base"},l.createElement(i.Z,{click:function(){return r(!n)},text:l.createElement("span",{className:"dropdown-selection"},l.createElement("span",null,e.prefixSelection+d),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-chevron-down dropdown-chevron "+(n?"":"closed"),viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))),dataType:"glass"}),l.createElement("div",{className:"dropdown-container-blur dropdown-options-closed "+(n?"dropdown-options-opening":"dropdown-options-closing")}),l.createElement("div",{className:"dropdown-container dropdown-options-closed flex-shrink-0 "+(n?"dropdown-options-opening":"dropdown-options-closing")},l.createElement("div",{className:"dropdown-options"},c.map((function(t,a){return l.createElement("span",{className:d==t?"dropdown-selected":"",key:a},l.createElement(i.Z,{click:function(){r(!n),m(t),e.onSelect(t)},text:t}))}))))))};r.defaultProps={id:null,options:[],defaultOptionIndex:0,onSelect:function(e){},prefixSelection:"",reverseOptions:!1},t.Z=r},9182:function(e,t,n){var a=n(7294),l=(n(2518),n(1489)),i=function(e){return a.createElement("div",{className:"justify-content-center slide align-items-center d-flex "+(e.startHidden?"hidden":"hidden showing"),id:e.id,index:e.index},a.createElement("div",{className:"slide-content"},a.createElement("h3",{className:"justify-content-center d-flex animateFirst"},e.title),a.createElement("h1",{className:"justify-content-center d-flex animateSecond"},e.focus),e.thirdRowContent),a.createElement(l.Z,{src:e.src,alt:e.alt}))};i.defaultProps={id:"",src:"",alt:"",title:"",focus:"",index:0,startHidden:!1,thirdRowContent:a.createElement(a.Fragment,null)},t.Z=i},1489:function(e,t,n){var a=n(7294),l=function(e){var t=(0,a.useState)(!1),n=t[0],l=t[1],i=(0,a.useState)(e.src),r=i[0],o=i[1],c=(0,a.useState)(!0),s=c[0],d=c[1];return(0,a.useEffect)((function(){s&&(l(!0),setTimeout((function(){o(e.src),l(!1),d(!1)}),500))}),[s]),e.src.endsWith(".mp4")?a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onEnded:function(e){return e.currentTarget.currentTime=1}},a.createElement("source",{src:e.src,type:"video/mp4",poster:e.poster})):a.createElement("div",{className:"screen-media"},a.createElement("img",{className:n?"fade animateThird":"",src:r,alt:e.alt}),a.createElement("img",{src:e.src,alt:e.alt,onLoad:function(){0==s&&d(!0)}}))};l.defaultProps={poster:"",src:"",alt:""},t.Z=l},9233:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n.p+"static/logo-ef317d79a9bb7afc8967d4fc84321955.svg",i=n(2518),r=n(941),o=function(e){return a.createElement("div",{id:"menu",className:e.show?"show":""},a.createElement("ul",{className:"justify-content-end overflow-scroll"},a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./downloads"),text:"Downloads",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./project"),text:"Project Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./resourcepack"),text:"Resourcepack Home",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.Rg)("projectwiki"),text:"Project Wiki",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.Rg)("application"),text:"Apply",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./official-links"),text:"Official Links",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./about"),text:"About",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"})),a.createElement("li",null,a.createElement(i.Z,{href:(0,r.F_)("./conditions"),text:"Terms of Use",outerClass:"",innerClass:"py-1 ps-2",dataType:"clear nooutline"}))),a.createElement("div",{className:"container-fluid justify-content-center",id:"footer"},a.createElement("p",null,"The Greenfield Project © 2022"),a.createElement("p",null,"contact@greenfieldmc.net")))},c=function(){var e=(0,a.useState)(void 0),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar fixed-top"},a.createElement("div",{className:"container-fluid justify-content-start column col-3",id:"brand"},a.createElement("a",{href:(0,r.w8)().replace("/undefined",""),className:"navbar-brand"},a.createElement("img",{src:l,alt:"GFMC"}))),a.createElement("div",{className:"container-fluid justify-content-center col-6",id:"links"},a.createElement("ul",{className:"navbar-nav flex-fill"},a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,r.Rg)("application"),className:"nav-link d-none d-md-block swift-link"},"Apply")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,r.F_)("./downloads"),className:"nav-link d-none d-sm-block swift-link"},"Downloads")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,r.Rg)("dynmap"),className:"nav-link swift-link"},"Dynmap")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,r.Rg)("patreon"),className:"nav-link d-none d-sm-block swift-link"},"Patreon")),a.createElement("li",{className:"navbar-item"},a.createElement("a",{href:(0,r.F_)("./about"),className:"nav-link d-none d-md-block swift-link"},"About")))),a.createElement("div",{className:"container-fluid justify-content-end col-3"},a.createElement("button",{id:"hamburger",className:"col-12 "+t===void 0?"":t?"active":"",onClick:function(e){return n(void 0===t||!t)}},a.createElement("span",null),a.createElement("span",null),a.createElement("span",null)))),void 0===t?a.createElement(a.Fragment,null):a.createElement(o,{show:t}))}},3429:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),l=n(9233),i=n(2518),r=n(3755),o=n(9182),c=n(9923),s=n.p+"static/0_5_3-528605ebd3168f40232cb9a6b5260b18.jpg",d=n.p+"static/0_5_2-ed4cc0e1db29df1fc0b01e09dbbff09a.jpg",m=n.p+"static/0_5_1-5c74738231a4db3a290ab099195f8356.jpg",p=n.p+"static/0_5-a52f608ec3402c419f74059309b2601a.jpg",f=n.p+"static/0_4_6-1ede033283cfc1adf58c510b0ec88161.jpg",u=n.p+"static/0_4_5-54275272e8e5d1b60698ad1b1d477b00.jpg",w=n(453),v=n(941),h=function(){var e,t,n,h,g,_,k,b,E,x=[{local:"../images/update/0_5_3.jpg",static:s},{local:"../images/update/0_5_2.jpg",static:d},{local:"../images/update/0_5_1.jpg",static:m},{local:"../images/update/0_5.jpg",static:p},{local:"../images/update/0_4_6.jpg",static:f},{local:"../images/update/0_4_5.jpg",static:u}],y=(0,a.useState)(r.U[r.U.length-1]),j=y[0],C=y[1];return a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement("span",{className:"bottom-0 float-left fs-5 p-3 position-absolute text-white",style:{textShadow:"0 0 3px black, 0 0 5px black, 0 0 10px black",zIndex:100}},"Released ",j.released),a.createElement(o.Z,{src:null!==(e=null===(t=x.find((function(e){return e.local===j.image})))||void 0===t?void 0:t.static)&&void 0!==e?e:w.Z,focus:a.createElement(a.Fragment,null,"    Greenfield ",(_=j.map_version,k=[_.slice(0,_.lastIndexOf(".")),_.slice(_.lastIndexOf(".")+1)],b=k[0],E=k[1],a.createElement(a.Fragment,null,a.createElement("span",{style:{color:null!==(h=j.color)&&void 0!==h?h:"white"}},"V"),b,".",a.createElement("span",{style:{color:null!==(g=j.color)&&void 0!==g?g:"white"}},E))),"    "),thirdRowContent:a.createElement("div",{className:"animateThird col-11 col-md-10 col-lg-8 d-flex download-buttons hidden justify-content-center showing flex-column"},a.createElement("div",{className:"d-flex w-100 flex-column flex-lg-row"},a.createElement(i.Z,{href:null!==(n=j.download)&&void 0!==n?n:"#",text:r.U[r.U.length-1].map_version===j.map_version?"Download Latest":void 0===j.download?"Unavailable":"Download "+j.map_version,dataType:"glass "+(void 0===j.download?"disabled":"")}),a.createElement(c.Z,{options:r.U.map((function(e){return e.map_version})),id:"mapversiondropdown",onSelect:function(e){var t=r.U.find((function(t){return t.map_version===e}));C(null==t?r.U[r.U.length-1]:t)},defaultOptionIndex:r.U.length-1,prefixSelection:"V ",reverseOptions:!0})),a.createElement("span",{className:"fs-4 text-center",style:{textShadow:"0 0 3px black, 0 0 5px black"}},void 0!==j.mc_version?"For Minecraft "+j.mc_version:"")),startHidden:!1}),a.createElement("h6",{className:"text-center w-100 bottom-0 mb-2 text-white position-absolute"},a.createElement("a",{href:(0,v.F_)("./conditions"),className:"link swift-link",target:"_blank"},"By downloading the Greenfield Map, you agree to follow our Terms and Conditions")))}},941:function(e,t,n){n.d(t,{w8:function(){return o},F_:function(){return r},Rg:function(){return i}});var a=n(7892),l=n(9499);function i(e){return a.find((function(t){return t.id===e})).link}function r(e){var t=(0,l.useLocation)();void 0===t&&(window.location,function(e){throw new TypeError('"'+e+'" is read-only')}("loc"));var n=t.href,a=t.origin;if((void 0===a||a.includes("njdaeger.github.io"))&&(a="https://njdaeger.github.io/gatsby-playground"),e.startsWith(".."))return n+e;if(e.startsWith("/"))return n+e.slice(1);var i;e.slice(2);return null!==(i=a+"/"+e.slice(2))&&void 0!==i?i:""}function o(){return r("./").replace("/undefined","")}},453:function(e,t,n){t.Z=n.p+"static/MartyStation-eb36ed01d513aef9ca66af753d64de70.jpg"},3755:function(e){e.exports=JSON.parse('{"U":[{"map_version":"0.1.0","mc_version":"Beta 1.8","download":"https://www.mediafire.com/file/37n3tia3xpvwd1q/GreenField.rar/file","released":"October 30, 2011"},{"map_version":"0.2.0","mc_version":"Beta 1.8","download":"https://www.mediafire.com/file/x2258a0598vk4bw/GreenField2.rar/file","released":"November 6, 2011"},{"map_version":"0.3.0","mc_version":"1.1 - 1.3","download":"https://www.mediafire.com/file/qjspjc85vd817hj/Greenfield_v0.3.rar/file","released":"December 23, 2011"},{"map_version":"0.3.1","released":"April 4, 2012"},{"map_version":"0.3.2","released":"September 17, 2012"},{"map_version":"0.3.3","mc_version":"1.4","download":"http://www.mediafire.com/file/6qvpz49t4hake99/Greenfield_v0.3.3.zip/file","released":"December 23, 2012"},{"map_version":"0.3.4","mc_version":"1.5","download":"http://www.mediafire.com/file/cdbho4lbuyaot3n/Greenfield_v0.3.4.zip/file","released":"April 28, 2013"},{"map_version":"0.4.0","pack_version":"0","mc_version":"1.6","download":"https://www.mediafire.com/file/c2cs7wd5kcf16xc/Greenfield_0.4.zip/file","released":"August 25, 2013"},{"map_version":"0.4.5","pack_version":"1","mc_version":"1.7","download":"http://www.mediafire.com/file/5gdhj0mrubdou2i/Greenfield_v0.4.5_MC1.7.4.zip/file","released":"March 28, 2014","color":"#4896b7","image":"../images/update/0_4_5.jpg"},{"map_version":"0.4.6","pack_version":"2,3","mc_version":"1.8 - 1.10","download":"http://www.mediafire.com/file/ouc0uvu0jebemuh/Greenfield_v0.4.6.zip/file","released":"February 6, 2015","color":"#ffffff","image":"../images/update/0_4_6.jpg"},{"map_version":"0.5.0","pack_version":"4","mc_version":"1.11","color":"#009795","download":"http://www.mediafire.com/file/w6ipzks8zjjsi7r/Greenfield_v0.5.zip/file","released":"March 16, 2017","image":"../images/update/0_5.jpg"},{"map_version":"0.5.1","pack_version":"5","mc_version":"1.12","color":"#d0920b","download":"http://www.mediafire.com/file/4yk6702zmzpvvlk/Greenfield_v0.5.1.zip/file","released":"March 20, 2018","image":"../images/update/0_5_1.jpg"},{"map_version":"0.5.2","pack_version":"6","mc_version":"1.13","color":"#e74c3d","download":"http://www.mediafire.com/file/3ao7a50qbc5zjnx/Greenfield_v0.5.2.1.zip/file","released":"July 12, 2019","image":"../images/update/0_5_2.jpg"},{"map_version":"0.5.3","pack_version":"7,8","mc_version":"1.14 - 1.16","color":"#7851a9","download":"http://www.mediafire.com/file/mwtt3gnxxshprpe/Greenfield_v0.5.3.zip/file","released":"May 31, 2020","image":"../images/update/0_5_3.jpg"}],"P":[{"mc_version":"1.6","released":"2013","download":"https://www.mediafire.com/file/vr3v8w88cx6inej/Greenfield_Texture_pack_1.6.4.zip/file"},{"mc_version":"1.7","released":"2013","download":"https://www.mediafire.com/file/c2vmn5lxhobtyha/Greenfield_Texture_pack_1.7.4.zip/file"},{"mc_version":"1.8","released":"2015","download":"https://www.mediafire.com/file/rxwu3jbez1cfg6f/Greenfield_Texture_pack_1.8.zip/file"},{"mc_version":"1.9 & 1.10","released":"2016","download":"https://www.mediafire.com/file/oznik00fhmcrio4/Greenfield_Texture_Pack_1.9_-_1.10.zip/file"},{"mc_version":"1.11","released":"2017","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.11/Greenfield.Texture.pack.1.11.zip"},{"mc_version":"1.12","released":"2017","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.12/Greenfield.Texture.Pack.1.12.zip"},{"mc_version":"1.13","released":"2018","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.13/Greenfield.Texture.Pack.1.13.zip"},{"mc_version":"1.14","released":"2019","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.14/Greenfield.Texture.Pack.1.14.zip"},{"mc_version":"1.15 & 1.16","released":"2020","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.16/Greenfield.Texture.Pack.1.15-1.16.zip"},{"mc_version":"1.17","released":"2021","download":"https://github.com/GreenfieldMC/Greenfield-Texturepack/releases/download/v1.17/Greenfield.Texture.Pack.1.17.zip"}]}')},7892:function(e){e.exports=JSON.parse('[{"id":"projectwiki","link":"https://wiki.greenfieldmc.net","name":"Project Wiki","social":true},{"id":"wikipedia","link":"https://en.wikipedia.org/wiki/Greenfield_(Minecraft)","name":"Official Wikipedia","social":true},{"id":"application","link":"https://docs.google.com/forms/d/e/1FAIpQLSenockClC1TOL4zEOZo_UMQSXgbiSjlK7F9KLCF_lgqdGT1LQ/viewform","name":"Apply","social":false},{"id":"patreon","link":"https://patreon.greenfieldmc.net","name":"Patreon","social":true},{"id":"discord","link":"https://discord.gg/greenfieldmc","name":"Discord","social":true},{"id":"dynmap","link":"https://map.greenfieldmc.net","name":"Dynmap","social":true},{"id":"youtube","link":"https://www.youtube.com/channel/UCz2MGxUzFKoe4Djl1uhHf9w","name":"YouTube","social":true},{"id":"twitter","link":"https://twitter.com/Greenfield_City","name":"Twitter","social":true},{"id":"subreddit","link":"https://www.reddit.com/r/GreenfieldCity/","name":"Subreddit","social":true},{"id":"instagram","link":"https://www.instagram.com/greenfieldcitymc/","name":"Instagram","social":true},{"id":"facebook","link":"https://www.facebook.com/greenfieldcityminecraft/","name":"Facebook","social":true},{"id":"mappmc","link":"https://www.planetminecraft.com/project/greenfield---new-life-size-city-project/","name":"Map PMC Page","social":true},{"id":"packpmc","link":"https://www.planetminecraft.com/texture-pack/greenfield-official-texture-pack/","name":"Resourcepack PMC Page","social":true}]')}}]);
//# sourceMappingURL=component---src-pages-project-jsx-321a8dcecf6da00c69ef.js.map