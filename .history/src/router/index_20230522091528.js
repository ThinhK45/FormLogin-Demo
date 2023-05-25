import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/auth/FormLogin.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/FormLogin.vue'),
    },
    {
        path: '/auth/access',
        name: 'accessDenied',
        component: () => import('../views/auth/Access.vue'),
    },
    {
        path: '/auth/error',
        name: 'error',
        component: () => import('../views/auth/Error.vue'),
    },
    {
        path: '/change-password',
        name: 'changePassword',
        component: () => import('../views/auth/ChangePassword.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
