<template lang="pug">
  #NotFound
    .container.d-flex.flex-column.align-items-center.justify-content-center
      img#mouse(:src="mouse")
      p {{ message }}
</template>

<script>
import mouse from '../assets/mouse.png'

export default {
  name: 'NotFound',
  data() {
    return {
      mouse,
      message: 'Le chat n\'est pas là, les souris dansent.'
    }
  }
}
</script>

<style lang="scss">
#NotFound {
  #mouse {
    max-width: 300px;
  }
}
</style>
