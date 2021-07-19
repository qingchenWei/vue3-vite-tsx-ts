import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import { setupElementPlus } from './plugin/elementPlus'
const app = createApp(App)
setupElementPlus(app)
app.use(store).use(router).mount('#app')
