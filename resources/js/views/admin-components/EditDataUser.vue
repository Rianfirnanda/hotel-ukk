<template>
  <div>
      <form ref="form">
          <b-row>
           <b-col>
            <b-form-group
              label="Nama"
              label-for="nama"
            >
              <input
                  id="nama"
                  v-model.trim="form.nama"
                  type="text"
                  class="form-control"
                  autofocus
                  placeholder="nama"
              />
            </b-form-group>
           </b-col>
          
           <b-col>
            <b-form-group
              label="Username"
              label-for="username"
            >
              <input
                  id="username"
                  v-model.trim="form.username"
                  @input="_trim('username')"
                  type="text"
                  class="form-control"
                  placeholder="username"
              />
            </b-form-group>
           </b-col>
          </b-row>

          <b-row>
           <b-col>
            <b-form-group
              label="Password"
              label-for="password"
            >
              <input
                  name="password"
                  ref="password"
                  v-model.trim="form.password"
                  @input="_trim('password')"
                  type="password"
                  class="form-control"
                  placeholder="****"
              />
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
                  class="form-control"
                  placeholder="****"
              />
            </b-form-group>
           </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="update">Update</b-button>
          <b-button variant="outline-danger" size="sm" @click="$router.go(-1)">Kembali</b-button>
        </form>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapState } from 'vuex'

export default {
    name: 'EditDataUser',
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
    beforeMount() {
        this.getDataUser(this.$route.params.id)
    },
    methods: {
        getDataUser(id) {
            axios(`/api/v1/admin/${id}`)
                .then(response => {
                    console.log('oke', response.data)
                    let { result } = response?.data
                    let { nama, username } = result
                    this.form.username = username
                    this.form.nama = nama
                })
                .catch(e => console.log(e))
        },
        update() {
            var data = {
                username: this.form.username,
                password: this.form.password,
                level: this.form.level,
                nama: this.form.nama
            }
            console.log('oke')
            axios.put(`/api/v1/admin/${this.$route.params.id}`, data)
                    .then(response => {
                        let { result } = response.data
                        console.log(result)
                        this.$emit('data_added', result)
                        this.$bvToast.toast('Data berhasil diupdate.', {
                            title: 'Info',
                            toaster: 'b-toaster-top-right',
                            solid: true,
                            appendToast: false
                        })
                        setTimeout(() => { this.$router.push({ name: 'admin-users' }) }, 2000)
                    })
                    .catch(e => {
                        this.$bvToast.toast('Data gagal diupdate', {
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
        },
        
    },
    components: { ValidationProvider }
}
</script>
