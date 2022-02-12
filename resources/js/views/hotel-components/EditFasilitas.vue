<template>
  <div>
      <form ref="form" enctype="multipart/form-data">
          <b-row>
           <b-col>
            <b-form-group
              label="Nama Kamar"
              label-for="nama_fasilitas_hotel"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="nama_fasilitas_hotel"
                  v-model="form.nama_fasilitas_hotel"
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
                  v-model="form.deskripsi_fasilitas_hotel"
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
              label="Foto Kamar"
              label-for="foto_fasilitas_hotel"
             >
              <input
                  name="foto_fasilitas_hotel"
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
          <b-button variant="outline-primary" size="sm" @click="update">Update Fasilitas</b-button>
          <b-button variant="outline-danger" size="sm" @click="$router.go(-1)">Kembali</b-button>
        </form>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapState } from 'vuex'

export default {
    data() {
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
        }
    },
    beforeMount() {
        this.getDataKamar(this.$route.params.id)
    },
    methods: {
        getDataKamar(id) {
            axios(`/api/v1/fasilitas-hotel/${id}`)
                .then(response =>  {
                    let { result } = response.data
                    console.log('oke getDataHotel', result)
                    let { nama_fasilitas_hotel, foto_fasilitas_hotel, deskripsi_fasilitas_hotel } = result
                    this.form.nama_fasilitas_hotel = nama_fasilitas_hotel
                    this.form.deskripsi_fasilitas_hotel = deskripsi_fasilitas_hotel
                    this.preview = foto_fasilitas_hotel
                    this.form.foto_fasilitas_hotel = foto_fasilitas_hotel
                })
                .catch(e => console.log(e))
        },
        fileImage(e) {
            this.form.foto_fasilitas_hotel = e.target.files[0]
            this.preview = URL.createObjectURL(e.target.files[0])
        },
        update() {
            var formData = new FormData()

            var {
                nama_fasilitas_hotel,
                foto_fasilitas_hotel,
                deskripsi_fasilitas_hotel
            } = this.form

            formData.append('nama_fasilitas_hotel', nama_fasilitas_hotel)
            formData.append('foto_fasilitas_hotel', foto_fasilitas_hotel)
            formData.append('deskripsi_fasilitas_hotel', deskripsi_fasilitas_hotel)

            console.log('oke update', this.form)
            console.log('oke updateFormData', formData)
            console.log('nama_fasilitas_hotel', nama_fasilitas_hotel)
            axios.post(`/api/v1/fasilitas-hotel/${this.$route.params.id}?_method=PUT`, formData)
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
                        setTimeout(() => { this.$router.push({ name: 'admin-hotel' }) }, 2000)
                    })
                    .catch(e => {
                        this.$bvToast.toast('Data gagal diupdate', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-hotel' }) }, 2000)
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
