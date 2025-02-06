<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-02-06 16:53:03
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-06 17:15:49
-->
<template>
  <div>
    <h2>基础使用</h2>
    <div class="btn_container">
      <CyaButton @click="handler1">按钮1</CyaButton>
      <CyaButton @click="handler1" type="primary">按钮1</CyaButton>
      <CyaButton @click="handler1" type="danger">按钮1</CyaButton>
      <CyaButton @click="handler1" :disabled="true">按钮1</CyaButton>
      <CyaButton @click="handler1" :loading="true">按钮1</CyaButton>
    </div>

    <template>
      <pre v-highlightjs><code class="vue">{{code}}</code></pre>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `
<CyaButton @click="handler1">按钮1</CyaButton>
<CyaButton @click="handler1" type="primary">按钮1</CyaButton>
<CyaButton @click="handler1" type="danger">按钮1</CyaButton>
<CyaButton @click="handler1" :disabled="true">按钮1</CyaButton>
<CyaButton @click="handler1" :loading="true">按钮1</CyaButton>`.trim(),
    }
  },
  methods: {
    handler1() {
      console.log('hello world 按钮1')
    },
  },
}
</script>

<style scoped>
.btn_container {
  display: flex;
  justify-content: center;
}
</style>
