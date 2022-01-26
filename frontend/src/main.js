import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosApi from 'axios' // Bibliothèque JS fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes.
import VueAxios from 'vue-axios'

import "bootstrap/dist/js/bootstrap.js";
import './assets/css/style.css'

// Set config defaults when creating the instance
const axios = axiosApi.create({
    baseURL:'http://localhost:3000/'
});
// Alter defaults after instance has been created
// const token = this.$store.getters.getToken;
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + ${token};


const app = createApp(App).use(store).use(router)
app.use(VueAxios, axios)

app.mount('#app')