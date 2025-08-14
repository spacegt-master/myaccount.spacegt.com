<template>
    <v-app>
        <v-app-bar class="ps-4" scroll-behavior="elevate">
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />

            <v-app-bar-title>
                <div class="d-flex ga-2 align-center">
                    <div class="logo">
                        <span v-for="char in cahars">{{ char }}</span>
                    </div>
                    <div class="mb-1 opacity-70"> 账号 </div>
                </div>
            </v-app-bar-title>

            <template #append>
                <spacegt-myaccount :account="accountsStore.account" @logout="handleLogout">
                </spacegt-myaccount>
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="border-0">
            <v-list v-model:selected="selected" class="mt-4">
                <v-list-item class="text-subtitle-2 pl-6 " v-for="(item, i) in items" :key="i" :value="item.to"
                    :to="item.to" color="primary" rounded="e-xl" link>
                    <template v-slot:prepend>
                        <v-icon :icon="item.prependIcon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>

                <!-- <v-divider class="my-2"></v-divider>

                <v-list-item class="text-subtitle-2 pl-6 " value="/about" color="primary" rounded="e-xl" link
                    to="/about">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-information-outline"></v-icon>
                    </template>

                    <v-list-item-title v-text="'关于'"></v-list-item-title>
                </v-list-item> -->
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <slot></slot>
        </v-main>

        <v-navigation-drawer v-if="$vuetify.display.mdAndUp" v-model="drawer" class="border-0" location="right"
            :width="$vuetify.display.width > 1500 ? Math.min(255, $vuetify.display.width - 1500) : 0"
            style="z-index: 0;">
        </v-navigation-drawer>
    </v-app>
</template>

<script setup>
import { useAccountsStore, useAuthorizationStore } from 'spacegt'
import { ref, watch } from 'vue'

const accountsStore = useAccountsStore()
const authorizationStore = useAuthorizationStore()

const drawer = ref(true)

const cahars = import.meta.env.VITE_APP_TITLE

const selected = ref()

watch(selected, () => selected.value = undefined)

const items = ref([
    // {
    //     title: '首页',
    //     prependIcon: 'mdi-account-circle-outline',
    //     to: '/home'
    // },
    {
        title: '个人信息',
        prependIcon: 'mdi-badge-account-horizontal-outline',
        to: '/personal-info'
    },
    // {
    //     title: '数据和隐私设置',
    //     prependIcon: 'mdi-toggle-switch-outline',
    //     to: '/data-and-privacy'
    // },
    // {
    //     title: '安全性',
    //     prependIcon: 'mdi-lock-outline',
    //     to: '/security'
    // }
])

const handleLogout = () => {
    accountsStore.account = null
    accountsStore.authorities = []

    authorizationStore.token = ''
}

</script>

<style lang="scss" scoped>
.v-layout {
    height: 100%;
}

.v-app-bar-title .logo {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
}

.logo span:nth-child(1) {
    color: #4285F4;
}

.logo span:nth-child(2) {
    color: #EA4335;
}

.logo span:nth-child(3) {
    color: #4285F4;
}

.logo span:nth-child(4) {
    color: #FBBC05;
}

.logo span:nth-child(5) {
    color: #34A853;
}

.logo span:nth-child(6) {
    color: #EA4335;
}

.logo span:nth-child(7) {
    color: #FBBC05;
}
</style>