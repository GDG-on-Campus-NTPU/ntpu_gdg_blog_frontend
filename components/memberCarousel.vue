<template>
  <ul class="mx-16 my-4 flex gap-4">
    <li v-for="member in members" :key="member">
      <MemberCard :member="member"></MemberCard>
    </li>
  </ul>
</template>

<script setup>
defineProps(['members']);
</script>
