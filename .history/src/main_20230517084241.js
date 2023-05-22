import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import '../node_modules/primeflex/primeflex.css';
import './assets/app.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Checkbox from 'primevue/checkbox';
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.mount('#app');
