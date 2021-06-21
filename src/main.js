import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { create, NButton, NIcon, NDivider, NInput, NDropdown, NCard, NAvatar } from 'naive-ui'

const naive = create({
    components: [NButton, NIcon, NDivider, NInput, NDropdown, NCard, NAvatar]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')

