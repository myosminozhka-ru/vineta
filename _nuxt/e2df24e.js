(window.webpackJsonp=window.webpackJsonp||[]).push([[72,47,48,49,51,54,56,58],{487:function(t,e,n){},488:function(t,e,n){},489:function(t,e,n){"use strict";n.r(e);var r={name:"OsmButton",props:{link:{type:String,default:null},type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},large:{type:Boolean,default:!1}}},o=(n(490),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("nuxt-link",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{to:{name:t.link}}},[t._t("default")],2):n("button",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{type:t.type}},[t._t("default")],2)],1)}),[],!1,null,"6b0da085",null);e.default=component.exports},490:function(t,e,n){"use strict";n(487)},492:function(t,e,n){},493:function(t,e,n){"use strict";n(488)},494:function(t,e,n){},495:function(t,e,n){"use strict";n.r(e);n(39),n(32),n(35),n(11),n(53),n(31),n(54);var r=n(20),o=n(87);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{white:{type:Boolean,default:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getBreadcrumbs"]))},d=l,f=(n(493),n(45)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"breadcrumbs",class:{white:t.white}},[n("div",{staticClass:"back_button hide_off_mobile"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[n("rect",{attrs:{width:"24",height:"24",fill:"#FF0040"}}),t._v(" "),n("path",{attrs:{d:"M14.4004 7.2002L10.2004 12.0002L14.4004 16.8002",stroke:"white","stroke-width":"2"}})])]),t._v(" "),t._l(t.getBreadcrumbs,(function(br,e){return n("li",{key:br.index,staticClass:"breadcrumbs__item",class:{hide_on_mobile:e>0}},[br.isLink&&!br.params?[n("nuxt-link",{attrs:{to:{name:br.link}}},[t._v(t._s(br.name))])]:br.isLink&&br.params?[n("nuxt-link",{attrs:{to:{name:br.link,params:br.params}}},[t._v(t._s(br.name))])]:[n("span",[t._v(t._s(br.name))])],t._v(" "),e!==t.getBreadcrumbs.length-1?n("span",{staticClass:"breadcrumbs__item--delim hide_on_mobile"},[t._v("/")]):t._e()],2)}))],2)}),[],!1,null,"558ee5ac",null);e.default=component.exports},496:function(t,e,n){},499:function(t,e,n){},501:function(t,e,n){"use strict";n(492)},502:function(t,e,n){t.exports=n.p+"img/vk.94bfa54.svg"},503:function(t,e,n){"use strict";n.r(e);n(11),n(40),n(41);var r={components:{OsmLogo:function(){return n.e(11).then(n.bind(null,750))},OsmMenu:function(){return n.e(12).then(n.bind(null,721))},OsmInfo:function(){return n.e(10).then(n.bind(null,720))},OsmMobileMenu:function(){return n.e(13).then(n.bind(null,722))},OsmSearch:function(){return n.e(19).then(n.bind(null,728))}}},o=(n(501),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("osm-logo"),t._v(" "),n("osm-menu"),t._v(" "),n("osm-info"),t._v(" "),n("osm-search"),t._v(" "),n("osm-mobile-menu")],1)}),[],!1,null,null,null);e.default=component.exports},504:function(t,e,n){"use strict";n(494)},505:function(t,e,n){"use strict";n.r(e);n(88);var r={data:function(){return{isMounted:!1,isAnimated:!1}},beforeDestroy:function(){this.isMounted=!1,this.isAnimated=!1},mounted:function(){var t=this,e=setInterval((function(){"complete"===document.readyState&&(clearInterval(e),setTimeout((function(){t.isMounted=!0}),0),setTimeout((function(){t.isAnimated=!0}),1e3))}),100)}},o=(n(504),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preloader",class:{isMounted:t.isMounted,isAnimated:t.isAnimated}},[n("span",{staticClass:"circle circle-1"}),t._v(" "),n("span",{staticClass:"circle circle-2"}),t._v(" "),n("span",{staticClass:"circle circle-3"}),t._v(" "),n("span",{staticClass:"circle circle-4"}),t._v(" "),n("span",{staticClass:"circle circle-5"}),t._v(" "),n("span",{staticClass:"circle circle-6"}),t._v(" "),n("span",{staticClass:"circle circle-7"}),t._v(" "),n("span",{staticClass:"circle circle-8"})])}),[],!1,null,"3aa8bcd7",null);e.default=component.exports},507:function(t,e,n){"use strict";n(496)},508:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDMwQzIzLjI4NjMgMzAgMzAgMjMuMjg2MyAzMCAxNUMzMCA2LjcxMzc1IDIzLjI4NjMgMCAxNSAwQzYuNzEzNzUgMCAwIDYuNzEzNzUgMCAxNUMwIDIzLjI4NjMgNi43MTM3NSAzMCAxNSAzMFpNNi44NjM3NSAxNC42NzVMMjEuMzI2MyA5LjA5ODc1QzIxLjk5NzUgOC44NTYyNSAyMi41ODM3IDkuMjYyNSAyMi4zNjYyIDEwLjI3NzVMMjIuMzY3NSAxMC4yNzYyTDE5LjkwNSAyMS44Nzc1QzE5LjcyMjUgMjIuNyAxOS4yMzM3IDIyLjkgMTguNTUgMjIuNTEyNUwxNC44IDE5Ljc0ODdMMTIuOTkxMiAyMS40OTEzQzEyLjc5MTIgMjEuNjkxMyAxMi42MjI1IDIxLjg2IDEyLjIzNSAyMS44NkwxMi41MDEzIDE4LjA0MzhMMTkuNDUxMyAxMS43NjVDMTkuNzUzNyAxMS40OTg3IDE5LjM4MzcgMTEuMzQ4OCAxOC45ODUgMTEuNjEzOEwxMC4zOTYzIDE3LjAyMTJMNi42OTM3NSAxNS44NjYzQzUuODkgMTUuNjExMiA1Ljg3MjUgMTUuMDYyNSA2Ljg2Mzc1IDE0LjY3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},509:function(t,e,n){t.exports=n.p+"img/twitter.ef7cbec.svg"},510:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scrollY:0}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollY=window.scrollY}))},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},o=(n(507),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"totop",class:{isVisible:t.scrollY>400},on:{click:function(e){return e.preventDefault(),t.scrollToTop.apply(null,arguments)}}},[n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 12 23",fill:"none"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.31544 1.64286C5.70027 1.28147 6.29973 1.28147 6.68456 1.64286L10.6129 5.33195C10.8227 5.5289 10.8227 5.862 10.6129 6.05895C10.421 6.23916 10.1221 6.23916 9.93019 6.05895L8.19964 4.43381C7.56119 3.83424 6.51509 4.28693 6.51509 5.16277V21.4849C6.51509 21.7694 6.28447 22 6 22C5.71553 22 5.48491 21.7694 5.48491 21.4849V5.16277C5.48491 4.28692 4.43881 3.83424 3.80035 4.43381L2.0698 6.05895C1.87791 6.23916 1.57898 6.23916 1.38708 6.05895C1.17735 5.862 1.17735 5.5289 1.38708 5.33195L5.31544 1.64286Z",fill:"white",stroke:"white"}})])]),t._v(" "),n("div",{staticClass:"text"},[t._v("наверх")])])}),[],!1,null,"ca8a2db0",null);e.default=component.exports},511:function(t,e,n){"use strict";n(499)},513:function(t,e,n){"use strict";n.r(e);var r=n(20),o=(n(11),n(40),n(41),n(39),n(32),n(35),n(53),n(31),n(54),n(87));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{OsmLogoFooter:function(){return n.e(9).then(n.bind(null,749))},OsmFooterMenu:function(){return n.e(89).then(n.bind(null,682))},OsmUp:function(){return Promise.resolve().then(n.bind(null,510))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getDownloads"])),mounted:function(){},data:function(){return{socials:[{icon:n(502),link:"#"},{icon:n(508),link:"#"},{icon:n(509),link:"#"}]}}},d=l,f=(n(511),n(45)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__top"},[n("osm-up"),t._v(" "),n("div",{staticClass:"footer__top_left"},[n("osm-logo-footer"),t._v(" "),n("div",{staticClass:"footer__top_socials hide_on_tablet"},t._l(t.socials,(function(t){return n("a",{key:t.index,staticClass:"footer__top_social",attrs:{href:t.link,target:"_blank"}},[n("img",{attrs:{src:t.icon,width:"100%",alt:""}})])})),0)],1),t._v(" "),n("div",{staticClass:"footer__top_right"},[n("osm-footer-menu")],1)],1),t._v(" "),n("div",{staticClass:"footer__bottom"},[n("div",{staticClass:"footer__bottom_left"},[t._v("ООО “Винета”, 2012-2022")]),t._v(" "),n("div",{staticClass:"footer__bottom_right"},[n("ul",[t.getDownloads[1]?n("li",[n("a",{attrs:{href:t.$vareibles.remote+t.getDownloads[1].PROPERIES[0].VALUE.SRC}},[t._v("Политика конфидециальности")])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OsmUp:n(510).default})},520:function(t,e,n){},535:function(t,e,n){t.exports=n.p+"img/cat.dc93eea.jpg"},536:function(t,e,n){"use strict";n(520)},564:function(t,e,n){},612:function(t,e,n){"use strict";n.r(e);n(536);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"category",attrs:{to:{name:"index"}}},[r("div",{staticClass:"category__background"},[r("img",{attrs:{src:n(535),alt:""}})]),t._v(" "),r("div",{staticClass:"category__name"},[t._v("Лодки и катера")])])}),[],!1,null,"6ac0caf3",null);e.default=component.exports},627:function(t,e,n){"use strict";n(564)},701:function(t,e,n){"use strict";n.r(e);n(11),n(40),n(41);var r={name:"NewsPage",components:{OsmHeader:function(){return Promise.resolve().then(n.bind(null,503))},OsmFooter:function(){return Promise.resolve().then(n.bind(null,513))},OsmBreadcrumbs:function(){return Promise.resolve().then(n.bind(null,495))},OsmNewsTop:function(){return n.e(90).then(n.bind(null,687))},OsmPreloader:function(){return Promise.resolve().then(n.bind(null,505))}}},o=(n(627),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("osm-header"),t._v(" "),n("div",{staticClass:"header_padding"},[n("div",{staticClass:"news"},[n("osm-breadcrumbs"),t._v(" "),n("div",{staticClass:"news_page"},[n("osm-news-top"),t._v(" "),n("main",{staticClass:"news__content"},[n("div",{staticClass:"news__content_left"},[n("nuxt-child")],1),t._v(" "),n("div",{staticClass:"news__content_right"},[n("div",{staticClass:"news__content_bottons"},[n("osm-button",{staticClass:"news__content_botton",attrs:{large:!0,link:"catalog"}},[t._v("В каталог")]),t._v(" "),n("osm-button",{staticClass:"news__content_botton",attrs:{large:!0,outlined:!0}},[t._v("Презентация компании")])],1),t._v(" "),n("osm-category")],1)])],1)],1)]),t._v(" "),n("osm-footer"),t._v(" "),n("osm-preloader")],1)}),[],!1,null,"28998764",null);e.default=component.exports;installComponents(component,{OsmHeader:n(503).default,OsmBreadcrumbs:n(495).default,OsmButton:n(489).default,OsmCategory:n(612).default,OsmFooter:n(513).default,OsmPreloader:n(505).default})}}]);