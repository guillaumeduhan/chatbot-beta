<template lang="pug">
  .Answer.d-flex(:class="interaction.type === 'answers' || interaction.type === 'selected' ? 'justify-content-end' : 'justify-content-start'")
    .timeline--thumbnail
      UserThumbnail(v-if="interaction.type !== 'answers' && interaction.type !== 'selected'", :name="name", :backgroundColor="color")
    .timeline--message
      TypingLoader(v-if="isLoading")
      .timeline--message--button(v-else)
        Button(v-if="interaction.type !== 'answers'", :interaction="interaction", :color="color")
        .timeline--message--button--answers.d-flex.align-items-end.justify-content-end(v-else)
          Button(v-for="answer, number in interaction.answers", :key="number", :interaction="answer", :color="color")
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
  },
  mounted() {
    if (this.interaction.type !== 'answers') {
      if (this.interaction.delay) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.$emit("answerIsDisplayed")
        }, this.interaction.delay * 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Answer {
  margin-bottom: 10px;

  .timeline {
    &--line {}
    &--thumbnail {
      margin-right: 5px;
    }
    &--message--button {
      &--answers {

      }
    }
  }
}
</style>
