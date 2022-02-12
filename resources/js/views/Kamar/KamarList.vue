<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Data Kamar</h4>
                <b-button variant="outline-primary" size="sm" :to="{ name: 'admin-kamar-add' }">Tambah Kamar</b-button>
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
            <KamarTableList />
        </b-card>
    </div>
</template>
<script>
    import KamarTableList from './../kamar-components/KamarTableList'
    export default {
        components: { KamarTableList }
    }
</script>
