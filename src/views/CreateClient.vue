<template lang="html">
    <div class="container">
        <div class="text-center">
            <Title title="créer client"/>            
        </div>
        <CreateClientForm/>
    </div>
</template>

<script>
import CreateClientForm from '@/components/CreateClientForm.vue'
import Title from '@/utils/Title.vue'

export default {
  components: {
    CreateClientForm,
    Title
  }
}
</script>

<style lang="css" scoped>
</style>