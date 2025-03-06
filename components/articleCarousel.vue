<template>
  <Carousel
    :items-to-show="1.5"
    :wrap-around="true"
    :gap="100"
    v-model="currentSlide"
    class="carousel-container"
  >
    <Slide v-for="(article, index) in articles" :key="index">
      <div class="article box-design">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
/* expects an array of article data */
defineProps({
  articles: Array,
});
const currentSlide = ref(0);
</script>

<style scoped>
.carousel-container {
  height: 300px;
  width: 100%;
}
.article {
  width: 100%;
  height: 80%;
  padding: 1rem;
  text-align: center;
}
</style>
