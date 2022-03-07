<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->
    <b-row>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">+70%</h4>
          <b-card-text class="mb-2">Kamar</b-card-text>
          <b-progress value="70" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">-10%</h4>
          <b-card-text class="mb-2">Fasilitas Hotel</b-card-text>
          <b-progress variant="danger" value="10" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">50%</h4>
          <b-card-text class="mb-2">Permintaan</b-card-text>
          <b-progress variant="success" value="50" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">30%</h4>
          <b-card-text class="mb-2">User</b-card-text>
          <b-progress variant="warning" value="30" max="100"></b-progress>
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->
    <b-row>
      <b-col cols="12" lg="8">
        <b-card class="mb-4">
          <h4 class="card-title">Sales Summary</h4>
          <SalesSummary />
        </b-card>
      </b-col>
      <b-col cols="12" lg="4">
        <b-card class="mb-4">
          <h4 class="card-title">Sales Income</h4>
          <SalesIncome />
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Top Selling Products</h4>
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <SellingProduct />
    </b-card>
    <!-- ----------------------------------------------- -->
    <!-- end top selling products -->
    <!-- ----------------------------------------------- -->
    <!-- ----------------------------------------------- -->
    <!-- cards row -->
    <!-- ----------------------------------------------- -->
    <TopCards />
    <!-- ----------------------------------------------- -->
    <!-- end cards row -->
    <!-- ----------------------------------------------- -->
  </div>
</template>

<script>
import SalesSummary from "./../dashboard-components/SalesSummary";
import SalesIncome from "./../dashboard-components/SalesIncome";
import SellingProduct from "./../dashboard-components/SellingProduct";
import TopCards from "./../dashboard-components/TopCards";
import { mapState } from 'vuex'

export default {
  data: () => ({}),
  computed: {
      ...mapState({
          login_success: state => state.login_success,
          user: state => state.user
      })
  },
  created() {
      if (!!this.login_success) {
          this.$bvToast.toast(`Selamat datang kembali ${this.user.nama}`, {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false,
          })
      }
  },
  methods
  mounted() {
      this.$root.$on('bv::toast::hidden', e => {
          this.$store.dispatch('close')
          console.log(e)
          console.log('toast closed.')
      })
  },
  components: {
    SalesSummary,
    SalesIncome,
    SellingProduct,
    TopCards,
  },
};
</script>
