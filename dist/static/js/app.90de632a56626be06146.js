webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(e){n("gsu9")},null,null).exports,c=n("/ocq"),o=n("mtWM"),i=n.n(o),u="http://strainapi.evanbusse.com/yrPzzCY/",f=function(){return i.a.get(u+"searchdata/effects").then(function(e){return e.data})},l=function(e){return i.a.get(u+"strains/search/effect/"+e).then(function(e){return e.data})},p={name:"Welcome",data:function(){return{effects:[]}},created:function(){this.loadEffects()},updated:function(){console.log(this.effects)},methods:{loadEffects:function(){var e=this;f().then(function(t){e.effects=t.map(function(e){return e.effect})})}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v("Welcome to StrainLib")]),this._v(" "),t("input",{attrs:{type:"checkbox",name:"censorship"}}),this._v(" "),t("label",[this._v("\n    Are you 21yo or above and promise to use the following content strictly for research purpose?\n  ")]),this._v(" "),t("router-link",{attrs:{to:{name:"Search",params:{effects:JSON.stringify(this.effects)}}}},[this._v("Continue")])],1)},staticRenderFns:[]};var h=n("VU/8")(p,d,!1,function(e){n("Up3Q")},"data-v-16da6ca4",null).exports,v=this,m={name:"Search",data:function(){return{effects:[],selected:"",races:["Sativa","Indica","Hybrid"],results:[]}},created:function(){this.effects=JSON.parse(this.$route.params.effects)},updated:function(){console.log("updated",this.results)},mounted:function(){console.log("mounted",this.results)},methods:{search:function(e){l(e).then(function(e){v.results=e.map(function(e){return e.name})})}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("h1",[e._v("Search by type")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"example-1"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?n:n[0]}}},e._l(e.effects,function(t){return n("option",{key:t,attrs:{id:t}},[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),n("button",{on:{click:function(t){e.search(e.selected)}}},[e._v("Search")]),e._v(" "),n("ul",e._l(e.results,function(t){return n("li",{key:t,attrs:{id:t}},[e._v("\n      "+e._s(t)+"\n    ")])}))])},staticRenderFns:[]};var g=n("VU/8")(m,_,!1,function(e){n("f4gE")},"data-v-b63c4f8a",null).exports;r.a.use(c.a);var y=new c.a({routes:[{path:"/",name:"Welcome",component:h},{path:"/search/:effects",name:"Search",component:g}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},Up3Q:function(e,t){},f4gE:function(e,t){},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.90de632a56626be06146.js.map