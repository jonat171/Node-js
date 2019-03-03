<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="les salariés"/>            
        </div>
        <CreateProductForm/>
    </div>
</template>

<script>
import CreateProductForm from '@/components/SalarieComponent.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    CreateProductForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>
