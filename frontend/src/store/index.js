import { createStore } from "vuex";

const store = createStore({
  state: {
    // Corespond au data du store
    token: null,
    user: null,
  },
  getters: {
    // Corespond au computed du store
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    setToken(context, value) {
      // Plus propre de passer par une action qui appelle une mutation (un setter)
      context.commit("setToken", value);
    },
    setUser(context, value) {
      context.commit("setUser", value);
    },
  },
  mutations: {
    // Corespond au methods du store
    setToken(state, value) {
      state.token = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
  modules: {},
});

export default store;
