<template lang="pug">
  .Button
    .Button--content(:class="interaction.type", :style="[interaction.type === 'answer' ? { 'borderColor' : color, 'color': color } : {}, interaction.type === 'selected' ? { 'backgroundColor' : color, 'color': 'white' } : {}, isHover ? { 'background': color, 'color': 'white' } : {}]")
      .Button--content--answer(v-if="interaction.type === 'question' || interaction.type === 'message' || interaction.type === 'selected'")
        p {{ interaction.title }}
      .Button--content--answer(v-if="interaction.type === 'answer'", @mouseover="isHover = true", @mouseleave="isHover = false", @click="pushAnswer")
        p {{ interaction.title }}
</template>

<script>
import { EventBus } from '../../services/event-bus.js'
import linkImg from '../../assets/link.png'

export default {
  name: "Button",
  props: {
    color: String,
    interaction: Object
  },
  data() {
    return {
      linkImg,
      isHover: false
    }
  },
  methods: {
    hoverAnswer() {
      this.isHover = !this.isHover
    },
    openUrl() {
      if (this.linkContent.toUrl) {
        window.open(this.linkContent.toUrl, '_blank')
      }
    },
    pushAnswer() {
      this.interaction.type = 'selected'
      EventBus.$emit('answerSelected', this.interaction)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Button {
    .Button--content {
      font-size: 16px;
      color: white;
      min-height: 40px;
      width: fit-content;
      padding: 6px 18px;
      border-radius: 25px;
      background: $grey;

      &.question, &.message {
        background: $blueEnd;
        color: $grey;
      }
      &.answer {
        border: 2px solid black;
        background: transparent;
        margin: 0 3px;
        cursor: pointer;

        &:hover {
          transition: .25s;
        }
      }
      &--answer {
        p {
          margin: 0;
          line-height: 30px;
        }
      }
    }
  }
</style>
