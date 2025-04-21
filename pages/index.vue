<template>
  <div id="home-page">
    <section class="hero">
      <img src="/assets/svg/orbit.svg" alt="orbit animation" />
      <div class="hero-text">
        <h1>我們是...</h1>
        <h2>Google 學生開發者社群</h2>
        <h2>國立臺北大學</h2>
        <p>
          成立於 2020 年，由 Google 支持的學生社群計畫，<br />
          旨在能鼓勵學生們學習與應用 Google 技術，<br />
          並提供成員們資源協助及與專家互動交流的機會。<br />
          我們致力於打造一個文組人入門的科技社群，<br />
          提供良好的學習環境，給予開發者交流的技術平台。
        </p>
      </div>
    </section>
    <section class="about">
      <h1>我們在做...</h1>
      <div class="flex gap-20 grow justify-center my-12">
        <div class="about-grid w-[300px]">
          <div
            v-for="(item, index) in aboutItems"
            :key="index"
            class="about-grid-item box-design"
          >
            <span>{{ item.title }}</span>
            <NuxtLink :to="item.link">更多內容...</NuxtLink>
          </div>
        </div>
        <div class="events-info box-design w-[350px]">
          <h2 class="mt-8 text-center">重要活動</h2>
          <div
            class="mt-4 aspect-square w-full flex flex-col rounded-[--border-radius] bg-[#FFF3DB] border"
          >
            <img
              class="h-[50%] object-cover rounded-t-[--border-radius]"
              src="/assets/img/project.jpg"
            />
            <div class="h-[50%] p-4 flex flex-col gap-1">
              <div class="tags flex gap-2">
                <p>程式設計</p>
                <p>Python</p>
              </div>
              <p class="text-lg font-bold font-[Inter]">活動主題名稱</p>
              <span class="text-xs">April 11, 2025</span>
              <p class="text-sm">
                活動內文介紹活動內文介紹活動內文介紹活動內文介紹活動內文介紹活動內文介紹
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="articles">
      <h1>最新文章</h1>
      <div class="new-article box-design" v-for="i in 2" :key="i">
        <span class="line-decoration-right"></span>
        <NuxtLink to="/events/event" class="new-article-content">
          <div>
            <h2>成為報告超人！AI 魔法召喚術</h2>
            <p class="mt-8">學習 AI 在報告與簡報上的應用</p>
          </div>
          <div class="relative">
            <img
              class="rounded-full"
              src="/img/profile.png"
              alt="speaker-image"
            />
            <span class="absolute w-full text-center bottom-[-2rem]"
              >講者名</span
            >
          </div>
        </NuxtLink>
        <span class="line-decoration-left"></span>
      </div>
    </section>
    <section class="team">
      <h1>開發團隊</h1>
      <div class="w-full flex justify-between mt-16 gap-8 text-center">
        <div v-for="team in teams" :key="team.title">
          <div>
            <span class="text-2xl block mb-4 font-bold">{{ team.title }}</span>
            <div
              class="flex flex-col p-4 rounded-[--border-radius] border-[2px] border-[#555555]"
            >
              <img
                class="rounded-full h-[100px] w-[100px]"
                :src="`${img_url}${team.members[0][1]}.png`"
              />
              <span class="mt-2 mb-4">{{ team.members[0][0] }}</span>
              <img
                class="rounded-full h-[100px] w-[100px]"
                :src="`${img_url}${team.members[1][1]}.png`"
              />
              <span class="mt-2">{{ team.members[1][0] }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from '#imports';
const date = ref(new Date());
const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid',
    },
    dates: new Date(),
  },
]);

const aboutItems = [
  { title: '專案實作', link: '/projects' },
  { title: '程式設計', link: '/events' },
  { title: '課程講座', link: '/events' },
];

const img_url =
  'https://cdn.jsdelivr.net/gh/chi-chen-wei/GDG_NTPU_assets@main/members/member-';
const teams = [
  {
    title: 'PM',
    members: [
      ['許甄珆', 1],
      ['施尚丞', 2],
    ],
  },
  {
    title: '行銷',
    members: [
      ['黃意捷', 3],
      ['楊芷捷', 4],
    ],
  },
  {
    title: '前端',
    members: [
      ['陳宥任', 5],
      ['魏琦蓁', 6],
    ],
  },
  {
    title: '後端',
    members: [
      ['劉晉嘉', 7],
      ['林漢昕', 8],
    ],
  },
  {
    title: 'UIUX',
    members: [
      ['李芸瑄', 9],
      ['余沁恩', 10],
    ],
  },
];
</script>

<style scoped>
.hero {
  gap: 3rem;
  justify-content: center;
}
.hero p {
  margin-top: 1rem;
  text-align: justify;
  text-wrap: nowrap;
}
.about {
  flex-direction: column;
}
.about-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  flex-grow: 1;
}
.about-grid-item {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
  justify-content: center;
  position: relative;
}
.about-grid-item:nth-child(2) {
  background-color: white;
  color: black;
}
/* about-grid-item title */
.about-grid-item span {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
/* about-grid-item learn-more link */
.about-grid-item a {
  position: absolute;
  text-decoration-line: underline;
  bottom: 0.5rem;
  right: 2rem;
}
.about-grid-item a:hover {
  transform: scale(1.05);
}
.events-info {
  padding: 0 1rem;
}
.articles {
  flex-direction: column;
  width: 90%;
  padding: 10px;
  margin: 3rem auto;
}
.new-article {
  box-shadow: 0 0.5rem black;
  margin: 1rem 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.new-article-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.new-article-content img {
  width: 8rem;
  height: 8rem;
}
.new-article-content + div {
  font-size: 1rem;
  width: 65%; /* 調整內文寬度 */
  padding: 10px;
  text-indent: 2em;
}
.team {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section {
  display: flex;
  min-height: 80vh;
  align-items: center;
  margin: 3rem 0;
}
.tags p {
  font-size: x-small;
  border: solid 1px;
  padding: 4px 8px;
  border-radius: var(--border-radius);
}
</style>
