import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.use(router);

app.component('base-modal', BaseModal);

// router 는 기본적으로 처음 로딩 시 empty route 이었다가 url 파악 후 전환된다.
// 이로 인해 첫 로딩 시에도 애니메이션이 발동.
// 첫 로딩 시 url 파악 후 로직을 수행하도록 isReady 를 사용할 수 있다.
router.isReady().then(function() {
  app.mount('#app');
});
