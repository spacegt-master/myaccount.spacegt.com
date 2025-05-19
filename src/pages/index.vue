<template>
  <Layout v-if="accountsStore.account">
    <router-view></router-view>
  </Layout>
  <v-empty-state height="100vh" headline="Whoops, 404" title="Not logged in"
    text="Please go back to the APP to log in your account" image="/favicon.png"></v-empty-state>
</template>

<script setup>
import { AccountsApi } from '@/api/accounts'
import Layout from '@/layout/index.vue'
import spacegt from 'spacegt'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const accountsStore = spacegt.stores.useAccountsStore()
const authorizationStore = spacegt.stores.useAuthorizationStore()


onMounted(async () => {
  if (route.query.token) {
    authorizationStore.token = route.query.token
    accountsStore.account = await AccountsApi.info()
  }
})
</script>
