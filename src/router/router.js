import Vue from 'vue'
import Router from 'vue-router'
import Main from '@//views/MainPage.vue'
import Home from '@//views/page/HomePage.vue'
import Download from '@//views/page/DownloadPage.vue'
import Changelog from '@//views/page/ChangelogPage.vue'

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/download',
    name: 'download',
    component: Download,
  }, {
    path: '/changelog',
    name: 'changelog',
    component: Changelog,
  }, {
    path: '/about',
    name: 'about',
    beforeEnter() {
      location.href = 'https://github.com/milluxdev/mius'
    }
  }]
}]
const router = new Router({
  routes,
});
export default router;