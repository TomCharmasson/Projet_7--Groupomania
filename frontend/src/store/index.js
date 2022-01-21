import { createStore } from "vuex";

const store = createStore({
  state: { // Corespond au data du store
      token: null,
  },
  getters: { // Corespond au computed du store
    getToken(state) {
      return state.token;
    },
  },
  // Setters
  mutations: { // Corespond au methods du store
    setToken(state, value) {
      state.token = value;
    },
  },
  actions: { 
    setToken(context, value) {
      // Plus propre de passer par une action qui appelle une mutation (un setter)
      context.commit("setToken", value);
    },
  },
  modules: {},
});

export default store;
