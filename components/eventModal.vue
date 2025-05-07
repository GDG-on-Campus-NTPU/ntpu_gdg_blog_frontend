<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content no-scrollbar max-h-[90vh] overflow-y-scroll">
      <button class="close-btn" @click="close">×</button>
      <img
        class="rounded-[--border-radius]"
        :src="event.thumbnail"
        alt="event thumbnail"
      />
      <h2 class="medium-heading text-center font-bold my-6">
        {{ event.title }}
      </h2>
      <ul class="flex gap-2 justify-center">
        <li v-for="tag in event.tags" :key="tag" class="tag">
          {{ tag }}
        </li>
      </ul>
      <p class="text-center text-neutral-400 my-4">
        {{ event.date.split('T')[0] }}
      </p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['event']);
const emit = defineEmits(['close']);

const close = () => emit('close');
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 4rem;
  border-radius: var(--border-radius);
  max-width: 600px;
  width: 90%;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.tag {
  font-size: x-small;
  border: solid 1px;
  padding: 4px 8px;
  border-radius: var(--border-radius);
}
</style>
