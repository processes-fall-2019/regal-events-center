(function(t){function s(s){for(var o,n,r=s[0],l=s[1],c=s[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(s);while(u.length)u.shift()();return e.push.apply(e,c||[]),a()}function a(){for(var t,s=0;s<e.length;s++){for(var a=e[s],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(e.splice(s--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},e=[];function n(s){if(o[s])return o[s].exports;var a=o[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var o in t)n.d(a,o,function(s){return t[s]}.bind(null,o));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var m=l;e.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";var o=a("64a9"),i=a.n(o);i.a},4678:function(t,s,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var s=e(t);return a(s)}function e(t){if(!a.o(o,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=e,t.exports=i,i.id="4678"},"56d7":function(t,s,a){"use strict";a.r(s);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},e=[],n={name:"app",components:{}},r=n,l=(a("034f"),a("2877")),c=Object(l["a"])(r,i,e,!1,null,null,null),m=c.exports,d=a("8c4f"),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[t._m(0),a("body",{staticClass:"front"},[a("NavigationBar"),a("div",{staticClass:"container-fluid"},[a("mdb-carousel",{attrs:{interval:8e3,showControls:"",showIndicators:""}},[a("mdb-carousel-item",{attrs:{img:"",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",alt:"First slide"}}),a("mdb-carousel-item",{attrs:{img:"",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",alt:"Second slide"}}),a("mdb-carousel-item",{attrs:{img:"",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",alt:"Third slide"}})],1)],1),t._m(1)],1)])},b=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("head",[a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"}}),a("link",{attrs:{rel:"stylesheet",type:"text/css",href:"pal.css"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-heading mid"},[t._v(" Buttons ")]),a("div",{staticClass:"panel-body back"},[a("button",{staticClass:"btn go",attrs:{type:"button"}},[t._v("Forward")]),a("button",{staticClass:"btn danger",attrs:{type:"button"}},[t._v("Back")]),a("button",{staticClass:"btn mid",attrs:{type:"button"}},[t._v("miscellaneous")])])])]),a("div",{staticClass:"col-sm-4"},[a("h3",[t._v("Regal Events Center")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit...")]),a("p",[t._v("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...")])]),a("div",{staticClass:"col-sm-4"},[a("h3",[t._v("Column 3")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit...")]),a("p",[t._v("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-heading mid"},[t._v(" Contact us ")]),a("div",{staticClass:"panel-body back"},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-sm-3",attrs:{for:"email"}},[t._v("Email:")]),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter email"}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-sm-3",attrs:{for:"text"}},[t._v("Message:")]),a("div",{staticClass:"col-sm-9"},[a("textarea",{staticClass:"form-control",attrs:{type:"input",id:"text",placeholder:"Enter message"}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-offset-3 col-sm-9"},[a("button",{staticClass:"btn go",attrs:{type:"button"}},[t._v("Submit")]),a("button",{staticClass:"btn danger",attrs:{type:"button"}},[t._v("Cancel")])])])])])])])])])}],g=a("7b6a"),p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[t._m(0),a("body",{staticClass:"front"},[a("nav",[a("div",{staticClass:"container-fluid"},[a("b-navbar",{attrs:{type:"dark",variant:"light"}},[a("h1",[t._v(" Regal Events Center ")])]),a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#/"}},[t._v("Home")]),a("b-nav-item-dropdown",{attrs:{text:"About Us",right:""}},[a("b-dropdown-item",{staticClass:"text",attrs:{href:"#/grace"}},[t._v("Grace")]),a("b-dropdown-item",{attrs:{href:"#/testimonials"}},[t._v("Testimonials")])],1),a("b-nav-item",{attrs:{href:"#/gallery"}},[t._v("Gallery")]),a("b-nav-item-dropdown",{attrs:{text:"Events",right:""}},[a("b-dropdown-item",{attrs:{href:"#/upcomingevents"}},[t._v("Upcoming Events")]),a("b-dropdown-item",{attrs:{href:"#/pastevents"}},[t._v("Past Events")])],1),a("b-nav-item-dropdown",{attrs:{text:"Venue",right:""}},[a("b-dropdown-item",{attrs:{href:"#/venuelayout"}},[t._v("Layout and Pricing")]),a("b-dropdown-item",{attrs:{href:"#/bookvenue"}},[t._v("Book Venue")])],1),a("b-nav-item-dropdown",{attrs:{text:"Community",right:""}},[a("b-dropdown-item",{attrs:{href:"#/bulletin"}},[t._v("Bulletin")])],1)],1)],1)],1)])])])},f=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("head",[a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"}}),a("link",{attrs:{rel:"stylesheet",type:"text/css",href:"pal.css"}})])}],h={name:"NavigationBar",props:{}},v=h,j=(a("c268"),Object(l["a"])(v,p,f,!1,null,"7a760f3c",null)),C=j.exports,k={name:"Home",components:{mdbCarousel:g["a"],mdbCarouselItem:g["b"],NavigationBar:C},props:{msg:String}},x=k,_=(a("6fb2"),Object(l["a"])(x,u,b,!1,null,"28536bae",null)),y=_.exports,w=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Grace ")])],1)},z=[],N={name:"Grace",props:{msg:String},components:{NavigationBar:C}},P=N,H=Object(l["a"])(P,w,z,!1,null,"82169670",null),O=H.exports,E=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("mdb-container",[a("mdb-carousel",{attrs:{interval:8e3,showControls:"",showIndicators:"",multi:"",slide:"",top:"",navClass:"btn-secondary",indicatorClass:"secondary-color"}},[a("mdb-carousel-item",[a("mdb-row",{staticClass:"mdb-lightbox px-2"},[a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(0)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(1)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(3).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(2)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(3)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(4)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox(5)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg",alt:""}})])])],1)],1),a("mdb-carousel-item",[a("mdb-row",{staticClass:"mdb-lightbox px-2"},[a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(0)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(1)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(9).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(2)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(3)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(11).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(4)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox2(5)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(13).jpg",alt:""}})])])],1)],1),a("mdb-carousel-item",[a("mdb-row",{staticClass:"mdb-lightbox px-2"},[a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(0)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(1)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(15).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(2)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(16).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(3)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(4)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",alt:""}})])]),a("mdb-col",{staticClass:"d-md-inline-block",attrs:{md:"4"},nativeOn:{click:function(s){return t.showLightbox3(5)}}},[a("figure",[a("img",{staticClass:"img-fluid",attrs:{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg",alt:""}})])])],1)],1)],1),a("mdb-lightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}}),a("mdb-lightbox",{attrs:{visible:t.visible2,imgs:t.imgs2,index:t.index2},on:{hide:t.handleHide2}}),a("mdb-lightbox",{attrs:{visible:t.visible3,imgs:t.imgs3,index:t.index3},on:{hide:t.handleHide3}})],1)],1)},B=[],L={name:"Gallery",components:{mdbCarousel:g["a"],mdbCarouselItem:g["b"],mdbRow:g["e"],mdbContainer:g["d"],mdbCol:g["c"],NavigationBar:C},data:function(){return{imgs:["https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(2).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(3).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(4).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(5).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(6).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(7).jpg"],imgs2:["https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(8).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(9).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(10).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(11).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(12).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(13).jpg"],imgs3:["https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(14).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(15).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(16).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(17).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg","https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(19).jpg"],visible:!1,visible2:!1,visible3:!1,index:0,index2:0,index3:0}},methods:{showLightbox:function(t){this.index=t,this.visible=!0},showLightbox2:function(t){this.index2=t,this.visible2=!0},showLightbox3:function(t){this.index3=t,this.visible3=!0},handleHide:function(){this.visible=!1},handleHide2:function(){this.visible2=!1},handleHide3:function(){this.visible3=!1}}},S=L,$=Object(l["a"])(S,E,B,!1,null,"b242f97e",null),T=$.exports,U=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Testimonials ")])],1)},G=[],M={name:"Testimonials",props:{msg:String},components:{NavigationBar:C}},V=M,q=Object(l["a"])(V,U,G,!1,null,"1a5d1bec",null),I=q.exports,F=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Upcoming Events ")])],1)},R=[],D={name:"UpcomingEvents",props:{msg:String},components:{NavigationBar:C}},J=D,A=Object(l["a"])(J,F,R,!1,null,"5c86354a",null),K=A.exports,Q=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Past Events ")])],1)},W=[],X={name:"PastEvents",props:{msg:String},components:{NavigationBar:C}},Y=X,Z=Object(l["a"])(Y,Q,W,!1,null,"02397565",null),tt=Z.exports,st=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Venue Layout ")])],1)},at=[],ot={name:"VenueLayout",props:{msg:String},components:{NavigationBar:C}},it=ot,et=Object(l["a"])(it,st,at,!1,null,"841559e2",null),nt=et.exports,rt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Book Venue ")])],1)},lt=[],ct={name:"BookVenue",props:{msg:String},components:{NavigationBar:C}},mt=ct,dt=Object(l["a"])(mt,rt,lt,!1,null,"9e40abdc",null),ut=dt.exports,bt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("NavigationBar"),a("h1",[t._v(" Bulletin ")])],1)},gt=[],pt={name:"Bulletin",props:{msg:String},components:{NavigationBar:C}},ft=pt,ht=Object(l["a"])(ft,bt,gt,!1,null,"35c30c0e",null),vt=ht.exports;o["default"].use(d["a"]);var jt=new d["a"]({routes:[{path:"/",name:"home",component:y},{path:"/grace",name:"grace",component:O},{path:"/gallery",name:"gallery",component:T},{path:"/testimonials",name:"testimonials",component:I},{path:"/upcomingevents",name:"upcomingevents",component:K},{path:"/pastevents",name:"pastevents",component:tt},{path:"/venuelayout",name:"venuelayout",component:nt},{path:"/bookvenue",name:"bookvenue",component:ut},{path:"/bulletin",name:"bulletin",component:vt}]}),Ct=a("5f5b");a("f9e3"),a("2dd8"),a("cabf"),a("96d3");o["default"].use(Ct["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(m)},router:jt}).$mount("#app")},"64a9":function(t,s,a){},"6fb2":function(t,s,a){"use strict";var o=a("e1a5"),i=a.n(o);i.a},b5dd:function(t,s,a){},c268:function(t,s,a){"use strict";var o=a("b5dd"),i=a.n(o);i.a},e1a5:function(t,s,a){}});
//# sourceMappingURL=app.1bf843d6.js.map