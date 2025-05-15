<template>
  <article class="project-card" @click="$emit('selected', project.id)">
    <!--
    <p
      v-for="tag in project.tags"
      :key="tag"
      class="m-6 text-center border rounded-xl w-fit mx-auto px-4 border-inherit"
    >
      # {{ tag }}
    </p>
    -->
    <img
      :src="project.thumbnail || '/img/project.jpg'"
      alt="project thumbnail"
      class="thumbnail mt-6"
      loading="lazy"
    />
    <h2 class="mt-6 text-2xl font-bold text-center">{{ project.title }}</h2>
  </article>
</template>

<script setup>
defineProps(['project']);

const emit = defineEmits(['selected']);
</script>

<style scoped>
.project-card {
  border-radius: var(--border-radius);
  padding: 2rem 1.5rem;
  border: solid 1px var(--color-neutral);
}
.project-card:hover {
  color: white;
  background: var(--color-off-black);
  transition: 0.5s;
  cursor: pointer;
}
.thumbnail {
  border-radius: var(--border-radius);
  aspect-ratio: 4/3;
  object-fit: cover;
}
</style>
