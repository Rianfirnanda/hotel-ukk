<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">Nama Pemesan</th>
          <th class="border-0">Tanggal Chcek-In</th>
          <th class="border-0">Tanggal Check-Out</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in pemesanans" :key="v.id">
            <td>{{ v.nama_pemesan }}</td>
            <td>{{ v.tanggal_checkin }}</td>
            <td>{{ v.tanggal_checkout }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    data() {
        return {
            pemesanans: []
        }
    },
    beforeMount() {
        this.loadItems()
    },
    methods: {
        loadItems() {
            this.$store.dispatch('pemesanan/pemesanans')
                .then(res => {
                    this.pemesanans = res
                    console.log(res)
                }).catch(e => console.log(e))
        },
    }
}
</script>
