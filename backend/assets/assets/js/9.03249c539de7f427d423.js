webpackJsonp([9],{103:function(t,e,n){"use strict";var s={i18n:{messages:{en:{"button.first":"Remove","span.first":"Total","button.second":"Checkout"},de:{"button.first":"Entfernen","span.first":"Summe","button.second":"Kaufen"}}},computed:{basket:{get:function(){return this.$store.state.Basket.basket}},totalPrice:{get:function(){var t=0;return this.basket.products.forEach(function(e){t+=e.price}),Math.round(100*t)/100}}},methods:{checkout:function(){this.$store.dispatch("checkout",this.basket).then(function(){}).catch(function(){})},removeProduct:function(t){this.$store.commit("REMOVE_PRODUCT_FROM_BASKET",t)}}};e.a=s},198:function(t,e,n){var s=n(5)(n(199),n(200),null,null);t.exports=s.exports},199:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(103);e.default={mixins:[s.a]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.basket.products,function(e,s){return n("mt-cell",{key:e.id,attrs:{title:e.title}},[n("mt-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){t.removeProduct(s)}}},[t._v(t._s(t.$t("button.first")))])],1)}),t._v(" "),n("mt-cell",{attrs:{title:t.$t("span.first")}},[t._v("$"+t._s(t.totalPrice))]),t._v(" "),n("mt-cell",[n("mt-button",{attrs:{disabled:0===t.basket.products.length,size:"small",type:"primary",plain:""},on:{click:t.checkout}},[t._v(t._s(t.$t("button.second")))])],1)],2)},staticRenderFns:[]}}});