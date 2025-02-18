import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import Contact from './pages/ContactPage.vue';
import Work from './pages/WorkPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/works',
        name: 'Works',
        component: Work
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
