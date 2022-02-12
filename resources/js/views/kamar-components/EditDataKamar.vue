<template>
  <div>
      <form ref="form" enctype="multipart/form-data">
          <b-row>
           <b-col>
            <b-form-group
              label="Nama Kamar"
              label-for="nama_kamar"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="nama_kamar"
                  v-model="form.nama_kamar"
                  type="text"
                  :class="errors.length ? 'form-control is-invalid' : 'form-control'"
                  autofocus
                  required
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </b-form-group>
           </b-col>

           <b-col>
            <b-form-group
              label="Deskripsi Kamar"
              label-for="deskripsi"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="deskripsi"
                  v-model="form.deskripsi_kamar"
                  type="text"
                  :class="errors.length ? 'form-control is-invalid' : 'form-control'"
                  required
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </b-form-group>
           </b-col>
          </b-row>

          <b-row>
           <b-col>
            <b-form-group
              label="Jumlah"
              label-for="jumlah"
            >
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  name="jumlah"
                  v-model="form.jumlah_kamar"
                  type="number"
                  :class="errors.length ? 'form-control is-invalid' : 'form-control'"
                  required
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </ValidationProvider>
            </b-form-group>
           </b-col>
         <b-col>
            <b-form-group
              label="Harga"
              label-for="harga"
            >
              <input
                  name="harga"
                  v-model="form.harga_kamar"
                  type="number"
                  :class="!!errors.isError ? 'form-control is-invalid' : 'form-control'"
                  required
              />
              <div class="invalid-feedback">
                  {{ errors.message }}
              </div>
            </b-form-group>
           </b-col>
          </b-row>
          <b-row>
           <b-col>
             <b-form-group
              label="Foto Kamar"
              label-for="foto_kamar"
             >
              <input
                  name="foto_kamar"
                  type="file"
                  accept="image/*"
                  @change="fileImage"
                  :class="!!errors.isError ? 'form-control is-invalid' : 'form-control'"
              />
              <div class="invalid-feedback">
                  {{ errors.message }}
              </div>
             </b-form-group>
           </b-col>
          </b-row>
          <b-row v-if="preview">
           <b-col>
               <p>Preview: </p>
               <img class="img-fluid mb-3" :src="preview" style="border-radius: 10px;"/>
           </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="update">Update Kamar</b-button>
          <b-button variant="outline-danger" size="sm" @click="$router.go(-1)">Kembali</b-button>
        </form>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapState } from 'vuex'

export default {
    name: 'EditDataKamar',
    data() {
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
        }
    },
    beforeMount() {
        this.getDataKamar(this.$route.params.id)
    },
    methods: {
        getDataKamar(id) {
            axios(`/api/v1/kamar/${id}`)
                .then(response => {
                    console.log('oke getDataKamar', response.data)
                    let { nama_kamar, harga_kamar, jumlah_kamar, foto_kamar, deskripsi_kamar } = response.data
                    this.form.nama_kamar = nama_kamar
                    this.form.harga_kamar = harga_kamar
                    this.form.jumlah_kamar = jumlah_kamar
                    this.form.deskripsi_kamar = deskripsi_kamar
                    this.preview = foto_kamar
                    this.form.foto_kamar = foto_kamar
                })
                .catch(e => console.log(e))
        },
        fileImage(e) {
            this.form.foto_kamar = e.target.files[0]
            this.preview = URL.createObjectURL(e.target.files[0])
        },
        update() {
            var formData = new FormData()

            var {
                nama_kamar,
                harga_kamar,
                jumlah_kamar,
                foto_kamar,
                deskripsi_kamar
            } = this.form

            formData.append('nama_kamar', nama_kamar)
            formData.append('harga_kamar', harga_kamar)
            formData.append('jumlah_kamar', jumlah_kamar)
            formData.append('foto_kamar', foto_kamar)
            formData.append('deskripsi_kamar', deskripsi_kamar)

            console.log('oke update', this.form)
            console.log('oke updateFormData', formData)
console.log('nama_kamar', nama_kamar)
console.log('harga_kamar', harga_kamar)
            axios.post(`/api/v1/kamar/${this.$route.params.id}?_method=PUT`, formData)
                    .then(response => {
                        let { result } = response.data
                        console.log('result update', result)
                        this.$emit('data_added', result)
                        this.$bvToast.toast('Data berhasil diupdate.', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-kamar' }) }, 2000)
                    })
                    .catch(e => {
                        this.$bvToast.toast('Data gagal diupdate', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-kamar' }) }, 2000)
                        console.log(e)
                    })

        },
        oke(e) {
            e.preventDefault()
            this.add()
        },
        _trim(type) {
            this.form[type] = this.form[type].replace(/\@|\.|\<|\>|\/|\(|\)| +/g, '')
        },
        same_pass() {
            if (this.form.re_pass != this.form.password) {
                this.errors.isError = true
                this.errors.message = 'Password confirmation does not match'
            } else {
                this.errors.isError = false
                this.errors.message = null
            }
        },
        
    },
    components: { ValidationProvider }
}
</script>
