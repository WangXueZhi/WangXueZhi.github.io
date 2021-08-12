(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[242],{8242:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>L});var t=n(6252),l=n(3577);const p={class:"ra-docs-wrapper"},o=(0,t.Wm)("h1",null,"Modal",-1),c=(0,t.Wm)("p",null,"模态框，在弹出层上展示一些内容",-1),e=(0,t.Wm)("h2",null,"示例",-1),d=(0,t.Wm)("p",null,"基础用法",-1),h={class:"ra-docs-demo-examp"},r={class:"ra-docs-demo-comps"},m=(0,t.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-demo-wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-modal</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:bodyOverflow</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo0&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo0-head&quot;</span>&gt;</span>模态框基础用法<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo0-foot&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;error&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">r-modal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>显示<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.modal-content-demo0</span> {\n  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;\n}\n<span class="hljs-selector-class">.modal-content-demo0-foot</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">justify-content</span>: flex-end;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>',1),j=(0,t.Wm)("p",null,"模态框动画",-1),i={class:"ra-docs-demo-examp"},u={class:"ra-docs-demo-comps"},g=(0,t.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-demo-wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-modal</span>\n      <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n      <span class="hljs-attr">:bodyOverflow</span>=<span class="hljs-string">&quot;false&quot;</span>\n      <span class="hljs-attr">animateIn</span>=<span class="hljs-string">&quot;bounceIn&quot;</span>\n      <span class="hljs-attr">animateOut</span>=<span class="hljs-string">&quot;bounceOut&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1-head&quot;</span>&gt;</span>模态框基础用法<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1-foot&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;error&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">r-modal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>显示<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.modal-content-demo1</span> {\n  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;\n}\n<span class="hljs-selector-class">.modal-content-demo1-foot</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">justify-content</span>: flex-end;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>',1),w=(0,t.Wm)("p",null,"点击遮罩层关闭",-1),b={class:"ra-docs-demo-examp"},v={class:"ra-docs-demo-comps"},C=(0,t.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-demo-wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-modal</span>\n      <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n      <span class="hljs-attr">:bodyOverflow</span>=<span class="hljs-string">&quot;false&quot;</span>\n      <span class="hljs-attr">animateIn</span>=<span class="hljs-string">&quot;bounceIn&quot;</span>\n      <span class="hljs-attr">animateOut</span>=<span class="hljs-string">&quot;bounceOut&quot;</span>\n      <span class="hljs-attr">closeOnClickMask</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1-head&quot;</span>&gt;</span>点击遮罩层关闭<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal-content-demo1-content&quot;</span>&gt;</span>没有关闭按钮可咋整？<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">r-modal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>显示<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.modal-content-demo1</span> {\n  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;\n  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">2px</span>;\n}\n<span class="hljs-selector-class">.modal-content-demo1-head</span>{\n  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;\n}\n<span class="hljs-selector-class">.modal-content-demo1-content</span>{\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">20px</span>;\n  <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">20px</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>',1),f=(0,t.Wm)("p",null,[(0,t.Uk)("静态方法调用, 内容可支持"),(0,t.Wm)("code",null,"string | vnode"),(0,t.Uk)(", 如果是插入html，需要设置"),(0,t.Wm)("code",null,"dangerInnerHtml"),(0,t.Uk)("为true")],-1),k={class:"ra-docs-demo-examp"},q={class:"ra-docs-demo-comps"},y=(0,t.uE)('<pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showByHtml&quot;</span>&gt;</span>插入html方式<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showByVnode&quot;</span>&gt;</span>插入Vnode方式<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">import</span> { defineComponent, getCurrentInstance, reactive, ref, createVNode, onUnmounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> { proxy } = getCurrentInstance()\n    <span class="hljs-keyword">const</span> showByHtml = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      proxy.$rModal({\n        <span class="hljs-attr">animateIn</span>: <span class="hljs-string">&#39;bounceIn&#39;</span>,\n        <span class="hljs-attr">animateOut</span>: <span class="hljs-string">&#39;bounceOut&#39;</span>,\n        <span class="hljs-attr">content</span>: <span class="hljs-string">`&lt;div class=&quot;modal-content-demo1&quot;&gt;\n          &lt;div class=&quot;modal-content-demo1-head&quot;&gt;点击遮罩层关闭&lt;/div&gt;\n          &lt;div class=&quot;modal-content-demo1-content&quot;&gt;没有关闭按钮可咋整？&lt;/div&gt;\n        &lt;/div&gt;`</span>,\n        <span class="hljs-attr">dangerInnerHtml</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">bodyOverflow</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">closeOnClickMask</span>: <span class="hljs-literal">true</span>\n      })\n    }\n    <span class="hljs-keyword">const</span> showByVnode = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      proxy.$rModal({\n        <span class="hljs-attr">animateIn</span>: <span class="hljs-string">&#39;bounceIn&#39;</span>,\n        <span class="hljs-attr">animateOut</span>: <span class="hljs-string">&#39;bounceOut&#39;</span>,\n        <span class="hljs-attr">content</span>: createVNode(<span class="hljs-string">&#39;div&#39;</span>,\n          {\n          <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;modal-content-demo1&#39;</span>,\n          },\n          [createVNode(<span class="hljs-string">&#39;div&#39;</span>, {<span class="hljs-attr">class</span>: <span class="hljs-string">&#39;modal-content-demo1-head&#39;</span>}, <span class="hljs-string">&#39;点击遮罩层关闭&#39;</span>), createVNode(<span class="hljs-string">&#39;div&#39;</span>, {<span class="hljs-attr">class</span>: <span class="hljs-string">&#39;modal-content-demo1-content&#39;</span>}, <span class="hljs-string">&#39;没有关闭按钮可咋整？&#39;</span>)]\n        ),\n        <span class="hljs-attr">bodyOverflow</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">closeOnClickMask</span>: <span class="hljs-literal">true</span>\n      })\n    }\n    <span class="hljs-keyword">return</span> {\n      showByHtml,\n      showByVnode\n    }\n  }\n})\n\n<span class="hljs-comment">/**\n * \n*/</span>\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</code></pre>',1),W=(0,t.uE)("<h2>props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>show</td><td>显示状态，v-model:show</td><td>Boolean</td><td>false</td></tr><tr><td>showMask</td><td>显示遮罩层</td><td>Boolean</td><td>true</td></tr><tr><td>closeOnClickMask</td><td>点击遮罩层关闭</td><td>Boolean</td><td>false</td></tr><tr><td>animateIn</td><td>入场动画：参考animate.css</td><td>String</td><td>&#39;fadeIn&#39;</td></tr><tr><td>animateOut</td><td>出场动画：参考animate.css</td><td>String</td><td>&#39;fadeOut&#39;</td></tr><tr><td>bodyOverflow</td><td>是否给body设置overflow:hidden</td><td>Boolean</td><td>true</td></tr><tr><td>contentCustomClass</td><td>模态窗内容容器自定义class，r-modal-content</td><td>Array</td><td>():string[]=&gt;[]</td></tr><tr><td>wrapperCustomClass</td><td>模态窗包裹容器自定义class，也就是r-modal-wrapper</td><td>Array</td><td>():string[]=&gt;[]</td></tr><tr><td>content</td><td>内容</td><td>String</td><td>&#39;&#39;</td></tr><tr><td>dangerInnerHtml</td><td>以html形式插入内容</td><td>Boolean</td><td>false</td></tr><tr><td>position</td><td>模态窗容器位置，top|center|bottom</td><td>String</td><td>&#39;center&#39;</td></tr></tbody></table><h2>events</h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>onClose</td><td>关闭事件</td><td></td></tr><tr><td>update:show</td><td>更新显示状态</td><td>isShow:boolean</td></tr><tr><td>clickMask</td><td>点击遮罩层</td><td></td></tr></tbody></table>",4),O={class:"modal-demo-wrapper"},x={class:"modal-content-demo0"},S=(0,t.Wm)("div",{class:"modal-content-demo0-head"},"模态框基础用法",-1),I={class:"modal-content-demo0-foot"},B=(0,t.Uk)("关闭"),M=(0,t.Uk)("显示"),U={data:()=>({show:!1}),render:function(s,a,n,l,p,o){const c=(0,t.up)("r-button"),e=(0,t.up)("r-modal");return(0,t.wg)(),(0,t.j4)("div",O,[(0,t.Wm)(e,{show:p.show,"onUpdate:show":a[2]||(a[2]=s=>p.show=s),bodyOverflow:!1},{default:(0,t.w5)((()=>[(0,t.Wm)("div",x,[S,(0,t.Wm)("div",I,[(0,t.Wm)(c,{colorType:"error",onClick:a[1]||(a[1]=s=>p.show=!1)},{default:(0,t.w5)((()=>[B])),_:1})])])])),_:1},8,["show"]),(0,t.Wm)(c,{onClick:a[3]||(a[3]=s=>p.show=!0)},{default:(0,t.w5)((()=>[M])),_:1})])}},_={class:"modal-demo-wrapper"},V={class:"modal-content-demo1"},H=(0,t.Wm)("div",{class:"modal-content-demo1-head"},"模态框基础用法",-1),T={class:"modal-content-demo1-foot"},z=(0,t.Uk)("关闭"),E=(0,t.Uk)("显示"),N={data:()=>({show:!1}),render:function(s,a,n,l,p,o){const c=(0,t.up)("r-button"),e=(0,t.up)("r-modal");return(0,t.wg)(),(0,t.j4)("div",_,[(0,t.Wm)(e,{show:p.show,"onUpdate:show":a[2]||(a[2]=s=>p.show=s),bodyOverflow:!1,animateIn:"bounceIn",animateOut:"bounceOut"},{default:(0,t.w5)((()=>[(0,t.Wm)("div",V,[H,(0,t.Wm)("div",T,[(0,t.Wm)(c,{colorType:"error",onClick:a[1]||(a[1]=s=>p.show=!1)},{default:(0,t.w5)((()=>[z])),_:1})])])])),_:1},8,["show"]),(0,t.Wm)(c,{onClick:a[3]||(a[3]=s=>p.show=!0)},{default:(0,t.w5)((()=>[E])),_:1})])}},$={class:"modal-demo-wrapper"},A=(0,t.Wm)("div",{class:"modal-content-demo1"},[(0,t.Wm)("div",{class:"modal-content-demo1-head"},"点击遮罩层关闭"),(0,t.Wm)("div",{class:"modal-content-demo1-content"},"没有关闭按钮可咋整？")],-1),F=(0,t.Uk)("显示"),Z={data:()=>({show:!1}),render:function(s,a,n,l,p,o){const c=(0,t.up)("r-modal"),e=(0,t.up)("r-button");return(0,t.wg)(),(0,t.j4)("div",$,[(0,t.Wm)(c,{show:p.show,"onUpdate:show":a[1]||(a[1]=s=>p.show=s),bodyOverflow:!1,animateIn:"bounceIn",animateOut:"bounceOut",closeOnClickMask:""},{default:(0,t.w5)((()=>[A])),_:1},8,["show"]),(0,t.Wm)(e,{onClick:a[2]||(a[2]=s=>p.show=!0)},{default:(0,t.w5)((()=>[F])),_:1})])}},D={class:"demo-wrapper"},G=(0,t.Uk)("插入html方式"),J=(0,t.Uk)("插入Vnode方式"),K=(0,t.aZ)({setup(){const{proxy:s}=(0,t.FN)();return{showByHtml:function(){s.$rModal({animateIn:"bounceIn",animateOut:"bounceOut",content:'<div class="modal-content-demo1">\n          <div class="modal-content-demo1-head">点击遮罩层关闭</div>\n          <div class="modal-content-demo1-content">没有关闭按钮可咋整？</div>\n        </div>',dangerInnerHtml:!0,bodyOverflow:!1,closeOnClickMask:!0})},showByVnode:function(){s.$rModal({animateIn:"bounceIn",animateOut:"bounceOut",content:(0,t.Wm)("div",{class:"modal-content-demo1"},[(0,t.Wm)("div",{class:"modal-content-demo1-head"},"点击遮罩层关闭"),(0,t.Wm)("div",{class:"modal-content-demo1-content"},"没有关闭按钮可咋整？")]),bodyOverflow:!1,closeOnClickMask:!0})}}}});K.render=function(s,a,n,l,p,o){const c=(0,t.up)("r-button");return(0,t.wg)(),(0,t.j4)("div",D,[(0,t.Wm)(c,{onClick:s.showByHtml},{default:(0,t.w5)((()=>[G])),_:1},8,["onClick"]),(0,t.Wm)(c,{onClick:s.showByVnode},{default:(0,t.w5)((()=>[J])),_:1},8,["onClick"])])};const L={name:"views.docs.components.modal",components:{demo0:U,demo1:N,demo2:Z,demo3:K},data:()=>({demoControlShowCode:[]}),methods:{demoControlShowCodeTotgal(s){this.demoControlShowCode[s]?this.demoControlShowCode[s].show=!this.demoControlShowCode[s].show:this.demoControlShowCode[s]={show:!0}}},render:function(s,a,n,O,x,S){const I=(0,t.up)("demo0"),B=(0,t.up)("demo1"),M=(0,t.up)("demo2"),U=(0,t.up)("demo3");return(0,t.wg)(),(0,t.j4)("div",p,[o,c,e,d,(0,t.Wm)("div",h,[(0,t.Wm)("div",r,[(0,t.Wm)(I)]),(0,t.Wm)("div",{class:["ra-docs-demo-code",{showCode:x.demoControlShowCode[0]&&!!x.demoControlShowCode[0].show}]},[m],2),(0,t.Wm)("div",{class:"ra-docs-demo-control",onClick:a[1]||(a[1]=s=>S.demoControlShowCodeTotgal(0))},(0,l.zw)(x.demoControlShowCode[0]&&x.demoControlShowCode[0].show?"隐藏代码":"显示代码"),1)]),j,(0,t.Wm)("div",i,[(0,t.Wm)("div",u,[(0,t.Wm)(B)]),(0,t.Wm)("div",{class:["ra-docs-demo-code",{showCode:x.demoControlShowCode[1]&&!!x.demoControlShowCode[1].show}]},[g],2),(0,t.Wm)("div",{class:"ra-docs-demo-control",onClick:a[2]||(a[2]=s=>S.demoControlShowCodeTotgal(1))},(0,l.zw)(x.demoControlShowCode[1]&&x.demoControlShowCode[1].show?"隐藏代码":"显示代码"),1)]),w,(0,t.Wm)("div",b,[(0,t.Wm)("div",v,[(0,t.Wm)(M)]),(0,t.Wm)("div",{class:["ra-docs-demo-code",{showCode:x.demoControlShowCode[2]&&!!x.demoControlShowCode[2].show}]},[C],2),(0,t.Wm)("div",{class:"ra-docs-demo-control",onClick:a[3]||(a[3]=s=>S.demoControlShowCodeTotgal(2))},(0,l.zw)(x.demoControlShowCode[2]&&x.demoControlShowCode[2].show?"隐藏代码":"显示代码"),1)]),f,(0,t.Wm)("div",k,[(0,t.Wm)("div",q,[(0,t.Wm)(U)]),(0,t.Wm)("div",{class:["ra-docs-demo-code",{showCode:x.demoControlShowCode[3]&&!!x.demoControlShowCode[3].show}]},[y],2),(0,t.Wm)("div",{class:"ra-docs-demo-control",onClick:a[4]||(a[4]=s=>S.demoControlShowCodeTotgal(3))},(0,l.zw)(x.demoControlShowCode[3]&&x.demoControlShowCode[3].show?"隐藏代码":"显示代码"),1)]),W])}}}}]);
//# sourceMappingURL=242.js.map