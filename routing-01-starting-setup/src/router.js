import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { 
      name: 'temas',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter }, // router-view name 이 없는 것은 default 로 들어가고, footer 키 컴포넌트는 name 이 footer 인 곳으로 들어감.
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ],
    },
    { 
      path: '/users', 
      components: { 
        default: UsersList, 
        footer: UsersFooter 
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) { // back button clicked
      return savedPosition;
    }
    return { left: 0, top: 0 }; // move top when changing link
  },
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 'h2' }});
  // }
  next();
});

router.afterEach(function(to, from) {
  // sending analytics data ...
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;