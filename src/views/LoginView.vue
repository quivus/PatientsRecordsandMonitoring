<template>
  <div>
    <form @submit.prevent="submitHandler">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model="auth.formLogin.username" />

      <label for="password">Password: </label>
      <input type="text" id="password" v-model="auth.formLogin.password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()

const submitHandler = async () => {
  const success = await auth.login()
  if (success) {
    router.push({ name: 'home' })
  }
}
</script>

<style lang="scss" scoped></style>
