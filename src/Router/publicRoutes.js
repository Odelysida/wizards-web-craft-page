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
    }]
}];

export default publicRoutes;