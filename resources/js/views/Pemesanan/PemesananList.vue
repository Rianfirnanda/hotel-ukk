<template>
    <div>
        <b-card class="mb-4" no-body>
            <b-card-body>
                <!--<h4 class="card-title">Data Pemesanan</h4>
                <h6 class="card-subtitle font-weight-normal text-muted">                    
                </h6>-->
                <PemesananTableList />
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
    import PemesananTableList from './../pemesanan-components/PemesananTableList'
    export default {
        components: { PemesananTableList }
    }
</script>
