<template lang="pug">
#Home.d-flex.flex-column.align-items-end.justify-content-end
  .timeline.d-flex.flex-column.justify-content-end
    Answer(v-for="interaction, index in timeline", :key="index", :class="['timeline--line--' + interaction.type, { 'align-items-end justify-content-end' : interaction.type === 'answer' }]", :interaction="interaction", :name="name", :color="color", @answerIsDisplayed="increaseCount")
  .options.d-flex.align-items-center.justify-content-center(v-if="options.length")
    Answer(v-for="interaction, index in options", :key="index", :interaction="interaction", :name="name", :color="color")
</template>

<script>
import Answer from '../components/conversation/Answer.vue'
import { idGenerator } from '../services/helpers.js'
import { EventBus } from '../services/event-bus.js'

export default {
  name: 'Home',
  data() {
    return {
      color: undefined,
      count: 0,
      model: undefined,
      name: undefined,
      options: [],
      timeline: []
    }
  },
  components: {
    Answer
  },
  methods: {
    increaseCount() {
      // this.count++
      // if (this.model[this.count].type !== 'answers') {
      //   setTimeout(() => {
      //     this.pushNextEntry(this.model[this.count])
      //   }, 500)
      // } else {
      //   this.pushNextEntry(this.model[this.count])
      // }
    },
    initConversation() {
      this.pushNextEntry(this.model[0].id)
    },
    lookForEntryInModel(id) {
      // _.forEach(this.model, (entry) => {
      //   if (entry.id === id) {
      //     this.pushNextEntry(entry)
      //   } else {
      //     console.log("non existing entry with this id: " + id)
      //   }
      // })
    },
    pushNextEntry(id) {
      _.forEach(this.model, (entry) => {
        if (entry.id === id) {
          this.timeline.push(entry)
            if (entry.next) {
              setTimeout(() => {
                this.pushNextEntry(entry.next)
              }, entry.delay + 500)
            }
        } else {
          console.log("pas trouvé")
        }
      })
      // if (entry.type !== 'answers') {
      //   this.options = []
      //   this.timeline.push(entry)
      //   if (entry.type === 'selected') {
      //     this.lookForEntryInModel(entry.leadTo)
      //   }
      // } else {
      //   this.options.push(entry)
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
      console.log(this.model)
      this.initConversation()
    }
  },
  mounted() {
    let that = this
    this.$firegun.getBot(this.$route.params.chatbotName)
    .then((data) => {
      if (data.exists) {
        this.name = data.data().chatbot_name
        this.color = data.data().color
        this.searchAndMount(data.data().chatbot_model)
      } else {
        this.$router.push('/')
      }
    })
    .catch((err) => {
      console.log(err)
    })
    EventBus.$on('answerSelected', (answer) => {
      that.pushNextEntry(answer)
    })
  }
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
  .timeline, .options {
    padding: 10px;
    width: 100%;
  }
}
</style>
