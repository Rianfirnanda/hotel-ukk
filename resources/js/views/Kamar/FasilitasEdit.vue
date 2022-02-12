<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Edit Data Fasilitas Kamar</h4>
                <EditDataFasilitas />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import EditDataFasilitas from './../kamar-components/EditDataFasilitas'
    export default {
        components: { EditDataFasilitas }
    }
</script>
