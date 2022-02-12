<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Edit Data Kamar</h4>
                <EditDataKamar />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import EditDataKamar from './../kamar-components/EditDataKamar'
    export default {
        components: { EditDataKamar }
    }
</script>
