import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import FontAwesomeIcon from './plugins/fontawesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
