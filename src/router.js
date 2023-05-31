import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppProjectIndex from './pages/AppProjectIndex.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: AppHome,

        },
        {
            path:'/about-us',
            name:'AboutUs',
            component: AppAboutUs,

        },
        {
            path:'/project-index',
            name:'ProjectIndex',
            component: AppProjectIndex,

        },
        {
            path:'/project/:slug',
            name:'ProjectShow',
            component: SingleProject,

        },
    ]
});

export { router };