(window.webpackJsonp=window.webpackJsonp||[]).push([[79,47,48],{487:function(t,e,n){},488:function(t,e,n){},489:function(t,e,n){"use strict";n.r(e);var r={name:"OsmButton",props:{link:{type:String,default:null},type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},large:{type:Boolean,default:!1}}},c=(n(490),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("nuxt-link",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{to:{name:t.link}}},[t._t("default")],2):n("button",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{type:t.type}},[t._t("default")],2)],1)}),[],!1,null,"6b0da085",null);e.default=component.exports},490:function(t,e,n){"use strict";n(487)},493:function(t,e,n){"use strict";n(488)},495:function(t,e,n){"use strict";n.r(e);n(39),n(32),n(35),n(11),n(53),n(31),n(54);var r=n(20),c=n(87);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{white:{type:Boolean,default:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["getBreadcrumbs"]))},d=l,v=(n(493),n(45)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"breadcrumbs",class:{white:t.white}},[n("div",{staticClass:"back_button hide_off_mobile"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[n("rect",{attrs:{width:"24",height:"24",fill:"#FF0040"}}),t._v(" "),n("path",{attrs:{d:"M14.4004 7.2002L10.2004 12.0002L14.4004 16.8002",stroke:"white","stroke-width":"2"}})])]),t._v(" "),t._l(t.getBreadcrumbs,(function(br,e){return n("li",{key:br.index,staticClass:"breadcrumbs__item",class:{hide_on_mobile:e>0}},[br.isLink&&!br.params?[n("nuxt-link",{attrs:{to:{name:br.link}}},[t._v(t._s(br.name))])]:br.isLink&&br.params?[n("nuxt-link",{attrs:{to:{name:br.link,params:br.params}}},[t._v(t._s(br.name))])]:[n("span",[t._v(t._s(br.name))])],t._v(" "),e!==t.getBreadcrumbs.length-1?n("span",{staticClass:"breadcrumbs__item--delim hide_on_mobile"},[t._v("/")]):t._e()],2)}))],2)}),[],!1,null,"558ee5ac",null);e.default=component.exports},571:function(t,e,n){},636:function(t,e,n){"use strict";n(571)},709:function(t,e,n){"use strict";n.r(e);var r=n(20),c=n(14),o=(n(67),n(11),n(40),n(41),n(39),n(32),n(35),n(53),n(31),n(54),n(87));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{OsmButton:function(){return Promise.resolve().then(n.bind(null,489))},OsmBreadcrumbs:function(){return Promise.resolve().then(n.bind(null,495))},OsmResponse:function(){return n.e(91).then(n.bind(null,690))}},data:function(){return{vacancy:null,isMounted:!1}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("vacancy-detail.php?code=".concat(t.$route.params.itemId));case 2:t.vacancy=e.sent,t.addBreadcrumbs([{name:"Вакансии",link:"vacancies",isLink:!0},{name:t.vacancy[0].NAME,isLink:!1}]);case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){window.scrollTo(0,0),this.isMounted=!0},methods:d(d(d({},Object(o.b)(["toggleModal"])),{},{openApplyModal:function(){console.log("openApplyModal"),this.toggleModal({isOpened:!0,type:"apply"})}},Object(o.b)(["addBreadcrumbs"])),{},{decodeHTML:function(html){if(document){var t=document.createElement("textarea");return t.innerHTML=html,t.value}}})},f=(n(636),n(45)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vacancy"},[t.vacancy?n("div",{staticClass:"vacancy__in"},[n("osm-breadcrumbs"),t._v(" "),n("div",{staticClass:"vacancy__top"},[n("div",{staticClass:"vacancy__title"},[t._v(t._s(t.vacancy[0].NAME))]),t._v(" "),n("div",{staticClass:"vacancy__button hide_on_mobile",on:{click:t.openApplyModal}},[n("osm-button",[t._v("Откликнуться")])],1)]),t._v(" "),n("div",{staticClass:"vacancy__price"},[t._v("от 45 000 до 65 000 руб. до вычета налогов")]),t._v(" "),n("div",{staticClass:"vacancy__button hide_off_mobile",on:{click:t.openApplyModal}},[n("osm-button",[t._v("Откликнуться")])],1),t._v(" "),n("div",{staticClass:"vacancy__items"},[t.isMounted?n("div",{staticClass:"vacancy__item"},t._l(t.vacancy[0].PROPERIES,(function(e){return n("div",{key:e.index,staticClass:"spec"},[n("div",{staticClass:"title"},[t._v(t._s(e.NAME))]),t._v(" "),e.VALUE.TEXT?[n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.decodeHTML(e.VALUE.TEXT))}})]:t._e(),t._v(" "),e.VALUE.TEXT?t._e():[n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.decodeHTML(e.VALUE))}})]],2)})),0):t._e()])],1):t._e(),t._v(" "),n("osm-response")],1)}),[],!1,null,"240c69f3",null);e.default=component.exports;installComponents(component,{OsmBreadcrumbs:n(495).default,OsmButton:n(489).default})}}]);