(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[968],{4350:(t,e,r)=>{"use strict";r.d(e,{Z:()=>_});var s=r(2991),n=r.n(s),o=r(6902),a=r.n(o),i=r(9980),l=r.n(i),c=r(6635),h=r.n(c),u=r(700),d=r.n(u),p=r(7003),y=r.n(p),f=r(2384),m=r.n(f),g=r(645),L=r.n(g),k=r(9411),b=r.n(k),v=r(4266),w=r.n(v),C=r(4574),S=r.n(C),x=r(81),A=r(6649),B=r.n(A),$=r(4651),j=r.n($),I=r(7869),F=r.n(I),D=r(6252);const N=new(l())({highlight:function(t,e){if(e&&F().getLanguage(e))try{return'<pre><code class="hljs" v-pre>'+F().highlight(t,{language:e,ignoreIllegals:!0}).value+"</code></pre>"}catch(t){}return'<pre><code class="hljs" v-pre>'+N.utils.escapeHtml(t)+"</code></pre>"}}),_={md:N,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:t=>t},postrender:{type:Function,default:t=>t}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(){this.md=N.use(d()).use(y()).use(m()).use(L()).use(b()).use(w()).use(S()).use(B(),{throwOnError:!1,errorColor:" #cc0000"}).use(j(),{enabled:this.taskLists}),this.emoji&&this.md.use(h()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=()=>`<table class="${this.tableClass}">\n`;const t=this.md.renderer.rules.link_open||function(t,e,r,s,n){return n.renderToken(t,e,r)};this.md.renderer.rules.link_open=(e,r,s,o,i)=>{var l;return n()(l=a()(this.anchorAttributes)).call(l,(t=>{const s=e[r].attrIndex(t),n=this.anchorAttributes[t];s<0?e[r].attrPush([t,n]):e[r].attrs[s][1]=n})),t(e,r,s,o,i)},this.toc&&this.md.use(x.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(t,e,r)=>{r&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=r),this.$emit("toc-rendered",r))}});let e=this.show?this.md.render(this.prerender(this.sourceData)):"";return e=this.postrender(e),this.$emit("rendered",e),(0,D.h)("div",{class:{"ra-docs-wrapper":!0},innerHTML:e})},beforeMount(){if(this.$slots.default){this.sourceData="";for(const t of this.$slots.default())this.sourceData+=t.children}this.$watch("source",(()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()})),this.watches.forEach((t=>{this.$watch(t,(()=>{this.$forceUpdate()}))}))}}},952:t=>{t.exports="# 自定义主题\r\n\r\n默认提供了一套主题变量，```/lib/styles/var.scss```, 覆盖变量即可\r\n\r\n```scss\r\n$--color-primary: #030508;\r\n@import \"rayx-ui/lib/index\";\r\n```\r\n\r\n### 注意\r\n\r\n自定义主题样式必须以全量的方式导入，如果你是以按需方式导入组件，需要去掉```babel.config.js```中的style，然后使用上面的方式覆盖变量\r\n\r\n```js\r\n// babel.config.js\r\nmodule.exports = {\r\n  ...\r\n  plugins: [\r\n    ['import', {\r\n      libraryName: 'rayx-ui',\r\n      libraryDirectory: 'packages',\r\n      // 此处去掉\r\n      // style: (name) => {\r\n      //   return `${name}/${name.split('/').pop()}.css`;\r\n      // },\r\n    }, 'rayx-ui']\r\n  ]\r\n}\r\n```\r\n"},7968:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var s=r(6252),n=r(3577),o=r(4350),a=r(952),i=r.n(a);const l={name:"views.docs.design",components:{VueMarkdown:o.Z},data:()=>({design:i()}),computed:{},methods:{},render:function(t,e,r,o,a,i){const l=(0,s.up)("vue-markdown");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(a.design),1)])),_:1})}}}}]);
//# sourceMappingURL=968.js.map