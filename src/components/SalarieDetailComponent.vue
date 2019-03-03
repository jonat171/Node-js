<template lang="html">
  <table>
      <tr>
          <th>Nom </th>
          <th>Prénom</th>
          <th>Username</th>
          <th>Date de naissance</th>
          <th>Adresse</th>
          <th>téléphone</th>
          <th>Mail</th>
          <th>Poste</th>
      </tr>
      <tr v-for="salarie in salaries">
          <td> {{salarie.Nom}} </td>
          <td> {{salarie.Prenom}} </td>
          <td> {{salarie.username}} </td>
          <td> {{salarie.birthday}} </td>
          <td> {{salarie.adress}} </td>
          <td> {{salarie.tel}} </td>
          <td> {{salarie.mail}} </td>
          <td> {{salarie.poste}} </td>
      </tr>
  </table>
</template>



<style lang="css" scoped>
</style>
