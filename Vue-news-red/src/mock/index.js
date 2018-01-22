import Mock from 'mockjs';
import articleAPI from './article'
import jockApi from './jock'


// 文章相关
// Mock.mock('News/new_detail', 'get', articleAPI.getList); //匹配字符串
// Mock.mock(/\/News\/new_detail/, 'get', articleAPI.getArticle);  //匹配正则


//搞笑段子
Mock.mock(/\/joke\/index/, 'post', jockApi.getList);  //匹配正则


export default Mock