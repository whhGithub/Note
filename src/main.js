import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import store from './store'
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
    onNeedRefresh() {
        // show a prompt to user
    },
    onOfflineReady() {
        // show a ready to work offline to user
    },
})
createApp(App).use(router).use(store).mount('#app')