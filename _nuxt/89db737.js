(window.webpackJsonp=window.webpackJsonp||[]).push([[70,54,56],{492:function(e,t,n){},494:function(e,t,n){},501:function(e,t,n){"use strict";n(492)},503:function(e,t,n){"use strict";n.r(t);n(11),n(40),n(41);var r={components:{OsmLogo:function(){return n.e(11).then(n.bind(null,750))},OsmMenu:function(){return n.e(12).then(n.bind(null,721))},OsmInfo:function(){return n.e(10).then(n.bind(null,720))},OsmMobileMenu:function(){return n.e(13).then(n.bind(null,722))},OsmSearch:function(){return n.e(19).then(n.bind(null,728))}}},c=(n(501),n(45)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("osm-logo"),e._v(" "),n("osm-menu"),e._v(" "),n("osm-info"),e._v(" "),n("osm-search"),e._v(" "),n("osm-mobile-menu")],1)}),[],!1,null,null,null);t.default=component.exports},504:function(e,t,n){"use strict";n(494)},505:function(e,t,n){"use strict";n.r(t);n(88);var r={data:function(){return{isMounted:!1,isAnimated:!1}},beforeDestroy:function(){this.isMounted=!1,this.isAnimated=!1},mounted:function(){var e=this,t=setInterval((function(){"complete"===document.readyState&&(clearInterval(t),setTimeout((function(){e.isMounted=!0}),0),setTimeout((function(){e.isAnimated=!0}),1e3))}),100)}},c=(n(504),n(45)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preloader",class:{isMounted:e.isMounted,isAnimated:e.isAnimated}},[n("span",{staticClass:"circle circle-1"}),e._v(" "),n("span",{staticClass:"circle circle-2"}),e._v(" "),n("span",{staticClass:"circle circle-3"}),e._v(" "),n("span",{staticClass:"circle circle-4"}),e._v(" "),n("span",{staticClass:"circle circle-5"}),e._v(" "),n("span",{staticClass:"circle circle-6"}),e._v(" "),n("span",{staticClass:"circle circle-7"}),e._v(" "),n("span",{staticClass:"circle circle-8"})])}),[],!1,null,"3aa8bcd7",null);t.default=component.exports},710:function(e,t,n){"use strict";n.r(t);n(39),n(32),n(35),n(53),n(31),n(54);var r=n(20),c=(n(11),n(40),n(41),n(88),n(87));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"IndexPage",components:{OsmHeader:function(){return Promise.resolve().then(n.bind(null,503))},OsmFirstSection:function(){return n.e(20).then(n.bind(null,729))},OsmSecondSection:function(){return n.e(23).then(n.bind(null,733))},OsmThirdSection:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,736))},OsmFourthSection:function(){return n.e(22).then(n.bind(null,732))},OsmFivethSection:function(){return n.e(21).then(n.bind(null,730))},OsmSixthSection:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,735))},OsmSeventhSection:function(){return n.e(24).then(n.bind(null,734))},OsmFooterSection:function(){return n.e(3).then(n.bind(null,731))},OsmPreloader:function(){return Promise.resolve().then(n.bind(null,505))}},data:function(){return{activeIndex:-1,sections:[],isInProgress:!1}},computed:l(l(l({},Object(c.c)(["getMain"])),Object(c.c)(["getMainMore"])),{},{activeSection:{get:function(){return this.activeIndex},set:function(e){this.activeIndex=e}}}),beforeDestroy:function(){document.removeEventListener("mousewheel",(function(){}))},mounted:function(){var e=this;if(window.innerWidth<=1024&&(this.activeIndex=-1),window.innerWidth>1024)var t=setInterval((function(){"complete"===document.readyState&&(clearInterval(t),setTimeout((function(){e.activeIndex=0,e.sections=document.querySelectorAll(".section"),e.activeIndex=0,document.addEventListener("mousewheel",(function(t){t.wheelDelta>0||t.detail<0?(e.change("up"),e.isInProgress=!0):(e.change("down"),e.isInProgress=!0)}))}),1e3))}),100)},methods:{change:function(e){var t=this;this.isInProgress||("down"===e&&this.activeIndex<this.sections.length-1&&this.activeIndex++,"up"===e&&this.activeIndex--,this.activeIndex<1&&(this.activeIndex=0),setTimeout((function(){t.isInProgress=!1}),500))}}},v=n(45),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("osm-header"),e._v(" "),n("div",{staticClass:"full-page-indicators",class:{white:5==+e.activeIndex}},e._l(e.sections,(function(t,r){return n("div",{key:t.index,staticClass:"indicator",class:{active:+e.activeIndex==+r},on:{click:function(t){e.activeIndex=r}}},[n("span")])})),0),e._v(" "),n("div",{staticClass:"sections",attrs:{"data-id":e.activeIndex}},[n("osm-first-section",{class:{isActive:0===e.activeIndex},style:e.activeIndex>=0?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);",attrs:{isMounted:0===e.activeIndex}}),e._v(" "),n("osm-second-section",{class:{isActive:1===e.activeIndex},style:e.activeIndex>=1?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);",attrs:{isMounted:1===e.activeIndex}}),e._v(" "),n("osm-third-section",{class:{isActive:2===e.activeIndex},style:e.activeIndex>=2?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-fourth-section",{class:{isActive:3===e.activeIndex},style:e.activeIndex>=3?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-fiveth-section",{class:{isActive:4===e.activeIndex},style:e.activeIndex>=4?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-sixth-section",{class:{isActive:5===e.activeIndex},style:e.activeIndex>=5?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-seventh-section",{class:{isActive:6===e.activeIndex},style:e.activeIndex>=6?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-footer-section",{class:{isActive:7===e.activeIndex},style:e.activeIndex>=7?"transform: translate(0px, 0px);":"transform: translate(100vw, 0px);"}),e._v(" "),n("osm-preloader")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OsmHeader:n(503).default,OsmPreloader:n(505).default})}}]);