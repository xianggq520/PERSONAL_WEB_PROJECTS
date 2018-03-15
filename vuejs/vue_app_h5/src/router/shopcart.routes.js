 

const routes = [
    /* {
        path: '/shopcart',
        name:'shopcart',
        component: Shopcart
    } */
    {
        path: '/shopcart',
        name: 'shopcart',
        component: resolve => {require(['@/modules/shopcart/components/ShopCart.vue'], resolve)}
    }
];


export default routes;