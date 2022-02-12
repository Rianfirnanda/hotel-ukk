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
          <th class="border-0">NAMA KAMAR</th>
          <th class="border-0">DESKRIPSI</th>
          <th class="border-0">HARGA</th>
          <th class="border-0">JUMLAH</th>
          <th class="border-0">FOTO</th>
          <th class="border-0 text-center">AKSI</th>
        </tr>
      </thead>
      <tbody v-if="kamars.length">
        <tr v-for="(v, i) in kamars">
          <td>{{ i += 1}}</td>
          <td>{{ v.nama_kamar }}</td>
          <td>{{ v.deskripsi_kamar }}</td>
          <td>{{ v.harga_kamar | rupiah }}</td>
          <td>{{ v.jumlah_kamar }}</td>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img v-if="v.foto_kamar" :src="v.foto_kamar" width="25" height="25" @click="showImage(v.foto_kamar, v.nama_kamar)"/>
              </div>
            </div>
          </td>
          <td class="text-center">
              <b-button
                 variant="primary"
                 size="sm"
                 class="mr-1"
                 :to="{ name: 'admin-kamar-fasilitas', params: { id: v.id } }"
                 @click="fasilitas_kamar(v.nama_kamar)"
              >
                <i class="fas fa-eye"></i>
              </b-button>
              <b-button
                 variant="success"
                 size="sm"
                 class="mr-1"
                 :to="{ name: 'admin-kamar-edit', params: { id: v.id } }"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                 variant="danger"
                 size="sm"
                 class="mr-1"
                 @click="hapus_(v.id, v.nama_kamar)"
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
    name:"UserTableList",
    props: ['data_user'],
    data() {
        return {
            kamars: [],
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
            this.$store.dispatch('kamar/kamars')
                .then(result => {
                    this.kamars = []
                    console.log(result)
                    result.map(v => this.kamars.push(v))
                })
                .catch(e => console.log(e))
        },
        fasilitas_kamar(nama_kamar) {
            this.$store.state.kamar.nama_kamar = nama_kamar
        },
        showImage(url, nama) {
            const h = this.$createElement
            const title = h('div', { domProps: {
                innerHTML: `Foto Kamar: ${nama}`,
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
                let hapus_user = await axios.delete(`/api/v1/kamar/${this.hapus.id}`)
            } catch(e) {
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-hapus-data-user')
                    this._alert('Hapus Data User', 'Data gagal dihapus.')
                })
            } finally {
                this.$nextTick(() => {
                    this.loadData()
                    this.$bvModal.hide('modal-hapus-data-user')
                    this._alert('Hapus Data User', 'Data berhasil dihapus.')
                })
            }
        }
    },
    filters: {
        simpleText(self) {
            return self.split` `.map(v => v.charAt(0)).join``.split``.slice(0, 2).join``
        },
        rupiah(self) {
            return `${(self).toLocaleString('ID-id')}`
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
