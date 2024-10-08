import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Aura from '@primevue/themes/aura'
import './assets/main.css'

const app = createApp(App)

app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
})
app.use(createPinia())
app.use(router)
app.use(ToastService)

app.mount('#app')
