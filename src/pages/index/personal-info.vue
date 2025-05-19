<template>
  <v-container max-width="900px">
    <div class="text-center">
      <div class="my-4 text-h5">个人信息</div>

      <div class="my-2 text-subtitle-1 opacity-70">您在各种 {{ $vuetify.defaults.title }} 服务中的个人信息和偏好设置 </div>
    </div>

    <div class="d-flex mt-8">
      <div class="flex-0-1	">
        <div class="text-h5 my-4">您在 {{ $vuetify.defaults.title }} 服务中的个人资料信息</div>
        <div class="text-subtitle-1 opacity-70">
          个人信息以及用于管理这些信息的选项。您可以向他人公开部分信息（例如您的详细联系信息），以方便他们与您联系。您还可以查看您的个人资料的摘要。
        </div>
      </div>
      <v-img class="ma-2" width="400" src="@/assets/images/profile.png"></v-img>
    </div>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>