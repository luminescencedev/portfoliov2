import { createWebHashHistory, createRouter } from "vue-router";
import Home from './pages/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
