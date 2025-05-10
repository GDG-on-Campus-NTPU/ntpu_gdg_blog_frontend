<template>
  <Swiper
    :modules="[Pagination, Autoplay, EffectFade]"
    :effect="effect"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :slides-per-view="numSlides"
    :space-between="10"
    :loop="true"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img :src="image.url" :alt="image.alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

defineProps(['images', 'numSlides', 'effect']);
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  aspect-ratio: 4/3;
  object-fit: cover;
}
</style>
