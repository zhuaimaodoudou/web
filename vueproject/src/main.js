import { createApp } from 'vue'
import App from './App.vue'
import './utils/rem'
import store from './store/store'

createApp(App).use(store).mount('#app')

