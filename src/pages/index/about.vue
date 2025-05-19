<template>
   <v-container max-width="1000px">

    <v-empty-state class="ma-12" image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png">
    <template v-slot:title>
      <div class="text-subtitle-2 mt-8">
        页面维护中，敬请期待
      </div>
    </template>

    <template v-slot:text>
      <div class="text-caption">
        抱歉，此页面正在进行维护，暂时无法访问。请稍后再试。
      </div>
    </template>
 
  </v-empty-state>
    </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>