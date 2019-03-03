<template lang="html">
  <div class="create-salarie">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Nom</label>
              <input class="form-control" type="text" v-model="Nom">
          </div>
          <div class="form-group">
              <label>Prénom</label>
              <input class="form-control" type="text" v-model="Prenom">
          </div>
          <div class="form-group">
              <label>username</label>
              <input class="form-control" type="text" v-model="username">
          </div>
          <div class="form-group">
              <label>date de naissance</label>
              <input class="form-control" type="text" v-model="birthday">
          </div>
          <div class="form-group">
              <label>Adresse</label>
              <input class="form-control" type="text" v-model="adress">
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
              <label>Poste</label>
              <input class="form-control" type="text" v-model="poste">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(Nom, Prenom, username, birthday, adress, tel, mail, poste)">Créer</button>
      </form>
  </div>
</template>

<script>

import SalarieService from '../services/SalarieService.vue'

export default {
  data () {
    return {
      Nom: '',
      Prenom: '',
      username: '',
      birthday:'',
      adress:'',
      tel: '',
      mail: '',
      poste: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (Nom, Prenom, username, birthday, adress, tel, mail, poste) {
      ProductsService.createSalarie(Nom, Prenom, username, birthday, adress, tel, mail, poste)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
