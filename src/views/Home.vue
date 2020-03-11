<template lang="pug">
#Home
  .timeline.d-flex.flex-column
    Answer(v-for="interaction, index in timeline", :key="index", :class="['timeline--line--' + interaction.type, { 'align-items-end justify-content-end' : interaction.type === 'answer' }]", :interaction="interaction", :name="name", :color="color")
</template>

<script>
import Answer from '../components/conversation/Answer.vue'
import { idGenerator } from '../services/helpers.js'

export default {
  name: 'Home',
  data() {
    return {
      color: undefined,
      counter: 0,
      isLoading: false,
      model: undefined,
      name: undefined,
      timeline: []
    }
  },
  components: {
    Answer
  },
  methods: {
    initConversation() {
      this.pushToTimeline(this.model[0])
    },
    pushToTimeline(entry) {
      // this.isLoading = true
      // this.timeline.push(entry)
      // if (entry.delay) {
      //   setTimeout(() => {
      //     this.isLoading = false
      //   }, entry.delay * 1000)
      // }
    },
    searchAndMount(botModel) {
      let newAnswersModel = {
        type: 'answers',
        answers: {}
      }
      // l'idée ici c'est de recréer un objet réponses à partir des réponses
      _.forEach(botModel, (line) => {
        if (line.type === 'answer') {
          newAnswersModel.answers[line.id] = line
          delete botModel[line.id]
        }
      })
      botModel[idGenerator()] = newAnswersModel
      this.model = _.orderBy(botModel, 'position', 'asc');
      this.initConversation()
    }
  },
  mounted() {
    this.$firegun.getBot(this.$route.params.chatbotName)
    .then((data) => {
      if (data.exists) {
        this.name = data.data().chatbot_name
        this.color = data.data().color
        this.searchAndMount(data.data().chatbot_model)
      } else {
        console.log("no bot")
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
