<!------------------------------------->
<!-- This defines an image carousel. -->
<!------------------------------------->

<template>
  <Swiper
    :modules="[Pagination, Autoplay, EffectFade]"
    :effect="effect"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
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
.swiper {
  position: relative;
  z-index: 0;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  background: #007bff;
  opacity: 1;
}
</style>
