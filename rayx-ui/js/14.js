(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(t,e,n){"use strict";var r=n(107),s=(n(11),n(65),n(108),n(109),n(110)),o=n.n(s),a=n(111),i=n.n(a),c=n(112),l=n.n(c),u=n(113),h=n.n(u),d=n(114),p=n.n(d),f=n(115),y=n.n(f),m=n(116),b=n.n(m),g=n(117),L=n.n(g),v=n(118),k=n.n(v),w=n(119),S=n.n(w),x=n(120),C=n.n(x),A=n(122),B=n.n(A),$=n(123),j=n.n($),O=new o.a({highlight:function(t,e){if(e&&j.a.getLanguage(e))try{return'<pre><code class="hljs" v-pre>'+j.a.highlight(e,t,!0).value+"</code></pre>"}catch(t){}return'<pre><code class="hljs" v-pre>'+O.utils.escapeHtml(t)+"</code></pre>"}});e.a={md:O,template:"<div><slot></slot></div>",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=O.use(l.a).use(h.a).use(p.a).use(y.a).use(b.a).use(L.a).use(k.a).use(C.a,{throwOnError:!1,errorColor:" #cc0000"}).use(B.a,{enabled:this.taskLists}),this.emoji&&this.md.use(i.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var n=this.md.renderer.rules.link_open||function(t,e,n,r,s){return s.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,r,s,o,a){return Object.keys(e.anchorAttributes).map((function(n){var s=t[r].attrIndex(n),o=e.anchorAttributes[n];s<0?t[r].attrPush([n,o]):t[r].attrs[s][1]=o})),n(t,r,s,o,a)},this.toc&&this.md.use(S.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,r){r&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=r),e.$emit("toc-rendered",r))}});var r=this.show?this.md.render(this.prerender(this.sourceData)):"";return r=this.postrender(r),this.$emit("rendered",r),t("div",{class:{"ra-docs-wrapper":!0},domProps:{innerHTML:r}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e,n=Object(r.a)(this.$slots.default);try{for(n.s();!(e=n.n()).done;){var s=e.value;this.sourceData+=s.text}}catch(t){n.e(t)}finally{n.f()}}this.$watch("source",(function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()})),this.watches.forEach((function(e){t.$watch(e,(function(){t.$forceUpdate()}))}))}}},439:function(t,e){t.exports="# 自定义主题\n\n默认提供了一套主题变量，```/lib/styles/var.scss```, 覆盖变量即可\n\n```scss\n$--color-primary: #030508;\n@import \"rayx-ui/lib/index\";\n```\n\n### 注意\n\n自定义主题样式必须以全量的方式导入，如果你是以按需方式导入组件，需要去掉```babel.config.js```中的style，然后使用上面的方式覆盖变量\n\n```js\n// babel.config.js\nmodule.exports = {\n  ...\n  plugins: [\n    ['import', {\n      libraryName: 'rayx-ui',\n      libraryDirectory: 'packages',\n      // 此处去掉\n      // style: (name) => {\n      //   return `${name}/${name.split('/').pop()}.css`;\n      // },\n    }, 'rayx-ui']\n  ]\n}\n```\n"},471:function(t,e,n){"use strict";n.r(e);var r=n(106),s=n(439),o=n.n(s),a={name:"views.docs.design",components:{VueMarkdown:r.a},data:function(){return{design:o.a}},computed:{},methods:{}},i=n(0),c=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("vue-markdown",[this._v(this._s(this.design))])}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=14.js.map