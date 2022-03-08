<template>
  <div>
    <b-row>
      <b-col>
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ length.pemesanan || 0 }}</h4>
          <b-card-text class="mb-2">Pesanan Kamu</b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
          data: {
              pemesanan: null,
          },
          length: {
              pemesanan: null,
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
          this.loadPemesanan()
      },

      loadPemesanan() {
            this.$store.dispatch('pemesanan/pemesanans', this.user.id)
                .then(result => {
                    const data_filter = result.filter(({ admin_id }) => admin_id == this.user.id)
                    this.data.pemesanan = data_filter
                    this.length.pemesanan = data_filter.length
                    console.log('data_filter:', data_filter)
                    console.log('pemesanan:', result)
                }).catch(e => console.log(e))
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
}
</script>
