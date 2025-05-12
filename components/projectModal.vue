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
              <li
                :style="getCategoryStyle(project.category)"
                class="project-tags"
              >
                {{ project.category }}
              </li>
              <!--<li v-for="tag in project.tags" :key="tag">{{ tag }}</li>-->
            </ul>
            <p class="my-4">{{ project.description }}</p>
            <p class="text-neutral-500">
              專案開始執行：{{ project.startDate }} ~ {{ project.endDate }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-full flex flex-col items-center min-h-[70vh] justify-center"
      >
        <h1 class="big-heading mb-20">團隊成員</h1>

        <div class="w-full flex gap-4 items-start justify-center test">
          <button class="navigation-btn" @click="scrollLeft()">&lt;</button>
          <div id="members" class="h-[350px] w-full container no-scrollbar">
            <MemberCarousel :members="members"></MemberCarousel>
          </div>
          <button class="navigation-btn" @click="scrollRight()">&gt;</button>
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
.container {
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.navigation-btn {
  margin-top: 1rem;
  height: 96px;
}
.test {
  padding: -50px;
}
@media screen and (max-width: 768px) {
  .hero-wrapper {
    flex-direction: column;
  }
  .images {
    width: 100%;
    min-height: 200px;
  }
}
@media screen and (max-width: 475px) {
  .container {
    width: 210px;
    overflow-x: hidden;
  }
}
</style>
