(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,9],{152:function(e,t,r){"use strict";r.r(t);r(148);var l={name:"listing-preview",props:{doc:Object,index:Number,idFieldName:{type:String,default:"id"},thePage:Object},computed:{previewThumbnail:function(){return this.doc.hasOwnProperty("img.uri.thumbnail")?this.doc["img.uri.thumbnail"][0]:"no image"},previewTitle:function(){return this.doc.title},previewDesc:function(){return this.doc.teaser}},data:function(){return{showCarousels:!1}},methods:{showSlides:function(){console.log(this.doc)}}},n=r(11),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-avatar",{attrs:{size:"120",tile:""}},[r("v-img",{attrs:{src:e.previewThumbnail,"max-width":"120"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1),r("div",[r("v-card-title",[e._v(e._s(e.previewTitle))]),r("v-card-text",[e._v(e._s(e.previewDesc))])],1)],1),r("v-dialog",{attrs:{"max-width":"780px"},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[r("v-carousel",e._l(e.doc["img.uri.preview"],(function(e,i){return r("v-carousel-item",{key:i,attrs:{src:e,"max-width":"780px"}})})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},153:function(e,t,r){"use strict";r.r(t);var l={name:"facet-buckets",props:["facets"],computed:{}},n=r(11),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-expansion-panels",e._l(e.facets,(function(t,l){return r("v-expansion-panel",{key:"facet-"+l,class:{"grey lighten-2":l%2==0}},[r("v-expansion-panel-header",[e._v(e._s(t.name)+" - "+e._s(t.buckets.length))]),r("v-expansion-panel-content",[r("v-list",{class:{"grey lighten-2":l%2==0}},[r("v-list-item-group",e._l(t.buckets,(function(l,i){return r("v-list-item",{key:"bucket-"+i,on:{click:function(r){return e.$emit("bucket-select",t.name,l.value)}}},[r("v-list-item-content",[e._v(e._s(l.value))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v(e._s(l.count))])],1)],1)})),1)],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports},154:function(e,t,r){"use strict";r.r(t);var l={name:"query-filters",props:["filters"],computed:{}},n=r(11),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.filters?r("v-card",{staticClass:"mb-3"},[r("v-list",{staticClass:"indigo lighten-4"},[r("v-subheader",[e._v("Filters")]),r("v-list-item-group",e._l(e.filters,(function(filter,i){return r("v-list-item",{key:"filter-"+i,on:{click:function(t){return e.$emit("filter-select",filter)}}},[r("v-list-item-content",[e._v(e._s(filter.replace(":",": ")))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v("X")])],1)],1)})),1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},188:function(e,t,r){"use strict";r.r(t);r(71),r(35);var l=r(46),n=(r(24),r(15),r(52),r(98),r(69),r(70),r(97),r(156)),o=r.n(n),c=r(152),d=r(153),f=r(154);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={components:{"listing-preview":c.default,"facet-buckets":d.default,"query-filters":f.default},layout:"vuetify",name:"solrsearch",data:function(){return{settingsDialog:!1,query:"*:*",valid:!1,idField:"id",collectionUrl:"http://search.example.com",collections:[],collectionLabel:"Collection: ",facetFields:"",filterQuery:"",sort:"",fieldList:"",boostQuery:"",boostFunction:"",queryFields:"",priceRangeOn:!1,priceRange:[5e5,1e6],totalHits:0,totalPages:0,facets:null,stats:null,results:null,resultSummary:"",debugQuery:!1,debugExplain:null,explainItem:null,currentPage:1,perPage:15,profileRepo:"/nuxt-repo/",profileName:"local.json"}},computed:{filters:function(){return""===this.filterQuery?null:this.filterQuery.split(",")}},methods:{simpleSearch:function(){var e=this;e.resultSummary="Searching ...",e.results=null,e.facets=null,e.stats=null,e.query||(e.query="*:*");var t=e.buildQuery();e.jeQueryParams&&(e.jeQueryParams.setMode("view"),e.jeQueryParams.set(t),e.jeQueryParams.expandAll(),e.jeQueryParams.setMode("code"));var r=e.collectionUrl+"select";o.a.post(r,t).then((function(r){e.totalHits=r.data.response.numFound,e.totalPages=Math.ceil(e.totalHits/e.perPage),e.results=r.data.response.docs,r.data.hasOwnProperty("debug")&&(e.debugExplain=r.data.debug),r.data.hasOwnProperty("facet_counts")&&(e.facets=e.getReadyFacets(r.data.facet_counts.facet_fields));var l=t.params.start;e.resultSummary="Showing "+(l+1)+" - "+Math.min(l+e.perPage,e.totalHits)+" of "+e.totalHits+" Items",e.totalHits>0&&console.log("total hits: "+e.totalHits)})).catch((function(t){e.resultSummary="Query Error!",console.log(t)}))},buildQuery:function(){var e=(this.currentPage-1)*this.perPage,t=Object.assign({rows:this.perPage,defType:"edismax",start:e,sort:this.sort,debugQuery:this.debugQuery},this.getFacetFields(),this.getFieldList(),this.getFilterQuery(),this.getBoostQuery(),this.getBoostFunction(),this.getQueryFields());return{query:this.query,params:t}},getFacetFields:function(){return""===this.facetFields?{}:{facet:"on","facet.limit":-1,"facet.field":this.facetFields.split(",")}},getFieldList:function(){if(""===this.fieldList)return{};var e=this.fieldList.split(",");return e.includes(this.idField)||e.push(this.idField),{fl:e}},getBoostFunction:function(){return""===this.boostFunction?{}:{bf:this.boostFunction}},getBoostQuery:function(){return""===this.boostQuery?{}:{bq:this.boostQuery}},getQueryFields:function(){return""===this.queryFields?{}:{qf:this.queryFields}},getFilterQuery:function(){var e=[];if(""!=this.filterQuery&&((e=this.filterQuery.split(",")).length>0&&(e=e.filter((function(e){return!e.startsWith("listvalue_i")}))),this.filterQuery=e.join(",")),this.priceRangeOn){var t="listvalue_i:["+this.priceRange[0]+" TO "+this.priceRange[1]+"]";e.push(t),this.filterQuery=e.join(",")}return""===this.filterQuery?{}:{fq:this.filterQuery.split(",")}},getReadyFacets:function(e){var t=[];return Object.keys(e).forEach((function(r){for(var l=e[r],n=[],i=0;i<l.length;i+=2)l[i+1]<1||n.push({value:l[i],count:l[i+1]});var o={label:r,name:r,buckets:n};t.push(o)})),t},handleSearchButton:function(){this.currentPage=1,this.simpleSearch()},handleBucketSelect:function(e,t){var r=e+':"'+t+'"';this.filterQuery=""===this.filterQuery?r:this.filterQuery+","+r,this.currentPage=1,this.simpleSearch()},removeFilter:function(filter){var e=this.filterQuery.split(",").filter((function(e){return e!=filter}));switch(this.filterQuery=e.join(","),filter.split(":")[0]){case"listvalue_i":this.priceRangeOn=!1}this.currentPage=1,this.simpleSearch()},settingsCancel:function(){this.settingsDialog=!1},settingsOk:function(){this.settingsDialog=!1,this.simpleSearch()},settingsSave:function(){var e=this;console.log(e._data);var t=Object.keys(e._data).filter((function(t){return"function"!=typeof e._data[t]}));console.log(t);var r=t.reduce((function(t,r){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},t,Object(l.a)({},r,e._data[r]))}),{});console.log(r),console.log(JSON.stringify(r)),this.settingsDialog=!1},loadProfile:function(){var e=this,t=e.profileRepo+e.profileName;o.a.get(t).then((function(t){console.log(t.data),Object.keys(t.data).forEach((function(r){e[r]=t.data[r]}))}))}}},m=r(11),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",tile:""}},[r("v-text-field",{attrs:{dense:"",id:"input-number",autocomplete:"off",label:"Type your query here"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),r("v-btn",{staticClass:"pa-2",attrs:{color:"warning",dark:"",icon:""},on:{click:e.handleSearchButton}},[r("v-icon",[e._v("mdi-magnify")]),e._v("search")],1),r("v-btn",{staticClass:"pa-2",attrs:{color:"success darken-1",dark:"",icon:""},on:{click:function(t){t.stopPropagation(),e.settingsDialog=!0}}},[r("v-icon",[e._v("mdi-settings")]),e._v("settings")],1)],1),r("v-dialog",{attrs:{"max-width":"780px",persistent:""},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-toolbar-title",[e._v("Search settings")])],1),r("v-tabs",[r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-settings")])],1),r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-account")])],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-text-field",{attrs:{label:"Solr Collection URL:",dense:""},model:{value:e.collectionUrl,callback:function(t){e.collectionUrl=t},expression:"collectionUrl"}})],1),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-checkbox",{attrs:{label:"Debug",dense:""},model:{value:e.debugQuery,callback:function(t){e.debugQuery=t},expression:"debugQuery"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Items Per Page:",dense:""},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Sort:",dense:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Residence Type:",dense:""},model:{value:e.residenceType,callback:function(t){e.residenceType=t},expression:"residenceType"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"City:",dense:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Neighbourhood:",dense:""},model:{value:e.neighbourhood,callback:function(t){e.neighbourhood=t},expression:"neighbourhood"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{label:"Price Range",dense:""},model:{value:e.priceRangeOn,callback:function(t){e.priceRangeOn=t},expression:"priceRangeOn"}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-range-slider",{attrs:{disabled:!e.priceRangeOn,max:"5000000",min:"10000",step:"10000","hide-details":"",dense:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("span",{domProps:{textContent:e._s(e.priceRange[0])}})]},proxy:!0},{key:"append",fn:function(){return[r("span",{domProps:{textContent:e._s(e.priceRange[1])}})]},proxy:!0}]),model:{value:e.priceRange,callback:function(t){e.priceRange=t},expression:"priceRange"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{label:"Facets:",dense:""},model:{value:e.facetFields,callback:function(t){e.facetFields=t},expression:"facetFields"}})],1)],1)],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsSave}},[e._v("save profile")]),r("v-spacer")],1)],1)],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{label:"Profile Repository URL:",dense:""},model:{value:e.profileRepo,callback:function(t){e.profileRepo=t},expression:"profileRepo"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Pick Profile:",dense:""},model:{value:e.profileName,callback:function(t){e.profileName=t},expression:"profileName"}})],1),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-btn",{on:{click:e.loadProfile}},[e._v("Load")])],1)],1)],1)],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsCancel}},[e._v("cancel")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsOk}},[e._v("Ok")])],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("h3",[e._v("Facets")]),r("query-filters",{attrs:{filters:e.filters},on:{"filter-select":e.removeFilter}}),r("facet-buckets",{attrs:{facets:e.facets},on:{"bucket-select":e.handleBucketSelect}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("h3",[e._v(e._s(e.resultSummary))]),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10"},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),e._l(e.results,(function(t,l){return r("listing-preview",{key:t.id,attrs:{doc:t,index:l,idFieldName:e.idField}})})),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10"},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e()],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);