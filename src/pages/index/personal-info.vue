<template>
  <v-container max-width="900px">
    <div class="text-center">
      <div class="my-4 text-h5">个人信息</div>

      <div class="my-2 text-subtitle-1 opacity-70">您在各种 {{ $vuetify.defaults.title }} 服务中的个人信息和偏好设置 </div>
    </div>

    <!-- <div class="d-flex mt-8">
      <div class="flex-0-1	">
        <div class="text-h5 my-4">您在 {{ $vuetify.defaults.title }} 服务中的个人资料信息</div>
        <div class="text-subtitle-1 opacity-70">
          个人信息以及用于管理这些信息的选项。您可以向他人公开部分信息（例如您的详细联系信息），以方便他们与您联系。您还可以查看您的个人资料的摘要。
        </div>
      </div>
      <v-img v-if="$vuetify.display.mdAndUp" class="ma-2" width="400" src="@/assets/images/profile.png"></v-img>
    </div> -->

    <v-list class="mx-auto mt-4" lines="two" max-width="100%" border rounded="lg">
      <section class="px-4 pt-2">
        <h3 class="text-h6 mb-2">
          基本信息
        </h3>

        <div class="text-body-1 text-medium-emphasis mb-4 w-100 w-md-75">
          使用 {{ $vuetify.defaults.title }} 服务的其他用户可能会看到部分信息。
        </div>
      </section>

      <v-list-item link @click="changeAvatarDrawer = true">
        <template #prepend>
          <div class="text-body-2" style="min-width: 200px;">个人资料照片</div>
        </template>
        <template #title>
          <div class="text-body-2">
            更换个人资料照片可帮助您个性化您的账号
          </div>
        </template>

        <template #append>
          <v-avatar color="info" size="64">
            <v-img v-if="accountsStore?.account?.avatar" :alt="accountsStore?.account?.nickname"
              :src="accountsStore?.account?.avatar"></v-img>
            <div v-else class="text-h5">{{ accountsStore?.account?.nickname?.substring(0, 2) }}</div>
          </v-avatar>
        </template>
      </v-list-item>

      <v-divider />

      <v-list-item link @click="changeNameDrawer = true">
        <template #prepend>
          <div class="text-body-2" style="min-width: 200px;">姓名</div>
        </template>
        <template #title>
          <div class="text-body-2">
            {{ accountsStore?.account?.nickname }}
          </div>
        </template>
        <template #append>
          <v-icon end icon="mdi-chevron-right" />
        </template>
      </v-list-item>
    </v-list>

    <v-list class="mx-auto mt-4" lines="two" max-width="100%" border rounded="lg">
      <section class="px-4 pt-2">
        <h3 class="text-h6 mb-2">
          联系信息
        </h3>
      </section>

      <v-list-item link @click="changeEmailDrawer = true">
        <template #prepend>
          <div class="text-body-2" style="min-width: 200px;">电子邮箱</div>
        </template>
        <template #title>
          <div class="text-body-2">
            {{ accountsStore?.account?.email }}
          </div>
        </template>
        <template #append>
          <v-icon end icon="mdi-chevron-right" />
        </template>
      </v-list-item>

      <v-divider />

      <v-list-item link @click="changePhoneDrawer = true">
        <template #prepend>
          <div class="text-body-2" style="min-width: 200px;">电话</div>
        </template>
        <template #title>
          <div class="text-body-2">
            {{ accountsStore?.account?.phone }}

          </div>
        </template>
        <template #append>
          <v-icon end icon="mdi-chevron-right" />
        </template>
      </v-list-item>
    </v-list>

    <v-list class="mx-auto mt-4" lines="two" max-width="100%" border rounded="lg">
      <section class="px-4 pt-2">
        <h3 class="text-h6 mb-2">
          密码
        </h3>

        <div class="text-body-1 text-medium-emphasis mb-4 w-100 w-md-75">
          安全的密码可以更好地保护您的 {{ $vuetify.defaults.title }} 账号
        </div>
      </section>

      <v-list-item link @click="changePasswordDrawer = true">
        <template #title>
          <div class="text-body-2">
            ••••••••
          </div>
        </template>
        <template #append>
          <v-icon end icon="mdi-chevron-right" />
        </template>
      </v-list-item>
    </v-list>

    <change-avatar v-model="changeAvatarDrawer" @change="load"></change-avatar>
    <change-name v-model="changeNameDrawer" @change="load"></change-name>
    <change-email v-model="changeEmailDrawer" @change="load"></change-email>
    <change-phone v-model="changePhoneDrawer" @change="load"></change-phone>
    <change-password v-model="changePasswordDrawer" @change="load"></change-password>
  </v-container>
</template>

<script setup>
import { AccountsApi } from '@/api/accounts';
import { useAccountsStore } from 'spacegt';
import { shallowRef } from 'vue'

const changeAvatarDrawer = shallowRef(false)
const changeNameDrawer = shallowRef(false)
const changeEmailDrawer = shallowRef(false)
const changePhoneDrawer = shallowRef(false)
const changePasswordDrawer = shallowRef(false)

const accountsStore = useAccountsStore()

async function load() {
  accountsStore.account = await AccountsApi.info()
}

</script>

<style lang="scss" scoped></style>