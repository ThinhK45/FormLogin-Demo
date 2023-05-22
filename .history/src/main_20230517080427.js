import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.mount('#app');