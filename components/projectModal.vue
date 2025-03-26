<!------------------------------------------------->
<!-- This defines the pop-up card for a project. -->
<!------------------------------------------------->

<template>
  <div
    class="fixed flex items-center justify-center inset-0 bg-black/50 z-50"
    @click.self="close"
  >
    <div
      class="bg-white flex flex-col items-center relative max-h-[80vh] overflow-y-scroll overflow-x-hidden w-[90%] p-16 rounded-[--border-radius]"
    >
      <button class="absolute top-4 right-6 text-2xl" @click="close">×</button>
      <div class="flex w-full min-h-[60vh] gap-4 my-12">
        <ImageCarousel class="flex-1 size-[50vh]" :images="images" />
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
      <div class="flex flex-col items-center min-h-[50vh]">
        <h1 class="mb-20">團隊成員</h1>
        <MemberCarousel :members="members"></MemberCarousel>
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
</script>

<style scoped>
.project-tags {
  border: solid 1px black;
  padding: 0 1rem;
  border-radius: var(--border-radius);
  text-wrap: nowrap;
}
</style>
