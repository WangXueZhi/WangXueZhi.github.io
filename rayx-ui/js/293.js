(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[293],{4350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var s=n(2991),o=n.n(s),r=n(6902),a=n.n(r),i=n(9980),l=n.n(i),c=n(6635),h=n.n(c),d=n(700),u=n.n(d),p=n(7003),m=n.n(p),f=n(2384),y=n.n(f),k=n(645),L=n.n(k),g=n(9411),b=n.n(g),v=n(4266),w=n.n(v),C=n(4574),x=n.n(C),A=n(81),S=n(6649),B=n.n(S),$=n(4651),E=n.n($),I=n(7869),D=n.n(I),F=n(6252);const j=new(l())({highlight:function(e,t){if(t&&D().getLanguage(t))try{return'<pre><code class="hljs" v-pre>'+D().highlight(e,{language:t,ignoreIllegals:!0}).value+"</code></pre>"}catch(e){}return'<pre><code class="hljs" v-pre>'+j.utils.escapeHtml(e)+"</code></pre>"}}),M={md:j,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:e=>e},postrender:{type:Function,default:e=>e}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(){this.md=j.use(u()).use(m()).use(y()).use(L()).use(b()).use(w()).use(x()).use(B(),{throwOnError:!1,errorColor:" #cc0000"}).use(E(),{enabled:this.taskLists}),this.emoji&&this.md.use(h()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=()=>`<table class="${this.tableClass}">\n`;const e=this.md.renderer.rules.link_open||function(e,t,n,s,o){return o.renderToken(e,t,n)};this.md.renderer.rules.link_open=(t,n,s,r,i)=>{var l;return o()(l=a()(this.anchorAttributes)).call(l,(e=>{const s=t[n].attrIndex(e),o=this.anchorAttributes[e];s<0?t[n].attrPush([e,o]):t[n].attrs[s][1]=o})),e(t,n,s,r,i)},this.toc&&this.md.use(A.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(e,t,n)=>{n&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=n),this.$emit("toc-rendered",n))}});let t=this.show?this.md.render(this.prerender(this.sourceData)):"";return t=this.postrender(t),this.$emit("rendered",t),(0,F.h)("div",{class:{"ra-docs-wrapper":!0},innerHTML:t})},beforeMount(){if(this.$slots.default){this.sourceData="";for(const e of this.$slots.default())this.sourceData+=e.children}this.$watch("source",(()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()})),this.watches.forEach((e=>{this.$watch(e,(()=>{this.$forceUpdate()}))}))}}},206:e=>{e.exports="# markdown编写说明\n\n## 对组件进行分类\n组件文档会对组件的菜单进行分类展示，需要再组件的```README.md```内添加分类的注释：\n\n```md\n\x3c!-- type: 通用 --\x3e\n```\n\n## 在文档中展示组建的props和methods\n如果组件内已经对props和methods添加了多行类型的注释，则会在构建的时候被解析出来，可以在```README.md```中添加对应的注释，props和methods将会以表格的形式被展示在对应的位置。当然，如果你想自己写也行。\n```md\n\x3c!-- props --\x3e  将被替换成 =>\n## props\n| 参数 | 类型 | 说明 | 默认值 |\n| --- | --- | --- | --- |\n| disabled | boolean | 禁用 | false |\n\n\x3c!-- methods --\x3e  将被替换成 =>\n## methods\n| 方法名 | 说明 |\n| --- | --- |\n| click | 点击 |\n```\n\n## 示例代码和demo\n默认代码块是不会被转换成demo示例的\n\n```md\n// ```vue\n// \n// ```\n```\n加上demo标识，会被转成示例，并展示代码\n```md\n// ```vue demo\n// \n// ```\n```\n加上hidecode标识，会被转成示例，并隐藏代码\n```md\n// ```vue demo hidecode\n// \n// ```\n```"},6293:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var s=n(6252),o=n(3577),r=n(4350),a=n(206),i=n.n(a);const l={name:"views.development.md",components:{VueMarkdown:r.Z},data:()=>({base:i()}),computed:{},methods:{},render:function(e,t,n,r,a,i){const l=(0,s.up)("vue-markdown");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.base),1)])),_:1})}}}}]);
//# sourceMappingURL=293.js.map