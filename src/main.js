import { createApp } from 'vue'
import App from './App.vue'
import '/src/css/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import NavigatorTop from "./components/NavigatorTop.vue";
import router from "./router/router";


const app = createApp(App);



app.use(ElementPlus)
app.use(router)
app.component('NavigatorTop', NavigatorTop)
app.mount('#app')
