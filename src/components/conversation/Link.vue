<template lang="pug">
  .Link(@click="goToUrl")
    .no--content.d-flex.flex-column.align-items-center.justify-content-center(v-if="!content")
      img.no--content--background(src="https://media.giphy.com/media/iqzp1pBJtNQUU/giphy.gif", alt="dead")
      h6 Link is dead.
    .content(v-else)
      .Link--image--container
        .Link--image--container--background(:style="[{ 'background-image': 'url(' + content.image + ')' }]")
      .Link--content.d-flex.align-items-end
        .Link--content--titles
          h5(v-if="content.title") {{ content.title }}
          .small(v-if="content.description") {{ content.description | substringExtract }}
        img.Link--content--icon(:src="link", alt="link")
</template>

<script>
import link from '../../assets/link.png'

export default {
  name: 'Link',
  props: {
    content: {
      default: () => {},
      type: Object,
    },
  },
  data() {
    return {
      link,
    }
  },
  methods: {
    goToUrl() {
      console.log(this.content)
      window.open(this.content.url, '_blank')
    },
  },
}
</script>

<style lang="scss">
.Link {
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  min-width: 300px;
  max-width: 300px;
  min-height: 200px;
  max-height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .no--content {
    background: $grey;
    color: white;
    min-height: 200px;
    &--background {
      max-width: 300px;
      position: absolute;
      z-index: 0;
      top: 0; left: 0;
    }
    h6 {
      z-index: 1;
    }
  }

  &--image--container {
    background: black;
    min-width: 300px;
    min-height: 200px;
    position: relative;
    left: 0;
    top: 0;
    z-index: -1;

    &--background {
      min-width: 100%;
      min-height: 100%;
      background-size: cover;
      background-position: 50%;
      position: absolute;
      opacity: .75;
      height: 100%;
      transition: .25s;

      &:hover {
        opacity: 1;
        transition: .25s;
      }
    }
  }

  &--content {
    bottom: 0; left: 0;
    position: absolute;
    padding: 18px;
    background-size: cover;
    background-position: center;

    &--titles {
      h5, .small {
        margin: 0;
      }
    }

    &--icon {
      width: 25px;
    }
  }
}
</style>
