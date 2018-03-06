import Mock from 'mockjs'

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@id',
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
    getList: () => List,
    getArticle: () => ({
        status: 200,
        statusText:'200 OK',
        data: {
            id: 'D7MQI11U002580SS',
            title: 'mock 测试标题',
            ptime: '1515458842000',
            source: '北青网-北京青年报',
            img: [{ src:'http://cms-bucket.nosdn.127.net/catchpic/9/99/9929e266ca1ff47350a7dd2ff4ddd54b.jpg', alt:'', ref:'<!--IMG#0-->', pixel:'400*268'}],
            body:'<p>　　朝鲜与韩国9日在板门店举行高级别会谈。这是2015年12月朝韩副部长级会谈之后双方首次政府间会晤，半岛局势紧张多时之后出现缓和迹象。</p><p>韩联社援引韩国统一部的消息报道，会谈定于10时开始，朝方代表团预定9时30分左右通过军事分界线，步入会场。</p>'
        }
    })
}