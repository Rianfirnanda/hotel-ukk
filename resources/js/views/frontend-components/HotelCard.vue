<template>
    <b-card
       no-body
       class="hotel-card shadow-sm"
    >
        <b-row no-gutters>
            <b-col
                md="4"
                lg="3"
                class="p-2"
            >
                <b-card-img
                    :src="kamar.foto_kamar"
                    class="hotel-card__img"
                ></b-card-img>
                <b-button
                    class="like-btn text-danger"
                    variant="dark"
                    @click="isFavorite = !isFavorite"
                >
                    <i :class="`${isFavorite ? 'fas' : 'far'} fa-heart`"></i>
                </b-button>
            </b-col>
            <b-col
                md="8"
                lg="9"
            >
                <b-card-body
                    class="d-flex flex-column h-100"
                >
                    <div class="d-flex justify-content-between align-items-center">
                        <h4 class="card-title">{{ kamar.nama_kamar }}</h4>
                    </div>
                    <div class="d-flex flex-wrap align-items-center mb-2">
                        <p>{{ kamar.deskripsi_kamar }}</p>
                    </div>
                    <hr class="w-100">

                    <div class="d-flex justify-content-between align-items-center">
                        <span class="font-1h">{{ kamar.harga_kamar | rupiah }}</span>
                        <b-button :to="`/kamar/${kamar.id}`" variant="primary">Pesan</b-button>
                    </div>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
export default {
    props: {
        kamar: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isFavorite: false,
        }
    },
    filters: {
        rupiah(self) {
            return `Rp. ${(self).toLocaleString('ID-id')}`
        }
    },
}
</script>
