<template>
  <div>
      <h4 class="card-title">Data Pemesanan</h4>
      <b-container>
          <b-row align-h="between">
              <b-col cols="4">
                  <b-form-group
                      label="Rows"
                      label-for="rows"
                      label-cols-lg="2"
                  >
                      <b-form-select
                         id="rows"
                         v-model="table.perPage"
                         :options="numPerPage"
                      >
                          <template #first>
                              <option value="5">5</option>
                          </template>
                      </b-form-select>
                  </b-form-group>
              </b-col>
              <b-col cols="4">
                  <b-form-group
                      label="Cari"
                      label-for="cari"
                      label-cols-lg="2"
                  >
                      <b-form-input
                          v-model="filter"
                          type="search"
                          id="cari"
                          placeholder="Cari ..."
                      ></b-form-input>
                  </b-form-group>
              </b-col>
          </b-row>
      </b-container>

              <b-table
                  striped
                  hover
                  outlined
                  responsive
                  :per-page="table.perPage"
                  :items="items"
                  :filter="filter"
                  :fields="fields"
                  :current-page="table.currentPage"
                  :tbody-transition-props="transProps"
              >
                  <template #cell(index)="data">
                      {{ data.index += 1 }}
                  </template>
                  <template #cell(aksi)="data">
                      <b-button
                          variant="outline-bright"
                          size="sm"
                          class="mr-1"
                          :to="{ name: 'resepsionis-pemesanan-view', params: { id: data.item.id }  }"
                          @click="view_pemesanan(data.item.id)"
                      >
                      <i class="fas fa-eye"></i>
                      </b-button>                      
                  </template>
                 <template #table-caption>
                     Terakhir di sinkronkan pada: {{ date }}
                 </template>
              </b-table>
              <b-pagination
                  v-model="table.currentPage"
                  :total-rows="rows"
                  :per-page="table.perPage"
                  aria-controls="my-table"
              ></b-pagination>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    data() {
        return {
            date: `${new Date().getFullYear()}-${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}-${new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            transProps: { name: 'flip-list' },
            numPerPage: [10, 15, 20, 25, 50, 100],
            table: {
                perPage: 5,
                currentPage: 1,
            },
            fields: [
                { key: 'index', label: 'No' },
                {
                    key: 'nama_pemesan',
                    sortable: true
                },
                {
                    key: 'nama_tamu',
                    sortable: true
                },
                {
                    key: 'email_pemesan',
                },
                {
                    key: 'no_hp',
                },
                {
                    key: 'tanggal_pesan',
                    sortable: true
                },
                {
                    key: 'tanggal_checkin',
                    sortable: true
                },
                {
                    key: 'tanggal_checkout',
                    sortable: true
                },
                {
                    key: 'status_pemesanan',
                    sortable: true
                },
                { key: 'aksi', class: 'text-center', label: 'Aksi' }
            ],
            items: [],
            filter: ''
        }
    },
    beforeMount() {
        this.loadItems()
    },
    methods: {
        loadItems() {
            this.$store.dispatch('pemesanan/pemesanans')
                .then(res => res.map(v => this.items.push(v))).catch(e => console.log(e))
        },
        view_pemesanan(id) {
            console.log('id', id)
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}    
</script>
