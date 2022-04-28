<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
console.log(userStore.name)

const handleClick = () => {
  userStore.updateName('李四')
  console.log(userStore.name)
}
</script>

<template>
  <h1>MyHome</h1>
  <span>Store: {{ userStore.name }}</span>
  <br />
  <button @click="handleClick">点击更改用户</button>
</template>

<style scoped lang="scss"></style>
