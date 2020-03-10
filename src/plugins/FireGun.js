const firebase = require('firebase/app')
const _ = require('lodash')
const { db } = require('../services/db.js')

const FireGun = {
  install(Vue, options) {
    Vue.prototype.$firegun =  {
      //
      // Authentication
      //
      getUser: async (userId) => {
        return db
        .collection('users')
        .doc(userId)
        .get()
      },
      //
      // Firestore
      //
      getBot: async (chatbot_name) => {
        return db
        .collection('chatbots')
        .doc(chatbot_name)
        .get()
      },
    }
  },
}

export default FireGun
