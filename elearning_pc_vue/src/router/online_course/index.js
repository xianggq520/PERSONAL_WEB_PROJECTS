const routes = [
    {
        path: '/course',
        name: 'course',
        component: resolve => {require(['@/components/online_course/index.vue'], resolve)},
        meta: {
            title:'线上课程' //title显示
        }
    }
];


export default routes;