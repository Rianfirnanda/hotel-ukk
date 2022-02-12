<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Edit Data User</h4>
                <EditDataUser />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import EditDataUser from './../admin-components/EditDataUser'
    export default {
        components: { EditDataUser }
    }
</script>
