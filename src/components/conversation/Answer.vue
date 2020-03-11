<template lang="pug">
  .Answer.d-flex
    .timeline--thumbnail
      UserThumbnail(v-if="interaction.type !== 'answers'", :name="name", :backgroundColor="color")
    .timeline--message
      TypingLoader(v-if="isLoading")
      .timeline--message--button(v-else)
        Button(v-if="interaction.type !== 'answers'", :interaction="interaction", :color="color")
        Button(v-else, v-for="answer, number in interaction.answers", :key="number", :interaction="answer", :color="color")
</template>

<script>
import Button from '../elements/Button.vue'
import TypingLoader from '../elements/TypingLoader.vue'
import UserThumbnail from '../elements/UserThumbnail.vue'

export default {
  name: 'Answer',
  props: {
    color: String,
    interaction: Object,
    name: String
  },
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    Button,
    TypingLoader,
    UserThumbnail
  }
}
</script>

<style lang="scss" scoped>
.Answer {
  .timeline {
    &--line {}
    &--thumbnail {
      margin-right: 5px;
    }
  }
}
</style>
