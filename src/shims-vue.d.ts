/*
 * @Description: vue配置
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-16 14:15:06
 * @LastEditors: Duchin/梁达钦
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}
declare module 'vant/lib/locale/lang/*' {
  export const vantLocale: any
}

declare module '*.gif' {
  export const gif: any
}

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'

// TODO: remove this part after vuedraggable has its typescript file
declare module 'vuedraggable'

// TODO: remove this part after vue2-dropzone has its typescript file
declare module 'vue2-dropzone'

// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'
