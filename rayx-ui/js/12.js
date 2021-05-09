(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(t,e,n){"use strict";var o=n(107),r=(n(11),n(65),n(108),n(109),n(110)),a=n.n(r),s=n(111),i=n.n(s),c=n(112),l=n.n(c),u=n(113),h=n.n(u),d=n(114),p=n.n(d),f=n(115),m=n.n(f),y=n(116),b=n.n(y),L=n(117),k=n.n(L),v=n(118),g=n.n(v),w=n(119),S=n.n(w),B=n(120),C=n.n(B),A=n(122),x=n.n(A),$=n(123),j=n.n($),O=new a.a({highlight:function(t,e){if(e&&j.a.getLanguage(e))try{return'<pre><code class="hljs" v-pre>'+j.a.highlight(e,t,!0).value+"</code></pre>"}catch(t){}return'<pre><code class="hljs" v-pre>'+O.utils.escapeHtml(t)+"</code></pre>"}});e.a={md:O,template:"<div><slot></slot></div>",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=O.use(l.a).use(h.a).use(p.a).use(m.a).use(b.a).use(k.a).use(g.a).use(C.a,{throwOnError:!1,errorColor:" #cc0000"}).use(x.a,{enabled:this.taskLists}),this.emoji&&this.md.use(i.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var n=this.md.renderer.rules.link_open||function(t,e,n,o,r){return r.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,o,r,a,s){return Object.keys(e.anchorAttributes).map((function(n){var r=t[o].attrIndex(n),a=e.anchorAttributes[n];r<0?t[o].attrPush([n,a]):t[o].attrs[r][1]=a})),n(t,o,r,a,s)},this.toc&&this.md.use(S.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,o){o&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=o),e.$emit("toc-rendered",o))}});var o=this.show?this.md.render(this.prerender(this.sourceData)):"";return o=this.postrender(o),this.$emit("rendered",o),t("div",{class:{"ra-docs-wrapper":!0},domProps:{innerHTML:o}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e,n=Object(o.a)(this.$slots.default);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.sourceData+=r.text}}catch(t){n.e(t)}finally{n.f()}}this.$watch("source",(function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()})),this.watches.forEach((function(e){t.$watch(e,(function(){t.$forceUpdate()}))}))}}},441:function(t,e){t.exports='# 组件编写说明\n\n## 样式命名\n我们采用：前缀（prefix）- 块（block）- 元素（element）- 修饰符（modifier）的命名方式，元素和修饰符可根据使用场景选择是否使用，例如：```r-button```, ```r-button-primary```\n\n## 注释\n如果组件的props和methods要解析到文档中，必须加上多行形式的注释，单行形式的注释不会被解析，注释内容会作为属性说明\n\n```html\n<template>\n  ...\n</template>\n<script>  \nexport default {\n  name: "r-button",\n  props: {\n    /**\n     * 这个属性将会被解析\n     * 颜色类型：```default``` / ```primary``` / ```info``` / ```success``` / ```warning``` / ```error```\n     */\n    colorType: {\n      type: String,\n      default: "default",\n    },\n    // 这个属性将不会被解析\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  methods: {\n    // 这个方法将不会被解析\n    click() {\n      if (!this.disabled) {\n        this.$emit("click");\n      }\n    },\n  },\n};\n<\/script>\n```'},473:function(t,e,n){"use strict";n.r(e);var o=n(106),r=n(441),a=n.n(r),s={name:"views.development.component",components:{VueMarkdown:o.a},data:function(){return{base:a.a}},computed:{},methods:{}},i=n(0),c=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("vue-markdown",[this._v(this._s(this.base))])}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=12.js.map