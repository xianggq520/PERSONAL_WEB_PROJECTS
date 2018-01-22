/**
 * User: ecitlm@163.com
 * Date: Created  on 2017/2/25 14:04.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data.js'
import loading from './modules/loading.js'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        data,
        loading
    }
})