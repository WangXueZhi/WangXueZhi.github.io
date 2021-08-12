(self["webpackChunkrayx_ui"] = self["webpackChunkrayx_ui"] || []).push([["src_views_docs_design_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VueMarkdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/VueMarkdown */ "./src/components/VueMarkdown.js");
/* harmony import */ var _design_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design.md */ "./src/views/docs/design/design.md");
/* harmony import */ var _design_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_design_md__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "views.docs.design",
  components: {
    VueMarkdown: _components_VueMarkdown__WEBPACK_IMPORTED_MODULE_0__.default
  },

  data() {
    return {
      design: (_design_md__WEBPACK_IMPORTED_MODULE_1___default())
    };
  },

  computed: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=template&id=59f9576b":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=template&id=59f9576b ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_markdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-markdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vue_markdown, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.design), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./src/components/VueMarkdown.js":
/*!***************************************!*\
  !*** ./src/components/VueMarkdown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it-emoji */ "./node_modules/markdown-it-emoji/index.js");
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it-sub */ "./node_modules/markdown-it-sub/index.js");
/* harmony import */ var markdown_it_sub__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-it-sup */ "./node_modules/markdown-it-sup/index.js");
/* harmony import */ var markdown_it_sup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! markdown-it-footnote */ "./node_modules/markdown-it-footnote/index.js");
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! markdown-it-deflist */ "./node_modules/markdown-it-deflist/index.js");
/* harmony import */ var markdown_it_deflist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! markdown-it-abbr */ "./node_modules/markdown-it-abbr/index.js");
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! markdown-it-ins */ "./node_modules/markdown-it-ins/index.js");
/* harmony import */ var markdown_it_ins__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! markdown-it-mark */ "./node_modules/markdown-it-mark/index.js");
/* harmony import */ var markdown_it_mark__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! markdown-it-toc-and-anchor */ "./node_modules/markdown-it-toc-and-anchor/dist/index.js");
/* harmony import */ var markdown_it_katex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-it-katex */ "./node_modules/markdown-it-katex/index.js");
/* harmony import */ var markdown_it_katex__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_it_katex__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! markdown-it-task-lists */ "./node_modules/markdown-it-task-lists/index.js");
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
















