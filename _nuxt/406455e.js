(window.webpackJsonp=window.webpackJsonp||[]).push([[45,48],{487:function(t,e,n){},489:function(t,e,n){"use strict";n.r(e);var l={name:"OsmButton",props:{link:{type:String,default:null},type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},large:{type:Boolean,default:!1}}},_=(n(490),n(45)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.link?n("nuxt-link",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{to:{name:t.link}}},[t._t("default")],2):n("button",{staticClass:"button",class:{isOutlined:t.outlined,isLarge:t.large},attrs:{type:t.type}},[t._t("default")],2)],1)}),[],!1,null,"6b0da085",null);e.default=component.exports},490:function(t,e,n){"use strict";n(487)},534:function(t,e,n){t.exports=n.p+"img/news1.6be4fcd.jpg"},587:function(t,e,n){},653:function(t,e,n){"use strict";n(587)},725:function(t,e,n){"use strict";n.r(e);var l={name:"OsmNewsContent",data:function(){return{news:[{image:n(534),text:"Команда «Винета» - трижды обладатель «Кубка Чемпионов» в турнире по настольному теннису!",date:"2 апреля 2021",link:"index"},{image:n(534),text:"25 лет верным курсом!",date:"2 апреля 2021",link:"index"},{image:n(534),text:"Поздравляем с наступающим Новым 2022 Годом и Рождеством!",date:"2 апреля 2021",link:"index"},{image:n(534),text:"Команда «Винета» - трижды обладатель «Кубка Чемпионов» в турнире по настольному теннису!",date:"2 апреля 2021",link:"index"}]}}},_=(n(653),n(45)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news__content_in"},t._l(t.news,(function(e,l){return n("nuxt-link",{key:l,class:{news__item_big:0===l,news__item:0!=l},attrs:{to:{name:"news-newsId",params:{newsId:"test"}}}},[0===l?[n("div",{staticClass:"news__image"},[n("img",{attrs:{src:e.image,width:"100%",alt:""}})]),t._v(" "),n("div",{staticClass:"news__item_top"},[n("div",{staticClass:"news__date"},[t._v(t._s(e.date))])]),t._v(" "),n("div",{staticClass:"news__item_bottom"},[n("div",{staticClass:"news__text"},[t._v("\n                    "+t._s(e.text)+"\n                ")]),t._v(" "),n("osm-button",{attrs:{link:e.link}},[t._v("Подробнее")])],1)]:[n("div",{staticClass:"news__item_left"},[n("div",{staticClass:"news__image"},[n("img",{attrs:{src:e.image,width:"100%",alt:""}})])]),t._v(" "),n("div",{staticClass:"news__item_right"},[n("div",{staticClass:"news__item_top"},[n("div",{staticClass:"news__date"},[t._v(t._s(e.date))]),t._v(" "),n("div",{staticClass:"news__text"},[t._v("\n                        "+t._s(e.text)+"\n                    ")])]),t._v(" "),n("a",{staticClass:"news__link",attrs:{href:e.link}},[t._v("Читать новость")])])]],2)})),1)}),[],!1,null,"eff4f278",null);e.default=component.exports;installComponents(component,{OsmButton:n(489).default})}}]);