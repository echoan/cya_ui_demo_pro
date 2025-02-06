---
title: button
---

# {{ $frontmatter.title }}

<ClientOnly>
  <Button></Button>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 按钮类型 | string |default/primary/danger | default |
| disabled | 按钮是否禁用 | boolean |true/false | false |
| loading | 显示加载中图标 | boolean |true/false | false |
</ClientOnly>
