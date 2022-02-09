import { createStore } from "vuex";

const store = createStore({
  getters: {
    // Corespond au computed du store
    getToken() {
      return localStorage.getItem("token");
    },
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
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
      localStorage.setItem("token", value);
    },
    setUser(state, value) {
      localStorage.setItem("user", JSON.stringify(value));
    },
  },
  modules: {},
});

export default store;
