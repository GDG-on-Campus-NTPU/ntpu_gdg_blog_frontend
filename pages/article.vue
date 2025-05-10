<template>
  <div class="w-full side-padding mb-8">
    <h1 class="text-2xl font-bold my-6">新增文章</h1>
    <form @submit.prevent="submitPost" class="space-y-8">
      <div class="flex items-center">
        <div class="flex-1 space-y-4">
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

          <!-- Type -->
          <div>
            <label class="input-label">Type:</label>
            <div class="space-y-2">
              <label class="flex items-center space-x-2">
                <input type="radio" v-model="type" :value="1" class="mr-2" />
                <span>技術</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="radio" v-model="type" :value="2" class="mr-2" />
                <span>回顧</span>
              </label>
            </div>
          </div>

          <!-- Topic -->
          <div>
            <label class="input-label">Topic:</label>
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

          <!-- Description -->
          <div>
            <label class="input-label">Description:</label>
            <input
              v-model="description"
              type="text"
              class="w-full p-2 border rounded"
              required
            />
          </div>

          <!-- Speaker/Author -->
          <div>
            <label class="input-label">Speaker:</label>
            <input
              v-model="author"
              type="text"
              class="w-full p-2 border rounded"
            />
          </div>

          <!-- Author Info -->
          <div>
            <label class="input-label"
              >Speaker Info: (List each experience on a new line)</label
            >
            <textarea
              v-model="authorInfo"
              rows="3"
              class="w-full p-2 border rounded"
            ></textarea>
          </div>

          <!-- Time -->
          <div>
            <label class="input-label">Date:</label>
            <input
              v-model="time"
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
        <div class="flex-1 flex justify-center article-card">
          <ArticleCard class="w-[280px]" :article="article" />
        </div>
      </div>
      <div class="flex gap-2 w-full items-start container">
        <!-- Content -->
        <div class="flex-1 w-full">
          <label class="input-label">Content (Markdown):</label>
          <textarea
            v-model="content"
            rows="15"
            class="p-2 w-full border rounded grow"
          ></textarea>
        </div>
        <!-- Live Preview -->
        <div v-if="preview" class="flex-1 w-full">
          <label class="input-label">Live Preview:</label>
          <div
            class="prose border rounded p-2 max-h-[50vh] overflow-y-scroll"
            v-html="previewContent"
          ></div>
        </div>
        <IconsEye @click="preview = !preview" class="preview-btn"></IconsEye>
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
import { marked } from 'marked';

const preview = ref(false);
const title = ref('');
const type = ref(1);
const topic = ref(1);
const description = ref('');
const author = ref('');
const authorInfo = ref('');
const time = ref(new Date().toLocaleDateString());
const content = ref('');
const tags = ref('');
const submitted = ref(false);

const article = ref({
  title: title,
  description: description,
  tags: computed(() => tags.value.split(',').map((tag: string) => tag.trim())),
});

const previewContent = computed(() => marked(content.value));

const submitPost = async () => {
  submitted.value = true;
  try {
    const res = await $fetch('/api/article', {
      method: 'POST',
      body: {
        title: title.value,
        type: type.value,
        topic: topic.value,
        description: description.value,
        author: author.value,
        authorInfo: authorInfo.value,
        time: new Date(time.value),
        content: content.value,
        tags: tags.value.split(',').map((tag: string) => tag.trim()),
      },
    });
    console.log('Post Created:', res);

    title.value = '';
    type.value = 1;
    topic.value = 1;
    description.value = '';
    author.value = '';
    authorInfo.value = '';
    time.value = new Date().toLocaleDateString();
    content.value = '';
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
.preview-btn {
  cursor: pointer;
}
.preview-btn:hover {
  transform: scale(1.1);
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
