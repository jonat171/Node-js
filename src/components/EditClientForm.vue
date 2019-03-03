<template lang="html">

    <form >
        <input type="text" v-model="name">
        <button type="button" name="button" v-on:click="formData(name)">editer</button>
    </form>

</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {
  data () {
    return {
      user: [],
      name: '',
      adresse: '',
      cp: '',
      ville: '',
      refContact,'',
      tel: '',
      mail: '',
      prospect:''
    }
  },
  created () {
    let paramsId = this.$route.params.id
    ClientService.getClients(paramsId)
  },
  methods: {
    formData: function (name) {
      ClientService.editClients(name)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
