<!----------------------------------->
<!-- This defines the events page. -->
<!----------------------------------->

<template>
  <div id="events">
    <ImageCarousel :images="images" :numSlides="4" class="my-20" />
    <h1 class="mx-16 my-8">
      這些課程和活動，都是我們一起創造的精彩時刻，期待你也能加入！
    </h1>
    <div class="grid grid-cols-3 gap-6 my-16">
      <EventCard v-for="event in events" :key="event.title" :event="event" />
    </div>
  </div>
</template>

<script setup>
const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));

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
