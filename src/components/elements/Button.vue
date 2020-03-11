<template lang="pug">
  .Button
    .Button--content(:class="interaction.type", :style="[interaction.type === 'answer' ? {backgroundColor : color} : {}]")
      .Button--content--answer(v-if="interaction.type === 'question' || interaction.type === 'message'")
        p {{ interaction.title }}
      .Button--content--answer(v-if="interaction.type === 'answer'")
        p {{ interaction.title }}
</template>

<script>
import linkImg from '../../assets/link.png'

export default {
  name: "Button",
  props: {
    color: String,
    interaction: Object
  },
  data() {
    return {
      linkImg
    }
  },
  methods: {
    openUrl() {
      if (this.linkContent.toUrl) {
        window.open(this.linkContent.toUrl, '_blank')
      }
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
      border-radius: 20px;
      background: $grey;
      &.question, &.message {
        background: $blueEnd;
        color: $grey;
      }
      &.answer {

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
