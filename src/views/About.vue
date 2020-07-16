<!--
 * @Description: name
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-14 11:58:11
 * @LastEditTime: 2020-07-16 12:25:21
 * @LastEditors: Duchin/梁达钦
-->
<template>
  <div class="about">
    <h1>This is an about page name</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <el-button type="primary">主要按钮</el-button>
    <div class="name-a">
      文字
    </div>
  </div>
</template>
<script lang = "ts">
import { Component, Vue } from 'vue-property-decorator'
import { Row, Col, Button } from 'vant'
@Component({
  name: 'Tab',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button
  }
})
export default class extends Vue {

}
</script>
<style>
  .name-a{
    width: 120px;
    height: 120px;
}
</style>
