<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">Nama Pemesan</th>
          <th class="border-0">Tanggal Chcek-In</th>
          <th class="border-0">Tanggal Check-Out</th>
          <th class="border-0">Status Pemesanan</th>
          <th class="border-0 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in pemesanans" :key="v.id">
          <td>{{ v.nama_pemesan }}</td>
          <td>{{ v.tanggal_checkin }}</td>
          <td>{{ v.tanggal_checkout }}</td>
          <td>{{ v.status_pemesanan }}</td>
          <td class="text-center">
            <a href="#" @click="showInvoiceModal(v.id)">Lihat</a> |
            <a href="#" @click="generateReport(v.id)">Unduh</a>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal id="show-invoice" ref="show-invoice" size="lg" scrollable hide-footer>
      <template #modal-title> Lihat <code>Invoice</code> Kamu </template>
      <Invoice :id="id"/>
      <b-button class="mt-3" block @click="$bvModal.hide('show-invoice')"
        >Close</b-button
      >
    </b-modal>

    <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="myPDF"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <Invoice :id="id"/>
        </section>
    </VueHtml2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
import { mapState } from "vuex";
import Invoice from './Invoice'

export default {
  data() {
    return {
      id: null,
      pemesanans: [],
    };
  },
  beforeMount() {
    this.loadPemesanan();
  },
  methods: {
      generateReport (id) {
          this.id = id
            this.$refs.html2Pdf.generatePdf()
    },
    showInvoiceModal(id) {
      this.$refs["show-invoice"].show();
      this.id = id
      console.log("id pemesanan:", id);
    },
    loadPemesanan() {
      this.$store
        .dispatch("pemesanan/pemesanans")
        .then((result) => {
          const data_filter = result.filter(
            ({ admin_id }) => admin_id == this.user.id
          );
          this.pemesanans = data_filter;
          console.log("data_filter:", data_filter);
          console.log("pemesanan:", result);
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    ...mapState({
      login_success: (state) => state.login_success,
      user: (state) => state.user,
    }),
  },
  components: {
      Invoice,
      VueHtml2pdf
  }
};
</script>
