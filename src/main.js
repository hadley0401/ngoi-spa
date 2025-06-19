import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'flag-icons/css/flag-icons.min.css'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')