/*
 * @Description: main
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-16 14:32:27
 * @LastEditors: Duchin/梁达钦
 */
// import { DirectiveOptions } from 'vue/types/umd'
import Vue, { DirectiveOptions } from 'vue'

// import ElementUI from 'element-ui'
import '@/icons'

import 'amfe-flexible'
// import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import store from './store'

import {i18n, vantLocales} from '@/lang'
import '@/permission'
import * as directives from '@/directives'
import * as filters from '@/filters'
import { Button } from "element-ui"
Vue.use(Button)

Vue.config.productionTip = false

console.log('当前的语言是：', i18n.locale)
// vant-ui组件国际化
vantLocales(i18n.locale)
// 全局挂载elementUi则有类型报错
// /node_modules/element-ui/types/notification.d.ts(82,5):
// Vue.use(ElementUI, {
//   i18n: (key: string, value: string) => i18n.t(key, value)
// })

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}

// 注册全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})

// 注册全局过滤器函数
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
