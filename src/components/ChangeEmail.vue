<template>
    <v-dialog v-model="drawer" contained max-width="420">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
            <v-card rounded="xl">
                <v-card-item class="pl-6 py-4 pr-3 border-b text-body-1" prepend-icon="mdi-account-circle-outline">
                    <template #prepend>
                        <v-icon class="mb-1" size="18" />
                    </template>
                    <v-card-title class="text-body-1">
                        {{ $vuetify.defaults?.title }} 账号
                    </v-card-title>
                    <template #append>
                        <v-btn icon="$close" size="small" variant="plain" @click="drawer = false"/>
                    </template>
                </v-card-item>
                <v-card-text class="px-6 pt-6 text-body-2">
                    <v-text-field v-model="email" :rules="rules" label="电子邮箱"
                        prepend-inner-icon="mdi-email-outline"></v-text-field>
                </v-card-text>
                <v-card-actions class="justify-end ga-3 px-6 pt-0 pb-6">
                    <v-btn border="md" class="text-none text-body-2 px-3" rounded="pill" text="提交"
                        prepend-icon="mdi-check" variant="flat" type="submit" />
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script setup lang="ts">
import { AccountsApi } from '@/api/accounts';
import { useAccountsStore } from 'spacegt';
import { ref } from 'vue';

const emit = defineEmits(['change'])

const accountsStore = useAccountsStore()

const drawer = defineModel({ required: true, default: false })

const email = ref<string | null>(accountsStore.account?.email ?? '')

const rules = [(value: string) => {
    if (value) return true

    return '邮箱不能为空！'
},]


async function submit(event: any) {
    const results = await event

    if (!results.valid) return;

    await AccountsApi.changeEmail(email.value)

    emit('change')

    drawer.value = false
}
</script>

<style scoped></style>