<template>
  <div class="w-full side-padding mb-8">
    <h1 class="text-2xl font-bold my-6">新增活動</h1>
    <form @submit.prevent="submitPost" class="space-y-8">
      <div class="flex gap-20 items-center container">
        <div class="flex-1 w-full space-y-4">
          <!-- Thumbnail -->
          <div>
            <label class="input-label">Thumbnail:</label>
            <input
              v-model="thumbnail"
              type="text"
              class="w-full p-2 border rounded"
              required
            />
          </div>

          <!-- Title -->
          <div>
            <label class="input-label">Title:</label>
            <input
              v-model="title"
              type="text"
              class="w-full p-2 border rounded"
              required
            />
          </div>

          <!-- Description -->
          <div>
            <label class="input-label">Description:</label>
            <textarea
              v-model="description"
              rows="3"
              class="w-full p-2 border rounded"
            ></textarea>
          </div>

          <!-- Time -->
          <div>
            <label class="input-label">Date:</label>
            <input
              v-model="date"
              type="date"
              class="w-full p-2 border rounded"
              required
            />
          </div>

          <!-- Tags -->
          <div>
            <label class="input-label">Tags (Comma-separated):</label>
            <input
              v-model="tags"
              type="text"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <EventCard class="w-[280px]" :event="activity" />
        </div>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="submitted"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {{ submitted ? 'Submitting...' : 'Publish' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const title = ref('');
const description = ref('');
const date = ref(new Date().toLocaleDateString());
const thumbnail = ref('');
const tags = ref('');
const submitted = ref(false);

const activity = ref({
  thumbnail: thumbnail,
  title: title,
  description: description,
  tags: computed(() => tags.value.split(',').map((tag: string) => tag.trim())),
  date: date,
});

const submitPost = async () => {
  submitted.value = true;
  try {
    const res = await $fetch('/api/activity', {
      method: 'POST',
      body: {
        thumbnail: thumbnail.value,
        title: title.value,
        description: description.value,
        date: new Date(date.value),
        tags: tags.value.split(',').map((tag: string) => tag.trim()),
      },
    });
    console.log('Activity Created:', res);

    title.value = '';
    description.value = '';
    date.value = new Date().toLocaleDateString();
    thumbnail.value = '';
    tags.value = '';
  } catch (error) {
    console.error('Error:', error);
  } finally {
    submitted.value = false;
  }
};
</script>

<style scoped>
.input-label {
  display: block;
  font-size: medium;
  margin-bottom: 0.5rem;
}
@media screen and (max-width: 768px) {
  .article-card {
    display: none;
  }
  .container {
    flex-direction: column;
  }
}
</style>
