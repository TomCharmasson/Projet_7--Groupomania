import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosApi from 'axios' // Bibliothèque JS fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes.
import VueAxios from 'vue-axios'

import "bootstrap/dist/js/bootstrap.js";
import './assets/css/style.css'

const axios = axiosApi.create({
    baseURL:'http://localhost:3000/'
});


const app = createApp(App).use(store).use(router)
app.use(VueAxios, axios)

app.mount('#app')