<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Tambah Data Fasilitas Kamar</h4>
                <AddDataFasilitas />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import AddDataFasilitas from './../kamar-components/AddDataFasilitas'
    export default {
        components: { AddDataFasilitas }
    }
</script>
