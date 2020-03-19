<template lang="pug">
  .Button
    .Button--content(:class="interaction.type", :style="[interaction.type === 'answer' ? { 'borderColor' : color, 'color': color } : {}, interaction.type === 'answer' && isHover ? { 'backgroundColor' : color, 'color': 'white' } : {}, selected ? { 'backgroundColor' : color, 'color': 'white' } : {}]", @mouseover="isHover = true", @mouseleave="isHover = false") {{ interaction.title }}
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: ''
    },
    interaction: {
      type: Object,
      default: () => {}
    },
    selected: Boolean
  },
  data() {
    return {
      isHover: false
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
      line-height: 30px;
      width: fit-content;
      padding: 6px 18px;
      border-radius: 25px;
      background: $grey;

      &.question,
      &.message {
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
