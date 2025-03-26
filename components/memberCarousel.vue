<!-------------------------------------------------------------------->
<!-- This shows a collection of members' info on the projects page. -->
<!-------------------------------------------------------------------->

<template>
  <ul class="flex gap-4">
    <li v-for="member in members" :key="member">
      <MemberCard :member="member"></MemberCard>
    </li>
  </ul>
</template>

<script setup>
defineProps(['members']);
</script>
