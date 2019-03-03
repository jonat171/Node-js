<template lang="html">
    <div class="projet-detail">
        <p>{{projet.Nom}}</p>
        
    </div>
</template>

<script>
import ProjetService from '../services/ProjetService.vue'

export default {

  data () {
    return {
      projet: []
    }
  },

  created () {
    let paramsId = this.$route.params.id
    console.log(paramsId)
    ProjetService.getProjet(paramsId)
      .then((data) => {
        this.projet = data
        console.log(this.projet)
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>

<style lang="css" scoped>
</style>
