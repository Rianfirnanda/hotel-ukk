<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Edit Data Fasilitas Hotel</h4>
                <EditFasilitas />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import EditFasilitas from './../hotel-components/EditFasilitas'
    export default {
        components: { EditFasilitas }
    }
</script>
