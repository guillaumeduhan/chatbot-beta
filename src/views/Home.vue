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
      model: undefined,
      name: undefined,
      options: [],
      position: 1,
      timeline: []
    }
  },
  components: {
    Answer
  },
  methods: {
    initConversation() {
      
    },
    pushEntryToTimeline(entry) {
      // if (entry.delay) {
      //   setTimeout(() => {
      //     this.timeline.push(entry)
      //     this.position++
      //     this.timeline.push(this.model)
      //   }, entry.delay + 500)
      // } else {
      //   this.timeline.push(entry)
      // }
    },
    searchAndMount(botModel) {
      let newAnswersModel = {
        type: 'answers',
        answers: {}
      }
      this.model = _.orderBy(botModel, 'position', 'asc');
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
