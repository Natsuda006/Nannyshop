import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
