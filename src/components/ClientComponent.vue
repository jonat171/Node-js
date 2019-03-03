<template lang="html">
    <div class="Client-list">
        <table class="table">
            <tr>
                <th>azdkjakjzdjzabdjzabdkjabdzkdb                 jkzwfw</th>
                <ul class="navbar-nav mx-auto">
                <li class="nav-item px-2">
                    <router-link to="/createclient">Créer un client</router-link>
                </li>
                
                
            </ul>
                
            </tr>
           
        </table>

    </div>
</template>


<script>

import ClientService from '../services/ClientService.vue'

export default {
  data () {
    return {
      client: []
    }
  },
  created () {
    ClientService.getClient()
      .then((data) => {
        this.client = data
      })
      .catch(error => { console.log(error) })
  }
}
</script>