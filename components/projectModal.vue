<template>
  <div
    class="fixed flex items-center justify-center inset-0 bg-black/50 z-50"
    @click.self="close"
  >
    <div
      class="no-scrollbar modal bg-white flex flex-col items-center relative max-h-[80vh] overflow-y-scroll overflow-x-hidden w-[90%] p-16 rounded-[--border-radius]"
    >
      <button class="absolute top-4 right-6 text-2xl" @click="close">×</button>

      <div class="hero-wrapper size-[50vh]">
        <ImageCarousel class="images" :images="images" :effect="'fade'" />
        <div class="flex-1 size-[50vh] flex flex-col justify-around p-4">
          <h1>{{ project.title }}</h1>
          <div class="intro-details">
            <ul class="flex gap-4 my-6">
              <li
                :style="getCategoryStyle(project.category)"
                class="project-tags"
              >
                {{ project.category }}
              </li>
              <!--<li v-for="tag in project.tags" :key="tag">{{ tag }}</li>-->
            </ul>
            <p class="my-4">{{ project.description }}</p>
            <span
              >專案開始執行：{{ project.startDate }} ~
              {{ project.endDate }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col items-center min-h-[80vh] justify-center"
      >
        <h1 class="mb-20">團隊成員</h1>

        <div class="w-full flex gap-4 items-start justify-center">
          <button class="navigation" @click="scrollLeft()">&lt;</button>
          <div id="members" class="h-[350px] w-full container no-scrollbar">
            <MemberCarousel :members="members"></MemberCarousel>
          </div>
          <button class="navigation" @click="scrollRight()">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['project', 'members', 'images']);

const emit = defineEmits(['close']);
const close = () => emit('close');

const categoryColors = {
  業界合作: '#CFD9F5',
  社團提案: '#FFD1D5',
};
function getCategoryStyle(category) {
  const color = categoryColors[category] || '#FFF0D1';
  return { background: color };
}

function scrollLeft() {
  document.getElementById('members').scrollBy(-104, 0);
}
function scrollRight() {
  document.getElementById('members').scrollBy(104, 0);
}
</script>

<style scoped>
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
}
.images {
  flex: 1;
  max-width: 600px;
}
.container {
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.navigation {
  margin-top: 1rem;
  height: 96px;
}
@media screen and (max-width: 768px) {
  .hero-wrapper {
    flex-direction: column;
  }

  .images {
    width: 100%;
  }
}
</style>
