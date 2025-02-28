import {createRouter, createWebHistory} from 'vue-router';
import publicRoutes from "./publicRoutes.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        children: publicRoutes,
    }],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, left: 0 };
        }
    }
});
export default router;