<template lang="html">

    <form >
        <input type="text" v-model="name">
        <button type="button" name="button" v-on:click="formData(name)">editer</button>
    </form>

</template>

<script>
import SalarieService from '../services/SalarieService.vue'

export default {
  data () {
    return {
      user: [],
      Nom: '',
      Prenom: '',
      username: '',
      birthday:'',
      adress:'',
      tel: '',
      mail: '',
      poste: ''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    SalarieService.getSalaries(paramsId)
  },
  methods: {
    formData: function (name) {
      SalarieService.editSalaries(name)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
