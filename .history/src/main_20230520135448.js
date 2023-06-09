import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/app.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Password', Password);
app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('Menu', Menu);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.mount('#app');
