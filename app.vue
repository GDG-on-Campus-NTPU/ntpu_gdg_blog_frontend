<template>
  <ElContainer direction="vertical" class="h-[100dvh] font-sansTC">
    <NuxtLoadingIndicator />
    <ElMenu 
      mode="horizontal" 
      :ellipsis="false" 
      :default-active="useRoute().path" 
      :active-index="curIndex"
      unique-opened
      router
      @select="menuSelect"
    >
      <ElMenuItem 
        v-for="(item, index) in menuItems"
        :key="index" 
        :index="item.index"
      >
        <span>{{ item.text }}</span>
      </ElMenuItem>
    </ElMenu>

    <ElScrollbar :always="true">
      <div class="m-2 sm:m-3 md:m-4">
        <NuxtPage keepalive />
      </div>
    </ElScrollbar>
  </ElContainer>
</template>

<script setup lang="ts">

const curIndex = ref(useRoute().path)

const menuSelect = (index: string) => {
  curIndex.value = index
}

const { data: menuItems, refresh: refreshMenuItems } = useFetch('/api/login/check', {
  method: 'GET',
  transform: (data: {isLoggedIn: boolean}) => {
    const menuItems = [
      { index: '/', text: '首頁' },
    ]

    if (data.isLoggedIn) {
      menuItems.push({ index: '/profile', text: '個人資料' })
    }
    else {
      menuItems.push({ index: '/login', text: '登入' })
    }
    return menuItems
  }
})

useNuxtApp().provide('refreshMenu', async () => {
  await refreshMenuItems();
})


</script>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-left: auto;
}
.el-menu--horizontal > .el-menu-item:nth-last-child(1) {
  margin-right: 1%;
}
</style>
