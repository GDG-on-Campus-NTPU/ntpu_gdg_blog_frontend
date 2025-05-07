<template>
  <NuxtLink :to="`/articles/${article.id}`">
    <article class="article-card">
      <h2 class="text-2xl font-bold leading-[1.25]">
        {{ article.title }}
      </h2>
      <p class="my-8">{{ article.description }}</p>
      <ul class="flex gap-4 absolute right-[2.5rem] bottom-[2.5rem]">
        <li v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps(['article']);
</script>

<style scoped>
h2 {
  font-size: clamp(1.5rem, 1.75rem, 2.5rem);
}
.article-card {
  font-family: '__Inter_3e83c2,__Inter_Fallback_3e83c2';
  background: black;
  border-radius: var(--border-radius);
  aspect-ratio: 1/1;
  padding: min(2rem, 10%);
  color: white;
  position: relative;
  cursor: pointer;
  max-height: 330px;
  width: 100%;
}
.article-card:hover {
  background: lightgray;
  transition: 0.5s;
  color: black;
  border: solid 1px black;
}
.tag {
  border: solid 1px white;
  color: inherit;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  text-wrap: nowrap;
}
</style>
