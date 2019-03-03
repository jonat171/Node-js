<template lang="html">
  <div class="create-salarie">
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Nom</label>
              <input class="form-control" type="text" v-model="Nom">
          </div>
          <div class="form-group">
              <label>Description</label>
              <input class="form-control" type="text" v-model="description">
          </div>
          <div class="form-group">
              <label>Date de début</label>
              <input class="form-control" type="text" v-model="dated">
          </div>
          <div class="form-group">
              <label>Date de fin</label>
              <input class="form-control" type="text" v-model="datef">
          </div>
          <div class="form-group">
              <label>montant</label>
              <input class="form-control" type="number" v-model="montant">
          </div>
          <div class="form-group">
              <label>Statut</label>
              <input class="form-control" type="text" v-model="statut">
          </div>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(Nom, description, dated, datef, montant, statut)">Créer</button>
      </form>
  </div>
</template>

<script>

import ProjetService from '../services/ProjetService.vue'

export default {
  data () {
    return {
      Nom: '',
      description: '',
      dated: '',
      datef: '',
      montant: '',
      statut: '',
      isVisible: false
    }
  },
  methods: {
    formData: function (name, description, dated, datef, statut) {
      ProductsService.createProjet(name, description, dated, datef, statut)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
