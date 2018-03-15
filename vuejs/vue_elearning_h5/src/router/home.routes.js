

const routes = [
    /* {
        path: '/home',
        name: 'home',
        component: Home
    } */
    {
        path: '/home',
        name: 'home',
        component: resolve => { require(['@/modules/home/components/Home.vue'], resolve) }
    }
];


export default routes;