<template>
  <div class="event-card border" @click="openModal(event)">
    <img
      class="h-[50%] object-cover rounded-t-[--border-radius]"
      :src="event.thumbnail"
    />

    <div class="h-[50%] p-6 flex flex-col">
      <ul class="flex gap-2">
        <li v-for="tag in event.tags" :key="tag" class="tag">
          {{ tag }}
        </li>
      </ul>
      <p class="text-lg font-bold my-2">{{ event.title }}</p>
      <p class="text-sm description">
        {{ event.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(['event']);

const emit = defineEmits(['selected']);

const openModal = (event) => {
  emit('selected', event);
};
</script>

<style scoped>
.event-card {
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background: #fff3db;
}
.event-card:hover {
  cursor: pointer;
  box-shadow: 0 0 4px 4px #fff3db;
}
.tag {
  font-size: x-small;
  border: solid 1px;
  padding: 4px 8px;
  border-radius: var(--border-radius);
}
.description {
  flex-grow: 1;
  overflow: hidden;
}

@media screen and (max-width: 475px) {
  .event-card {
    width: 250px;
  }
}
</style>
