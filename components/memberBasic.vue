<template>
  <div class="member">
    <img
      :src="member.profile || '/img/profile.png'"
      alt="profile image"
      class="w-24 h-24 rounded-full"
    />
    <strong class="mt-2 text-lg font-semibold">{{ member.name }}</strong>
  </div>
</template>

<script setup>
defineProps(['member']);
</script>

<style scoped>
.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
