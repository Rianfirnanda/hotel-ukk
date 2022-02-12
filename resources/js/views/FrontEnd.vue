<template>
    <div>
        <Navbar />
        <b-container fluid class="p-0">
            <img :src="banner" class="img img-fluid w-100"/>
        </b-container>
        <b-container class="content">
            <b-form class="row bg-white py-4 px-2 border shadow d-flex justify-content-center">
                <b-form-row v-show="next1">
                    <b-form-group
                        class="col-md-4"
                        label="Check In"
                        lebel-for="checkIn"
                    >
                        <b-form-input
                            id="checkIn"
                            type="date"
                            v-model="form.checkin"
                            placeholder="Check In"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="col-md-4"
                        label="Check Out"
                        lebel-for="checkOut"
                    >
                        <b-form-input
                            id="checkOut"
                            type="date"
                            v-model="form.checkout"
                            placeholder="Check Out"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="col-md-4"
                        label="Jumlah Kamar"
                        lebel-for="jumlah"
                    >
                        <b-form-input
                            id="jumlah"
                            type="number"
                            v-model="form.jumlah"
                            max="3"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="info" class="btn-block" @click="pesan" :disabled="dipesan">{{ btn_pesan }}</b-button>
                </b-form-row>
                <b-form-row v-if="dipesan" v-show="next2">
                    <b-form-group
                        class="col-md-4"
                        label="Nama Pemesan"
                        lebel-for="nama_pemesan"
                    >
                        <b-form-input
                            id="nama_pemesan"
                            type="text"
                            v-model="form.nama_pemesan"
                            placeholder="Nama Pemesan"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="col-md-4"
                        label="Email"
                        lebel-for="email"
                    >
                        <b-form-input
                            id="email"
                            type="email"
                            v-model="form.email_pemesan"
                            placeholder="abc@xyz.id"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="col-md-4"
                        label="No HP"
                        lebel-for="no_hp"
                    >
                        <b-form-input
                            id="no_hp"
                            type="number"
                            v-model="form.no_hp"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="info" class="btn-block" @click="selanjutnya">Selanjutnya</b-button>
                </b-form-row>
                <b-form-row v-if="lanjut">
                    <b-form-group
                        class="col-md-6"
                        label="Nama Tamu"
                        lebel-for="nama_tamu"
                    >
                        <b-form-input
                            id="nama_tamu"
                            type="text"
                            v-model="form.nama_tamu"
                            placeholder="Nama Tamu"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        class="col-md-6"
                        label="Tipe Kamar"
                        lebel-for="tipe_kamar"
                    >
                        <b-form-select
                            id="tipe_kamar"
                            :options="kamars"
                            v-model="form.kamar_id"
                        ></b-form-select>
                    </b-form-group>
                    <b-button type="submit" variant="success" class="btn-block" v-show="next3" @click="konfirmasi">Konfirmasi Pemesanan</b-button>
                </b-form-row>
            </b-form>
            <router-view />
        </b-container>
        <Footer />
    </div>
</template>
<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}                                                                                                    
body {
  margin-bottom: 80px; /* Margin bottom by footer height */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

.footer.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}

.form-pesan{
  margin-top: -45px;
  background-color: white;
  z-index: 10;
  position: relative;
}

.fasilitas img{
   width : 100%;
   height : 150px;
   object-fit: cover;
   object-position: 100% 0;
}

.fasilitas .card-header, .kamar .card-header {
  text-align:center;
  font-weight:bold;
}

.kamar img{
  width : 100%;
  height : 220px;
  object-fit: cover;
  object-position: 100% 0;
}

.kamar a .card-footer{
  color:black;
  text-align:center;
}
</style>
<script>
import Navbar from './frontend-components/Navbar'
import Footer from './frontend-components/Footer'
import banner from './../assets/images/hotel/banner.jpg'

export default {
   data() {
       return {
           kamars: [],
           form: {
               checkin: null,
               checkout: null,
               jumlah: null,
               nama_pemesan: null,
               email_pemesan: null,
               no_hp: null,
               nama_tamu: null,
               kamar_id: null
           },
           btn_pesan: 'Pesan',
           dipesan: false,
           lanjut: false,
           next1: true,
           next2: true,
           next3: true,
           banner: banner,
       }
   },
   beforeMount() {
        this.loadKamars()
   },
   methods: {
       loadKamars() {
            this.$store.dispatch('kamar/public_kamars')
                .then(result => {
                    this.kamars = []
                    console.log(result)
                    result.map(({ id, nama_kamar }) => this.kamars.push({ value: id, text: nama_kamar }))
                })
                .catch(e => console.log(e))
       },
       pesan() {
           this.next1 = false
           this.dipesan = true
       },
       selanjutnya() {
           this.next2 = false
           this.lanjut = true
       },
   },
   components: {
       Navbar,
       Footer
   }
}
</script>
