(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{442:function(t,e,n){},447:function(t,e,n){"use strict";n(106),n(36),n(78),n(35),n(51);var r=n(53),o=(n(18),n(457)),c=n.n(o),l=n(465),f=n.n(l),d=n(105),v=n(449);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=n.n(v).a.createClient();e.a={getArticles:function(t){var e={content_type:"post",select:"fields.id,fields.createDate,fields.title,fields.slug,fields.categoryList",order:"-fields.createDate"};return t&&!isNaN(t)&&(e.limit=t),_.getEntries(e).then((function(t){return c()(t.items,(function(t){return t.fields}))})).catch((function(){return Promise.resolve([])}))},getArticlesWithTag:function(t){return _.getEntries({content_type:"post",select:"fields.id,fields.createDate,fields.title,fields.slug,fields.categoryList",order:"-fields.createDate","fields.categoryList":t}).then((function(t){return c()(t.items,(function(t){return t.fields}))})).catch((function(){return Promise.resolve([])}))},getArticleById:function(t){return _.getEntries({content_type:"post","fields.id":t,limit:1}).then((function(t){var data=f()(t.items);return data?data.fields:{message:"Page Not found!"}})).catch((function(){return Promise.resolve({message:"Page Not found!"})}))},getArticlesGroupByYearMonth:function(){return _.getEntries({content_type:"post",select:"fields.id,fields.createDate,fields.title",order:"-fields.createDate"}).then((function(t){return t.items.reduce((function(t,e){var n=new Date(e.fields.createDate),r="".concat(n.getFullYear()," ").concat(d.a.months[n.getMonth()]);return r in t?t[r].push(e.fields):t[r]=[e.fields],t}),{})}))},getPrevAndNextArticleById:function(t,e){var n={content_type:"post",select:"fields.id,fields.createDate,fields.title",limit:1,"fields.id[ne]":t},r=_.getEntries(m({},n,{"fields.createDate[lt]":e,order:"-fields.createDate"})).then((function(t){return f()(c()(t.items,(function(t){return t.fields})))})).catch((function(){return Promise.resolve(null)})),o=_.getEntries(m({},n,{"fields.createDate[gt]":e,order:"fields.createDate"})).then((function(t){return f()(c()(t.items,(function(t){return t.fields})))})).catch((function(){return Promise.resolve(null)}));return Promise.all([r,o])}}},449:function(t,e,n){var r=n(468),o={space:"64scck6nxm6l",accessToken:"75ad40227068c498d0ad5570637d51e8a6522275ca92a6c6ece2bd017374ac68"};t.exports={createClient:function(){return r.createClient(o)}}},454:function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},455:function(t,e,n){"use strict";var r=n(442);n.n(r).a},456:function(t,e,n){"use strict";var r={name:"ArticleOutline",props:{post:{type:Object,required:!0},markedTag:{type:String,default:""},isShowMore:{type:Boolean,default:!0}}},o=(n(455),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[t.post&&t.post.categoryList?n("div",{staticClass:"tags"},[t.post.createDate?n("span",{staticClass:"small text-secondary article__date"},[n("font-awesome-icon",{attrs:{icon:["fas","calendar-alt"]}}),t._v("\n      "+t._s(t._f("parseDatetime")(t.post.createDate))+"\n    ")],1):t._e(),t._v(" "),t._l(t.post.categoryList,(function(e){return n("nuxt-link",{key:e,class:["small","tag-link",t.markedTag&&e===t.markedTag&&"marked"],attrs:{to:"/tag/"+e,title:e}},[n("font-awesome-icon",{attrs:{icon:["fas","tag"]}}),t._v("\n      "+t._s(e)+"\n    ")],1)}))],2):t._e(),t._v(" "),n("h1",[n("nuxt-link",{attrs:{to:"/article/"+t.post.id,title:t.post.title}},[t._v("\n      "+t._s(t.post.title)+"\n    ")])],1),t._v(" "),n("hr",{staticClass:"article__divider my-4 mx-0"}),t._v(" "),t.post.slug?n("p",{staticClass:"article__slug text-black-50 ml-4"},[t._v("\n    "+t._s(t.post.slug)+"\n  ")]):t._e(),t._v(" "),t.isShowMore?n("div",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"more",attrs:{to:"/article/"+t.post.id,title:t.post.title}},[t._v("\n      more\n    ")])],1):t._e()])}),[],!1,null,"3c54882c",null);e.a=component.exports},467:function(t,e){},485:function(t,e,n){"use strict";var strong=n(486),r=n(454);t.exports=n(487)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},486:function(t,e,n){"use strict";var r=n(10).f,o=n(108),c=n(165),l=n(27),f=n(163),d=n(164),v=n(110),h=n(167),m=n(111),_=n(8),y=n(162).fastKey,w=n(454),k=_?"_s":"size",x=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[k]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[k]=0},delete:function(t){var n=w(this,e),r=x(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[k]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!x(w(this,e),t)}}),_&&r(h.prototype,"size",{get:function(){return w(this,e)[k]}}),h},def:function(t,e,n){var r,o,c=x(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[k]++,"F"!==o&&(t._i[o]=c)),t},getEntry:x,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),m(e)}}},487:function(t,e,n){"use strict";var r=n(4),o=n(7),c=n(13),l=n(165),meta=n(162),f=n(164),d=n(163),v=n(12),h=n(11),m=n(109),_=n(52),y=n(168);t.exports=function(t,e,n,w,k,x){var O=r[t],C=O,P=k?"set":"add",j=C&&C.prototype,D={},E=function(t){var e=j[t];c(j,t,"delete"==t||"has"==t?function(a){return!(x&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return x&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof C&&(x||j.forEach&&!h((function(){(new C).entries().next()})))){var A=new C,S=A[P](x?{}:-0,1)!=A,T=h((function(){A.has(1)})),L=m((function(t){new C(t)})),I=!x&&h((function(){for(var t=new C,e=5;e--;)t[P](e,e);return!t.has(-0)}));L||((C=e((function(e,n){d(e,C,t);var r=y(new O,e,C);return null!=n&&f(n,k,r[P],r),r}))).prototype=j,j.constructor=C),(T||I)&&(E("delete"),E("has"),k&&E("get")),(I||S)&&E(P),x&&j.clear&&delete j.clear}else C=w.getConstructor(e,t,k,P),l(C.prototype,n),meta.NEED=!0;return _(C,t),D[t]=C,o(o.G+o.W+o.F*(C!=O),D),x||w.setStrong(C,t,k),C}},488:function(t,e,n){},489:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(90);var o=n(113);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},644:function(t,e,n){"use strict";var r=n(488);n.n(r).a},646:function(t,e,n){"use strict";n.r(e);n(485);var r=n(489),o=n(38),c=(n(35),n(18),n(51),n(37),n(6)),l=n(107),f=n.n(l),d=n(105),v=n(447),h={name:"Article",components:{ArticleOutline:n(456).a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,l=n.id,e.abrupt("return",Promise.all([v.a.getArticleById(l)]).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,f,d,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(o.a)(e,1),!(c=n[0])||c.message){t.next=11;break}return t.next=4,v.a.getPrevAndNextArticleById(c.id,c.createDate);case 4:return f=t.sent,d=Object(o.a)(f,2),h=d[0],m=d[1],t.abrupt("return",{id:l,post:c,prevPost:h,nextPost:m});case 11:r({statusCode:404,message:c.message});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{id:"",post:{},prevPost:void 0,nextPost:void 0}},mounted:function(){this.$nextTick((function(){f.a.init()}))},head:function(){var title="".concat(this.post.title," - ").concat(d.a.title),head={title:title,meta:[{hid:"og:url",property:"og:url",content:"".concat(d.a.domain).concat(d.a.baseUrl,"article/").concat(this.id,"/")}],script:[{src:"//assets.codepen.io/assets/embed/ei.js"}],link:[{hid:"canonical",rel:"canonical",href:"".concat(d.a.domain).concat(d.a.baseUrl,"article/").concat(this.id,"/")}]};if(this.post&&this.post.categoryList){var t=[].concat(Object(r.a)(d.a.keywords),Object(r.a)(this.post.categoryList),[this.post.title]);head.meta.push({hid:"keywords",name:"keywords",content:Object(r.a)(new Set(t)).join()})}return this.post&&this.post.slug&&(head.meta.push({hid:"description",property:"description",content:this.post.slug}),head.meta.push({hid:"og:description",property:"og:description",content:this.post.slug})),this.post&&this.post.title&&head.meta.push({hid:"og:title",property:"og:title",content:title}),head}},m=(n(644),n(9)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container aos-init",attrs:{"data-aos":"fade-left"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("article-outline",{attrs:{post:t.post,"is-show-more":!1}}),t._v(" "),t.post&&t.post.articleContent?n("div",{staticClass:"md-content",domProps:{innerHTML:t._s(t.$options.filters.parseMd(t.post.articleContent))}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[t.prevPost?n("nuxt-link",{staticClass:"other-article-link",attrs:{to:"/article/"+t.prevPost.id,title:t.prevPost.title}},[n("div",{staticClass:"d-flex justify-content-start align-items-center"},[n("font-awesome-icon",{staticClass:"fa-2x mr-1",attrs:{icon:["fas","arrow-alt-circle-left"]}}),t._v(" "),n("span",[t._v(t._s(t.prevPost.title))])],1)]):t._e()],1),t._v(" "),n("div",{staticClass:"col-6"},[t.nextPost?n("nuxt-link",{staticClass:"other-article-link",attrs:{to:"/article/"+t.nextPost.id,title:t.nextPost.title}},[n("div",{staticClass:"d-flex justify-content-end align-items-center"},[n("span",{staticClass:"text-right"},[t._v("\n              "+t._s(t.nextPost.title)+"\n            ")]),t._v(" "),n("font-awesome-icon",{staticClass:"fa-2x ml-1",attrs:{icon:["fas","arrow-alt-circle-right"]}})],1)]):t._e()],1),t._v(" "),n("div",{staticClass:"col-12"},[n("hr"),t._v(" "),n("div",{staticClass:"comments"},[n("disqus",{attrs:{shortname:"monkeybinbinblog",url:"https://monkeybinbin.github.io/article/"+t.id}})],1)])])])])}),[],!1,null,"ca6cce78",null);e.default=component.exports}}]);