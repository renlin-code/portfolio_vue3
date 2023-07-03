import { createApp } from 'vue';
import { createHead } from '@vueuse/head'
import App from './App.vue';
import './assets/global.scss';
import i18n from './locales/i18n';
import rem from './plugins/rem';

const app = createApp(App);
const head = createHead()

app.use(head);
app.use(i18n);
app.use(rem);
app.mount('#app');
