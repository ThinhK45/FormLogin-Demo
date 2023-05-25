import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/app.css';
import router from './router';
// import 'primevue/resources/themes/soho-light/theme.css';
import 'primevue/resources/themes/vela-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(PrimeVue);
app.use(router);
app.component('Password', Password);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.mount('#app');
