<template lang="pug">
#Home
  .timeline.d-flex.flex-column
    .timeline--line.d-flex(v-for="interaction, index in interactionsList", :key="index", :class="['timeline--line--' + interaction.type, { 'align-items-end justify-content-end' : interaction.type === 'answer' }]")
      Button(v-if="interaction.type !== 'answers'", :interaction="interaction", :color="color")
      Button(v-else, v-for="answer, number in interaction.answers", :key="number", :interaction="answer", :color="color")
</template>

<script>
import Button from '../components/elements/Button.vue'
import { idGenerator } from '../services/helpers.js'

export default {
  name: 'Home',
  data() {
    return {
      color: undefined,
      model: undefined,
      isLoading: false
    }
  },
  components: {
    Button
  },
  computed: {
    interactionsList() {
      return _.orderBy(this.model, 'position', 'asc');
    }
  },
  methods: {
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
      this.model = botModel
    }
  },
  mounted() {
    this.$firegun.getBot(this.$route.params.chatbotName)
    .then((data) => {
      if (data.exists) {
        this.searchAndMount(data.data().chatbot_model)
        this.color = data.data().color
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
