webpackJsonp([1],{

/***/ "1vi7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/common/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.componentName;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ var emitter = ({
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=script&index=0!./src/modules/todos/pages/home.vue
//
//
//
//
//


/* harmony default export */ var home = ({
    name: 'home',
    mixins: [emitter],
    data: function data() {
        return {};
    },

    components: {},
    methods: {},
    watch: {},
    computed: {},
    mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.0.5@vue-loader/lib/template-compiler?{"id":"data-v-c2552f7e","hasScoped":false}!./node_modules/_vue-loader@13.0.5@vue-loader/lib/selector.js?type=template&index=0!./src/modules/todos/pages/home.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "todo-home" }, [_vm._v("\ntodo-home\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_home = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__("3Ml0").rerender("data-v-c2552f7e", esExports)
  }
}
// CONCATENATED MODULE: ./src/modules/todos/pages/home.vue
var disposed = false
var normalizeComponent = __webpack_require__("o7Pn")
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  home,
  pages_home,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/todos/pages/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("3Ml0")
  hotAPI.install(__webpack_require__("E+ia"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2552f7e", Component.options)
  } else {
    hotAPI.reload("data-v-c2552f7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var todos_pages_home = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=chunk.home.74b4aca0532e98b8023d.js.map