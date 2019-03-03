<template lang="html">
    <div class="client-detail">
        <p>{{client.name}}</p>
        
        
    </div>
</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {

  data () {
    return {
      product: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ClientService.getClient(paramsId)
      .then((data) => {
        this.product = data
        console.log(this.client)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>
</style>
