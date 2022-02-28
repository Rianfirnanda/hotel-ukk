<template>
    <section>
        <HotelCard
            v-for="kamar, i in kamars"
            :key='i'
            :kamar="kamar"
            class="mb-3"
        />
    </section>
</template>
<script>
import HotelCard from './HotelCard'
export default {
    data() {
        return {
            kamars: []
        }
    },
    beforeMount() {
        this.getKamar()
    },
    methods: {
        getKamar() {
            this.$store.dispatch('kamar/public_kamars')
                .then(result => {
                    this.kamars = []
                    console.log(result)
                    result.map(v => this.kamars.push(v))
                })
                .catch(e => console.log(e))
        },
    },
    components: { HotelCard }
}
</script>
