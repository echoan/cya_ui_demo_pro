<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-11 13:26:56
 * @LastEditors: Chengya
 * @LastEditTime: 2025-01-15 15:32:13
-->
<template>
  <div>
    <h2>本地按需引用示例--全局注册引用</h2>
    <CyaButton @click="handler">按钮3</CyaButton>
  </div>
</template>
<script>
import { CyaButton } from 'cyaui_pro'
export default {
  components: {
    CyaButton,
  },
  methods: {
    handler() {
      console.log('hello world 我是按钮3')
    },
  },
}
</script>

<style></style>
