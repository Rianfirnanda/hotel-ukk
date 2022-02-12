<template>
    <div>
        <h1 class="text-center my-4">Kamar</h1><hr>
        <template v-if="kamars.length" v-for="(v, i) in kamars">
        <div class="row kamar mb-3">
            <div class="col-md-4">
                <img :src="v.foto_kamar" class="img-fluid rounded img-thumbnail" />
            </div>
            <div class="col-md">
                <h2><a href="#">{{ v.nama_kamar }}</a></h2>
                <p>{{ v.deskripsi_kamar }}</p>
                <p>
                    {{ v.harga_kamar | rupiah }} / malam
                </p>
            </div>
        </div>
        <hr>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            kamars: []
        }
    },
    beforeMount() {
        this.loadKamars()
    },
    methods: {
        loadKamars() {
            this.$store.dispatch('kamar/public_kamars')
                .then(result => {
                    this.kamars = []
                    console.log(result)
                    result.map(v => this.kamars.push(v))
                })
                .catch(e => console.log(e))
        }
    },
    filters: {
        rupiah(self) {
            return `Rp. ${(self).toLocaleString('ID-id')}`
        }
    },
}
</script>
