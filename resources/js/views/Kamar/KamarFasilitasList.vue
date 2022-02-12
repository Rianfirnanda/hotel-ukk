<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Data Fasilitas Kamar: <b>{{ kamar.nama_kamar }}</b></h4>
                <b-button variant="outline-primary" size="sm" :to="{ name: 'admin-kamar-fasilitas-add', query: { kamar_id: kamar.id }}">Tambah Fasilitas Kamar</b-button>
                <b-button variant="outline-danger" size="sm" :to="{ name: 'admin-kamar-fasilitas' }">Kembali</b-button>
                <h6 class="card-subtitle font-weight-normal text-muted">
                </h6>
            </b-card-body>
            <KamarFasilitasTableList />
        </b-card>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import KamarFasilitasTableList from './../kamar-components/KamarFasilitasList'
    export default {
        data() {
            return {
                kamar: {
                    id: this.$route.params.id,
                    nama_kamar: null,
                }
            }
        },
        beforeMount() {
            this.getNameKamar(this.kamar.id)
        },
        methods: {
            getNameKamar(id) {
                axios(`/api/v1/kamar/${id}`)
                    .then(response => {
                        let result = response.data
                        this.kamar.nama_kamar = result.nama_kamar 
                    })
                    .catch(e => {
                        this.$router.push({ name: 'admin-kamar' })
                    })
            }
        },
        computed: {
            ...mapState({
                nama_kamar: state => state.kamar.nama_kamar
            })
        },
        components: { KamarFasilitasTableList }
    }
</script>
