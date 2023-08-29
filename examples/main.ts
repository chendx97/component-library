import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import MyDemo from '../components/lib/demo/index.ts';
import MyCard from '../components/lib/card/index.ts';

const app = createApp(App);
app.use(MyDemo);
app.use(MyCard);

app.mount('#app');
