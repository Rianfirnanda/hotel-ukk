"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Auth__Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['brand'],
  data: function data() {
    return {
      form: {
        username: null,
        level: 'tamu',
        nama: null,
        password: null
      },
      year: new Date().getFullYear(),
      hitError: 0,
      forgotPass: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    error_messages: function error_messages(state) {
      return state.error_messages;
    },
    success_messages: function success_messages(state) {
      return state.success_messages;
    },
    isError: function isError(state) {
      return state.isError;
    },
    isSuccess: function isSuccess(state) {
      return state.isSuccess;
    }
  })),
  methods: {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('register', {
                  value: _this.form
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close() {
      this.$store.dispatch('close');

      this._hitError();
    },
    _hitError: function _hitError() {
      ++this.hitError;
    },
    strfilter: function strfilter(v) {
      this.form.username = this.form.username.replace(/\@|\<|\>|\/|\(|\)/g, '');
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__.ValidationProvider
  }
});

/***/ }),

/***/ "./resources/js/views/Auth/_Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Auth/_Register.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Register.vue?vue&type=template&id=16037c4c& */ "./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/_Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_16037c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_Register.vue?vue&type=template&id=16037c4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/_Register.vue?vue&type=template&id=16037c4c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "section" }, [
      _c("div", { staticClass: "container mt-5" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4",
            },
            [
              _vm.isError || _vm.isSuccess
                ? _c(
                    "div",
                    {
                      class:
                        "alert alert-" +
                        (_vm.isError ? "danger" : "success") +
                        " alert-dismissible fade show",
                      attrs: { role: "alert" },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.isError
                              ? _vm.error_messages[0]
                              : _vm.success_messages[0]
                          ) +
                          "\n                        "
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: {
                            type: "button",
                            "data-dismiss": "alert",
                            "aria-label": "Close",
                          },
                          on: { click: _vm.close },
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("??"),
                          ]),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card card-primary" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("span", { staticClass: "mdi mdi-beach font-18" }),
                  _vm._v(" "),
                  _c("h4", [_vm._v(_vm._s(_vm.brand))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.register.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "nama" } }, [
                            _vm._v("Nama"),
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required|min:4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.nama,
                                          expression: "form.nama",
                                        },
                                      ],
                                      class: errors.length
                                        ? "form-control is-invalid"
                                        : "form-control",
                                      attrs: {
                                        id: "nama",
                                        type: "text",
                                        tabindex: "1",
                                        placeholder:
                                          "contoh: Ibnu Syawal As Salim",
                                        autofocus: "",
                                      },
                                      domProps: { value: _vm.form.nama },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "nama",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(errors[0]) +
                                            "\n                                        "
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "username" } }, [
                            _vm._v("Username"),
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required|min:4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.username,
                                          expression: "form.username",
                                        },
                                      ],
                                      class: errors.length
                                        ? "form-control is-invalid"
                                        : "form-control",
                                      attrs: {
                                        id: "username",
                                        type: "text",
                                        tabindex: "1",
                                        placeholder: "contoh: isywl",
                                      },
                                      domProps: { value: _vm.form.username },
                                      on: {
                                        input: [
                                          function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "username",
                                              $event.target.value
                                            )
                                          },
                                          _vm.strfilter,
                                        ],
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(errors[0]) +
                                            "\n                                        "
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("div", { staticClass: "d-block" }, [
                            _c(
                              "label",
                              {
                                staticClass: "control-label",
                                attrs: { for: "password" },
                              },
                              [_vm._v("Password")]
                            ),
                            _vm._v(" "),
                            _vm.hitError >= 3
                              ? _c("div", { staticClass: "float-right" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-small",
                                      attrs: { href: "" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                               Forgot Password?\n                                           "
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required|min:4" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.password,
                                          expression: "form.password",
                                        },
                                      ],
                                      class: errors.length
                                        ? "form-control is-invalid"
                                        : "form-control",
                                      attrs: {
                                        "aria-describedby": "passwordHelpBlock",
                                        id: "password",
                                        type: "password",
                                        tabindex: "2",
                                        placeholder: "****",
                                      },
                                      domProps: { value: _vm.form.password },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "password",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(errors[0]) +
                                            "\n                                       "
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(0),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-5 text-muted text-center" },
                [
                  _vm._v("\n                        Sudah memiliki Akun? "),
                  _c("router-link", { attrs: { to: "/login" } }, [
                    _vm._v("Masuk"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "simple-footer text-center mt-3" }, [
                _vm._v(
                  "\n                        Copyright ?? " +
                    _vm._s(_vm.brand) +
                    " " +
                    _vm._s(_vm.year) +
                    "\n                    "
                ),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-lg btn-block",
          attrs: { type: "submit", tabindex: "4" },
        },
        [
          _vm._v(
            "\n                                        Register\n                                    "
          ),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);