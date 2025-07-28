<template>
    <v-container max-width="900px">
        <div class="text-center">
            <v-avatar color="info" size="90">
                <v-img v-if="accountsStore?.account?.avatar" :alt="accountsStore?.account?.nickname"
                    :src="accountsStore?.account?.avatar"></v-img>
                <div v-else class="text-h5">{{ accountsStore?.account?.nickname?.substring(0, 2) }}</div>
            </v-avatar>

            <div class="my-4 text-h5">欢迎使用，{{ accountsStore?.account?.nickname }}</div>

            <div class="my-4 text-subtitle-1 opacity-70">管理自己的信息、隐私和安全，让 {{ $vuetify.defaults.title }} 服务更好地满足您的需求。
            </div>
        </div>

        <v-row class="mt-8">
            <v-col cols="6">
                <v-card width="100%" border="sm">
                    <div class="d-flex pa-1 py-3 justify-space-between	">
                        <div>
                            <v-card-item title="隐私权和个性化"> </v-card-item>

                            <v-card-text>
                                <div class="opacity-70">
                                    查看您 {{ $vuetify.defaults.title }} 账号中的数据，并选择保存哪些活动以用于个性化您的 {{
                                        $vuetify.defaults.title }} 体验
                                </div>
                            </v-card-text>
                        </div>

                        <v-img class="ma-2" width="100" src="@/assets/images/dataandpersonalization.png"></v-img>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-3">
                        <v-btn color="info" text="管理您的数据和隐私设置" to="/personal-info"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card width="100%" border="sm">
                    <div class="d-flex pa-1 py-3 justify-space-between	">
                        <div>
                            <v-card-item title="让您的账号安全无虞"> </v-card-item>

                            <v-card-text>
                                <div class="opacity-70">
                                    安全检查工具已检查您的账号，没有给出任何操作建议
                                </div>
                            </v-card-text>
                        </div>

                        <v-img class="ma-2" width="100" src="@/assets/images/securitycheckup.png"></v-img>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-3">
                        <v-btn color="info" text="查看详情" to="/personal-info"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card width="100%" border="sm">
                    <div class="d-flex pa-1 py-3 justify-space-between	">
                        <div>
                            <v-card-item title="隐私设置检查"> </v-card-item>

                            <v-card-text>
                                <div class="opacity-70">
                                    通过此分步指南，选择适合您的隐私设置
                                </div>
                            </v-card-text>
                        </div>

                        <v-img class="ma-2" max-width="300" src="@/assets/images/privacycheckup.png"></v-img>
                    </div>

                    <v-divider></v-divider>

                    <v-card-actions class="pa-3">
                        <v-btn color="info" text="进行隐私设置检查" to="/personal-info"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card width="100%" border="sm">
                    <div class="  pa-1 py-3  ">
                        <v-card-item title="想要了解其他内容？"> </v-card-item>
                        <v-list>
                            <v-list-item link>
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-magnify"></v-icon>
                                </template>

                                <v-list-item-title> 搜索 {{ $vuetify.defaults.title }} 账号 </v-list-item-title>

                                <template #append>
                                    <v-icon size="32" icon="mdi-chevron-right"></v-icon>
                                </template>
                            </v-list-item>

                            <v-list-item link>
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-help-circle-outline"></v-icon>
                                </template>

                                <v-list-item-title> 查看帮助选项 </v-list-item-title>

                                <template #append>
                                    <v-icon size="32" icon="mdi-chevron-right"></v-icon>
                                </template>
                            </v-list-item>

                            <v-list-item link>
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-message-alert-outline"></v-icon>
                                </template>

                                <v-list-item-title> 发送反馈 </v-list-item-title>

                                <template #append>
                                    <v-icon size="32" icon="mdi-chevron-right"></v-icon>
                                </template>
                            </v-list-item>
                        </v-list>
                    </div>
                </v-card>
            </v-col>
        </v-row>


        <div class="d-flex justify-center ma-4">
            <div class="opacity-70 text-center ma-8">
                {{ $vuetify.defaults.title }} 会确保您数据的隐私性和安全性。
            </div>

            <v-img max-width="40" src="@/assets/images/privacypolicy.png"></v-img>
        </div>
    </v-container>
</template>

<script setup>
import { useAccountsStore } from 'spacegt'
import { ref } from 'vue'

const accountsStore = useAccountsStore()

const labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' }
const forecast = [
    { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\u00B0/12\u00B0' },
    { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\u00B0/14\u00B0' },
    { day: 'Thursday', icon: 'mdi-cloud', temp: '25\u00B0/15\u00B0' },
]

const expand = ref(false)
const time = ref(0)
</script>

<style lang="scss" scoped></style>