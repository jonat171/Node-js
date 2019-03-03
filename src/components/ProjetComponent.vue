<template lang="html">
    <div class="projet-list">
        <table class="table">
            <tr>
                <th>popopopopopopopopopopo</th>
                <ul class="navbar-nav mx-auto">
                <li class="nav-item px-2">
                    <router-link to="/createprojet">Créer un projet</router-link>
                </li>


            </ul>
            </tr>

        </table>

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
    ProjetService.getProjet()
      .then((data) => {
        this.projet = data
      })
      .catch(error => { console.log(error) })
  }
}
</script>
