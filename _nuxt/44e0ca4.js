(window.webpackJsonp=window.webpackJsonp||[]).push([[36,48],{487:function(t,e,n){},489:function(t,e,n){"use strict";n.r(e);var l={name:"OsmButton",props:{link:{type:String,default:null},type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},large:{type:Boolean,default:!1}}},o=(n(490),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("nuxt-link",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{to:{name:t.link}}},[t._t("default")],2):n("button",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{type:t.type}},[t._t("default")],2)],1)}),[],!1,null,"6b0da085",null);e.default=component.exports},490:function(t,e,n){"use strict";n(487)},610:function(t,e,n){},680:function(t,e,n){"use strict";n(610)},746:function(t,e,n){"use strict";n.r(e);n(11),n(40),n(41);var l={props:{bennefits:{type:Array,default:function(){return[]}}},components:{OsmButton:function(){return Promise.resolve().then(n.bind(null,489))}}},o=(n(680),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bennefits?n("div",{staticClass:"advantages"},[n("div",{staticClass:"advantages__title"},[t._v("Преимущества работы с нами")]),t._v(" "),n("div",{staticClass:"advantages__items"},t._l(t.bennefits,(function(e){return n("div",{key:e.index,staticClass:"advantages__item"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.$vareibles.remote+e.PREVIEW_PICTURE,width:"100%",alt:""}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.NAME))]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(e.PREVIEW_TEXT))])])})),0),t._v(" "),n("div",{staticClass:"advantages__button"},[n("osm-button",{attrs:{link:"about"}},[t._v("О компании")])],1)]):t._e()}),[],!1,null,"995e9fc6",null);e.default=component.exports;installComponents(component,{OsmButton:n(489).default})}}]);