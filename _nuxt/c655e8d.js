(window.webpackJsonp=window.webpackJsonp||[]).push([[83,52],{491:function(t,e,n){},497:function(t,e,n){"use strict";n(491)},498:function(t,e,n){"use strict";n.r(e);n(497);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"osm__h1"},[t._t("default")],2)}),[],!1,null,"108fbcfe",null);e.default=component.exports},500:function(t,e,n){t.exports=n.p+"img/product.noimage.190cf73.png"},525:function(t,e,n){},526:function(t,e,n){},542:function(t,e,n){"use strict";n(525)},543:function(t,e,n){"use strict";n(526)},686:function(t,e,n){"use strict";n.r(e);var r=n(20),_=(n(11),n(40),n(41),n(39),n(32),n(35),n(53),n(31),n(54),n(515)),l=n(87);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"OsmSeventhSection",props:{inner:{type:Boolean,default:!1}},components:{OsmH1:function(){return Promise.resolve().then(n.bind(null,498))},OsmButton:function(){return Promise.resolve().then(n.bind(null,489))}},data:function(){return{slider:new _.a(".news__slider",{perView:2,gap:20,type:"carousel",breakpoints:{840:{perView:1}}})}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["getNews"])),mounted:function(){this.slider.mount()}},d=c,w=(n(542),n(543),n(45)),component=Object(w.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"news__wrap",class:{innerPage:t.inner}},[r("div",{staticClass:"news__top"},[r("osm-h1",{staticClass:"news__title"},[t._v("Новости")]),t._v(" "),r("osm-button",{staticClass:"news__button_top",attrs:{link:"news",outlined:!0}},[t._v("Все новости")])],1),t._v(" "),r("div",{staticClass:"news__bottom hide_on_tablet"},t._l(t.getNews.slice(0,4),(function(e,_){return r("nuxt-link",{key:_,class:{news__item_big:0===_,news__item:0!=_},attrs:{to:{name:"news-newsId",params:{newsId:e.CODE}}}},[0===_?[r("div",{staticClass:"news__image"},[e.PREVIEW_PICTURE?r("img",{attrs:{src:t.$vareibles.remote+e.PREVIEW_PICTURE,width:"100%",alt:""}}):r("img",{attrs:{src:n(500),alt:""}})]),t._v(" "),r("div",{staticClass:"news__item_top"},[r("div",{staticClass:"news__date"},[t._v(t._s(e.DATE))])]),t._v(" "),r("div",{staticClass:"news__item_bottom"},[r("div",{staticClass:"news__text"},[t._v("\n                        "+t._s(e.NAME)+"\n                    ")]),t._v(" "),r("span",{staticClass:"button"},[t._v("Читать новость")])])]:[r("div",{staticClass:"news__item_left"},[r("div",{staticClass:"news__image"},[e.PREVIEW_PICTURE?r("img",{attrs:{src:t.$vareibles.remote+e.PREVIEW_PICTURE,width:"100%",alt:""}}):r("img",{attrs:{src:n(500),alt:""}})])]),t._v(" "),r("div",{staticClass:"news__item_right"},[r("div",{staticClass:"news__item_top"},[e.PROPERIES[0]?r("div",{staticClass:"news__date"},[t._v(t._s(e.PROPERIES[0].VALUE))]):t._e(),t._v(" "),r("div",{staticClass:"news__text"},[t._v("\n                            "+t._s(e.NAME)+"\n                        ")])]),t._v(" "),r("span",{staticClass:"news__link",attrs:{to:{name:"news-newsId",params:{newsId:e.CODE}}}},[t._v("Читать новость")])])]],2)})),1),t._v(" "),r("div",{staticClass:"glide news__slider hide_on_desktop"},[r("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[r("div",{staticClass:"glide__slides news__slides"},t._l(t.getNews,(function(e,_){return r("div",{key:_,staticClass:"news__item_big"},[r("div",{staticClass:"news__image"},[e.PREVIEW_PICTURE?r("img",{attrs:{src:t.$vareibles.remote+e.PREVIEW_PICTURE,width:"100%",alt:""}}):r("img",{attrs:{src:n(500),alt:""}})]),t._v(" "),r("div",{staticClass:"news__item_top"},[r("div",{staticClass:"news__date"},[t._v(t._s(e.DATE))])]),t._v(" "),r("div",{staticClass:"news__item_bottom"},[r("div",{staticClass:"news__text"},[t._v("\n                            "+t._s(e.NAME)+"\n                        ")]),t._v(" "),r("osm-button",{staticClass:"hide_on_mobile",attrs:{link:e.link}},[t._v("Подробнее")]),t._v(" "),r("div",{staticClass:"mobile_link hide_off_mobile"},[r("nuxt-link",{staticClass:"more",attrs:{to:{name:"news-newsId",params:{newsId:e.CODE}}}},[t._v("Читать новость")])],1)],1)])})),0)]),t._v(" "),r("div",{staticClass:"news__slider-buttons"},[r("div",{staticClass:"news__bullets hide_on_mobile",attrs:{"data-glide-el":"controls[nav]"}},t._l(t.getNews.slice(0,4),(function(e,n){return r("button",{key:n,staticClass:"news__bullet",attrs:{"data-glide-dir":"="+n}},[t._v(t._s(n+1))])})),0),t._v(" "),r("nuxt-link",{staticClass:"more hide_off_mobile",attrs:{to:{name:"news"}}},[t._v("Смотреть все")]),t._v(" "),r("div",{staticClass:"news__arrows",attrs:{"data-glide-el":"controls"}},[r("button",{staticClass:"news__arrow news__arrow--left",attrs:{"data-glide-dir":"<"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 40 40",fill:"none"}},[r("rect",{attrs:{width:"40",height:"40",fill:"#FF004D"}}),t._v(" "),r("path",{attrs:{d:"M24 12L17 20L24 28",stroke:"white","stroke-width":"2"}})])]),t._v(" "),r("button",{staticClass:"news__arrow news__arrow--right",attrs:{"data-glide-dir":">"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 40 40",fill:"none"}},[r("rect",{attrs:{width:"40",height:"40",fill:"#FF004D"}}),t._v(" "),r("path",{attrs:{d:"M24 12L17 20L24 28",stroke:"white","stroke-width":"2"}})])])])],1)])])}),[],!1,null,"ef8f5944",null);e.default=component.exports;installComponents(component,{OsmH1:n(498).default,OsmButton:n(489).default})}}]);