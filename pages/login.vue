<template>
    <div class="flex h-[70dvh]">
      <ElCard class="m-auto w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <template #header>
          <ElPageHeader
            title="回首頁"
            content="登入"
            class="font-bold"
            @back="useRouter().push('/')"
          />
        </template>
        <ElButton
          class="flex justify-center"
          @click="login"
        >
          <span>使用 Google 登入</span>
          <ElIcon name="google" />
        </ElButton>
      </ElCard>
    </div>
</template>


<script setup lang="ts">

const login = async () => {
  await navigateTo({
    path: '/api/login',
    query: {
      redirect: '/'
    }
  }, {
    external: true
  })
}
</script>