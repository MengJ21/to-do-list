import {createRouter, createWebHashHistory} from "vue-router";
import Index from "/src/pages/Index.vue"
export const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/AllTask',
        component: () => import('/src/pages/AllTask.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
