(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[944],{9944:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>i});var l=n(6252),t=n(3577);const p={class:"ra-docs-wrapper"},e=(0,l.Wm)("h1",null,"Draggable 拖拽容器",-1),o=(0,l.Wm)("h2",null,"示例",-1),h=(0,l.Wm)("p",null,"基本用法",-1),c={class:"ra-docs-demo-examp"},r={class:"ra-docs-demo-comps"},d=(0,l.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;draggable-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-draggable</span> <span class="hljs-attr">:moveChange</span>=<span class="hljs-string">&quot;moveChange&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:dragBar</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;drag-dragBar&quot;</span>&gt;</span>dragBar<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;drag-content&quot;</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">r-draggable</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {};\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-function"><span class="hljs-title">moveChange</span>(<span class="hljs-params">rect</span>)</span> {\n      <span class="hljs-keyword">const</span> { left, top } = rect;\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">left</span>: left &gt; <span class="hljs-number">100</span> ? <span class="hljs-number">100</span> : left,\n        <span class="hljs-attr">top</span>: top\n      };\n    },\n  },\n};\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.draggable-demo</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n}\n<span class="hljs-selector-class">.drag-head</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n}\n<span class="hljs-selector-class">.drag-content</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>',1),j=(0,l.uE)("<h2>props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>moveChange</td><td>移动检测，入参是{left,top}偏移信息的对象，返回同样的对象，表示要偏移的位置</td><td>Function</td><td>null</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>dragBar</td><td>拖拽区域</td></tr></tbody></table>",4),g={class:"draggable-demo"},m=(0,l.Wm)("div",{class:"drag-dragBar"},"dragBar",-1),u=(0,l.Wm)("div",{class:"drag-content"},"content",-1),i={name:"views.docs.components.draggable",components:{demo0:{data:()=>({}),methods:{moveChange(s){const{left:a,top:n}=s;return{left:a>100?100:a,top:n}}},render:function(s,a,n,t,p,e){const o=(0,l.up)("r-draggable");return(0,l.wg)(),(0,l.j4)("div",g,[(0,l.Wm)(o,{moveChange:e.moveChange},{dragBar:(0,l.w5)((()=>[m])),default:(0,l.w5)((()=>[u])),_:1},8,["moveChange"])])}}},data:()=>({demoControlShowCode:[]}),methods:{demoControlShowCodeTotgal(s){this.demoControlShowCode[s]?this.demoControlShowCode[s].show=!this.demoControlShowCode[s].show:this.demoControlShowCode[s]={show:!0}}},render:function(s,a,n,g,m,u){const i=(0,l.up)("demo0");return(0,l.wg)(),(0,l.j4)("div",p,[e,o,h,(0,l.Wm)("div",c,[(0,l.Wm)("div",r,[(0,l.Wm)(i)]),(0,l.Wm)("div",{class:["ra-docs-demo-code",{showCode:m.demoControlShowCode[0]&&!!m.demoControlShowCode[0].show}]},[d],2),(0,l.Wm)("div",{class:"ra-docs-demo-control",onClick:a[1]||(a[1]=s=>u.demoControlShowCodeTotgal(0))},(0,t.zw)(m.demoControlShowCode[0]&&m.demoControlShowCode[0].show?"隐藏代码":"显示代码"),1)]),j])}}}}]);
//# sourceMappingURL=944.js.map