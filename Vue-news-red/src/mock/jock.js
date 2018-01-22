import Mock from 'mockjs'

// const List = [];
const List = { status: 200, statusText: "200 OK", data:[]};
const count = 20;

for (let i = 0; i < count; i++) {
    List.data.push(Mock.mock({
        id: '@id',
        digest: '@cparagraph',
        name: '@ctitle(10, 20)',
        use_count: '@integer(0, 50)',
        question_count: '@integer(0, 50)',
        catid: '@integer(0, 500)',
        'upload_uid|1': ['', '@uuid'],
        'status|1': ['published', 'draft'],
        author: '@cname',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
    }));
}

export default {
    getList: () => List
}