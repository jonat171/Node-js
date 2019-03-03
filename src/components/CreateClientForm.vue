<template lang="html">
  <div class="create-clients">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>nom de l'entreprise</label>
              <input class="form-control" type="text" v-model="name">
          </div>
          <div class="form-group">
              <label>Adresse</label>
              <input class="form-control" type="text" v-model="adresse">
          </div>
          <div class="form-group">
              <label>Code postal</label>
              <input class="form-control" type="text" v-model="cp">
          </div>
          <div class="form-group">
              <label>ville</label>
              <input class="form-control" type="number" v-model="ville">
          </div>
          <div class="form-group">
              <label>reference contact</label>
              <input class="form-control" type="text" v-model="refContact">
          </div>
          <div class="form-group">
              <label>téléphone</label>
              <input class="form-control" type="number" v-model="tel">
          </div>
          <div class="form-group">
              <label>mail</label>
              <input class="form-control" type="mail" v-model="mail">
          </div>
          <div class="form-group">
              <label>secteur d'activité</label>
              <input class="form-control" type="texte" v-model="prospect">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(name, adresse, cp, ville, refContact, tel, mail, prospect)">Créer</button>
      </form>
  </div>
</template>

<script>

import ClientService from '../services/ClientService.vue'

export default {
  data () {
    return {
      name: '',
      adresse: '',
      cp: '',
      ville: '',
      refContact,'',
      tel: '',
      mail: '',
      prospect:''
      isVisible: false
    }
  },
  methods: {
    formData: function (name, adresse, cp, ville, refContact, tel, mail, prospect ) {
      ProductsService.createClient(name, adresse, cp, ville, refContact, tel, mail, prospect)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
