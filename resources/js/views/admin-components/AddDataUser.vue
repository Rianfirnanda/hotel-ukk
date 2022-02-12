<template>
  <div>
      <form ref="form">
          <b-row>
           <b-col>
            <b-form-group
              label="Nama"
              label-for="nama"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="nama"
                  v-model.trim="form.nama"
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
              label="Username"
              label-for="username"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  id="username"
                  v-model.trim="form.username"
                  @input="_trim('username')"
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

          <b-row>
           <b-col>
            <b-form-group
              label="Password"
              label-for="password"
            >
              <ValidationProvider
                rules="required|min:4"
                v-slot="{ errors }"
              >
                <input
                  name="password"
                  ref="password"
                  v-model.trim="form.password"
                  @input="_trim('password')"
                  type="password"
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
              label="Re Password"
              label-for="re_pass"
            >
              <input
                  name="re_pass"
                  v-model.trim="form.re_pass"
                  @input="same_pass"
                  type="password"
                  :class="!!errors.isError ? 'form-control is-invalid' : 'form-control'"
                  required
              />
              <div class="invalid-feedback">
                  {{ errors.message }}
              </div>
            </b-form-group>
           </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="add">Tambah</b-button>
          <b-button variant="outline-danger" size="sm" @click="$router.go(-1)">Kembali</b-button>
        </form>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapState } from 'vuex'

export default {
    name: 'AddDataUser',
    data() {
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
        }
    },
    computed: {
        ...mapState({
            isError: state => state.isError,
            isSuccess: state => state.isSuccess,
            error_messages: state => state.error_messages,
            success_messages: state => state.succesa_messages
        }),
    },
    methods: {
        add() {
            var data = {
                username: this.form.username,
                password: this.form.password,
                level: this.form.level,
                nama: this.form.nama
            }
            console.log('oke')
            axios.post('/api/v1/admin', data)
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
                        setTimeout(() => { this.$router.push({ name: 'admin-users' }) }, 2000)
                    })
                    .catch(e => {
                        this.$bvToast.toast('Data gagal ditambahkan', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-users' }) }, 2000)
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
