<template>
  <div class="the-aside">
    <t-menu
      theme="light"
      default-value="threeCreateScene"
      style="margin-right: 40px"
      @change="changeHandler"
    >
      <template #logo>
        <img
          height="28"
          src="https://tdesign.gtimg.com/site/baseLogo-light.png"
          alt="logo"
        />
      </template>
      <t-menu-item router to="/three/createScene" value="threeCreateScene">
        创建场景
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script lang="ts" setup>
import { MenuProps } from 'tdesign-vue-next'
const changeHandler: MenuProps['onChange'] = (active) => {
  console.log('change', active)
}
</script>
<style lang="scss" scoped>
.the-aside {
  margin-right: 8px;
  .t-default-menu {
    margin: 0 !important;
  }
}
</style>
