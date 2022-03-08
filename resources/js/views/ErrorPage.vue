<template>
  <div>
    <b-row>
      <b-col>
        Kamu tidak berhak mengakses halaman ini. | <a href="#" @click="$router.go(-1)">Kembali</a>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
          //
      }
  },
  computed: {
      ...mapState({
          user: state => state.user
      }),
  },
}
</script>
