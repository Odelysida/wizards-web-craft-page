import {createRouter, createWebHistory} from 'vue-router';
import publicRoutes from "./publicRoutes.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        children: publicRoutes,
    }],
});
export default router;