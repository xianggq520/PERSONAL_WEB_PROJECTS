import * as types from '../mutation-types.js'
import { Indicator } from 'mint-ui'

const state = {
	stack: []

}

const getters = {
	// [types.DONE_INDEX_BANNER_ROOT]: state => {
 //        return state.BannerListRoot
 //    }
       
}

const mutations = { //mutation 必须是同步函数
    [types.TOGGLE_Push_Load_Stack] (state) {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        state.stack.push(1)
    },
    [types.TOGGLE_Complete_Load] (state) {
        let stack = state.stack
        stack.pop()
        if (!stack.length) {
          //延时为了更好显示loading效果
          setTimeout(() => {
            Indicator.close()
          }, 200)
        }
    }
}

const actions = { //为了处理异步操作，让我们来看一看 Action
    [types.FECTH_Push_Load_Stack]({commit}) {
        commit(types.TOGGLE_Push_Load_Stack);
    },
    [types.FECTH_Complete_Load]({commit}) {
        commit(types.TOGGLE_Complete_Load);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
