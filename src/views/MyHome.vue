<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useUserStore } from '@/store/user'
import { LOGININ } from '@/api/module/login'

const userStore = useUserStore()

const handleClick = () => {
  userStore.updateName('李四')
}

const handleLogin = () => {
  LOGININ()
}

const { x, y } = useMouse()
</script>

<template>
  <h1>MyHome</h1>
  <span>Store: {{ userStore.name }}</span>
  <br />
  <button @click="handleClick">点击更改用户</button>
  <button @click="handleLogin">点击登录</button>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<style scoped lang="scss">
h1 {
  color: pink;
}
</style>
