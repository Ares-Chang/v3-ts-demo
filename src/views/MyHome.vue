<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const handleClick = () => {
  userStore.updateName('李四')
}
</script>

<template>
  <h1>MyHome</h1>
  <span>Store: {{ userStore.name }}</span>
  <br />
  <button @click="handleClick">点击更改用户</button>
</template>

<style scoped lang="scss">
h1 {
  color: pink;
}
</style>
