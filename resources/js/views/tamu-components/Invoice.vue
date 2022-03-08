<template>
  <div>
      {{ $refs.contentPDF }}
    <div class="page-content container" v-if="!!pemesanan">
      <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
          Invoice
          <small class="page-info">
            <i class="fa fa-angle-double-right text-80"></i>
            ID: #{{ pemesanan.kode_pemesanan }}
          </small>
        </h1>

        <div class="page-tools">
          <div class="action-buttons">
            <a
              class="btn bg-white btn-light mx-1px text-95"
              href="#"
              data-title="Print"
              @click="generateReport"
            >
              <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
              Print
            </a>
            <a
              class="btn bg-white btn-light mx-1px text-95"
              href="#"
              data-title="PDF"
            >
              <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
              Export
            </a>
          </div>
        </div>
      </div>

      <div class="container px-0" ref="contentPDF">
        <div class="row mt-4">
          <div class="col-12 col-lg-12">
            <div class="row">
              <div class="col-12">
                <div class="text-center text-150">

                  <span class="text-default-d3">{{ title }}</span>
                </div>
              </div>
            </div>
            <!-- .row -->

            <hr class="row brc-default-l1 mx-n1 mb-4" />

            <div class="row">
              <div class="col-sm-6">
                <div>
                  <span class="text-sm text-grey-m2 align-middle">Pemesan:</span>
                  <span class="text-600 text-110 text-blue align-middle"
                    >{{ pemesanan.nama_pemesan }}</span
                  >
                </div>
                <div class="text-grey-m2">
                  <div class="my-1">
                    <i
                      class="fa fa-phone fa-flip-horizontal text-secondary"
                    ></i>
                    <b class="text-600">{{ pemesanan.no_hp }}</b>
                  </div>
                </div>
              </div>
              <!-- /.col -->

              <div
                class="
                  text-95
                  col-sm-6
                  align-self-start
                  d-sm-flex
                  justify-content-end
                "
              >
                <hr class="d-sm-none" />
                <div class="text-grey-m2">
                  <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                    Invoice
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                    <span class="text-600 text-90">ID:</span> #{{ pemesanan.kode_pemesanan }}
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                    <span class="text-600 text-90">Tanggal Pesan:</span> {{ pemesanan.tanggal_pesan }}
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                    <span class="text-600 text-90">Status:</span>
                    <span class="badge badge-warning badge-pill px-25"
                      >{{ pemesanan.status_pemesanan }}</span
                    >
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>

            <div class="mt-4">
              <div class="row text-600 text-white bgc-default-tp1 py-25">
                <div class="d-none d-sm-block col-1">#</div>
                <div class="col-9 col-sm-5">Kamar</div>
                <div class="d-none d-sm-block col-4 col-sm-2">Jumlah Kamar</div>
                <div class="d-none d-sm-block col-sm-2">Check-In</div>
                <div class="d-none d-sm-block col-sm-2">Check-Out</div>
              </div>

              <div class="text-95 text-secondary-d3">
                <div class="row mb-2 mb-sm-0 py-25">
                  <div class="d-none d-sm-block col-1">1</div>
                  <div class="col-9 col-sm-5">{{ pemesanan.nama_kamar }}</div>
                  <div class="d-none d-sm-block col-2">{{ pemesanan.jumlah_kamar_dipesan }}</div>
                  <div class="d-none d-sm-block col-2 text-95">{{ pemesanan.tanggal_checkin }}</div>
                  <div class="col-2 text-secondary-d2">{{ pemesanan.tanggal_checkout }}</div>
                </div>
              </div>

              <div class="row border-b-2 brc-default-l2"></div>

              <div class="row mt-3 mb-4">
                <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                  Extra note such as company or payment information...
                </div>

                <div
                  class="
                    col-12 col-sm-5
                    text-grey text-90
                    order-first order-sm-last
                    mb-4
                  "
                >
                  <div class="row my-2">
                    <div class="col-7 text-right">SubTotal</div>
                    <div class="col-5">
                      <span class="text-120 text-secondary-d1">
                          {{ multiplication(pemesanan.harga_kamar, pemesanan.jumlah_kamar_dipesan) | rupiah }}</span>
                    </div>
                  </div>

                  <div class="row my-2">
                    <div class="col-7 text-right">Lamanya</div>
                    <div class="col-5">
                      <span class="text-110 text-secondary-d1">
                          {{ daysBetween(pemesanan.tanggal_checkin, pemesanan.tanggal_checkout) }} Hari</span>
                    </div>
                  </div>

                  <div class="row my-2">
                    <div class="col-7 text-right">Formula</div>
                    <div class="col-5">
                      <span class="text-110 text-secondary-d1">Harga Kamar x Jumlah Kamar x Lamanya</span>
                    </div>
                  </div>

                  <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                    <div class="col-7 text-right">Total Amount</div>
                    <div class="col-5">
                      <span class="text-150 text-success-d3 opacity-2"
                        >{{ (multiplication(pemesanan.harga_kamar, pemesanan.jumlah_kamar_dipesan) * daysBetween(pemesanan.tanggal_checkin, pemesanan.tanggal_checkout)) | rupiah }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div>
                <span class="text-secondary-d1 text-105"
                  >Thank you for your business</span
                >
                <a
                  href="#"
                  class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0"
                  >Pay Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
            {{ $refs.contentPDF }}
        </section>
    </VueHtml2pdf>
  </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
    props: ['id'],
    data() {
        return {
            title: document.title,
            pemesanan: null,
        }
    },
    beforeMount() {
        this.loadPemesanan()
    },
    methods: {
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },
         loadPemesanan() {
            this.$store.dispatch('pemesanan/pemesanan', this.id)
                .then(response => {
                    console.log('pemesanan wkwkkwkwkwk:', response)
                    this.pemesanan = response.result
                })
                .catch(e => console.log(e))
        },
        daysBetween(d1, d2) {
            let day = 24 * 60 * 60 * 1000
            let day1 = new Date(d1)
            let day2 = new Date(d2)

            let between = Math.round(Math.abs((day1) - (day2)) / day)

            return between
        },
        multiplication(a, b) {
            return (a * b)
        }
    },
    filters: {
        rupiah(self) {
            return `Rp. ${(self).toLocaleString('ID-id')}`
        }
    },
    components: {
        VueHtml2pdf
    },
}
</script>

