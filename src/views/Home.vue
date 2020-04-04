<template lang="pug">
#Home.d-flex.flex-column.align-items-end.justify-content-end
  .timeline.d-flex.flex-column.justify-content-end
    Answer(v-for="interaction, index in timeline", :key="index", :class="['timeline--line--' + interaction.type, { 'align-items-end justify-content-end' : interaction.type === 'answer' }]", :buttonSelected="interaction.type === 'answer'", :interaction="interaction", :name="name", :color="color", @answerDisplayed="displayNextAnswer")
  .options.d-flex.align-items-center.justify-content-center(v-if="options.length")
    Answer(v-for="interaction, index in options", :key="index", :interaction="interaction", :name="name", :color="color", @newAnswerSelected="goToNextInteraction")
</template>

<script>
import _ from 'lodash'
import Answer from '../components/conversation/Answer.vue'

export default {
  name: 'Home',
  components: {
    Answer,
  },
  data() {
    return {
      color: undefined,
      model: undefined,
      model_position: 0,
      name: undefined,
      options: [],
      selected: undefined,
      timeline: [],
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const that = this
    this.$firegun.getBot(this.$route.params.chatbotName)
    .then((data) => {
      if (data.exists) {
        this.name = data.data().chatbot_name
        this.color = data.data().color
        this.model = _.orderBy(data.data().chatbot_model, 'position', 'asc')
        console.log(this.model)
        this.initConversation()
      } else {
        this.$router.push('/')
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {
    displayConversation(index) {
      this.timeline.push(this.model[index])
      if (this.model[index].type === 'message') {
        setTimeout(() => {
          this.displayNextAnswer(index + 1)
        }, this.model[index].delay * 1000)
      }
    },
    displayNextAnswer(index) {
      const nextAnswer = this.model[index]
      if (nextAnswer) {
        setTimeout(() => {
          this.timeline.push(nextAnswer)
          if (nextAnswer.answers) {
            setTimeout(() => {
              this.options = nextAnswer.answers
            }, nextAnswer.delay * 1000)
          }
        }, 1000)
      }
    },
    initConversation() {
      this.displayConversation(0)
    },
    goToNextInteraction(interaction) {
      this.options = []
      this.selected = undefined
      this.timeline.push(interaction)
      this.displayNextAnswer(interaction.leadTo)
    },
  },
}
</script>

<style lang="scss">
#Home {
  min-width: 100vw;
  min-height: 100vh;

  img {
    max-width: 400px;
  }

  #logo {
    max-width: 75px;
    margin-bottom: 25px;
  }

  .timeline,
  .options {
    padding: 10px;
    width: 100%;
  }
}
</style>
