<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Bookings</h4>
        <h6 class="card-subtitle font-weight-normal text-muted">
         List Bookings punya kamu
        </h6>
      </b-card-body>
      <Bookings />
    </b-card>
  </div>
</template>
<script>
import Bookings from "./../tamu-components/BookingStat.vue";

export default{
    data() {
        return {
            //
        }
    },
    components: { Bookings }
}
</script>
