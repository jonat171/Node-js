<template lang="html">

    <form >
        <input type="text" v-model="name">
        <button type="button" name="button" v-on:click="formData(name)">editer</button>
    </form>

</template>

<script>
import ProjetService from '../services/ProjetService.vue'

export default {
  data () {
    return {
      user: [],
      Nom: '',
      description: '',
      dated: '',
      datef: '',
      montant: '',
      statut: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ProjetService.getProjets(paramsId)
  },
  methods: {
    formData: function (name) {
      ProjetService.editProjets(name)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
