<template>
    <v-dialog v-model="drawer" contained max-width="420">
        <v-card rounded="xl">
            <v-card-item class="pl-6 py-4 pr-3 border-b text-body-1" prepend-icon="mdi-account-circle-outline">
                <template #prepend>
                    <v-icon class="mb-1" size="18" />
                </template>
                <v-card-title class="text-body-1">
                    {{ $vuetify.defaults?.title }} 账号
                </v-card-title>
                <template #append>
                    <v-btn icon="$close" size="small" variant="plain" @click="drawer = false" />
                </template>
            </v-card-item>
            <v-card-text class="px-6 pt-6 text-body-2">
                <section>
                    <h3 class="text-h6 mb-2">
                        基本信息
                    </h3>

                    <div class="text-body-1 text-medium-emphasis mb-4 w-100 ">
                        使用 {{ $vuetify.defaults?.title }} 服务的其他用户可能会看到部分信息。
                    </div>
                </section>

                <v-file-upload v-model="file" class="border-none cursor-pointer pa-0">
                    <template #icon></template>
                    <template #divider></template>
                    <template #title></template>
                    <template #browse="{ props }">
                        <v-avatar color="info" size="200" @click="props.onClick">
                            <v-img v-if="url || accountsStore?.account?.avatar" :alt="accountsStore?.account?.nickname"
                                :src="url || accountsStore?.account?.avatar"></v-img>
                            <div v-else class="text-h5">{{ accountsStore?.account?.nickname?.substring(0, 2) }}</div>
                        </v-avatar>
                    </template>
                </v-file-upload>

            </v-card-text>
            <v-card-actions class="justify-center ga-3 px-6 pt-0 pb-6">
                <v-btn class="text-none text-body-2 px-3" color="surface-variant" rounded="pill" text="保存"
                    prepend-icon="mdi-rename" variant="flat" :disabled="file == null" @click="changeAvatar" />
                <v-btn border="md" class="text-none text-body-2 px-3" rounded="pill" text="移除" prepend-icon="mdi-delete"
                    variant="flat" @click="removeAvatar" />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { AccountsApi } from '@/api/accounts';
import { FileApi, useAccountsStore } from 'spacegt';
import { computed, ref } from 'vue';

const emit = defineEmits(['change'])

const accountsStore = useAccountsStore()

const drawer = defineModel({ required: true, default: false })

const file = ref()

const url = computed(() => {
    return file.value ? URL.createObjectURL(file.value) : null
})

async function changeAvatar() {
    const res = await FileApi.upload(file.value, 'myaccount/avatar')

    await AccountsApi.changeAvatar(FileApi.filePath + '/' + res.url)

    emit('change')

    file.value = null

    drawer.value = false
}

async function removeAvatar() {
    file.value = null

    await AccountsApi.changeAvatar(null)

    emit('change')

    drawer.value = false
}
</script>

<style scoped>
:deep(.v-file-upload-items),
:deep(.v-file-upload-divider) {
    display: none;
}
</style>