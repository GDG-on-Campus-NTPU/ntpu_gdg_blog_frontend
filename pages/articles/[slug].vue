<template>
  <div v-if="article" class="side-padding">
    <div class="workshop__header">
      <div class="workshop__info">
        <h1 class="workshop__title">
          {{ article.title }}
        </h1>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">
              {{ article.author }}
            </p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in splitDetails.slice(1)"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="workshop__image" :src="firstImage" />
    </div>

    <div v-if="tableOfContents.length" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useRoute, useAsyncData } from '#app';

const route = useRoute();
const { data: article } = await useFetch(`/api/article/${route.params.slug}`);

import { marked } from 'marked';

const content = ref('');
const details = ref('');
const splitDetails = ref([]);
const previewContent = ref('');
const tableOfContents = ref([]);
const firstImage = ref('');

const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/\s+/g, '-');

    return `
            <h${depth} id="${escapedText}">
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${depth}>`;
  },
  image({ href, title, alt }) {
    return `<div class="flex flex-col items-center">
    <img src=${href} alt=${alt}  />
    <span class="text-center text-sm text-neutral-400">${title}</span>
    </div>`;
  },
};
marked.use({ renderer });

// Regex pattern for markdown image
const imageRegex = /!\[.*?\]\((.*?)\)/;

if (article.value) {
  content.value = article.value.content ?? '';
  details.value = article.value.authorInfo ?? '';

  // Handle null/empty details safely
  splitDetails.value = details.value ? details.value.split('\n') : [];
  previewContent.value = marked.parse(
    content.value.replace(imageRegex, '').trim()
  );
  firstImage.value = content.value.match(imageRegex)[1];

  const headingRegex = /^(#{2})\s(.+)$/gm;
  const matches = [...content.value.matchAll(headingRegex)];
  tableOfContents.value = matches.map((match) => ({
    level: match[1].length,
    text: match[2],
    id: match[2].toLowerCase().replace(/\s+/g, '-'),
  }));
}

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.side-padding {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}

.workshop__header {
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 50vh;
}

.workshop__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.workshop__title {
  text-align: center;
  font-size: clamp(2rem, calc(2vw + 1rem), 5rem);
  line-height: normal;
}
.workshop__speaker-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
}
.speaker {
  flex: 1;
}
.speaker__photo {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-width: 75px;
  min-height: 75px;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}

