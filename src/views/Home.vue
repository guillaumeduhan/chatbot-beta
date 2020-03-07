<template lang="pug">
#Home
  p hello
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 10000)
  }
}
</script>

<style lang="scss">
#Home {
  img {
    max-width: 400px;
  }
  #logo {
    max-width: 75px;
    margin-bottom: 25px;
  }
}
</style>
