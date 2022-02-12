<template>
  <div>
  <b-modal
            id="modal-hapus-data-fasilitas-hotel"
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
          <th class="border-0">FASILITAS</th>
          <th class="border-0">DESKRIPSI</th>
          <th class="border-0">FOTO</th>
          <th class="border-0 text-center">AKSI</th>
        </tr>
      </thead>
      <tbody v-if="fasilitas.length">
        <tr v-for="(v, i) in fasilitas">
          <td>{{ i += 1}}</td>
          <td>{{ v.nama_fasilitas_hotel }}</td>
          <td>{{ v.deskripsi_fasilitas_hotel }}</td>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img v-if="v.foto_fasilitas_hotel" :src="v.foto_fasilitas_hotel" width="25" height="25" @click="showImage(v.foto_fasilitas_hotel, v.nama_fasilitas_hotel)"/>
              </div>
            </div>
          </td>
          <td class="text-center">
              <b-button
                 variant="success"
                 size="sm"
                 class="mr-1"
                 :to="{ name: 'admin-hotel-edit', params: { id: v.id } }"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                 variant="danger"
                 size="sm"
                 class="mr-1"
                 @click="hapus_(v.id, v.nama_fasilitas_hotel)"
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
        /*randomColor() {
            let array_color = ['primary', 'danger', 'info', 'success']
            return array_color[~~(Math.random() * array_color.length)]
        },*/
        loadData() {
            this.$store.dispatch('hotel/fasilitas_hotels')
                .then(result => {
                    this.fasilitas = []
                    console.log(result)
                    result.map(v => this.fasilitas.push(v))
                })
                .catch(e => console.log(e))
        },
        showImage(url, nama) {
            const h = this.$createElement
            const title = h('div', { domProps: {
                innerHTML: `Foto Fasilitas: ${nama}`,
            }})

            const message = h('div', {
                class: ['foobar']
            }, [
                h('b-img', {
                    props: {
                        src: url,
                        thumbnail: true,
                        center: true,
                        fluid: true,
                    }
                })
            ])
            
            this.$bvModal.msgBoxOk([message], {
                title: title,
                buttonSize: 'sm',
                centered: true,
                size: 'sm'
            })
        },
        hapus_(id, nama) {
            this.$bvModal.show('modal-hapus-data-fasilitas-hotel')
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
                let hapus_user = await axios.delete(`/api/v1/fasilitas-hotel/${this.hapus.id}`)
            } catch(e) {
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-hapus-data-fasilitas-hotel')
                    this._alert('Hapus Data Fasilitas Hotel', 'Data gagal dihapus.')
                })
            } finally {
                this.$nextTick(() => {
                    this.loadData()
                    this.$bvModal.hide('modal-hapus-data-fasilitas-hotel')
                    this._alert('Hapus Data Fasilitas Hotel', 'Data berhasil dihapus.')
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
