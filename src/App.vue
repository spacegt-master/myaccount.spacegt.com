<template>
  <router-view />
  <spacegt-snackbar></spacegt-snackbar>
</template>

<script lang="ts" setup>
import 'spacegt/dist/style.css'
document.title = import.meta.env.VITE_APP_TITLE + ' 账号'
</script>
<style scoped></style>
