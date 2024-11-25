<template>
    <div class="flex h-[70dvh]">
      <ElCard class="m-auto w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <template #header>
            <ElText>個人資料</ElText>
        </template>
        <ElText>姓名 : {{ name }}</ElText>
        <br>
        <ElText>email : {{ email }}</ElText>
        <br>
        <br>
        <span class="flex m-auto">
            <ElButton
                class="m-auto"
                @click="logout"
            >登出
            </ElButton>
        </span>
        </ElCard>
    </div>
</template>


<script setup lang="ts">

const { data: userInfo } = await useFetch<{ name: string, email: string }>('/api/profile', {
  method: 'GET'
})

const logout = async () => {
    await $fetch('/api/logout', {
        method: 'POST'
    });

    await ((useNuxtApp().$refreshMenu) as Function | undefined)?.();

    await useRouter().push('/');
}

const name = ref(userInfo.value?.name)

const email = ref(userInfo.value?.email)

</script>