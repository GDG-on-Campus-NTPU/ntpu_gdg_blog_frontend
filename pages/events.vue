<template>
  <div id="events">
    <div class="img-slider">
      <Carousel v-bind="config">
        <Slide v-for="image in images" :key="image.id">
          <img :src="image.url" alt="image" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <h1>這些課程和活動，都是我們一起創造的精彩時刻，期待你也能加入！</h1>
    <div class="events-grid">
      <article
        class="events-grid-item"
        v-for="event in events"
        :key="event.title"
      >
        <h2>{{ event.title }}</h2>
        <p>{{ event.description }}</p>
        <ul class="event-tags">
          <li v-for="tag in event.tags" :key="tag">{{ tag }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
/* image slider */
const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));
const config = {
  itemsToShow: 4,
  gap: 5,
  /*autoplay: 4000,*/
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
const events = [
  {
    title: 'Google Cloud Study Jam: Gen AI 特別篇',
    description: '深入了解 Google Cloud 的生成式 AI',
    tags: ['Gen AI', 'Google Cloud'],
  },
  {
    title: '告別雜亂！HackMD 助你專案溝通更順暢',
    description: '從筆記到設計：打造你的專業技能',
    tags: ['HackMD', 'Markdown'],
  },
  {
    title: '平面設計跨領域？UIUX 轉職經驗談',
    description: '現役 UIUX 設計師交流分享會',
    tags: ['UIUX', '轉職生涯'],
  },
  {
    title: '零基礎不害怕！輕鬆上手 Python 程式設計',
    description: '基礎 Python 程式設計入門',
    tags: ['Python入門', '基礎程式語言'],
  },
  {
    title: '掌握 Python 工具箱，開發能力再升級！',
    description: '學習 Python 的進階應用與工具',
    tags: ['應用中學習', '進階操作'],
  },
  {
    title: '進階數據分析：資料清理到視覺化一步到位',
    description: '從 0 開始學習數據分析',
    tags: ['從 0 開始', '資料分析'],
  },
  {
    title: '實習與求職加分秘技：運用 GitHub 打造專業作品集',
    description: 'GitHub 作品集製作指南',
    tags: ['GitHub', '作品集製作'],
  },
  {
    title: 'PM Round Table ：一窺企業專案/產品管理模式',
    description: '業界 PM 圓桌論壇，深入探討管理模式',
    tags: ['業界連結', '圓桌論壇'],
  },
  {
    title: '成為報告超人！AI 魔法召喚術',
    description: '學習 AI 在報告與簡報上的應用',
    tags: ['AI應用', '報告技巧'],
  },
  {
    title: '數據一把抓！Python 自動化爬蟲實作',
    description: '從零開始學習 Python 爬蟲技術',
    tags: ['Python', '爬蟲實作'],
  },
  {
    title: 'Build with AI 2025: n8n 智能工作流',
    description: '探索 n8n 的自動化與 AI 應用',
    tags: ['n8n', '智能工作流'],
  },
];
</script>

<style scoped>
.img-slider {
  position: relative;
  z-index: 0;
  height: 300px;
  display: flex;
  align-items: center;
}
h1 {
  margin: 0 5rem 5rem;
}
.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem 0 5rem;
}
.events-grid-item {
  font-family: '__Inter_3e83c2,__Inter_Fallback_3e83c2';
  background: black;
  border-radius: var(--border-radius);
  aspect-ratio: 1/1;
  padding: 2rem;
  color: white;
  position: relative;
}
.events-grid-item:hover {
  background: lightgray;
  transition: 0.5s;
  color: black;
  border: solid 1px black;
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
p {
  margin: 2rem 0;
}
.event-tags {
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2.5rem;
  bottom: 2.5rem;
}
li {
  border: solid 1px white;
  color: inherit;
  padding: 0 1rem;
  border-radius: var(--border-radius);
  text-wrap: nowrap;
}
</style>
