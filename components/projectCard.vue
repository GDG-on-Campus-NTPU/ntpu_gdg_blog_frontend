<!-------------------------------------------->
<!-- This defines a single project element. -->
<!-------------------------------------------->

<template>
  <article class="project-card" @click="openModal(project)">
    <img
      src="assets/img/project.jpg"
      alt="project thumbnail"
      class="rounded-[--border-radius]"
    />
    <p class="m-6 text-center">{{ project.category }}</p>
    <h2 class="mt-6 text-2xl font-bold text-center">{{ project.title }}</h2>
  </article>
</template>

<script setup>
defineProps(['project']);

const emit = defineEmits(['selected']);

const openModal = (project) => {
  emit('selected', project);
};
</script>

<style scoped>
.project-card {
  border-radius: var(--border-radius);
  padding: 2rem;
  border: solid 1px grey;
}
.project-card:hover {
  color: white;
  background: black;
  transition: 0.5s;
  cursor: pointer;
}
</style>