.speaker__name {
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.speaker__details {
  flex: 2;
}

.workshop__image {
  flex: 1;
  object-fit: cover;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  align-self: center;
  margin: 5rem 0 4rem;
  padding: 2rem;
}
@media (max-width: 1000px) {
  .workshop__header {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .workshop__info {
    align-items: center;
  }
  .workshop__image {
    width: auto;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>
<!--
<template>
  <div v-if="article" class="workshop">
    <div class="workshop__header">
      <div class="workshop__info">
        <div>
          <h1 class="workshop__title">{{ article.title }}</h1>
        </div>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">{{ article.author }}</p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in splitDetails.slice(1)"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="workshop__image" :src="firstImage" />
    </div>

    <div v-if="tableOfContents.length" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useRoute, useAsyncData } from '#app';

const route = useRoute();
const { data: article } = await useFetch(`/api/article/${route.params.slug}`);
</script>
-->
<!--
<template>
  <div class="workshop">
    <div class="workshop__header" v-if="event">
      <div class="workshop__info">
        <div>
          <h1 class="workshop__title">{{ event.title }}</h1>
        </div>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">{{ event.author }}</p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in splitDetails.slice(1)"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="workshop__image" :src="firstImage" />
    </div>

    <div v-if="tableOfContents.length" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

// --- Routing & Reactive Vars ---
const route = useRoute();
const event = ref<{
  title: string;
  author: string;
  content: string;
  AuthorInfo: string;
} | null>(null);
const splitDetails = ref<string[]>([]);
const previewContent = ref('');
const tableOfContents = ref<{ level: number; text: string; id: string }[]>([]);
const firstImage = ref('');

// --- Custom Markdown Renderer ---
marked.use({
  renderer: {
    heading(tokens, depth) {
      const text = this.parser.parseInline(tokens);
      const id = text.toLowerCase().replace(/\s+/g, '-');
      return `<h${depth} id="${id}">
        <a name="${id}" class="anchor" href="#${id}">
          <span class="header-link"></span>
        </a>
        ${text}
      </h${depth}>`;
    },
    image(href, title, alt) {
      return `<div class="flex flex-col items-center">
        <img src="${href}" alt="${alt}" />
        <span class="text-center text-sm text-neutral-400">${title}</span>
      </div>`;
    },
  },
});

// --- Fetch & Process ---
onMounted(async () => {
  const { data } = await useFetch(`/api/article/${route.params.slug}`);

  if (data.value) {
    event.value = data.value;
    const rawContent = data.value.content;

    // Author info split
    if (data.value.AuthorInfo) {
      splitDetails.value = data.value.AuthorInfo.split('\n');
    }

    // Strip first image for header image
    const imageMatch = rawContent.match(/!\[.*?\]\((.*?)\)/);
    firstImage.value = imageMatch ? imageMatch[1] : '';

    // Render markdown preview
    previewContent.value = marked.parse(
      rawContent.replace(/!\[.*?\]\(.*?\)/, '').trim()
    );

    // Extract h2 for ToC
    const headingRegex = /^(#{2})\s(.+)$/gm;
    const matches = [...rawContent.matchAll(headingRegex)];
    tableOfContents.value = matches.map((match) => ({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, '-'),
    }));
  } else {
    console.error('Failed to fetch article data');
  }
});

// --- Scroll Behavior ---
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.workshop {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}

.workshop__header {
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 50vh;
}

.workshop__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.workshop__title {
  text-align: center;
  font-size: clamp(2rem, calc(2vw + 1rem), 5rem);
  line-height: normal;
}
.workshop__speaker-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
}
.speaker {
  flex: 1;
}
.speaker__photo {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-width: 75px;
  min-height: 75px;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}

.speaker__name {
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.speaker__details {
  flex: 2;
}

.workshop__image {
  flex: 1;
  object-fit: cover;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  align-self: center;
  margin: 5rem 0 4rem;
  padding: 2rem;
}
@media (max-width: 1000px) {
  .workshop__header {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .workshop__info {
    align-items: center;
  }
  .workshop__image {
    width: auto;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>
-->
<!--
<template>
  <div class="workshop">
    <div class="workshop__header">
      <div class="workshop__info">
        <div>
          <h1 class="workshop__title">
            {{ event.Title }}
          </h1>
        </div>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">
              {{ event.Author }}
            </p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in splitDetails.slice(1)"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="workshop__image" :src="firstImage" />
    </div>

    <div v-if="tableOfContents.length" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: event } = await useFetch(`/api/article/${route.params.slug}`);

import { marked } from 'marked';

const content = ref('');
const title = ref('');
const splitTitle = ref([]);
const details = ref('');
const splitDetails = ref([]);
const previewContent = ref('');
const tableOfContents = ref([]);
const firstImage = ref('');

const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/\s+/g, '-');

    return `
            <h${depth} id="${escapedText}">
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${depth}>`;
  },
  image({ href, title, alt }) {
    return `<div class="flex flex-col items-center">
    <img src=${href} alt=${alt}  />
    <span class="text-center text-sm text-neutral-400">${title}</span>
    </div>`;
  },
};
marked.use({ renderer });

// Regex pattern for markdown image
const imageRegex = /!\[.*?\]\((.*?)\)/;

if (event.value) {
  content.value = event.value.Content;
  title.value = event.value.Title;
  splitTitle.value = title.value.split('\\n');
  details.value = event.value.AuthorInfo;
  splitDetails.value = details.value.split('\n');
  previewContent.value = marked.parse(
    content.value.replace(imageRegex, '').trim()
  );
  firstImage.value = content.value.match(imageRegex)[1];

  const headingRegex = /^(#{2})\s(.+)$/gm;
  const matches = [...content.value.matchAll(headingRegex)];
  tableOfContents.value = matches.map((match) => ({
    level: match[1].length,
    text: match[2],
    id: match[2].toLowerCase().replace(/\s+/g, '-'),
  }));
}

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.workshop {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}

.workshop__header {
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 50vh;
}

.workshop__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.workshop__title {
  text-align: center;
  font-size: clamp(2rem, calc(2vw + 1rem), 5rem);
  line-height: normal;
}
.workshop__speaker-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
}
.speaker {
  flex: 1;
}
.speaker__photo {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-width: 75px;
  min-height: 75px;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}

.speaker__name {
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.speaker__details {
  flex: 2;
}

.workshop__image {
  flex: 1;
  object-fit: cover;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  align-self: center;
  margin: 5rem 0 4rem;
  padding: 2rem;
}
@media (max-width: 1000px) {
  .workshop__header {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .workshop__info {
    align-items: center;
  }
  .workshop__image {
    width: auto;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>
-->
<!--
<script setup lang="ts">
const route = useRoute();
const { data: event } = await useFetch(`/api/article/${route.params.slug}`);
const authorInfo = event.value.AuthorInfo;
const tags = authorInfo.split('\n');
</script>
-->

<!--
<template>
  <div class="workshop">
    <div class="workshop__header">
      <div class="workshop__info">
        <div>
          <h1 class="workshop__title">
            {{ event.title }}
          </h1>
        </div>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">
              {{ event.uthor }}
            </p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in splitDetails.slice(1)"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="workshop__image" :src="firstImage" />
    </div>

    <div v-if="tableOfContents.length" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: event } = await useFetch(`/api/article/${route.params.slug}`);

import { marked } from 'marked';

const content = ref('');
const title = ref('');
const details = ref('');
const splitDetails = ref([]);
const previewContent = ref('');
const tableOfContents = ref([]);
const firstImage = ref('');

const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/\s+/g, '-');

    return `
            <h${depth} id="${escapedText}">
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${depth}>`;
  },
  image({ href, title, alt }) {
    return `<div class="flex flex-col items-center">
    <img src=${href} alt=${alt}  />
    <span class="text-center text-sm text-neutral-400">${title}</span>
    </div>`;
  },
};
marked.use({ renderer });

// Regex pattern for markdown image
const imageRegex = /!\[.*?\]\((.*?)\)/;

onMounted(async () => {
  const { data: event } = await useFetch(`/api/article/${route.params.slug}`);

  if (event.value) {
    content.value = event.value.content;
    title.value = event.value.title;
    if (event.title) {
      details.value = event.value.AuthorInfo;
      splitDetails.value = details.value.split('\n');
    } else {
      console.log('Error');
    }

    previewContent.value = marked.parse(
      content.value.replace(imageRegex, '').trim()
    );
    firstImage.value = content.value.match(imageRegex)[1];

    const headingRegex = /^(#{2})\s(.+)$/gm;
    const matches = [...content.value.matchAll(headingRegex)];
    tableOfContents.value = matches.map((match) => ({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, '-'),
    }));
  } else {
    console.log('no data');
  }
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.workshop {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}

.workshop__header {
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 50vh;
}

.workshop__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.workshop__title {
  text-align: center;
  font-size: clamp(2rem, calc(2vw + 1rem), 5rem);
  line-height: normal;
}
.workshop__speaker-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
}
.speaker {
  flex: 1;
}
.speaker__photo {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-width: 75px;
  min-height: 75px;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}

.speaker__name {
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.speaker__details {
  flex: 2;
}

.workshop__image {
  flex: 1;
  object-fit: cover;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  align-self: center;
  margin: 5rem 0 4rem;
  padding: 2rem;
}
@media (max-width: 1000px) {
  .workshop__header {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .workshop__info {
    align-items: center;
  }
  .workshop__image {
    width: auto;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>


-->
