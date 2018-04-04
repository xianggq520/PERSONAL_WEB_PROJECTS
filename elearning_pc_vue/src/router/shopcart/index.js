 

const routes = [
    /* {
        path: '/shopcart',
        name:'shopcart',
        component: Shopcart
    } */
    {
        path: '/shopcart',
        name: 'shopcart',
        component: resolve => {require(['@/components/shopcart/ShopCart.vue'], resolve)},
        meta: {
            title:'购物车' //title显示
        }
    }
];


export default routes;