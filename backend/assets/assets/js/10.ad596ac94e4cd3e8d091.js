webpackJsonp([10],{103:function(t,s,e){"use strict";var n={i18n:{messages:{en:{"button.first":"Remove","span.first":"Total","button.second":"Checkout"},de:{"button.first":"Entfernen","span.first":"Summe","button.second":"Kaufen"}}},computed:{basket:{get:function(){return this.$store.state.Basket.basket}},totalPrice:{get:function(){var t=0;return this.basket.products.forEach(function(s){t+=s.price}),Math.round(100*t)/100}}},methods:{checkout:function(){this.$store.dispatch("checkout",this.basket).then(function(){}).catch(function(){})},removeProduct:function(t){this.$store.commit("REMOVE_PRODUCT_FROM_BASKET",t)}}};s.a=n},153:function(t,s,e){var n=e(5)(e(154),e(155),null,null);t.exports=n.exports},154:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(103);s.default={mixins:[n.a]}},155:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-block"},[t._l(t.basket.products,function(s,n){return e("div",[e("p",[e("b",[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"float-right"},[e("small",{staticClass:"text-muted"},[t._v("$"+t._s(s.price))])])]),t._v(" "),e("p",[t._v(t._s(s.description))]),t._v(" "),e("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(s){t.removeProduct(n)}}},[t._v(t._s(t.$t("button.first"))+"\n            ")]),t._v(" "),e("hr")],1)}),t._v(" "),e("p",[e("span",{staticClass:"float-left"},[t._v(t._s(t.$t("span.first")))]),t._v(" "),e("span",{staticClass:"float-right"},[e("b",[t._v("$"+t._s(t.totalPrice))])])])],2)])])]),t._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col-6"},[e("b-button",{attrs:{disabled:0===t.basket.products.length,size:"sm",variant:"outline-success float-right"},on:{click:t.checkout}},[t._v(t._s(t.$t("button.second"))+"\n      ")])],1)])])},staticRenderFns:[]}}});