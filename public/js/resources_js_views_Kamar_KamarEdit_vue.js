"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Kamar_KamarEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kamar_components_EditDataKamar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../kamar-components/EditDataKamar */ "./resources/js/views/kamar-components/EditDataKamar.vue");
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
    EditDataKamar: _kamar_components_EditDataKamar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
  name: 'EditDataKamar',
  data: function data() {
    return {
      form: {
        nama_kamar: null,
        harga_kamar: null,
        jumlah_kamar: null,
        foto_kamar: null,
        deskripsi_kamar: null
      },
      preview: null,
      errors: {
        isError: false,
        message: null
      }
    };
  },
  beforeMount: function beforeMount() {
    this.getDataKamar(this.$route.params.id);
  },
  methods: {
    getDataKamar: function getDataKamar(id) {
      var _this = this;

      axios("/api/v1/kamar/".concat(id)).then(function (response) {
        console.log('oke getDataKamar', response.data);
        var _response$data = response.data,
            nama_kamar = _response$data.nama_kamar,
            harga_kamar = _response$data.harga_kamar,
            jumlah_kamar = _response$data.jumlah_kamar,
            foto_kamar = _response$data.foto_kamar,
            deskripsi_kamar = _response$data.deskripsi_kamar;
        _this.form.nama_kamar = nama_kamar;
        _this.form.harga_kamar = harga_kamar;
        _this.form.jumlah_kamar = jumlah_kamar;
        _this.form.deskripsi_kamar = deskripsi_kamar;
        _this.preview = foto_kamar;
        _this.form.foto_kamar = foto_kamar;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    fileImage: function fileImage(e) {
      this.form.foto_kamar = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
    update: function update() {
      var _this2 = this;

      var formData = new FormData();
      var _this$form = this.form,
          nama_kamar = _this$form.nama_kamar,
          harga_kamar = _this$form.harga_kamar,
          jumlah_kamar = _this$form.jumlah_kamar,
          foto_kamar = _this$form.foto_kamar,
          deskripsi_kamar = _this$form.deskripsi_kamar;
      formData.append('nama_kamar', nama_kamar);
      formData.append('harga_kamar', harga_kamar);
      formData.append('jumlah_kamar', jumlah_kamar);
      formData.append('foto_kamar', foto_kamar);
      formData.append('deskripsi_kamar', deskripsi_kamar);
      console.log('oke update', this.form);
      console.log('oke updateFormData', formData);
      console.log('nama_kamar', nama_kamar);
      console.log('harga_kamar', harga_kamar);
      axios.post("/api/v1/kamar/".concat(this.$route.params.id, "?_method=PUT"), formData).then(function (response) {
        var result = response.data.result;
        console.log('result update', result);

        _this2.$emit('data_added', result);

        _this2.$bvToast.toast('Data berhasil diupdate.', {
          title: 'Info',
          toaster: 'b-toaster-top-right',
          solid: true,
          appendToast: false
        });

        setTimeout(function () {
          _this2.$router.push({
            name: 'admin-kamar'
          });
        }, 2000);
      })["catch"](function (e) {
        _this2.$bvToast.toast('Data gagal diupdate', {
          title: 'Info',
          toaster: 'b-toaster-top-right',
          solid: true,
          appendToast: false
        });

        setTimeout(function () {
          _this2.$router.push({
            name: 'admin-kamar'
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
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationProvider
  }
});

/***/ }),

/***/ "./resources/js/views/Kamar/KamarEdit.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Kamar/KamarEdit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KamarEdit.vue?vue&type=template&id=72d216fc& */ "./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc&");
/* harmony import */ var _KamarEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KamarEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KamarEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Kamar/KamarEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/kamar-components/EditDataKamar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/kamar-components/EditDataKamar.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDataKamar.vue?vue&type=template&id=76c3b9c2& */ "./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2&");
/* harmony import */ var _EditDataKamar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDataKamar.vue?vue&type=script&lang=js& */ "./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditDataKamar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/kamar-components/EditDataKamar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KamarEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KamarEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KamarEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDataKamar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDataKamar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDataKamar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KamarEdit_vue_vue_type_template_id_72d216fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KamarEdit.vue?vue&type=template&id=72d216fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc&");


/***/ }),

/***/ "./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDataKamar_vue_vue_type_template_id_76c3b9c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDataKamar.vue?vue&type=template&id=76c3b9c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Kamar/KamarEdit.vue?vue&type=template&id=72d216fc& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                _vm._v("Edit Data Kamar"),
              ]),
              _vm._v(" "),
              _c("EditDataKamar"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/kamar-components/EditDataKamar.vue?vue&type=template&id=76c3b9c2& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      { ref: "form", attrs: { enctype: "multipart/form-data" } },
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Nama Kamar", "label-for": "nama_kamar" } },
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
                                    rawName: "v-model",
                                    value: _vm.form.nama_kamar,
                                    expression: "form.nama_kamar",
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  id: "nama_kamar",
                                  type: "text",
                                  autofocus: "",
                                  required: "",
                                },
                                domProps: { value: _vm.form.nama_kamar },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "nama_kamar",
                                      $event.target.value
                                    )
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
                  {
                    attrs: {
                      label: "Deskripsi Kamar",
                      "label-for": "deskripsi",
                    },
                  },
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
                                    rawName: "v-model",
                                    value: _vm.form.deskripsi_kamar,
                                    expression: "form.deskripsi_kamar",
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  id: "deskripsi",
                                  type: "text",
                                  required: "",
                                },
                                domProps: { value: _vm.form.deskripsi_kamar },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "deskripsi_kamar",
                                      $event.target.value
                                    )
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
                  { attrs: { label: "Jumlah", "label-for": "jumlah" } },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required" },
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
                                    value: _vm.form.jumlah_kamar,
                                    expression: "form.jumlah_kamar",
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  name: "jumlah",
                                  type: "number",
                                  required: "",
                                },
                                domProps: { value: _vm.form.jumlah_kamar },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "jumlah_kamar",
                                      $event.target.value
                                    )
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
                  { attrs: { label: "Harga", "label-for": "harga" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.harga_kamar,
                          expression: "form.harga_kamar",
                        },
                      ],
                      class: !!_vm.errors.isError
                        ? "form-control is-invalid"
                        : "form-control",
                      attrs: { name: "harga", type: "number", required: "" },
                      domProps: { value: _vm.form.harga_kamar },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "harga_kamar", $event.target.value)
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
          "b-row",
          [
            _c(
              "b-col",
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Foto Kamar", "label-for": "foto_kamar" } },
                  [
                    _c("input", {
                      class: !!_vm.errors.isError
                        ? "form-control is-invalid"
                        : "form-control",
                      attrs: {
                        name: "foto_kamar",
                        type: "file",
                        accept: "image/*",
                      },
                      on: { change: _vm.fileImage },
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
        _vm.preview
          ? _c(
              "b-row",
              [
                _c("b-col", [
                  _c("p", [_vm._v("Preview: ")]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "img-fluid mb-3",
                    staticStyle: { "border-radius": "10px" },
                    attrs: { src: _vm.preview },
                  }),
                ]),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: { variant: "outline-primary", size: "sm" },
            on: { click: _vm.update },
          },
          [_vm._v("Update Kamar")]
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