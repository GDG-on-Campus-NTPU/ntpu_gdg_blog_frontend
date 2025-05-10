<template>
  <div class="w-full">
    <ImageCarousel :images="images" :numSlides="numSlides" class="mt-8" />
    <h1 class="big-heading side-padding">
      這些課程和活動，都是我們一起創造的精彩時刻，期待你也能加入！
    </h1>
    <section class="grid-container side-padding">
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :article="article"
      />
    </section>
  </div>
</template>

<script setup>
const { data: images } = await useFetch('/cloudinary/highlights');

const { data } = await useFetch('/api/article/all');

const articles = computed(() => {
  if (!data.value) return [];

  return [...data.value].sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });
});
/*===== Determines how many images to show =====*/
const width = ref(0);
const updateWidth = () => {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth;
  }
};
onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
const numSlides = computed(() => {
  if (width.value < 600) return 1;
  else if (width.value < 800) return 2;
  else if (width.value < 1000) return 3;
  return 4;
});
</script>

<style scoped>
.big-heading {
  margin: 5rem var(--sp-8);
}
</style>
