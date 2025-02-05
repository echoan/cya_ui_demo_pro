<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-11 13:26:56
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-05 13:51:57
-->
<template>
  <div>
    <h2>按需引用示例-通过npm安装后使用</h2>
    <CyaButton @click="handler">按钮3</CyaButton>
    <CyaButton @click="handler" type="danger">按钮3</CyaButton>
  </div>
</template>
<script>
import { CyaButton } from 'cyaui'
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
