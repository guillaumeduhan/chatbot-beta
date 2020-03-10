<template lang="pug">
  .Button
    .Button--content(:style="[ interaction.type === 'answer' ? { background: color } : { background : 'grey' } ]")
      .Button--content--answer(v-if="interaction.type === 'question' || interaction.type === 'message'")
        .Button--content--title {{ interaction.title }}
      .Button--content--answer(v-if="interaction.type === 'answer'")
        .Button--content--title {{ interaction.title }}
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
      width: fit-content;
      padding: 6px 18px;
      border-radius: 20px;
    }
  }
</style>
