/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 12:05:41
 * @LastEditTime: 2020-07-16 14:17:17
 * @LastEditors: Duchin/梁达钦
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

// element-ui built-in lang
// import elementEnLocale from 'element-ui/lib/locale/lang/en'
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import ElementLocale from 'element-ui/lib/locale'
// User defined lang da
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import {Locale} from 'vant'
import enLocale from './en'
import zhLocale from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...enUS
    // ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...zhCN
    // ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})
// 更新vant组件库本身的语言变化，支持国际化
function vantLocales (lang: string) {
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN)
  }
}
// ElementLocale.i18n((key: string, value: string) => i18n.t(key, value))
export { i18n, vantLocales }
