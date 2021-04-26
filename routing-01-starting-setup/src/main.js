import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { 
      name: 'temas',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter }, // router-view name 이 없는 것은 default 로 들어가고, footer 키 컴포넌트는 name 이 footer 인 곳으로 들어감.
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ],
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
