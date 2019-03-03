<template lang="html">
  <table>
      <tr>
          <th>Nom de l'entreprise</th>
          <th>Adresse</th>
          <th>Ville</th>
          <th>Code postal</th>
          <th>Contact référant</th>
          <th>téléphone</th>
          <th>Mail</th>
          <th>Secteur d'activité</th>
      </tr>
      <tr v-for="client in clients">
          <td> {{client.name}} </td>
          <td> {{client.adresse}} </td>
          <td> {{client.ville}} </td>
          <td> {{client.cp}} </td>
          <td> {{client.refContact}} </td>
          <td> {{client.tel}} </td>
          <td> {{client.mail}} </td>
          <td> {{client.prospect}} </td>
      </tr>
  </table>
</template>



<style lang="css" scoped>
</style>
