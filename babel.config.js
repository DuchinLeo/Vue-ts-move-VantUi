/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-16 10:08:41
 * @LastEditTime: 2020-07-16 12:24:48
 * @LastEditors: Duchin/梁达钦
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: true },
      'vant'
    ],
    // element官方教程
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
