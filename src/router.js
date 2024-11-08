import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; 
import Products from './views/Products.vue'; 
import Contact from './views/Contact.vue'; 
import Login from './views/Login.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
