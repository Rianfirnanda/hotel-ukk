"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Admin_UserAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_AddDataUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../admin-components/AddDataUser */ "./resources/js/views/admin-components/AddDataUser.vue");
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
  components: {
    AddDataUser: _admin_components_AddDataUser__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'AddDataUser',
  data: function data() {
    return {
      form: {
        username: null,
        password: null,
        re_pass: null,
        level: 'resepsionis',
        nama: null
      },
      errors: {
        isError: false,
        message: null
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    isError: function isError(state) {
      return state.isError;
    },
    isSuccess: function isSuccess(state) {
      return state.isSuccess;
    },
    error_messages: function error_messages(state) {
      return state.error_messages;
    },
    success_messages: function success_messages(state) {
      return state.succesa_messages;
    }
  })),
  methods: {
    add: function add() {
      var _this = this;

      var data = {
        username: this.form.username,
        password: this.form.password,
        level: this.form.level,
        nama: this.form.nama
      };
      console.log('oke');
      axios.post('/api/v1/admin', data).then(function (response) {
        var result = response.data.result;
        console.log(result);

        _this.$emit('data_added', result);

        _this.$bvToast.toast('Data berhasil ditambahkan.', {
          title: 'Info',
          toaster: 'b-toaster-top-right',
          solid: true,
          appendToast: false
        });

        setTimeout(function () {
          _this.$router.push({
            name: 'admin-users'
          });
        }, 2000);
      })["catch"](function (e) {
        _this.$bvToast.toast('Data gagal ditambahkan', {
          title: 'Info',
          toaster: 'b-toaster-top-right',
          solid: true,
          appendToast: false
        });

        setTimeout(function () {
          _this.$router.push({
            name: 'admin-users'
          });
        }, 2000);
        console.log(e);
      });
    },
    oke: function oke(e) {
      e.preventDefault();
      this.add();
    },
    _trim: function _trim(type) {
      this.form[type] = this.form[type].replace(/\@|\.|\<|\>|\/|\(|\)| +/g, '');
    },
    same_pass: function same_pass() {
      if (this.form.re_pass != this.form.password) {
        this.errors.isError = true;
        this.errors.message = 'Password confirmation does not match';
      } else {
        this.errors.isError = false;
        this.errors.message = null;
      }
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider
  }
});

/***/ }),

/***/ "./resources/js/views/Admin/UserAdd.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Admin/UserAdd.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=template&id=282c2f32& */ "./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32&");
/* harmony import */ var _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/UserAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin-components/AddDataUser.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/admin-components/AddDataUser.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDataUser.vue?vue&type=template&id=3c6451fa& */ "./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa&");
/* harmony import */ var _AddDataUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDataUser.vue?vue&type=script&lang=js& */ "./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDataUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin-components/AddDataUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDataUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_282c2f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAdd.vue?vue&type=template&id=282c2f32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32&");


/***/ }),

/***/ "./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataUser_vue_vue_type_template_id_3c6451fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDataUser.vue?vue&type=template&id=3c6451fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/UserAdd.vue?vue&type=template&id=282c2f32& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-card",
        { staticClass: "mb-4", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-body",
            [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Tambah Data User"),
              ]),
              _vm._v(" "),
              _c("AddDataUser"),
              _vm._v(" "),
              _c("h6", {
                staticClass: "card-subtitle font-weight-normal text-muted",
              }),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin-components/AddDataUser.vue?vue&type=template&id=3c6451fa& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      { ref: "form" },
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Nama", "label-for": "nama" } },
                  [
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
                                    rawName: "v-model.trim",
                                    value: _vm.form.nama,
                                    expression: "form.nama",
                                    modifiers: { trim: true },
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  id: "nama",
                                  type: "text",
                                  autofocus: "",
                                  required: "",
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
                                      $event.target.value.trim()
                                    )
                                  },
                                  blur: function ($event) {
                                    return _vm.$forceUpdate()
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(errors[0]) +
                                    "\n              "
                                ),
                              ]),
                            ]
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Username", "label-for": "username" } },
                  [
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
                                    rawName: "v-model.trim",
                                    value: _vm.form.username,
                                    expression: "form.username",
                                    modifiers: { trim: true },
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  id: "username",
                                  type: "text",
                                  autofocus: "",
                                  required: "",
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
                                        $event.target.value.trim()
                                      )
                                    },
                                    function ($event) {
                                      return _vm._trim("username")
                                    },
                                  ],
                                  blur: function ($event) {
                                    return _vm.$forceUpdate()
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(errors[0]) +
                                    "\n              "
                                ),
                              ]),
                            ]
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Password", "label-for": "password" } },
                  [
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
                                    rawName: "v-model.trim",
                                    value: _vm.form.password,
                                    expression: "form.password",
                                    modifiers: { trim: true },
                                  },
                                ],
                                ref: "password",
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  name: "password",
                                  type: "password",
                                  autofocus: "",
                                  required: "",
                                },
                                domProps: { value: _vm.form.password },
                                on: {
                                  input: [
                                    function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "password",
                                        $event.target.value.trim()
                                      )
                                    },
                                    function ($event) {
                                      return _vm._trim("password")
                                    },
                                  ],
                                  blur: function ($event) {
                                    return _vm.$forceUpdate()
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(errors[0]) +
                                    "\n              "
                                ),
                              ]),
                            ]
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Re Password", "label-for": "re_pass" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.form.re_pass,
                          expression: "form.re_pass",
                          modifiers: { trim: true },
                        },
                      ],
                      class: !!_vm.errors.isError
                        ? "form-control is-invalid"
                        : "form-control",
                      attrs: {
                        name: "re_pass",
                        type: "password",
                        required: "",
                      },
                      domProps: { value: _vm.form.re_pass },
                      on: {
                        input: [
                          function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "re_pass",
                              $event.target.value.trim()
                            )
                          },
                          _vm.same_pass,
                        ],
                        blur: function ($event) {
                          return _vm.$forceUpdate()
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errors.message) +
                          "\n            "
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: { variant: "outline-primary", size: "sm" },
            on: { click: _vm.add },
          },
          [_vm._v("Tambah")]
        ),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: { variant: "outline-danger", size: "sm" },
            on: {
              click: function ($event) {
                return _vm.$router.go(-1)
              },
            },
          },
          [_vm._v("Kembali")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);