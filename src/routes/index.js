import { createRouter, createWebHashHistory } from 'vue-router';
import Prueba from '../components/prueba.vue';
import Principal from "../pages/index.vue"

const routes = [
  { path: '/', component: Principal }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
