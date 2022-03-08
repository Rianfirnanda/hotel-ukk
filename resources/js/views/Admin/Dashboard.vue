<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->
    <b-row>
    <!-- <pre>{{ data }}</pre> -->
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ this.length.kamars }}</h4>
          <b-card-text class="mb-2">Kamar</b-card-text>
          <b-progress :value="this.length.kamars" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ this.length.fasilitas_hotels }}</h4>
          <b-card-text class="mb-2">Fasilitas Hotel</b-card-text>
          <b-progress variant="danger" :value="this.length.fasilitas_hotels" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ this.length.pemesanans }}</h4>
          <b-card-text class="mb-2">Permintaan</b-card-text>
          <b-progress variant="success" :value="this.length.pemesanans" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ this.length.users }}</h4>
          <b-card-text class="mb-2">User</b-card-text>
          <b-progress variant="warning" :value="this.length.users " max="100"></b-progress>
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->
    <!--<b-row>
      <b-col cols="12" lg="8">
        <b-card class="mb-4">
          <h4 class="card-title">Sales Summary</h4>
          <SalesSummary />
        </b-card>
      </b-col>
      <b-col cols="12" lg="4">
        <b-card class="mb-4">
          <h4 class="card-title">Permintaan Terbanyak</h4>
          <mostActiveUser :chart-data="datacollection" :options="options"/>
        </b-card>
      </b-col>
    </b-row>-->
    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Statistik Pemesanan</h4>
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <PemesananStat />
    </b-card>
    <!-- ----------------------------------------------- -->
    <!-- end top selling products -->
    <!-- ----------------------------------------------- -->
    <!-- ----------------------------------------------- -->
    <!-- cards row -->

    
    <!-- ----------------------------------------------- -->
    <!-- ----------------------------------------------- -->
    <!-- end cards row -->
    <!-- ----------------------------------------------- -->
  </div>
</template>

<script>
import SalesSummary from "./../dashboard-components/SalesSummary";
import mostActiveUser from "./../dashboard-components/mostActiveUser";
import PemesananStat from "./../dashboard-components/PemesananStat";
import TopCards from "./../dashboard-components/TopCards";
import { mapState } from 'vuex'

export default {
  data() {
      return {
          data: {
              users: null,
              fasilitas_hotels: null,
              kamars: null,
              pemesanans: null,
              tamu: null,
          },
          length: {
              users: null,
              fasilitas_hotels: null,
              kamars: null,
              pemesanans: null,
          },
          datacollection: null,
          options: { responsive: true, maintainAspectRatio: false }
      }
  },
  computed: {
      ...mapState({
          login_success: state => state.login_success,
          user: state => state.user
      }),
  },
  beforeMount() {
      this.loadAllData()
  },
  created() {
      if (!!this.login_success) {
          this.$bvToast.toast(`Selamat datang kembali ${this.user.nama}`, {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false,
          })
      }
      console.log('all data loaded')
      console.log(this.data)
  },
  methods: {
      loadAllData() {
          this.loadKamars()
          this.loadFasilitasHotels()
          this.loadPemesanans()
          this.loadUsers()
      },
      loadKamars() {
        this.$store.dispatch('kamar/kamars')
            .then(result => {
                this.data.kamars = []
                this.length.kamars = result.length || 0
                console.log('kamars:', result)
                this.data.kamars = result
            })
            .catch(e => console.log(e))
      },
      loadFasilitasHotels() {
          this.$store.dispatch('hotel/fasilitas_hotels')
                .then(result => {
                    this.data.fasilitas_hotels = []
                    this.length.fasilitas_hotels = result.length || 0
                    console.log('fasilitas hotel:', result)
                    this.data.fasilitas_hotels = result
                })
                .catch(e => console.log(e))
      },
      loadPemesanans() {
            this.$store.dispatch('pemesanan/pemesanans')
                .then(result => {
                     this.data.pemesanans = []
                     this.length.pemesanans = result.length || 0
                     console.log('pemesanans:', result)
                     this.data.pemesanans = result
                }).catch(e => console.log(e))
      },
      loadUsers() {
            this.$store.dispatch('_getAllUser')
                .then(result => {
                     this.data.users = []
                     this.length.users = result.length || 0
                     console.log('users:', result)
                     this.data.users = result
                     this.data.tamu = []
                     result.filter(( { level } ) => level == 'tamu').map(data => {
                         this.data.tamu.push(data)
                     })
                })
                .catch(e => console.log(e))
      },
      fillData() {
        //   this.datacollection = {
        //     labels: this.data.users.map(({ nama }) => nama),
        //     datasets: this.data.users.map(({ total_pemesanan }) => total_pemesanan)
        //   }
      },
  },
  mounted() {
      this.$root.$on('bv::toast::hidden', e => {
          this.$store.dispatch('close')
          console.log(e)
          console.log('toast closed.')
      })
      this.fillData()
  },
  components: {
    SalesSummary,
    mostActiveUser,
    PemesananStat,
    TopCards,
  },
}
</script>
