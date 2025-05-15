<template>
  <div
    class="fixed flex items-center justify-center inset-0 bg-black/50 z-50"
    @click.self="close"
  >
    <div class="modal-content no-scrollbar">
      <button class="absolute top-4 right-6 text-2xl" @click="close">×</button>

      <div class="hero-wrapper min-h-fit">
        <ImageCarousel class="images" :images="images" :effect="'fade'" />
        <div class="flex-1 w-full min-h-fit flex flex-col justify-center p-4">
          <h2 class="big-heading">{{ project.title }}</h2>
          <div class="intro-details">
            <ul class="flex gap-4 my-6">
              <!--
              <li
                :style="getCategoryStyle(project.category)"
                class="project-tags"
              >
                {{ project.category }}
              </li>
              -->
              <li
                class="project-tags"
                v-for="(tag, index) in project.tags"
                :style="getCategoryStyle(index)"
                :key="tag"
              >
                {{ tag }}
              </li>
            </ul>
            <p class="my-4">{{ project.description }}</p>
            <p class="text-neutral-500">
              <!--專案開始執行：{{ project.startDate }} ~ {{ project.endDate }}-->
              專案開始執行：2024 Sep ~ Present
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-full flex flex-col items-center min-h-[70vh] justify-center"
      >
        <h1 class="big-heading mb-20">團隊成員</h1>
        <div class="carousel-wrapper">
          <button
            v-if="showNavigation"
            class="navigation-btn"
            @click="scrollLeft()"
          >
            &lt;
          </button>
          <div
            id="members"
            ref="carousel"
            class="h-[350px] w-fit member-container no-scrollbar"
          >
            <MemberCarousel :members="members"></MemberCarousel>
          </div>
          <button
            v-if="showNavigation"
            class="navigation-btn"
            @click="scrollRight()"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['project', 'members']);

const emit = defineEmits(['close']);
const close = () => emit('close');
/*
const categoryColors = {
  業界合作: '#CFD9F5',
  社團提案: '#FFD1D5',
};
function getCategoryStyle(category) {
  const color = categoryColors[category] || '#FFF0D1';
  return { background: color };
}
*/
const categoryColors = ['#CFD9F5', '#FFD1D5', '#E5F8D5', '#FFF0D1', '#CFEAFB'];

function getCategoryStyle(index) {
  const color = categoryColors[index];
  return { background: color };
}

const showNavigation = ref(false);
const carousel = ref(null);

function scrollLeft() {
  carousel.value?.scrollBy({ left: -104, behavior: 'smooth' });
}
function scrollRight() {
  carousel.value?.scrollBy({ left: 104, behavior: 'smooth' });
}

function checkOverflow() {
  if (carousel.value) {
    const containerWidth = carousel.value.getBoundingClientRect().width;
    const scrollWidth = carousel.value.scrollWidth;
    showNavigation.value = scrollWidth > containerWidth;
  }
}

onMounted(() => {
  nextTick(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkOverflow);
});

const images = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
  alt: 'alt',
}));
</script>

<style scoped>
.modal-content {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 90%;
  padding: min(8%, 4rem);
  border-radius: var(--border-radius);
}
.project-tags {
  border: solid 1px black;
  padding: 0 1rem;
  border-radius: var(--border-radius);
  text-wrap: nowrap;
}
.hero-wrapper {
  display: flex;
  width: 100%;
  min-height: 60vh;
  gap: var(--sp-4);
  margin: var(--sp-12) 0;
  justify-content: center;
  align-items: center;
}
.images {
  flex: 1;
  max-width: 600px;
}
.member-container {
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.navigation-btn {
  margin-top: 1rem;
  height: 96px;
}
.carousel-wrapper {
  width: 80%;
  display: flex;
  gap: 10px;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .hero-wrapper {
    flex-direction: column;
  }
  .images {
    width: 100%;
  }
}
@media screen and (max-width: 475px) {
  .member-container {
    width: 210px;
    overflow-x: hidden;
  }
}
</style>
