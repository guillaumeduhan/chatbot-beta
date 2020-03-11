 <template lang="pug">
  #TypingLoader.d-flex.align-items-top.justify-content-left
    .question.d-flex.align-items-center.justify-content-left
      span
      span
      span
</template>

<script>
export default {
  name: "TypingLoader"
}
</script>

<style lang="scss" scoped>
#TypingLoader {
  &.d-flex {
    width: 100%;
  }

  .question {
    -webkit-animation: grow 1.5s infinite; /* Safari 4+ */
    -moz-animation:    grow 1.5s infinite; /* Fx 5+ */
    -o-animation:      grow 1.5s infinite; /* Opera 12+ */
    animation:         grow 1.5s infinite; /* IE 10+, Fx 29+ */
    font-size: 16px;
    color: white;
    width: fit-content;
    min-height: 40px;
    padding: 6px 18px;
    background: $blueEnd;
    border-radius: 20px;

    &--thumbnail--container {
      max-width: 40px;
      overflow: hidden;
      margin: 4px;
      border-radius: 40px;

      #basileQuestionThumbnail {
        max-width: 40px;
      }
    }

    span {
      background: $grey;
      opacity: 0.25;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      display: block;
      
      &:first-child {
        margin-right: 2px;
        -webkit-animation: jump 1.5s infinite; /* Safari 4+ */
        -moz-animation:    jump 1.5s infinite; /* Fx 5+ */
        -o-animation:      jump 1.5s infinite; /* Opera 12+ */
        animation:         jump 1.5s infinite; /* IE 10+, Fx 29+ */
      }
      &:nth-child(2) {
        -webkit-animation: jump 1.5s infinite; /* Safari 4+ */
        -moz-animation:    jump 1.5s infinite; /* Fx 5+ */
        -o-animation:      jump 1.5s infinite; /* Opera 12+ */
        animation:         jump 1.5s infinite; /* IE 10+, Fx 29+ */
        animation-delay: .15s;
      }
      &:last-child {
        margin-left: 2px;
        -webkit-animation: jump 1.5s infinite; /* Safari 4+ */
        -moz-animation:    jump 1.5s infinite; /* Fx 5+ */
        -o-animation:      jump 1.5s infinite; /* Opera 12+ */
        animation:         jump 1.5s infinite; /* IE 10+, Fx 29+ */
        animation-delay: .30s;
      }
    }
  }
}

@-webkit-keyframes grow {
    0% {
        -webkit-transform:scale(0.9);
    }
    50% {
        -webkit-transform:scale(1);
    }
    100% {
        -webkit-transform:scale(0.9);
    }
}

@keyframes jump {
    0%   {
      transform: translateY(0);
    }
    50%  {
      transform: translateY(-5px);
      opacity: .75;
    }
    100% {
      transform: translateY(0);
    }
}
</style>
