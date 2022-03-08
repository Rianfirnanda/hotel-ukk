<template>
    <b-container fluid>
            <h4 class="card-title">Data Pemesanan</h4>
            <b-row cols="1" v-if="!!pemesanan">
                <b-col>
                    <p ><b>Nama Pemesan</b></p>
                    <p>{{ pemesanan.nama_pemesan }}</p>
                </b-col>
                <b-col>
                    <p ><b>Tanggal Pesan</b></p>
                    <p>{{ pemesanan.tanggal_pesan }}</p>
                </b-col>
                <b-col>
                    <p ><b>Email</b></p>
                    <p>{{ pemesanan.email_pemesan }}</p>
                </b-col>
                <b-col>
                    <p ><b>No HP</b></p>
                    <p>{{ pemesanan.no_hp}}</p>
                </b-col>
                <b-col>
                    <p ><b>Nama Tamu</b></p>
                    <p>{{ pemesanan.nama_tamu }}</p>
                </b-col>
                <b-col>
                    <p ><b>Jumlah Kamar</b></p>
                    <p>{{ pemesanan.jumlah_kamar_dipesan }}</p>
                </b-col>
                <b-col>
                    <p ><b>Kode Pemesanan</b></p>
                    <p>{{ pemesanan.kode_pemesanan }}</p>
                </b-col>
                <b-col>
                    <p ><b>Tanggal Check-In</b></p>
                    <p>{{ pemesanan.tanggal_checkin }}</p>
                </b-col>
                <b-col>
                    <p ><b>Tanggal Check-Out</b></p>
                    <p>{{ pemesanan.tanggal_checkout }}</p>
                </b-col>
                <b-col>
                    <p ><b>Status Pemesanan</b></p>
                    <b-form-select v-model="pemesanan.status_pemesanan" :options="options"></b-form-select>
                </b-col>
                <b-col>
                    <b-button
                        variant="success"
                        size="md"
                        class="mt-2"
                        @click="update(pemesanan.id)"
                    >Update</b-button><br/>
                </b-col>
            </b-row>
        <br/><br/>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            pemesanan_id: this.$route.params.id,
            pemesanan: null,
            options: [
                { text: 'Pesan', value: 'pesan' },
                { text: 'Diterima', value: 'diterima' },
                { text: 'Selesai', value: 'selesai' },
                { text: 'Batal', value: 'batal' },
            ]
        }
    },
    beforeMount() {
        this.loadPemesanan()
    },
    methods: {
        loadPemesanan() {
            this.$store.dispatch('pemesanan/pemesanan', this.pemesanan_id)
                .then(response => {
                    console.log('pemesanan:', response)
                    this.pemesanan = response.result
                })
                .catch(e => console.log(e))
        },
        update(id) {
            console.log(id)

            axios.put(`/api/v1/pemesanan/${id}`, { status_pemesanan: this.pemesanan?.status_pemesanan })
                .then(response => {
                    console.log('success', response)
                    this.$bvToast.toast('Data berhasil diupdate.', {
                        title: 'Info',
                        toaster: 'b-toaster-top-right',
                        solid: true,
                        appendToast: false
                    })
                    setTimeout(() => {
                        this.$router.push({ name: 'resepsionis-pemesanan' })
                    }, 2000)

                })
                .catch(e => {
                    console.log(e)
                    this.$bvToast.toast('Data gagal diupdate', {
                        title: 'Info',
                        toaster: 'b-toaster-top-right',
                        solid: true,
                        appendToast: false
                    })
                    setTimeout(() => {
                        this.$router.push({ name: 'resepsionis-pemesanan' })
                    }, 2000)
                })
        }
    },
    filters: {
        capital(text) {
            return text.replace(/\_/g, ' ').split(' ').map(v => v.charAt(0).toUpperCase() + v.split``.splice(1).join``).join` `
        }
    }
}
</script>
