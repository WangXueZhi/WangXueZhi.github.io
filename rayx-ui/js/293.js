(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[293],{4350:(e,t,r)=>{"use strict";r.d(t,{Z:()=>M});var n=r(2991),s=r.n(n),o=r(6902),a=r.n(o),i=r(9980),l=r.n(i),c=r(6635),h=r.n(c),d=r(700),u=r.n(d),p=r(7003),m=r.n(p),f=r(2384),y=r.n(f),k=r(645),L=r.n(k),g=r(9411),b=r.n(g),v=r(4266),w=r.n(v),C=r(4574),x=r.n(C),A=r(81),S=r(6649),B=r.n(S),$=r(4651),E=r.n($),I=r(7869),D=r.n(I),F=r(6252);const j=new(l())({highlight:function(e,t){if(t&&D().getLanguage(t))try{return'<pre><code class="hljs" v-pre>'+D().highlight(e,{language:t,ignoreIllegals:!0}).value+"</code></pre>"}catch(e){}return'<pre><code class="hljs" v-pre>'+j.utils.escapeHtml(e)+"</code></pre>"}}),M={md:j,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:e=>e},postrender:{type:Function,default:e=>e}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(){this.md=j.use(u()).use(m()).use(y()).use(L()).use(b()).use(w()).use(x()).use(B(),{throwOnError:!1,errorColor:" #cc0000"}).use(E(),{enabled:this.taskLists}),this.emoji&&this.md.use(h()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=()=>`<table class="${this.tableClass}">\n`;const e=this.md.renderer.rules.link_open||function(e,t,r,n,s){return s.renderToken(e,t,r)};this.md.renderer.rules.link_open=(t,r,n,o,i)=>{var l;return s()(l=a()(this.anchorAttributes)).call(l,(e=>{const n=t[r].attrIndex(e),s=this.anchorAttributes[e];n<0?t[r].attrPush([e,s]):t[r].attrs[n][1]=s})),e(t,r,n,o,i)},this.toc&&this.md.use(A.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(e,t,r)=>{r&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=r),this.$emit("toc-rendered",r))}});let t=this.show?this.md.render(this.prerender(this.sourceData)):"";return t=this.postrender(t),this.$emit("rendered",t),(0,F.h)("div",{class:{"ra-docs-wrapper":!0},innerHTML:t})},beforeMount(){if(this.$slots.default){this.sourceData="";for(const e of this.$slots.default())this.sourceData+=e.children}this.$watch("source",(()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()})),this.watches.forEach((e=>{this.$watch(e,(()=>{this.$forceUpdate()}))}))}}},206:e=>{e.exports="# markdown编写说明\r\n\r\n## 对组件进行分类\r\n组件文档会对组件的菜单进行分类展示，需要再组件的```README.md```内添加分类的注释：\r\n\r\n```md\r\n\x3c!-- type: 通用 --\x3e\r\n```\r\n\r\n## 在文档中展示组建的props和methods\r\n如果组件内已经对props和methods添加了多行类型的注释，则会在构建的时候被解析出来，可以在```README.md```中添加对应的注释，props和methods将会以表格的形式被展示在对应的位置。当然，如果你想自己写也行。\r\n```md\r\n\x3c!-- props --\x3e  将被替换成 =>\r\n## props\r\n| 参数 | 类型 | 说明 | 默认值 |\r\n| --- | --- | --- | --- |\r\n| disabled | boolean | 禁用 | false |\r\n\r\n\x3c!-- methods --\x3e  将被替换成 =>\r\n## methods\r\n| 方法名 | 说明 |\r\n| --- | --- |\r\n| click | 点击 |\r\n```\r\n\r\n## 示例代码和demo\r\n默认代码块是不会被转换成demo示例的\r\n\r\n```md\r\n// ```vue\r\n// \r\n// ```\r\n```\r\n加上demo标识，会被转成示例，并展示代码\r\n```md\r\n// ```vue demo\r\n// \r\n// ```\r\n```\r\n加上hidecode标识，会被转成示例，并隐藏代码\r\n```md\r\n// ```vue demo hidecode\r\n// \r\n// ```\r\n```"},6293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(6252),s=r(3577),o=r(4350),a=r(206),i=r.n(a);const l={name:"views.development.md",components:{VueMarkdown:o.Z},data:()=>({base:i()}),computed:{},methods:{},render:function(e,t,r,o,a,i){const l=(0,n.up)("vue-markdown");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(a.base),1)])),_:1})}}}}]);
//# sourceMappingURL=293.js.map