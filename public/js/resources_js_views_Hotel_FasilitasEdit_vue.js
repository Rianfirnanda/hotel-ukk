"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Hotel_FasilitasEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hotel_components_EditFasilitas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../hotel-components/EditFasilitas */ "./resources/js/views/hotel-components/EditFasilitas.vue");
//
//
//
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
    EditFasilitas: _hotel_components_EditFasilitas__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        nama_fasilitas_hotel: null,
        foto_fasilitas_hotel: null,
        deskripsi_fasilitas_hotel: null
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

      axios("/api/v1/fasilitas-hotel/".concat(id)).then(function (response) {
        var result = response.data.result;
        console.log('oke getDataHotel', result);
        var nama_fasilitas_hotel = result.nama_fasilitas_hotel,
            foto_fasilitas_hotel = result.foto_fasilitas_hotel,
            deskripsi_fasilitas_hotel = result.deskripsi_fasilitas_hotel;
        _this.form.nama_fasilitas_hotel = nama_fasilitas_hotel;
        _this.form.deskripsi_fasilitas_hotel = deskripsi_fasilitas_hotel;
        _this.preview = foto_fasilitas_hotel;
        _this.form.foto_fasilitas_hotel = foto_fasilitas_hotel;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    fileImage: function fileImage(e) {
      this.form.foto_fasilitas_hotel = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
    update: function update() {
      var _this2 = this;

      var formData = new FormData();
      var _this$form = this.form,
          nama_fasilitas_hotel = _this$form.nama_fasilitas_hotel,
          foto_fasilitas_hotel = _this$form.foto_fasilitas_hotel,
          deskripsi_fasilitas_hotel = _this$form.deskripsi_fasilitas_hotel;
      formData.append('nama_fasilitas_hotel', nama_fasilitas_hotel);
      formData.append('foto_fasilitas_hotel', foto_fasilitas_hotel);
      formData.append('deskripsi_fasilitas_hotel', deskripsi_fasilitas_hotel);
      console.log('oke update', this.form);
      console.log('oke updateFormData', formData);
      console.log('nama_fasilitas_hotel', nama_fasilitas_hotel);
      axios.post("/api/v1/fasilitas-hotel/".concat(this.$route.params.id, "?_method=PUT"), formData).then(function (response) {
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
            name: 'admin-hotel'
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
            name: 'admin-hotel'
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

/***/ "./resources/js/views/Hotel/FasilitasEdit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Hotel/FasilitasEdit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FasilitasEdit.vue?vue&type=template&id=5509f378& */ "./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378&");
/* harmony import */ var _FasilitasEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FasilitasEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FasilitasEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__.render,
  _FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Hotel/FasilitasEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/hotel-components/EditFasilitas.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/hotel-components/EditFasilitas.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditFasilitas.vue?vue&type=template&id=9ed36e66& */ "./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66&");
/* harmony import */ var _EditFasilitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditFasilitas.vue?vue&type=script&lang=js& */ "./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditFasilitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/hotel-components/EditFasilitas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FasilitasEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FasilitasEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FasilitasEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFasilitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditFasilitas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFasilitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FasilitasEdit_vue_vue_type_template_id_5509f378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FasilitasEdit.vue?vue&type=template&id=5509f378& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378&");


/***/ }),

/***/ "./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFasilitas_vue_vue_type_template_id_9ed36e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditFasilitas.vue?vue&type=template&id=9ed36e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Hotel/FasilitasEdit.vue?vue&type=template&id=5509f378& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Edit Data Fasilitas Hotel"),
              ]),
              _vm._v(" "),
              _c("EditFasilitas"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/hotel-components/EditFasilitas.vue?vue&type=template&id=9ed36e66& ***!
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
                  {
                    attrs: {
                      label: "Nama Kamar",
                      "label-for": "nama_fasilitas_hotel",
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
                                    value: _vm.form.nama_fasilitas_hotel,
                                    expression: "form.nama_fasilitas_hotel",
                                  },
                                ],
                                class: errors.length
                                  ? "form-control is-invalid"
                                  : "form-control",
                                attrs: {
                                  id: "nama_fasilitas_hotel",
                                  type: "text",
                                  autofocus: "",
                                  required: "",
                                },
                                domProps: {
                                  value: _vm.form.nama_fasilitas_hotel,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "nama_fasilitas_hotel",
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
                                    value: _vm.form.deskripsi_fasilitas_hotel,
                                    expression:
                                      "form.deskripsi_fasilitas_hotel",
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
                                domProps: {
                                  value: _vm.form.deskripsi_fasilitas_hotel,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "deskripsi_fasilitas_hotel",
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
                  {
                    attrs: {
                      label: "Foto Kamar",
                      "label-for": "foto_fasilitas_hotel",
                    },
                  },
                  [
                    _c("input", {
                      class: !!_vm.errors.isError
                        ? "form-control is-invalid"
                        : "form-control",
                      attrs: {
                        name: "foto_fasilitas_hotel",
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
          [_vm._v("Update Fasilitas")]
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