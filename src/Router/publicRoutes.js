import PageContainer from "/src/components/Layout/PageContainer.vue";
import Navigation from "/src/components/Layout/Navigation.vue";

const publicRoutes= [{
    path: '',
    name: 'public',
    component: PageContainer,
    children: [{
        path: '',
        redirect: {name: 'home'},
    }, {
        name: 'home',
        path: 'home',
        components: {
            page: () => import('/src/components/Pages/Home.vue'),
            layoutNavbar: Navigation,
        }
    }, {
        name: 'about',
        path: 'about',
        components: {
            page: () => import('/src/components/Pages/About.vue'),
            layoutNavbar: Navigation,
        }
    }, {
        name: 'contact',
        path: 'contact',
        components: {
            page: () => import('/src/components/Pages/Contact.vue'),
            layoutNavbar: Navigation,
        }
    }, {
        name: '404',
        path: '/:pathMatch(.*)*',
        components: {
            page: () => import('/src/components/Pages/Error.vue'),
            layoutNavbar: Navigation,
        }
    }]
}];

export default publicRoutes;