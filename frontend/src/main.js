import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosApi from "axios"; // Bibliothèque JS fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes.
import VueAxios from "vue-axios";

import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/style.css";

// Set config defaults when creating the instance
let axios = axiosApi.create({
  baseURL: "http://localhost:3000/",
});
axios.interceptors.request.use(function (config) {
  const token = store.getters.getToken;
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  config.headers.Authorization = "Bearer " + token;
  console.log("Auth With Token");
  return config;
});

const app = createApp(App).use(store).use(router);
app.use(VueAxios, axios);

app.mount("#app");
