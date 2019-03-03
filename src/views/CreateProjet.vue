<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="créer projet"/>            
        </div>
        <CreateProjetForm/>
    </div>
</template>

<script>
import CreateProjetForm from '@/components/CreateProjetForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    CreateProjetForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>