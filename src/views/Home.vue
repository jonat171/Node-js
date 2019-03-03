<template>
  <div class="home container">
    <Title title="Bienvenue sur notre application de gestion de projet"/>
    <p>VOICI QUELQUE STATS DE L'ENTREPRISE:</p>
    <p>Le nombre actuel de salarié dans l'agence est de: ...</p>
    <p>Le nombre actuel de client est de: ...</p>
    <p>Le nombre actuel de projets est de: ...</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/utils/Title.vue';

export default {
  name: 'home',
  components: {
    Title
  }
}
</script>
