<template>
    <div>
        <Navbar2/>
        <b-container>
            <router-view :brand="$store.state.brand"/>
        </b-container>
    </div>
</template>
<script>
import Navbar2  from './../frontend-components/Navbar2'
export default {
   data() {
       return {}
   },
   components: { Navbar2 }    
}
</script>
