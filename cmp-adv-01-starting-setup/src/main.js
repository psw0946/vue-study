import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge); // global component
app.component('base-card', BaseCard);

app.mount('#app');
