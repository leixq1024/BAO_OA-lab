<template>
  <div>
    <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler">
      <template #logo>
        <img
          height="28"
          src="https://tdesign.gtimg.com/site/baseLogo-light.png"
          alt="logo"
        />
      </template>
    </t-head-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HeadMenuProps } from 'tdesign-vue-next'
const menu1Value = ref('item2')
const changeHandler: HeadMenuProps['onChange'] = (active) => {
  console.log('change', active)
}
</script>

<style lang="scss" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;
    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