<style scoped>
.text-secondary-d1 {
  color: #728299 !important;
}
.page-header {
  margin: 0 0 1rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  border-bottom: 1px dotted #e2e2e2;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.page-title {
  padding: 0;
  margin: 0;
  font-size: 1.75rem;
  font-weight: 300;
}
.brc-default-l1 {
  border-color: #dce9f0 !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}
.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.text-grey-m2 {
  color: #888a8d !important;
}

.text-success-m2 {
  color: #86bd68 !important;
}

.font-bolder,
.text-600 {
  font-weight: 600 !important;
}

.text-110 {
  font-size: 110% !important;
}
.text-blue {
  color: #478fcc !important;
}
.pb-25,
.py-25 {
  padding-bottom: 0.75rem !important;
}

.pt-25,
.py-25 {
  padding-top: 0.75rem !important;
}
.bgc-default-tp1 {
  background-color: rgba(121, 169, 197, 0.92) !important;
}
.bgc-default-l4,
.bgc-h-default-l4:hover {
  background-color: #f3f8fa !important;
}
.page-header .page-tools {
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.btn-light {
  color: #757984;
  background-color: #f5f6f9;
  border-color: #dddfe4;
}
.w-2 {
  width: 1rem;
}

.text-120 {
  font-size: 120% !important;
}
.text-primary-m1 {
  color: #4087d4 !important;
}

.text-danger-m1 {
  color: #dd4949 !important;
}
.text-blue-m2 {
  color: #68a3d5 !important;
}
.text-150 {
  font-size: 150% !important;
}
.text-60 {
  font-size: 60% !important;
}
.text-grey-m1 {
  color: #7b7d81 !important;
}
.align-bottom {
  vertical-align: bottom !important;
}
</style>
