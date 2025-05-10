<template>
  <div class="flex h-[70dvh] w-full">
    <ElCard class="m-auto w-1/2 max-w-[300px]">
      <template #header>
        <ElPageHeader
          title="回首頁"
          content="登入"
          class="font-bold"
          @back="useRouter().push('/')"
        />
      </template>
      <ElButton class="flex justify-center" @click="login">
        <span>使用 Google 登入</span>
        <ElIcon name="google" />
      </ElButton>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
const login = async () => {
  await navigateTo(
    {
      path: '/api/login',
      query: {
        redirect: '/',
      },
    },
    {
      external: true,
    }
  );
};
</script>
