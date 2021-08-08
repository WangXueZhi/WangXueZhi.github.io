import{_ as e}from"./index.c4f8aa8f.js";import{d as n,s as o}from"./vendor.6fa74a5c.js";const a=n({name:"Markdown"});a.render=()=>o("div",{class:["md2vue-wrapper"],innerHTML:"<pre><code class=\"language-mermaid\"><div class='mermaid'>sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!</div>\n</code></pre>\n"}),a.mounted=()=>{const n=document.querySelectorAll(".mermaid");n&&n.length>0&&e((()=>__import__("./mermaid.core.123959f0.js").then((function(e){return e.m}))),void 0).then((e=>{e.initialize({theme:"forest"}),n.forEach(((n,o)=>{e.render("mermaid"+o,n.innerText,(e=>{n.innerHTML=e}))}))}))};export default a;
