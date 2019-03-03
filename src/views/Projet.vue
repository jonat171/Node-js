<template>

  <div class="projet container">

        <Title title="projets"/>
        <ProjetComponent/>

  </div>

</template>

<script>

import ProjetComponent from '@/components/ProjetComponent.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    ProjetComponent,
    Title
  },
  data () {
    return {
      name: 'vincent',
      age: 21,
      adress: "1, rue de l'eglise",
      products: [
        { name: 'iphone X', price: 1000 },
        { name: 'iphone 8', price: 500 }
      ]
    }
  }
}

</script>
