

const routes = [
    /* {
        path: '/home',
        name: 'home',
        component: Home
    } */
    {
        path: '/home',
        name: 'home',
        component: resolve => { require(['@/components/home/Home.vue'], resolve) },
        meta: {
            title:'首页'
        }
    }
];


export default routes;