<template lang="html">
    <div class="product-listing container">
        <Title title="Clients"/>
        <ClientComponent/>
    </div>
</template>

<script>
import ClientComponent from '@/components/ClientComponent.vue'
import Title from '@/utils/Title.vue'
export default {

  components: {
    ClientComponent,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
