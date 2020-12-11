import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router'; // WARNING：需要增加index
import store from './store'; // WARNING：需要增加index

createApp(App).use(router).use(store).mount('#app');
