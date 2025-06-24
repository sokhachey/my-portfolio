import './assets/main.css'
import BaseButton from './components/global/BaseButton.vue'
import BaseCard from './components/global/BaseCard.vue'
import BaseLoad from './components/global/BaseLoad.vue'
import BaseToast from './components/global/BaseToast.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseLoad', BaseLoad)
app.component('BaseToast', BaseToast)

app.mount('#app')



