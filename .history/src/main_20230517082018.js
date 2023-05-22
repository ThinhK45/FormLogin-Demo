import PrimeVue from 'primevue/config';
import 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.mount('#app');
