import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'app',
        component: () => import('../App.vue'),
    },
    {
        path: '/auth/access',
        name: 'accessDenied',
        component: () => import('@/views/auth/Access.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
