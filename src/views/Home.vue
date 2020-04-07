<template lang="pug">
#Home.d-flex.flex-column.align-items-end.justify-content-end(:class="{ 'shadow p-3 on--responsive' : $mq !== 'mobile' }")
  Chatbot
</template>

<script>
import Chatbot from './Chatbot.vue'

export default {
  name: 'Home',
  components: {
    Chatbot,
  },
}
</script>

<style lang="scss">
#Home {
    min-width: 100%;
    width: 100%;
    height: 100vh;
    padding: 5px;
  &.on--responsive {
    min-width: 400px;
    width: 400px;
    height: 700px;
    min-height: 700px;
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>
