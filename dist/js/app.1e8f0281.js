(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],m=0,f=[];m<o.length;m++)i=o[m],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"155c":function(t,e,a){},1677:function(t,e,a){},"1e02":function(t,e,a){"use strict";var n=a("4c77"),r=a.n(n);r.a},2926:function(t,e,a){"use strict";var n=a("d066"),r=a.n(n);r.a},3827:function(t,e,a){},"41dc":function(t,e,a){},"4c77":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("ce5b"),s=a.n(r),i=a("ecee"),o=a("f2d1"),c=a("ad3d"),l=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)}),u=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-container"},[a("v-toolbar",{attrs:{dark:"",color:"cyan"}},[a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")]),a("v-btn",{attrs:{flat:"",to:"/blog"}},[t._v("Blog")])],1),a("v-spacer"),a("v-menu",{attrs:{"nudge-width":100},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{flat:""}},n),[a("span",[t._v("Projects")]),a("v-icon",{attrs:{dark:""}},[t._v("arrow_drop_down")])],1)]}}])},[a("v-list",[a("v-btn",{attrs:{flat:"",to:"/bil3008"}},[t._v("Bil 3008")])],1)],1)],1)],1)},f=[],d={},v=d,p=(a("beec"),a("2877")),b=Object(p["a"])(v,m,f,!1,null,"1b9ca85a",null),h=b.exports,g={components:{Navbar:h}},_=g,y=(a("034f"),Object(p["a"])(_,l,u,!1,null,null,null)),x=y.exports,C=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blog-home"}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm4:""}},t._l(t.posts,function(e,n){return a("div",{key:e.slug+"_"+n,staticClass:"card-container"},[a("router-link",{attrs:{to:"/blog/"+e.slug}},[a("v-card",[a("v-img",{attrs:{src:e.featured_image,"aspect-ratio":"2"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline mb-4 card-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"summary"},[t._v(t._s(e.summary))])])])],1)],1)],1)}),0)],1),a("Footer")],1)},w=[],E=a("b396"),j=a.n(E),O=j()("0b2c465bf03b5289ad6782e60c593b7eb7cb6843"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container"},[a("footer",{staticClass:"footer mt-auto py-3"},[a("div",{staticClass:"content"},[a("div",{staticClass:"social-container"},[a("a",{staticClass:"social",attrs:{target:"_blank",href:"http://twitter.com/DogukanKse4"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),a("a",{staticClass:"social",attrs:{target:"_blank",href:"http://github.com/dogukankse"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("a",{staticClass:"social",attrs:{target:"_blank",href:"http://linkedin.com/in/dogukankse/"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),t._m(0)])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buttercms-container"},[a("span",[t._v("Powered by")]),a("a",{attrs:{target:"_blank",href:"http://buttercms.com/"}},[a("img",{staticClass:"buttercms",attrs:{src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"}})])])}],N=(a("977a"),{}),P=Object(p["a"])(N,I,$,!1,null,"8c2223e4",null),F=P.exports,S={name:"blog-home",components:{Footer:F},data:function(){return{page_title:"Blog",posts:[]}},methods:{getPosts:function(){var t=this;O.post.list({page:1,page_size:10}).then(function(e){t.posts=e.data.data})}},created:function(){this.getPosts()}},H=S,U=(a("a11e"),Object(p["a"])(H,k,w,!1,null,"11a6d860",null)),R=U.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blog-post"}},[a("div",{staticClass:"post-title"},[t._v(t._s(t.post.data.title))]),a("v-subheader",{staticClass:"writer"},[t._v("\n    "+t._s(t.post.data.author.first_name)+"\n    "+t._s(t.post.data.author.last_name)+"\n  ")]),a("v-divider"),a("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.post.data.body)}}),t.post.meta.previous_post?a("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.previous_post.slug}},[t._v(t._s(t.post.meta.previous_post.title))]):t._e(),t.post.meta.next_post?a("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.next_post.slug}},[t._v(t._s(t.post.meta.next_post.title))]):t._e()],1)},D=[],K={name:"blog-post",data:function(){return{post:{}}},methods:{getPost:function(){var t=this;O.post.retrieve(this.$route.params.slug).then(function(e){t.post=e.data}).catch(function(t){console.log(t)})}},created:function(){this.getPost()}},A=K,B=(a("1e02"),Object(p["a"])(A,M,D,!1,null,"6d3dc0e6",null)),J=B.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homepage-container"},[a("h3",[t._v("Homepage")]),a("Footer")],1)},T=[],q={components:{Footer:F}},z=q,G=Object(p["a"])(z,L,T,!1,null,"6c1cfc68",null),V=G.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-flex",[a("v-cardflat",[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(t){return a("v-flex",{key:t.id,attrs:{xs12:"",md6:"",lg3:""}},[a("ItemCard",{attrs:{item:t}})],1)}),1)],1)],1)],1)],1)],1),a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"cyan",to:"/bil3008/new"}},[a("v-icon",[t._v("add")])],1)],1)],1)],1)],1)},Y=[],W=(a("ac6a"),a("8aa5")),X=a.n(W),Z=(a("e71f"),{apiKey:"AIzaSyC8gHJNy_tK202bFeIiIDGpGYk2u1VvDbI",authDomain:"personalblog-dkse.firebaseapp.com",databaseURL:"https://personalblog-dkse.firebaseio.com",projectId:"personalblog-dkse",storageBucket:"personalblog-dkse.appspot.com",messagingSenderId:"1045485064089"}),tt=X.a.initializeApp(Z),et=tt.firestore(),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return a("v-card",{attrs:{color:"grey lighten-4",to:{name:"view-item",params:{item_id:t.item.id}}}},[a("v-img",{attrs:{"aspect-ratio":16/9,src:t.item.imgUrl}},[a("v-expand-transition",[n?a("div",{staticClass:"d-flex transition-fast-in-fast-out cyan darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v(t._s(t.item.itemCost)+" ₺")]):t._e()])],1),a("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[a("v-btn",{staticClass:"white--text",attrs:{to:{name:"edit-item",params:{item_id:t.item.id}},absolute:"",color:"cyan",fab:"",normal:"",right:"",top:""}},[a("v-icon",[t._v("edit")])],1),a("div",{staticClass:"font-weight-light black--text title mb-2"},[t._v(t._s(t.item.itemName))])],1)],1)}}])})},nt=[],rt={name:"item-card",props:["item"]},st=rt,it=(a("2926"),Object(p["a"])(st,at,nt,!1,null,"d03f0dac",null)),ot=it.exports,ct={name:"dashboard",components:{ItemCard:ot},data:function(){return{items:[]}},created:function(){var t=this;et.collection("items").get().then(function(e){e.forEach(function(e){var a={id:e.id,imgUrl:e.data().imgUrl,itemCost:e.data().itemCost,itemName:e.data().itemName};t.items.push(a)})})}},lt=ct,ut=(a("c979"),Object(p["a"])(lt,Q,Y,!1,null,"2706c5a2",null)),mt=ut.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[a("v-card",{ref:"form",staticClass:"input-card"},[a("InputImage"),a("v-card-text",[a("v-text-field",{ref:"itemName",attrs:{rules:t.nameRules,counter:t.nameCounter,label:"Item Name",required:""},model:{value:t.itemName,callback:function(e){t.itemName=e},expression:"itemName"}}),a("v-text-field",{ref:"itemCost",attrs:{rules:t.costRules,label:"Item Cost",required:""},model:{value:t.itemCost,callback:function(e){t.itemCost=e},expression:"itemCost"}})],1),a("v-divider",{staticClass:"mt-1"}),a("v-card-actions",[a("v-btn",{attrs:{flat:""}},[t._v("Cancel")]),a("v-spacer"),a("v-slide-x-reverse-transition",[t.formHasErrors?a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"my-0",attrs:{icon:""},on:{click:t.resetForm}},n),[a("v-icon",[t._v("refresh")])],1)]}}],null,!1,510568536)},[a("span",[t._v("Refresh form")])]):t._e()],1),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)],1)],1)},dt=[],vt=a("a4bb"),pt=a.n(vt),bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-flex",{staticClass:"text-xs-center text-sm-center text-md-center text-lg-center",attrs:{xs12:""}},[t.imageUrl?a("img",{attrs:{src:t.imageUrl,height:"150"}}):t._e(),a("br"),a("v-btn",{staticClass:"white--text",attrs:{color:"blue-grey"},on:{click:t.pickFile}},[a("v-icon",{attrs:{dark:""}},[t._v("attach_file")]),t._v("Select Image\n        ")],1),a("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1)],1)],1)},ht=[],gt=(a("7f7f"),{data:function(){return{title:"Image Upload",dialog:!1,imageName:"",imageUrl:"",imageFile:""}},methods:{pickFile:function(){this.$refs.image.click()},onFilePicked:function(t){var e=this,a=t.target.files;if(void 0!==a[0]){if(this.imageName=a[0].name,this.imageName.lastIndexOf(".")<=0)return;var n=new FileReader;n.readAsDataURL(a[0]),n.addEventListener("load",function(){e.imageUrl=n.result,e.imageFile=a[0]})}else this.imageName="",this.imageFile="",this.imageUrl=""}}}),_t=gt,yt=Object(p["a"])(_t,bt,ht,!1,null,null,null),xt=yt.exports,Ct={name:"new-item",components:{InputImage:xt},computed:{form:function(){return{itemCost:this.itemCost,itemName:this.itemName}}},methods:{resetForm:function(){var t=this;this.errorMessages=[],this.formHasErrors=!1,pt()(this.form).forEach(function(e){t.$refs[e].reset()})}},data:function(){var t=this;return{nameCounter:20,formHasErrors:!1,nameRules:[function(e){return null==e?(t.formHasErrors=!0,"Name is required"):(t.formHasErrors=!1,!1)},function(e){return e.length>=t.nameCounter?(t.formHasErrors=!0,"Name must be less than ".concat(t.nameCounter," characters")):(t.formHasErrors=!1,!1)}],costRules:[function(t){return/^-?\d*[.,]?\d{0,2}$/.test(t)||"Cost must be valid"}]}}},kt=Ct,wt=(a("b303"),Object(p["a"])(kt,ft,dt,!1,null,"f2193f78",null)),Et=wt.exports,jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Edit Item")])])}],It={name:"edit-item",data:function(){return{}}},$t=It,Nt=Object(p["a"])($t,jt,Ot,!1,null,null,null),Pt=Nt.exports,Ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("View Item")])])}],Ht={name:"view-item",data:function(){return{}}},Ut=Ht,Rt=Object(p["a"])(Ut,Ft,St,!1,null,null,null),Mt=Rt.exports;n["default"].use(C["a"]);var Dt=new C["a"]({mode:"history",routes:[{path:"/",name:"homepage",component:V},{path:"/blog",name:"blog-home",component:R},{path:"/blog/:slug",name:"blog-post",component:J},{path:"/bil3008",name:"dashboard",component:mt},{path:"/bil3008/new",name:"new-item",component:Et},{path:"/bil3008/edit/:item_id",name:"edit-item",component:Pt},{path:"/bil3008/:item_id",name:"view-item",component:Mt},{path:"*",redirect:"/"}]});n["default"].component("font-awesome-icon",c["a"]),i["c"].add(o["a"],o["b"],o["c"]),n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({router:Dt,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,a){},"977a":function(t,e,a){"use strict";var n=a("155c"),r=a.n(n);r.a},"9c18":function(t,e,a){},a11e:function(t,e,a){"use strict";var n=a("3827"),r=a.n(n);r.a},b303:function(t,e,a){"use strict";var n=a("1677"),r=a.n(n);r.a},beec:function(t,e,a){"use strict";var n=a("41dc"),r=a.n(n);r.a},c979:function(t,e,a){"use strict";var n=a("9c18"),r=a.n(n);r.a},d066:function(t,e,a){}});
//# sourceMappingURL=app.1e8f0281.js.map