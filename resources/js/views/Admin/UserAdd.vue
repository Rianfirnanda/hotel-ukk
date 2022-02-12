<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Tambah Data User</h4>
                <AddDataUser />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import AddDataUser from './../admin-components/AddDataUser'
    export default {
        components: { AddDataUser }
    }
</script>
