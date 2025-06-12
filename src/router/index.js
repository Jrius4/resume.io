import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './../pages/Home.vue';
import ProjectsPage from './..//pages/Projects.vue';
import ProjectDetailsPage from './../pages/ProjectDetails.vue';
import ContactPage from './../pages/Products.vue';

const routes = [

    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectsPage },
    { path: '/projects/:id', name: 'ProjectDetails', component: ProjectDetailsPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
