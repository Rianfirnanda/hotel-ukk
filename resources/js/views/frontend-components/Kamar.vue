
<template>
    <div>
        <b-row align-v="start">
            <b-col
                lg="8"
                class="mb-3 mb-lg-0"
            >
                <b-card class="shadow">
                    <h1 class="mb-3">{{ kamar.nama_kamar }}</h1>
                    <img :src="kamar.foto_kamar" :alt="kamar.nama_kamar" class="img-fluid rounded" />
                    <hr>

                    <div class="mt-4">
                        <p>{{ kamar.deskripsi_kamar }}</p><br/>
                        <p><b>Fasilitas Kamar:</b></p><br/>
                        <template v-if="!!fasilitas">
                            <ul>
                                <li v-for="v, i in fasilitas" :key="i">{{ v.nama_fasilitas_kamar }}</li>
                            </ul>
                        </template> 
                    </div>
                </b-card>
            </b-col>
            <b-col
                lg="4"
                class="sticky p-lg-0"
            >
                <b-card class="shadow">
                    <div class="d-flex justify-content-between align-items-end flex-wrap">
                        <h2 class="mb-0">Pemesanan</h2>
                        <span v-if="totalHarga > 0">
                            Total: {{ totalHarga | rupiah}}
                        </span>
                    </div>
                    <hr>
                    <b-form>
                        <b-form-group label="Tanggal Check-In" label-class="font-weight-bold">
                            <b-form-datepicker
                                locale="id"
                                no-flip
                                v-model="form.tanggal_checkin"
                                placeholder="Tentukan tanggal check-in"
                            ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group label="Tanggal Check-Out" label-class="font-weight-bold">
                            <b-form-datepicker
                                locale="id"
                                no-flip
                                v-model="form.tanggal_checkout"
                                placeholder="Tentukan tanggal check-out"
                            ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group label="Jumlah" label-class="font-weight-bold">
                            <b-form-input type="number" min="1" max="3" v-model="form.jumlah_kamar_dipesan" placeholder="Jumlah kamar yang ingin dipesan"></b-form-input>
                        </b-form-group>
                        <div class="d-flex justify-content-between">
                            <b-button
                                variant='primary'
                                @click="pesan"
                            >Pesan Sekarang</b-button>
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
        <!--<h1 class="text-center my-4">Kamar</h1>

        <div class="row kamar" v-if="kamars.length" v-for="v in kamars">
            <div class="col-md-4">
                <a class="card card-light" href="#">
                    <div class="card-header">
                        Standart Room
                    </div>
                    <div class="card-body p-1">
                        <img src="images/kamar_standar.jpg" class="img-fluid rounded" />
                    </div>
                    <div class="card-footer">
                        Rp. 300.000
                    </div>
                </a>
            </div>-->
        <!-- <div class="col-md-4">
            <a class="card card-light" href="#">
                <div class="card-header">
                    Suite Room
                </div>
                <div class="card-body p-1">
                    <img src="images/kamar_suite.jpg" class="img-fluid rounded" />
                </div>
                <div class="card-footer">
                    Rp. 400.000
                </div>
            </a>
        </div>
        <div class="col-md-4">
            <a class="card card-light" href="#">
                <div class="card-header">
                    Deluxe Room
                </div>
                <div class="card-body p-1">
                    <img src="images/kamar_deluxe.jpg" class="img-fluid rounded" />
                </div>
                <div class="card-footer">
                    Rp. 700.000
                </div>
            </a>
        </div>
    </div>-->

    <!-- <h1 class="text-center my-4">Kamar</h1>-->
    <!-- <b-card-group columns v-if="kamars.length">
        <template v-for="v in kamars" >
            <b-card
                    header-tag="header"
                    :header="v.nama_kamar"
                    footer-tag="footer"
                    :footer="v.harga_kamar | rupiah"
                    :title="v.nama_kamar"
            >
                <b-card-body class="p-1">
                    <img :src="v.foto_kamar" :alt="v.nama_kamar" class="img-fluid rounded" />
                </b-card-body>
                 <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                 <template #footer>
                    <small class="text-muted">Last updated 3 mins ago</small>
                 </template>
            </b-card>
        </template>
    </b-card-group>-->

    
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            kamar: {},
            fasilitas: null,
            form: {},
        }
    },
    created() {
        this.$store.dispatch('kamar/public_kamar', this.id)
            .then(result => {
                this.kamar = result
                console.log(result)
            })
            .catch(e => console.log(e))
        this.$store.dispatch('kamar/public_fasilitas_kamar', this.id)
            .then(result => {
                if (!result) return
                this.fasilitas = result
            })
            .catch(e => console.log(e))
    },
    computed: {
        totalHarga() {
            return (this.kamar.harga_kamar * this.form.jumlah)
        }
    },
    methods: {
        pesan(){
            var data1 = {...this.form, kamar_id: this.id}
            var data2 = JSON.stringify(data1)
            localStorage.setItem('_reservasi', data2)
            this.$router.push({ name: 'reservasi' })
            console.log(this.form)
        }
    },
    filters: {
        rupiah(self) {
            return `Rp. ${(self).toLocaleString('ID-id')}`
        }
    },
}
</script>
