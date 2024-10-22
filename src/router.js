import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // เปลี่ยนเป็นเส้นทางที่ถูกต้อง
import Products from './views/Products.vue'; // เปลี่ยนเป็นเส้นทางที่ถูกต้อง
import Contact from './views/Contact.vue'; // เปลี่ยนเป็นเส้นทางที่ถูกต้อง
import Login from './views/Login.vue'; // เปลี่ยนเป็นเส้นทางที่ถูกต้อง

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
