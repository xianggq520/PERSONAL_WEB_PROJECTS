/*
 * @Author: ecitlm 
 * @Date: 2017-02-25 15:49 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-06-05 15:35:56
 */

import axios from 'axios'
import * as types from '../mutation-types.js'

import { getToken, setToken, removeToken, updateUserInfo } from './../../utils/auth.js'

import api from '../../../src/api/api.js'



const state = {
    BannerListRoot: [],
    BannerList: {},
    IndexNewsList: {},
    SportList: {},
    UserName: 'ecitlm',
    Email: 'ecitlm@163.com',
    LoginInfo: {},
    token: "",
    userId: ''
}

 
const getters = {  //getters 用来做一些计算， return state.UserName +　state.Email
    [types.DONE_INDEX_BANNER_ROOT]: state => { //[types.DONE_INDEX_BANNER_ROOT]:计算属性命名(属性名表达式) 功能
        return state.BannerListRoot
    },
    [types.DONE_INDEX_BANNER]: state => {
        return state.BannerList
    },
    [types.DONE_INDEX_NEWS]: state => {
        return state.IndexNewsList
    },
    [types.DONE_SPORT_LIST]: state => {
        return state.SportList
    },
    [types.DONE_Login]: state => {
        return state.token
    }
}

const mutations = { //mutation 必须是同步函数
    [types.TOGGLE_INDEX_BANNER](state, all) {
        state.BannerListRoot.push(all)
        state.BannerList = all
    },
    [types.TOGGLE_INDEX_NEWS](state, all) {
        state.IndexNewsList = all
    },
    [types.TOGGLE_SPORT_LIST](state, all) {
        state.SportList = all
    },
    [types.TOGGLE_Login](state, all) {
        // console.log(all)
        if (all.status == 'Y') {
            state.token = all.results.token;
            state.userId = all.results.code;
            //localStorage.setItem("token",all.data.token)
        }
        state.LoginInfo = all;
    }
}

const actions = { //为了处理异步操作，让我们来看一看 Action
    // 获取首页banner
    [types.FECTH_INDEX_BANNER]({commit}) {
        return new Promise((resolve, reject) => { //store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise
            api.banner()
            .then(res => {
                commit(types.TOGGLE_INDEX_BANNER, res.ads);// 提交载荷（Payload）最好是个对象；可以向commit 传入额外的参数，即 mutation 的 载荷（payload）
                resolve(res.ads);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
            
           

    },
    // 获取首页新闻列表
    [types.FECTH_INDEX_NEWS]({commit}) {
        var data={
            page:20,
            type:0
        }
        return new Promise((resolve, reject) => {
        api.new_list(data)
            .then(res => {
                commit(types.TOGGLE_INDEX_NEWS, res.data);
                resolve(res.data);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    },
    // 获取体育列表
    [types.FECTH_SPORT_LIST]({commit}) {
        //axios.get(API + 'http://c.m.163.com/nc/article/list/T1348649145984/0-20.html')
        var data={
            page:0,
            type:3
        }
        return new Promise((resolve, reject) => {
        api.new_list(data)
            .then(res => {
                commit(types.TOGGLE_SPORT_LIST, res.data);
                resolve(res.data);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    },
    // 登录
    [types.FECTH_Login]({commit}, info) {
        // var params = new URLSearchParams();
        // params.append('userName', info.username);
        // params.append('passWord', info.password);
        // params.append('mark', 0);
        var params = {
            'userName': info.username,
            'passWord': "3b3c48f227981712390e4d016d340676513e407555ab45a82135fb6b89236cf3", //info.password,
            'mark': 0
        }

        // axios.post("http://h5.it919.cn/index.php?c=api&a=index", params)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'http://admin.test.moxueyuan.net/enterpriseuniversity/services/backend/sys/apilogin',
                headers: {
                    'Content-type': 'application/json'
                },
                data: params
            })
            .then(function (res) {
                // console.log(res)
                setToken(res.data.results.token)
                commit(types.TOGGLE_Login, res.data);
                resolve(res.data);
            })
            .catch(function (err) {
                console.log(err);
                reject(err);
            });
        })
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
