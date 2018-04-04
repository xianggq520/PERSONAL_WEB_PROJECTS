import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 中英文切换
import { getLang, updateUserInfo } from '../utils/auth' 
var lang = getLang() ? getLang() : 'zh-CN';

const i18n = new VueI18n({
    locale: lang,    // 语言标识,获取当前语言类型，先从cookie中获取
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./lang/zh'),   // 中文语言包
      'en-US': require('./lang/en')    // 英文语言包
    }
})

export default i18n
