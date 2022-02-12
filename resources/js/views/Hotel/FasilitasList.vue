<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Data Fasilitas Hotel</h4>
                <b-button variant="outline-primary" size="sm" :to="{ name: 'admin-hotel-add' }">Tambah Fasilitas Hotel</b-button>
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
            <FasilitasList />
        </b-card>
    </div>
</template>
<script>
    import FasilitasList from './../hotel-components/FasilitasList'
    export default {
        components: { FasilitasList }
    }
</script>
