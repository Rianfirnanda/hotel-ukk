<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Tambah Data Kamar</h4>
                <AddDataKamar />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import AddDataKamar from './../kamar-components/AddDataKamar'
    export default {
        components: { AddDataKamar }
    }
</script>
