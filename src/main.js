import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './axios'
import {store} from './store'
import 'es6-promise/auto';

createApp(App).use(router,store).mount('#app')
