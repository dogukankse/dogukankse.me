import Vue from 'vue';
import Router from 'vue-router';
import BlogHome from './components/blog/BlogHome.vue';
import BlogPost from './components/blog/BlogPost.vue';
import Homepage from './components/Homepage.vue';
import Dashboard from './components/bil3008/Dashboard.vue';
import NewItem from './components/bil3008/NewItem.vue';
import EditItem from './components/bil3008/EditItem.vue';
import ViewItem from './components/bil3008/ViewItem.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/blog',
      name: 'blog-home',
      component: BlogHome,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
    },
    {
      path: '/bil3008',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/bil3008/new',
      name: 'new-item',
      component: NewItem,
    },
    {
      path: '/bil3008/edit/:item_id',
      name: 'edit-item',
      component: EditItem,
    },
    {
      path: '/bil3008/:item_id',
      name: 'view-item',
      component: ViewItem,
    },
    { path: '*', redirect: '/' },
  ],
});
