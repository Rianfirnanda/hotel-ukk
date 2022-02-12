<template>
  <div>
  <b-modal
            id="modal-hapus-data-user"
            ref="hapus-data"
            title="Hapus Data Kamar"
            :header-bg-variant="'danger'"
            :header-text-variant="'white'"
            :ok-title="'Hapus'"
            :okVariant="'danger'"
            @ok="handleHapus"
        >
            <p><b>{{ hapus.nama }}</b> akan di hapus, apakah yakin ingin menghapusnya?</p>
        </b-modal>

  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">No</th>
          <th class="border-0">NAMA FASILITAS</th>
          <th class="border-0 text-center">AKSI</th>
        </tr>
      </thead>
      <tbody v-if="fasilitas.length">
        <tr v-for="(v, i) in fasilitas">
          <td>{{ i += 1}}</td>
          <td>{{ v.nama_fasilitas_kamar }}</td>
          <td class="text-center">
              <b-button
                 variant="success"
                 size="sm"
                 class="mr-1"
                 :to="{ name: 'admin-kamar-fasilitas-edit', params: { id: v.id }, query: {kamar_id: $route.params.id }  }"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                 variant="danger"
                 size="sm"
                 class="mr-1"
                 @click="hapus_(v.id, v.nama_fasilitas_kamar)"
              >
                <i class="fas fa-trash"></i>
              </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name:"KamarFasilitasList",
    data() {
        return {
            fasilitas: [],
            hapus: {
                id: null,
                nama: null
            }
        }
    },
    beforeMount() {
        this.loadData()
    },
    methods: {
        loadData() {
            this.$store.dispatch('kamar/fasilitas_kamar', this.$route.params.id)
                .then(result => {
                    this.fasilitas = []
                    console.log(result)
                    result.map(v => this.fasilitas.push(v))
                })
                .catch(e => console.log(e))
        },
        add_fasilitas() {
            this.$store.state.kamar.id = this.$route.params.id
        },
        hapus_(id, nama) {
            this.$bvModal.show('modal-hapus-data-user')
            this.hapus.id = id
            this.hapus.nama = nama
        },
        _alert(title, msg) {
            this.$bvModal.msgBoxConfirm(msg, {
                title: title,
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'OK',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            })
        },
        async handleHapus(e) {
            e.preventDefault()
            try {
                let hapus_user = await axios.delete(`/api/v1/fasilitas-kamar/${this.hapus.id}`)
            } catch(e) {
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-hapus-data-user')
                    this._alert('Hapus Data Fasilitas Kamar', 'Data gagal dihapus.')
                })
            } finally {
                this.$nextTick(() => {
                    this.loadData()
                    this.$bvModal.hide('modal-hapus-data-user')
                    this._alert('Hapus Data Fasilitas Kamar', 'Data berhasil dihapus.')
                })
            }
        }
    },
    filters: {
        simpleText(self) {
            return self.split` `.map(v => v.charAt(0)).join``.split``.slice(0, 2).join``
        }
    },
    /*created: function() {
        this.loadNewData = () => this.kamars.push(this.data_user)
        this.getLoadData = _.debounce(this.loadData, 500)
    },
    watch: {
        kamars: function(v, _v) {
            this.loadNewData()
        }
    },*/
    components: {}
}    
</script>
