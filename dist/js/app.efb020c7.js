(function(t){function n(n){for(var r,c,i=n[0],u=n[1],s=n[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(n);while(p.length)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var u=e[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},a={app:0},o=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var d=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0cec":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"PUSH_NOTIFICATION",(function(){return Ct})),e.d(r,"hapus_notif",(function(){return ht}));var a={};e.r(a),e.d(a,"addNotification",(function(){return Ot})),e.d(a,"removeNotification",(function(){return gt}));var o={};e.r(o),e.d(o,"SET_PRODUCTS",(function(){return jt})),e.d(o,"SET_PRODUCT",(function(){return Pt}));var c={};e.r(c),e.d(c,"getProducts",(function(){return At})),e.d(c,"getProduct",(function(){return kt}));var i={};e.r(i),e.d(i,"cartItemCount",(function(){return $t})),e.d(i,"cartTotalPrice",(function(){return Mt}));var u={};e.r(u),e.d(u,"ADD_TO_CART",(function(){return Dt})),e.d(u,"SET_CART",(function(){return Ut})),e.d(u,"REMOVE_PRODUCT_FROM_CART",(function(){return Ft})),e.d(u,"CLEAR_CART_ITEMS",(function(){return Lt}));var s={};e.r(s),e.d(s,"addProductToCart",(function(){return Jt})),e.d(s,"getCartItems",(function(){return Kt})),e.d(s,"removeProductFromCart",(function(){return zt})),e.d(s,"clearCartItems",(function(){return Bt}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var d=e("2b0e"),l=e("8c4f"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("app-header"),e("div",{staticClass:"container"},[e("router-view")],1),e("notifications-list")],1)},f=[],m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"nav navbar-nav"},[e("router-link",{staticClass:"nav-tem nav-link active",attrs:{to:"/"}},[t._v("Home")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"#"}},[t._v("Product")])],1),e("div",[e("div",{staticClass:"dropdown open"},[e("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.cartItemCount)+" Cart")]),e("div",{on:{click:function(t){return t.stopPropagation()}}},[e("mini-cart")],1)])])])])])},v=[],b=e("5530"),_=e("2f62"),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropdown-menu p-2",staticStyle:{"min-width":"320px",right:"0",left:"auto"},attrs:{"aria-labelledby":"triggerId"}},[t._l(t.cart,(function(n){return e("div",{key:n.product.id},[e("div",{staticClass:"px-2 d-flex justify-content-between"},[e("div",[e("strong",[t._v(t._s(n.product.title))]),e("br"),t._v(" "+t._s(n.quantity)+" x $"+t._s(n.product.price)+" ")]),e("div",[e("a",{staticClass:"badge badge-secondary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeProductFromCart(n.product)}}},[t._v("remove")])])]),e("hr")])})),e("div",{staticClass:"d-flex justify-content-between"},[e("span",[t._v("Total: $"+t._s(t.cartTotalPrice))]),e("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.clearCartItems()}}},[t._v("Clear Cart")])])],2)},h=[],O={computed:Object(b["a"])(Object(b["a"])({},Object(_["d"])("cart",["cart"])),Object(_["c"])("cart",["cartTotalPrice"])),mounted:function(){this.getCartItems()},methods:Object(b["a"])({},Object(_["b"])("cart",["removeProductFromCart","clearCartItems","getCartItems"]))},g=O,y=e("2877"),T=Object(y["a"])(g,C,h,!1,null,null,null),j=T.exports,P={components:{MiniCart:j},computed:Object(b["a"])({},Object(_["c"])("cart",["cartItemCount"]))},w=P,x=Object(y["a"])(w,m,v,!1,null,null,null),E=x.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"notifications-list"},t._l(t.notifications,(function(t){return e("notification-message",{key:t.id,attrs:{notification:t}})})),1)},R=[],S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"alert alert-dismissible fade show",class:t.typeClass,attrs:{role:"alert"}},[t._m(0),t._v(" "+t._s(t.notification.message)+" ")])},A=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],k={props:["notification"],data:function(){return{timeout:null}},computed:{typeClass:function(){return"alert-".concat(this.notification.type)}},created:function(){var t=this;this.timeout=setTimeout((function(){t.removeNotification(t.notification)}),3e3)},beforeDestroy:function(){clearTimeout(this.timeout)},methods:Object(_["b"])(["removeNotification"])},q=k,N=Object(y["a"])(q,S,A,!1,null,null,null),$=N.exports,M={components:{NotificationMessage:$},computed:Object(_["d"])(["notifications"])},D=M,U=(e("7c12"),Object(y["a"])(D,I,R,!1,null,null,null)),F=U.exports,L={name:"app",components:{AppHeader:E,NotificationsList:F}},H=L,V=Object(y["a"])(H,p,f,!1,null,null,null),J=V.exports,K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("product-list")],1)},z=[],B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-flex align-items-stretch flex-wrap"},t._l(t.products,(function(t){return e("product-card",{key:t.id,attrs:{product:t}})})),1)},G=[],Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-3 mt-3"},[e("div",{staticClass:"card h-100 text-left"},[e("img",{staticClass:"w-100",attrs:{src:t.product.image,alt:""}}),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[e("router-link",{attrs:{to:{name:"product",params:{id:t.product.id}}}},[t._v(t._s(t.product.title))])],1),e("strong",[t._v("$"+t._s(t.product.price))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.product.description))])]),e("div",{staticClass:"px-4 pb-3"},[e("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.addToCart()}}},[t._v("Add to Cart")])])])])},W=[],X={props:["product"],methods:Object(b["a"])(Object(b["a"])({},Object(_["b"])("cart",["addProductToCart"])),{},{addToCart:function(){this.addProductToCart({product:this.product,quantity:1})}})},Y=X,Z=Object(y["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports,nt={components:{ProductCard:tt},computed:Object(b["a"])({},Object(_["d"])("product",["products"])),mounted:function(){this.getProducts()},methods:Object(b["a"])({},Object(_["b"])("product",["getProducts"]))},et=nt,rt=Object(y["a"])(et,B,G,!1,null,null,null),at=rt.exports,ot={components:{ProductList:at}},ct=ot,it=Object(y["a"])(ct,K,z,!1,null,null,null),ut=it.exports,st=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.product?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-4"},[e("img",{staticClass:"w-100",attrs:{src:t.product.image}})]),e("div",{staticClass:"col-8"},[e("h1",[t._v(t._s(t.product.title))]),e("h3",[t._v("$"+t._s(t.product.price))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"text-center col-1 mr-2 p-1",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.addToCart()}}},[t._v("Masukan Ke keranjang")]),e("p",{staticClass:"mt-4"},[t._v(t._s(t.product.description))])])]):t._e()},dt=[],lt={props:["id"],data:function(){return{quantity:1}},computed:Object(b["a"])({},Object(_["d"])("product",["product"])),mounted:function(){this.getProduct(this.id)},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(_["b"])("product",["getProduct"])),Object(_["b"])("cart",["addProductToCart"])),{},{addToCart:function(){this.addProductToCart({product:this.product,quantity:this.quantity})}})},pt=lt,ft=Object(y["a"])(pt,st,dt,!1,null,null,null),mt=ft.exports,vt=[{path:"/",component:ut,name:"home"},{path:"/product/:id",component:mt,name:"product",props:!0}],bt={notifications:[]},_t=e("94d5"),Ct=(e("d3b7"),e("25f0"),e("4de4"),function(t,n){t.notifications.push(Object(b["a"])(Object(b["a"])({},n),{},{id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)}))}),ht=function(t,n){t.notifications=t.notifications.filter((function(t){return t.id!=n.id}))},Ot=function(t,n){var e=t.commit;e("PUSH_NOTIFICATION",n)},gt=function(t,n){var e=t.commit;e("REMOVE_NOTIFICATION",n)},yt={products:[],product:null},Tt=e("d003"),jt=function(t,n){t.products=n},Pt=function(t,n){t.product=n},wt=e("bc3a"),xt=e.n(wt),Et=xt.a.create({baseURL:"http://127.0.0.1:8000/api"}),It=Et,Rt="products",St={all:function(){return It.get(Rt)},show:function(t){return It.get("".concat(Rt,"/").concat(t))}},At=function(t){var n=t.commit;St.all().then((function(t){n("SET_PRODUCTS",t.data)}))},kt=function(t,n){var e=t.commit;St.show(n).then((function(t){e("SET_PRODUCT",t.data)}))},qt={namespaced:!0,state:yt,getters:Tt,mutations:o,actions:c},Nt={cart:[]},$t=(e("159b"),function(t){return t.cart.length}),Mt=function(t){var n=0;return t.cart.forEach((function(t){n+=t.product.price*t.quantity})),n},Dt=(e("7db0"),function(t,n){var e=n.product,r=n.quantity,a=t.cart.find((function(t){return t.product.id===e.id}));a?a.quantity+=r:t.cart.push({product:e,quantity:r})}),Ut=function(t,n){t.cart=n},Ft=function(t,n){t.cart=t.cart.filter((function(t){return t.product.id!==n.id}))},Lt=function(t){t.cart=[]},Ht="cart",Vt={all:function(){return It.get(Ht)},store:function(t){return It.post(Ht,t)},delete:function(t){return It.delete("".concat(Ht,"/").concat(t))},deleteAll:function(){return It.delete(Ht)}},Jt=function(t,n){var e=t.commit,r=t.dispatch,a=n.product,o=n.quantity;e("ADD_TO_CART",{product:a,quantity:o}),r("addNotification",{type:"success",message:"Product added to cart."},{root:!0}),Vt.store({product_id:a.id,quantity:o})},Kt=function(t){var n=t.commit;Vt.all().then((function(t){n("SET_CART",t.data)}))},zt=function(t,n){var e=t.commit,r=t.dispatch;e("REMOVE_PRODUCT_FROM_CART",n),r("addNotification",{type:"success",message:"Product removed from cart."},{root:!0}),Vt.delete(n.id)},Bt=function(t){var n=t.commit,e=t.dispatch;n("CLEAR_CART_ITEMS"),e("addNotification",{type:"success",message:"All products removed from cart."},{root:!0}),Vt.deleteAll()},Gt={namespaced:!0,state:Nt,getters:i,mutations:u,actions:s};d["a"].use(_["a"]);var Qt=new _["a"].Store({state:bt,getters:_t,mutations:r,actions:a,modules:{product:qt,cart:Gt}});e("4989"),e("ab8b");d["a"].use(l["a"]);var Wt=new l["a"]({routes:vt,mode:"history"});d["a"].config.productionTip=!1,new d["a"]({router:Wt,store:Qt,render:function(t){return t(J)}}).$mount("#app")},"7c12":function(t,n,e){"use strict";e("0cec")},"94d5":function(t,n){},d003:function(t,n){}});
//# sourceMappingURL=app.efb020c7.js.map