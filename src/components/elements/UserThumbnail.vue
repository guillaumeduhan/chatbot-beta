<template lang="pug">
  .user--thumbnail.d-flex.align-items-center.justify-content-center(@click="show = !show", :style='{ backgroundColor: backgroundColor }')
    p(v-if="name") {{ name | letterGenerator }}
</template>

<script>
export default {
  name: "UserThumbnail",
  props: {
    backgroundColor: String,
    name: String
  }
}
</script>

<style lang="scss">
.user--thumbnail{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  font-size: 30px;
  color: white;
  p {
    font-size: 20px;
    margin: 0;
  }
}
</style>
