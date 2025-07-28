<template>
  <Layout v-if="accountsStore.account">
    <router-view></router-view>
  </Layout>
  <v-empty-state v-else height="100vh" headline="Whoops, 404" title="Not logged in"
    text="Please go back to the APP to log in your account" image="/favicon.png"></v-empty-state>
</template>

<script setup>
import { AccountsApi } from '@/api/accounts'
import Layout from '@/layout/index.vue'
import { useAccountsStore, useAuthorizationStore, accountsServiceConfig } from 'spacegt'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const accountsStore = useAccountsStore()
const authorizationStore = useAuthorizationStore()

// 设置用户服务代理
accountsServiceConfig.baseURL = import.meta.env.VITE_APP_ACCOUNTS_SERVICE

onMounted(async () => {
  if (route.query.token) {
    authorizationStore.token = route.query.token
    accountsStore.account = await AccountsApi.info()
  }
})
</script>
