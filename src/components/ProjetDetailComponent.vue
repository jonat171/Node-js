<template lang="html">
  <table>
      <tr>
          <th>Nom </th>
          <th>Description</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Montant total</th>
          <th>Statut</th>
      </tr>
      <tr v-for="projet in projets">
          <td> {{projet.Nom}} </td>
          <td> {{projet.description}} </td>
          <td> {{projet.dated}} </td>
          <td> {{projet.datef}} </td>
          <td> {{projet.montant}} </td>
          <td> {{projet.statut}} </td>

      </tr>
  </table>
</template>



<style lang="css" scoped>
</style>
