<template>
    <b-card-group columns v-if="kamars.length">
        <template v-for="v in kamars" >
            <b-card
                    :title="v.nama_kamar"
                    :img-src="v.foto_kamar"
                    :img-alt="v.nama_kamar"
                    img-top
            >
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                <template #footer>
                    <small class="text-muted">Last updated 3 mins ago</small>
                 </template>
            </b-card>
        </template>
    </b-card-group>
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
