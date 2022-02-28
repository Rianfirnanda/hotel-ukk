<template>
    <b-row>
        <b-col
            lg="12"
            class="sticky p-lg-0"
        >
            <b-card class="shadow">
                <div class="d-flex justify-content-between align-items-end flex-wrap">
                    <h2 class="mb-0">Reservasi</h2>
                    <span>
                        
                    </span>
                </div><hr>
                <b-form>
                    <b-form-group label="Nama" label-class="font-weight-bold">
                        <b-form-input
                            v-model="form.nama_pemesan"
                            placeholder="Nama"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Email" label-class="font-weight-bold">
                        <b-form-input
                            type="email"
                            v-model="form.email_pemesan"
                            placeholder="Email (required)"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="No Hp" label-class="font-weight-bold">
                        <b-form-input
                            v-model="form.no_hp"
                            placeholder="08229926xxxx"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Nama Tamu" label-class="font-weight-bold">
                        <b-form-input
                            v-model="form.nama_tamu"
                            placeholder="Nama Tamu (opsional)"
                        >
                        </b-form-input>
                    </b-form-group>
                    <div class="d-flex justify-content-between">
                        <b-button
                            variant='primary'
                            @click="reservasi"
                        >Reservasi!</b-button>
                    </div>
                </b-form>
            </b-card>
        </b-col>    
    </b-row>    
</template>
<script>
export default {
    data() {
        return {
            form: {
                nama_pemesan: null,
                email_pemesan: null,
                no_hp: null,
                nama_tamu: null,
            },
            user: null,
        }
    },
    beforeMount() {
        if (!this._reservasi) {
            this.$router.push({ name: 'home' })
        }
        this.check()
    },
    computed: {
        _reservasi() {
            var data = localStorage.getItem('_reservasi')
            return data
        }
    },
    methods: {
        reservasi() {
            var data1 = JSON.parse(this._reservasi)
            var data2 = {...data1, ...this.form}
            var _reservasi = JSON.stringify(data2)
            localStorage.setItem('_reservasi', _reservasi)

            if (!this.user) {
                this.$router.push({ name: 'Register' })
            }

            _reservasi = JSON.parse(_reservasi)
            data2 = {..._reservasi, admin_id: this.user?.id}
            _reservasi = JSON.stringify(data2)
            localStorage.setItem('_reservasi', _reservasi)

            console.log('user:', this.user)
            console.log(_reservasi)
            console.log(this.form)
        },
        check() {
            axios('/api/user')
                .then(({ data }) => {
                    this.user = data
                })
                .catch(e => {
                    this.user = null
                })
        }
    }
}
</script>
