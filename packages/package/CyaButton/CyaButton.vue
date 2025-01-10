<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-13 09:42:42
 * @LastEditors: Chengya
 * @LastEditTime: 2024-12-13 17:19:07
-->
<template>
  <button
    class="btn_cya"
    :class="[type, { disabled, loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="btn_spinner"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CyaButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log('按钮点击事件')
      this.$emit('click')
    },
  },
}
</script>
<style scoped src="./style.css"></style>
