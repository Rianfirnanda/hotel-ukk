<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <h4 class="card-title">Profile</h4>
                <EditProfile />
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import EditProfile from './../profile-components/EditProfile'
    export default {
        components: { EditProfile }
    }
</script>
