(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[12],{7012:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return i}});var t=n(6252),l=n(3577),p={class:"ra-docs-wrapper"},e=(0,t.Wm)("h1",null,"Draggable 拖拽容器",-1),o=(0,t.Wm)("h2",null,"示例",-1),h=(0,t.Wm)("p",null,"基本用法",-1),c={class:"ra-docs-demo-examp"},r={class:"ra-docs-demo-comps"},d=(0,t.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;draggable-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-draggable</span> <span class="hljs-attr">:moveChange</span>=<span class="hljs-string">&quot;moveChange&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;head&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;drag-head&quot;</span>&gt;</span>head<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;drag-content&quot;</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">r-draggable</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {};\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-function"><span class="hljs-title">moveChange</span>(<span class="hljs-params">rect</span>)</span> {\n      <span class="hljs-keyword">const</span> { left, top } = rect;\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">left</span>: left &gt; <span class="hljs-number">100</span> ? <span class="hljs-number">100</span> : left,\n        <span class="hljs-attr">top</span>: top\n      };\n    },\n  },\n};\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.draggable-demo</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n}\n<span class="hljs-selector-class">.drag-head</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n}\n<span class="hljs-selector-class">.drag-content</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>',1),j=(0,t.uE)("<h2>props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>moveChange</td><td>移动检测，入参是{left,top}偏移信息的对象，返回同样的对象，表示要偏移的位置</td><td>Function</td><td>未定义</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>head</td><td>拖拽区域</td></tr></tbody></table>",4),m={class:"draggable-demo"},g=(0,t.Wm)("template",{slot:"head"},[(0,t.Wm)("div",{class:"drag-head"},"head")],-1),u=(0,t.Wm)("div",{class:"drag-content"},"content",-1),i={name:"views.docs.components.draggable",components:{demo0:{data:function(){return{}},methods:{moveChange:function(s){var a=s.left;return{left:a>100?100:a,top:s.top}}},render:function(s,a,n,l,p,e){var o=(0,t.up)("r-draggable");return(0,t.wg)(),(0,t.j4)("div",m,[(0,t.Wm)(o,{moveChange:e.moveChange},{default:(0,t.w5)((function(){return[g,u]})),_:1},8,["moveChange"])])}}},data:function(){return{demoControlShowCode:[]}},methods:{demoControlShowCodeTotgal:function(s){this.demoControlShowCode[s]?this.$set(this.demoControlShowCode[s],"show",!this.demoControlShowCode[s].show):this.$set(this.demoControlShowCode,s,{show:!0})}},render:function(s,a,n,m,g,u){var i=(0,t.up)("demo0");return(0,t.wg)(),(0,t.j4)("div",p,[e,o,h,(0,t.Wm)("div",c,[(0,t.Wm)("div",r,[(0,t.Wm)(i)]),(0,t.Wm)("div",{class:["ra-docs-demo-code",{showCode:g.demoControlShowCode[0]&&!!g.demoControlShowCode[0].show}]},[d],2),(0,t.Wm)("div",{class:"ra-docs-demo-control",onClick:a[1]||(a[1]=function(s){return u.demoControlShowCodeTotgal(0)})},(0,l.zw)(g.demoControlShowCode[0]&&g.demoControlShowCode[0].show?"隐藏代码":"显示代码"),1)]),j])}}}}]);
//# sourceMappingURL=12.js.map