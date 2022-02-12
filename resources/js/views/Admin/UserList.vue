<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Data User</h4>
                <b-button variant="outline-primary" size="sm" :to="{ name: 'admin-users-add' }">Tambah</b-button>
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
            <UserTableList />
        </b-card>
    </div>
</template>
<script>
    import UserTableList from './../admin-components/UserTableList'
    export default {
        components: { UserTableList }
    }
</script>
