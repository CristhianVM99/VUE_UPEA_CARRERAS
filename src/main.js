import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes'
import { VueQueryPlugin } from 'vue-query'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')




