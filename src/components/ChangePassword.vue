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
                        <v-btn icon="$close" size="small" variant="plain" />
                    </template>
                </v-card-item>
                <v-card-text class="px-6 pt-6 text-body-2">
                    <v-text-field v-model="oldPassword" label="请输入原密码" prepend-inner-icon="mdi-lock-outline"
                        type="password"></v-text-field>
                    <v-text-field v-model="newPassword" :rules="rules" label="请输入新密码"
                        prepend-inner-icon="mdi-lock-outline" type="password"></v-text-field>
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
import { ref } from 'vue';
import { snackbar } from 'spacegt'

const emit = defineEmits(['change'])

const drawer = defineModel({ required: true, default: false })

const oldPassword = ref()
const newPassword = ref()

const rules = [(value: string) => {
    if (value) return true

    return '密码不能为空！'
},
(v: string) => (v && v.length >= 8 && v.length <= 20) || '密码长度应在 8 到 20 个字符之间',
]


async function submit(event: any) {
    const results = await event

    if (!results.valid) return;

    const res = await AccountsApi.changePwd(oldPassword.value, newPassword.value) as any

    if (res == false) {
        snackbar({
            title: "密码修改失败，请确认原密码是否正确！",
            type: "error",
            text: undefined,
            timeout: undefined,
        });
        return;
    }

    emit('change')

    drawer.value = false
}
</script>

<style scoped></style>