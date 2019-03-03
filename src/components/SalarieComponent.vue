<template lang="html">
    <div class="Salarie-list">
        <table class="table">
            <tr>
                <th>babababababa</th>
                <ul class="navbar-nav mx-auto">
                <li class="nav-item px-2">
                    <router-link to="/createsalarie">Créer un salarié</router-link>
                </li>
                
                
            </ul>
            </tr>
           
        </table>

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
    SalarieService.getSalarie()
      .then((data) => {
        this.salarie = data
      })
      .catch(error => { console.log(error) })
  }
}
</script>