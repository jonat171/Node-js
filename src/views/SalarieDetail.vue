<template lang="html">
    <div class="salarie-detail">
        <p>{{salarie.Nom}}</p>
        
    </div>
</template>

<script>
import SalarieService from '../services/SalarieService.vue'

export default {

  data () {
    return {
      salarie: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    SalarieService.getSalarie(paramsId)
      .then((data) => {
        this.salarie = data
        console.log(this.salarie)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>
</style>
