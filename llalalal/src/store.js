import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
      change(state,arg){
        state.title = arg.title;
        state.color = arg.color;
      }
  },
  actions: {

  }
})
