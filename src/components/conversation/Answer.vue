<template lang="pug">
  .Answer.d-flex(:class="interaction.type === 'selected' ? 'justify-content-end' : 'justify-content-start'")
    .timeline--thumbnail
      UserThumbnail(v-if="interaction.type !== 'answer' && interaction.type !== 'selected'", :name="name", :backgroundColor="color")
    .timeline--message
      TypingLoader(v-if="isLoading")
      .timeline--message--button(v-else)
        Button(:interaction="interaction", :color="color", @click.native="selectAnswer", :selected="buttonSelected")
</template>

<script>
import Button from '../elements/Button.vue'
import TypingLoader from '../elements/TypingLoader.vue'
import UserThumbnail from '../elements/UserThumbnail.vue'

export default {
  name: 'Answer',
  components: {
    Button,
    TypingLoader,
    UserThumbnail,
  },
  props: {
    buttonSelected: Boolean,
    color: {
      type: String,
      default: '',
    },
    interaction: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isLoading: false,
    }
  },
  mounted() {
    if (this.interaction.delay) {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        if (this.interaction.type !== 'question') {
          this.$emit('answerDisplayed', this.interaction.position + 1)
        }
      }, this.interaction.delay * 1000)
    }
  },
  methods: {
    selectAnswer() {
      if (this.interaction.type === 'answer') {
        this.$emit('newAnswerSelected', this.interaction)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Answer {
  margin-bottom: 10px;

  .timeline {
    &--thumbnail {
      margin-right: 5px;
    }
  }
}
</style>
