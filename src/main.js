import { createApp } from 'vue';
import App from './App.vue';

import './assets/global.scss';
import rem from './plugins/rem';

const app = createApp(App);

app.use(rem);
app.mount('#app')
