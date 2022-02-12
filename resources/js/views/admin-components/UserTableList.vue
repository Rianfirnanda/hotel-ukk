<template>
  <div>
  <b-modal
            id="modal-hapus-data-user"
            ref="hapus-data"
            title="Hapus Data User"
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
          <th class="border-0">ID</th>
          <th class="border-0">NAMA</th>
          <th class="border-0">USERNAME</th>
          <th class="border-0">LEVEL</th>
          <th class="border-0 text-center">AKSI</th>
        </tr>
      </thead>
      <tbody v-if="users.length">
        <tr v-for="(v, i) in users">
          <td>{{ i += 1}}</td>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <b-avatar :variant="randomColor()" :text="v.nama | simpleText" />
              </div>
              <div class>
                <h5 class="mb-0">{{ v.nama }}</h5>
              </div>
            </div>
          </td>
          <td>{{ v.username }}</td>
          <td>
            <b-badge :variant="v.level == 'administrator' ? 'info' : 'success'" class="rounded-0">{{ v.level }}</b-badge>
          </td>
          <td class="text-center">
              <b-button
                 variant="success"
                 size="sm"
                 class="mr-1"
                 :to="{ name: 'admin-users-edit', params: { id: v.id } }"
                 :disabled="user.id == v.id"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                 variant="danger"
                 size="sm"
                 class="mr-1"
                 @click="hapus_(v.id, v.nama)"
                 :disabled="user.id == v.id"
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
            user: null,
            users: [],
            hapus: {
                id: null,
                nama: null
            }
        }
    },
    beforeMount() {
        this.loadData()
        this.loadUser()
    },
    methods: {
        randomColor() {
            let array_color = ['primary', 'danger', 'info', 'success']
            return array_color[~~(Math.random() * array_color.length)]
        },
        loadData() {
            this.$store.dispatch('_getAllUser')
                .then(result => {
                    this.users = []
                    result.map(v => this.users.push(v))
                })
                .catch(e => console.log(e))
        },
        loadUser() {
            this.user = JSON.parse(localStorage.getItem('user'))
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
                let hapus_user = await axios.delete(`/api/v1/admin/${this.hapus.id}`)
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
        }
    },
    /*created: function() {
        this.loadNewData = () => this.users.push(this.data_user)
        this.getLoadData = _.debounce(this.loadData, 500)
    },
    watch: {
        users: function(v, _v) {
            this.loadNewData()
        }
    },*/
    components: {}
}    
</script>
