import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './../pages/Home.vue';
import ProjectsPage from './..//pages/Projects.vue';
import ContactPage from './../pages/Products.vue';

const routes = [

    { path: '/resume.io', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectsPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
