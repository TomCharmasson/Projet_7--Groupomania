import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import axiosApi from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/js/bootstrap.js";

const axios = axiosApi.create({
    baseURL:'http://localhost:3000/'
});


const app = createApp(App).use(store).use(router)
app.use(VueAxios, axios)

app.mount('#app')