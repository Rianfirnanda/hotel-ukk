<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Tambah Data Fasilitas Hotel</h4>
                <AddFasilitas />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import AddFasilitas from './../hotel-components/AddFasilitas'
    export default {
        components: { AddFasilitas }
    }
</script>