const md = new (markdown_it__WEBPACK_IMPORTED_MODULE_2___default())({
  highlight: function (str, lang) {
    if (lang && highlight_js__WEBPACK_IMPORTED_MODULE_14___default().getLanguage(lang)) {
      try {
        return '<pre><code class="hljs" v-pre>' + highlight_js__WEBPACK_IMPORTED_MODULE_14___default().highlight(str, {
          language: lang,
          ignoreIllegals: true
        }).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre><code class="hljs" v-pre>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  md: md,
  template: '<div><slot></slot></div>',

  data() {
    return {
      sourceData: this.source
    };
  },

  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show', 'toc']
    },
    source: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true
    },
    xhtmlOut: {
      type: Boolean,
      default: true
    },
    breaks: {
      type: Boolean,
      default: true
    },
    linkify: {
      type: Boolean,
      default: true
    },
    emoji: {
      type: Boolean,
      default: true
    },
    typographer: {
      type: Boolean,
      default: true
    },
    langPrefix: {
      type: String,
      default: 'language-'
    },
    quotes: {
      type: String,
      default: '“”‘’'
    },
    tableClass: {
      type: String,
      default: 'table'
    },
    taskLists: {
      type: Boolean,
      default: true
    },
    toc: {
      type: Boolean,
      default: false
    },
    tocId: {
      type: String
    },
    tocClass: {
      type: String,
      default: 'table-of-contents'
    },
    tocFirstLevel: {
      type: Number,
      default: 2
    },
    tocLastLevel: {
      type: Number
    },
    tocAnchorLink: {
      type: Boolean,
      default: true
    },
    tocAnchorClass: {
      type: String,
      default: 'toc-anchor'
    },
    tocAnchorLinkSymbol: {
      type: String,
      default: '#'
    },
    tocAnchorLinkSpace: {
      type: Boolean,
      default: true
    },
    tocAnchorLinkClass: {
      type: String,
      default: 'toc-anchor-link'
    },
    anchorAttributes: {
      type: Object,
      default: () => ({})
    },
    prerender: {
      type: Function,
      default: sourceData => {
        return sourceData;
      }
    },
    postrender: {
      type: Function,
      default: htmlData => {
        return htmlData;
      }
    }
  },
  computed: {
    tocLastLevelComputed() {
      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1;
    }

  },

  render() {
    this.md = md.use((markdown_it_sub__WEBPACK_IMPORTED_MODULE_4___default())).use((markdown_it_sup__WEBPACK_IMPORTED_MODULE_5___default())).use((markdown_it_footnote__WEBPACK_IMPORTED_MODULE_6___default())).use((markdown_it_deflist__WEBPACK_IMPORTED_MODULE_7___default())).use((markdown_it_abbr__WEBPACK_IMPORTED_MODULE_8___default())).use((markdown_it_ins__WEBPACK_IMPORTED_MODULE_9___default())).use((markdown_it_mark__WEBPACK_IMPORTED_MODULE_10___default())).use((markdown_it_katex__WEBPACK_IMPORTED_MODULE_12___default()), {
      throwOnError: false,
      errorColor: ' #cc0000'
    }).use((markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13___default()), {
      enabled: this.taskLists
    });

    if (this.emoji) {
      this.md.use((markdown_it_emoji__WEBPACK_IMPORTED_MODULE_3___default()));
    }

    this.md.set({
      html: this.html,
      xhtmlOut: this.xhtmlOut,
      breaks: this.breaks,
      linkify: this.linkify,
      typographer: this.typographer,
      langPrefix: this.langPrefix,
      quotes: this.quotes
    });

    this.md.renderer.rules.table_open = () => `<table class="${this.tableClass}">\n`;

    const defaultLinkRenderer = this.md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

    this.md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      var _context;

      E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_instance_map_js__WEBPACK_IMPORTED_MODULE_0___default()(_context = E_gitee_rayx_ui_vue_node_modules_babel_runtime_corejs3_core_js_stable_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default()(this.anchorAttributes)).call(_context, attribute => {
        const aIndex = tokens[idx].attrIndex(attribute);
        const value = this.anchorAttributes[attribute];

        if (aIndex < 0) {
          tokens[idx].attrPush([attribute, value]); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = value;
        }
      });

      return defaultLinkRenderer(tokens, idx, options, env, self);
    };

    if (this.toc) {
      this.md.use(markdown_it_toc_and_anchor__WEBPACK_IMPORTED_MODULE_11__.default, {
        tocClassName: this.tocClass,
        tocFirstLevel: this.tocFirstLevel,
        tocLastLevel: this.tocLastLevelComputed,
        anchorLink: this.tocAnchorLink,
        anchorLinkSymbol: this.tocAnchorLinkSymbol,
        anchorLinkSpace: this.tocAnchorLinkSpace,
        anchorClassName: this.tocAnchorClass,
        anchorLinkSymbolClassName: this.tocAnchorLinkClass,
        tocCallback: (tocMarkdown, tocArray, tocHtml) => {
          if (tocHtml) {
            if (this.tocId && document.getElementById(this.tocId)) {
              document.getElementById(this.tocId).innerHTML = tocHtml;
            }

            this.$emit('toc-rendered', tocHtml);
          }
        }
      });
    }

    let outHtml = this.show ? this.md.render(this.prerender(this.sourceData)) : '';
    outHtml = this.postrender(outHtml);
    this.$emit('rendered', outHtml);
    return (0,vue__WEBPACK_IMPORTED_MODULE_15__.h)('div', {
      class: {
        'ra-docs-wrapper': true
      },
      innerHTML: outHtml
    });
  },

  beforeMount() {
    if (this.$slots.default) {
      this.sourceData = '';

      for (const slot of this.$slots.default()) {
        this.sourceData += slot.children;
      }
    }

    this.$watch('source', () => {
      this.sourceData = this.prerender(this.source);
      this.$forceUpdate();
    });
    this.watches.forEach(v => {
      this.$watch(v, () => {
        this.$forceUpdate();
      });
    });
  }

});

/***/ }),

/***/ "./src/views/docs/design/design.md":
/*!*****************************************!*\
  !*** ./src/views/docs/design/design.md ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "# 自定义主题\r\n\r\n默认提供了一套主题变量，```/lib/styles/var.scss```, 覆盖变量即可\r\n\r\n```scss\r\n$--color-primary: #030508;\r\n@import \"rayx-ui/lib/index\";\r\n```\r\n\r\n### 注意\r\n\r\n自定义主题样式必须以全量的方式导入，如果你是以按需方式导入组件，需要去掉```babel.config.js```中的style，然后使用上面的方式覆盖变量\r\n\r\n```js\r\n// babel.config.js\r\nmodule.exports = {\r\n  ...\r\n  plugins: [\r\n    ['import', {\r\n      libraryName: 'rayx-ui',\r\n      libraryDirectory: 'packages',\r\n      // 此处去掉\r\n      // style: (name) => {\r\n      //   return `${name}/${name.split('/').pop()}.css`;\r\n      // },\r\n    }, 'rayx-ui']\r\n  ]\r\n}\r\n```\r\n"

/***/ }),

/***/ "./src/views/docs/design/index.vue":
/*!*****************************************!*\
  !*** ./src/views/docs/design/index.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_59f9576b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=59f9576b */ "./src/views/docs/design/index.vue?vue&type=template&id=59f9576b");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/docs/design/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _index_vue_vue_type_template_id_59f9576b__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/views/docs/design/index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/views/docs/design/index.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/views/docs/design/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_17_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_17_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/docs/design/index.vue?vue&type=template&id=59f9576b":
/*!***********************************************************************!*\
  !*** ./src/views/docs/design/index.vue?vue&type=template&id=59f9576b ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_17_use_0_index_vue_vue_type_template_id_59f9576b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_17_use_0_index_vue_vue_type_template_id_59f9576b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./index.vue?vue&type=template&id=59f9576b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[17].use[0]!./src/views/docs/design/index.vue?vue&type=template&id=59f9576b");


/***/ })

}]);
//# sourceMappingURL=src_views_docs_design_index_vue.js.map