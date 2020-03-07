<template lang="pug">
  .Button(:class="classType")
</template>

<script>
import linkImg from '../assets/link.png'

export default {
  name: "Button",
  props: {},
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
    font-size: 18px;
    border: 1px solid transparent;
    width: fit-content;
    margin: 4px;
  }
</style>
