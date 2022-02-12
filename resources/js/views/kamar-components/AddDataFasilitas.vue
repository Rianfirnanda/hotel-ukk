<template>
  <div>
      <form ref="form" enctype="multipart/form-data">
          <b-row>
           <b-col>
            <b-form-group
              label="Nama Fasilitas Kamar"
              label-for="nama_fasilitas"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="nama_fasilitas"
                  v-model="form.nama_fasilitas_kamar"
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
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="add">Tambah Fasilitas</b-button>
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
                kamar_id: this.$route.query.kamar_id,
                nama_fasilitas_kamar: null,
            },
            errors: {
                isError: false,
                message: null
            }
        }
    },
    computed: {
    },
    methods: {
        fileImage(e) {
            this.form.foto_kamar = e.target.files[0]
            this.preview = URL.createObjectURL(e.target.files[0])
        },
        add() {
            console.log('oke', this.form)
            axios.post('/api/v1/fasilitas-kamar', this.form)
                    .then(response => {
                        let { result } = response.data
                        console.log(result)
                        this.$emit('data_added', result)
                        this.$bvToast.toast('Data berhasil ditambahkan.', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-kamar-fasilitas', params: {id: this.form.kamar_id }}) }, 2000)
                    })
                    .catch(e => {
                        this.$bvToast.toast('Data gagal ditambahkan', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-kamar-fasilitas', params: { id: this.form.kamar_id} }) }, 2000)
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
        }
    },
    components: { ValidationProvider }
}
</script>
