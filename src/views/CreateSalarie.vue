<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="créer salarie"/>            
        </div>
        <CreateSalarieForm/>
    </div>
</template>

<script>
import CreateSalarieForm from '@/components/CreateSalarieForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    CreateSalarieForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>