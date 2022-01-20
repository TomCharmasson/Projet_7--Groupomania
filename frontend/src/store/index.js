import { createStore } from 'vuex'


const store = createStore({
  modules: {},
  state() {
    return {
      token: null,
    };
  },
  // Setters
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
  },
  actions: {
    setToken(context, value) {
      // Plus propre de passer par une action qui appelle une mutation (un setter)
      context.commit("setToken", value);
    },
  },
});

export default store;