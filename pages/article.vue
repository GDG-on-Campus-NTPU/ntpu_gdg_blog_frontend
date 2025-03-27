<script setup>
import { marked } from 'marked';

const title = ref('');
const topic = ref(1);
const author = ref('');
const authorInfo = ref('');
const time = ref(new Date().toISOString().split('T')[0]);
const content = ref('');
const tags = ref('');
const submitted = ref(false);

const previewContent = computed(() => marked(content.value));

const submitPost = async () => {
  submitted.value = true;
  try {
    const res = await $fetch('/api/article', {
      method: 'POST',
      body: {
        title: title.value,
        Topic: topic.value,
        author: author.value,
        authorInfo: authorInfo.value,
        time: time.value,
        content: content.value,
        tags: tags.value.split(',').map((tag) => tag.trim()),
      },
    });
    console.log('Post Created:', res);

    title.value = '';
    topic.value = 1;
    author.value = '';
    authorInfo.value = '';
    time.value = new Date().toISOString().split('T')[0];
    content.value = '';
    tags.value = '';
  } catch (error) {
    console.error('Error:', error);
  } finally {
    submitted.value = false;
  }
};
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-bold my-4">Create a New Blog Post</h1>
    <form @submit.prevent="submitPost" class="space-y-4">
      <!-- Title -->
      <div>
        <label class="block font-medium">Title:</label>
        <input
          v-model="title"
          type="text"
          required
          class="w-full p-2 border rounded"
        />
      </div>

      <!-- Topic -->
      <div>
        <label class="block font-medium">Topic:</label>
        <div class="space-y-2">
          <label class="flex items-center space-x-2">
            <input type="radio" v-model="topic" :value="1" class="mr-2" />
            <span>課程</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" v-model="topic" :value="2" class="mr-2" />
            <span>活動</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" v-model="topic" :value="3" class="mr-2" />
            <span>講座</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" v-model="topic" :value="4" class="mr-2" />
            <span>其他</span>
          </label>
        </div>
      </div>

      <!-- Author -->
      <div>
        <label class="block font-medium">Author:</label>
        <input
          v-model="author"
          type="text"
          required
          class="w-full p-2 border rounded"
        />
      </div>

      <!-- Author Info -->
      <div>
        <label class="block font-medium">Author Info:</label>
        <textarea
          v-model="authorInfo"
          rows="2"
          required
          class="w-full p-2 border rounded"
        ></textarea>
      </div>

      <!-- Time -->
      <div>
        <label class="block font-medium">Date:</label>
        <input
          v-model="time"
          type="date"
          required
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="flex gap-2 w-full">
        <!-- Content -->
        <div class="flex-1">
          <label class="block font-medium">Content (Markdown):</label>
          <textarea
            v-model="content"
            required
            rows="15"
            class="p-2 w-full border rounded grow"
          ></textarea>
        </div>
        <!-- Live Preview -->
        <div class="flex-1">
          <label class="block font-medium">Live Preview:</label>
          <div
            class="prose border rounded p-2 max-h-[50vh] overflow-y-scroll"
            v-html="previewContent"
          ></div>
        </div>
      </div>

      <!-- Tags -->
      <div>
        <label class="block font-medium">Tags (Comma-separated):</label>
        <input
          v-model="tags"
          type="text"
          required
          class="w-full p-2 border rounded"
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="submitted"
        class="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {{ submitted ? 'Submitting...' : 'Publish' }}
      </button>
    </form>
  </div>
</template>
