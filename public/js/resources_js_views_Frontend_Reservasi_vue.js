"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Frontend_Reservasi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _frontend_components_Reservasi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend-components/Reservasi */ "./resources/js/views/frontend-components/Reservasi.vue");
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Reservasi: _frontend_components_Reservasi__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        nama_pemesan: null,
        email_pemesan: null,
        no_hp: null,
        nama_tamu: null
      },
      user: null
    };
  },
  beforeMount: function beforeMount() {
    if (!this._reservasi) {
      this.$router.push({
        name: 'home'
      });
    }

    this.check();
  },
  computed: {
    _reservasi: function _reservasi() {
      var data = localStorage.getItem('_reservasi');
      return data;
    }
  },
  methods: {
    reservasi: function reservasi() {
      var _this$user;

      var data1 = JSON.parse(this._reservasi);

      var data2 = _objectSpread(_objectSpread({}, data1), this.form);

      var _reservasi = JSON.stringify(data2);

      localStorage.setItem('_reservasi', _reservasi);

      if (!this.user) {
        this.$router.push({
          name: 'Register'
        });
      }

      _reservasi = JSON.parse(_reservasi);
      data2 = _objectSpread(_objectSpread({}, _reservasi), {}, {
        admin_id: (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id
      });
      _reservasi = JSON.stringify(data2);
      localStorage.setItem('_reservasi', _reservasi);
      console.log('user:', this.user);
      console.log(_reservasi);
      console.log(this.form);
    },
    check: function check() {
      var _this = this;

      axios('/api/user').then(function (_ref) {
        var data = _ref.data;
        _this.user = data;
      })["catch"](function (e) {
        _this.user = null;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Frontend/Reservasi.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Frontend/Reservasi.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservasi.vue?vue&type=template&id=37174fe0& */ "./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0&");
/* harmony import */ var _Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservasi.vue?vue&type=script&lang=js& */ "./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Frontend/Reservasi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend-components/Reservasi.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/frontend-components/Reservasi.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservasi.vue?vue&type=template&id=57c8a4be& */ "./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be&");
/* harmony import */ var _Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservasi.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend-components/Reservasi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reservasi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reservasi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_37174fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reservasi.vue?vue&type=template&id=37174fe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0&");


/***/ }),

/***/ "./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservasi_vue_vue_type_template_id_57c8a4be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reservasi.vue?vue&type=template&id=57c8a4be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Frontend/Reservasi.vue?vue&type=template&id=37174fe0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("Reservasi")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend-components/Reservasi.vue?vue&type=template&id=57c8a4be& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { staticClass: "sticky p-lg-0", attrs: { lg: "12" } },
        [
          _c(
            "b-card",
            { staticClass: "shadow" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-end flex-wrap",
                },
                [
                  _c("h2", { staticClass: "mb-0" }, [_vm._v("Reservasi")]),
                  _vm._v(" "),
                  _c("span"),
                ]
              ),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-form",
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Nama",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Nama" },
                        model: {
                          value: _vm.form.nama_pemesan,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "nama_pemesan", $$v)
                          },
                          expression: "form.nama_pemesan",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Email",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          type: "email",
                          placeholder: "Email (required)",
                        },
                        model: {
                          value: _vm.form.email_pemesan,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "email_pemesan", $$v)
                          },
                          expression: "form.email_pemesan",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "No Hp",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "08229926xxxx" },
                        model: {
                          value: _vm.form.no_hp,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "no_hp", $$v)
                          },
                          expression: "form.no_hp",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Nama Tamu",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Nama Tamu (opsional)" },
                        model: {
                          value: _vm.form.nama_tamu,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "nama_tamu", $$v)
                          },
                          expression: "form.nama_tamu",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: { click: _vm.reservasi },
                        },
                        [_vm._v("Reservasi!")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);