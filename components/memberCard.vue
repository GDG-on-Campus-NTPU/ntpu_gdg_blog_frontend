<!------------------------------------>
<!-- This shows each member's info. -->
<!------------------------------------>

<template>
  <div class="member-info">
    <img
      :src="member.profile"
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
.member-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.member-info:hover {
  transform: scale(1.1);
}
</style>
