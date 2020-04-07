<template lang="pug">
  .Button
    .Button--content(:class="interaction.type", :style="[interaction.type === 'answer' ? { 'borderColor' : color, 'color': color } : {}, interaction.type === 'answer' && isHover ? { 'backgroundColor' : color, 'color': 'white' } : {}, selected ? { 'backgroundColor' : color, 'color': 'white' } : {}]", @mouseover="isHover = true", @mouseleave="isHover = false")
      img.branding--image(v-if="interaction.type === 'branding'", :src="logo")
      span {{ interaction.title }}
</template>

<script>
import logo from "../../assets/logo.png"

export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: '',
    },
    interaction: {
      type: Object,
      default: () => {},
    },
    selected: Boolean,
  },
  data() {
    return {
      isHover: false,
      logo,
    }
  },
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

      &.branding {
        background: $lavanda;
        border-radius: 100px;
        color: white;
        cursor: pointer;
        font-size: 12px;
        line-height: 10px;
        min-height: 10px;
        opacity: 0.2;
        padding: 15px 15px;
        position: absolute;
        top: 0; right: 0;
        transition: .25s;
        z-index: 1000;

        &:hover {
          opacity: 1;
          transition: .25s;
        }

        .branding--image {
          width: 30px;
        }
      }

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
