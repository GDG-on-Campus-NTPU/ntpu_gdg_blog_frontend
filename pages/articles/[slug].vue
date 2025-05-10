<template>
  <div v-if="article" class="w-full side-padding">
    <button @click="scrollToSection('toc')" class="button">^</button>
    <div class="workshop__header">
      <div class="workshop__info">
        <h1 class="workshop__title">
          {{ article.title }}
        </h1>
        <div v-if="article.author" class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">
              {{ article.author }}
            </p>
          </div>
          <div class="speaker__details">
            <p class="text-sm font-bold">{{ splitDetails[0] }}</p>
            <ul class="speaker__experience">
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

    <div v-if="tableOfContents.length" id="toc" class="workshop__toc">
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1 w-fit mx-auto">
        <li class="text-left" v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
  <div v-else-if="error">Article Not Found</div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useRoute, useAsyncData } from '#app';

const route = useRoute();
const { data: article, error } = await useFetch(
  `/api/article/${route.params.slug}`
);

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
    const caption = title
      ? `<span class="text-center text-sm text-neutral-400">${title}</span>`
      : '';

    return `<div class="flex flex-col items-center">
    <img src=${href} alt=${alt}  />
     ${caption}
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
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
.side-padding {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}
.default__header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.speaker__experience {
  list-style-type: disc;
  list-style-position: inside;
  font-size: 0.75rem; /* Tailwind's text-xs */
  margin-top: 10%;
  line-height: normal;
}
.workshop__image {
  flex: 1;
  max-width: 50%;
  object-fit: contain;
  align-self: center;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  margin: 5rem auto 4rem;
  padding: 2rem;
}
.button {
  font-size: x-large;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  padding: 10px;
  border: 1px solid black;
  background: white;
  border-radius: 10px;
  opacity: 50%;
}
.button:hover {
  cursor: pointer;
  opacity: 100%;
  box-shadow: 0 0 1px 1px lightgray;
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
    max-width: 100%;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>
