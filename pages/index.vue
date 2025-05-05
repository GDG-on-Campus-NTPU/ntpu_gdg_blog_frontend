<template>
  <div class="w-full side-padding">
    <section class="hero section">
      <img src="/assets/svg/orbit.svg" alt="orbit animation" />
      <div>
        <h1 class="big-heading">我們是...</h1>
        <h2 class="medium-heading">Google 學生開發者社群<br />國立臺北大學</h2>
        <p>
          成立於 2020 年，由 Google 支持的學生社群計畫，<br />
          旨在能鼓勵學生們學習與應用 Google 技術，<br />
          並提供成員們資源協助及與專家互動交流的機會。<br />
          我們致力於打造一個文組人入門的科技社群，<br />
          提供良好的學習環境，給予開發者交流的技術平台。
        </p>
      </div>
    </section>

    <section class="about section">
      <h1 class="big-heading">我們在做...</h1>
      <div class="about-container">
        <div class="about-grid">
          <div
            v-for="(item, index) in aboutItems"
            :key="index"
            class="about-grid-item box-design"
          >
            <span class="medium-heading">{{ item.title }}</span>
            <NuxtLink :to="item.link">更多內容...</NuxtLink>
          </div>
        </div>

        <div class="event-info box-design w-[350px]">
          <h2 class="medium-heading mb-4">重要活動</h2>

          <EventCard :event="event" @selected="openModal"></EventCard>
          <EventModal
            v-if="selectedEvent"
            :event="selectedEvent"
            @close="selectedEvent = null"
          ></EventModal>
        </div>
      </div>
    </section>

    <section class="articles section">
      <h1 class="big-heading">最新文章</h1>
      <NuxtLink
        :to="`/articles/${article.id}`"
        class="new-article box-design"
        v-for="article in topTwoArticles"
        :key="article.title"
      >
        <span class="line-decoration-right"></span>
        <div class="new-article-content">
          <div class="w-[65%]">
            <h2 class="medium-heading">{{ article.title }}</h2>
            <p class="mt-4">{{ article.description }}</p>
          </div>
          <div class="relative">
            <img
              class="rounded-full"
              src="/img/profile.png"
              alt="speaker-image"
            />
            <span class="absolute w-full text-center bottom-[-2rem]">{{
              article.author
            }}</span>
          </div>
        </div>
        <span class="line-decoration-left"></span>
      </NuxtLink>
    </section>

    <section class="team section">
      <h1 class="big-heading">開發團隊</h1>
      <div class="w-full my-12 flex gap-4 justify-center items-center">
        <button class="navigation" @click="ScrollLeft()">&lt;</button>
        <div
          id="team"
          class="flex gap-8 text-center team-container no-scrollbar p-2"
        >
          <div
            class="sub-team"
            v-for="subteam in subteams"
            :key="subteam.title"
          >
            <div>
              <span class="block medium-heading font-bold">{{
                subteam.title
              }}</span>
              <div
                class="flex flex-col py-4 w-[136px] items-center rounded-[--border-radius] border-2 border-[#555555] my-4"
              >
                <img
                  class="rounded-full h-[100px] w-[100px]"
                  :src="`${img_url}${subteam.members[0][1]}.png`"
                />
                <span class="mt-2 mb-4">{{ subteam.members[0][0] }}</span>
                <img
                  class="rounded-full h-[100px] w-[100px]"
                  :src="`${img_url}${subteam.members[1][1]}.png`"
                />
                <span class="mt-2">{{ subteam.members[1][0] }}</span>
              </div>
            </div>
          </div>
        </div>
        <button class="navigation" @click="ScrollRight()">&gt;</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Article {
  id: string;
  title: string;
  date: Date;
  author: string;
  description: string;
}

const {
  data: articles,
  pending,
  error,
} = await useFetch<Article[]>('/api/article/all');

const topTwoArticles = computed(() => {
  if (!articles.value) return [];

  return [...articles.value]
    .sort((a, b) => {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    })
    .slice(0, 2);
});

const selectedEvent = ref(null);

const openModal = (event) => {
  selectedEvent.value = event;
};
const event = {
  title: 'LINE Bot 系列社課',
  thumbnail:
    'https://res.cloudinary.com/dvjrsbnrd/image/upload/v1746176424/cld-sample-4.jpg',
  description: `上週課程中，我們已學會藉由 LINE Bot 進行自動回覆、利用 API 進行網路搜尋與 Gemini 回覆，以及運用 Python 套件製作圖表。
這週社課將帶領你們用 Firebase 賦予 LINE Bot 記憶力，從申請 Firebase 憑證、資料讀寫，到與 Gemini 結合，讓聊天機器人也能擔任你們的小秘書📝！
課程最後也會分享開發 LINE Bot 的小技巧，讓大家創造出更智慧且更貼近使用者的互動體驗🙋‍♀️！`,
  date: new Date(),
  tags: 'Firebase, 儲存記憶',
};
function ScrollRight(): void {
  document.getElementById('team')?.scrollBy(140, 0);
}
function ScrollLeft(): void {
  document.getElementById('team')?.scrollBy(-140, 0);
}

const aboutItems = [
  { title: '專案實作', link: '/projects' },
  { title: '程式設計', link: '/articles' },
  { title: '課程講座', link: '/articles' },
];

const img_url =
  'https://cdn.jsdelivr.net/gh/chi-chen-wei/GDG_NTPU_assets@main/members/member-';
const subteams = [
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
.big-heading {
  font-weight: bold;
}
.hero p {
  margin-top: 1.5rem;
  text-align: justify;
  text-wrap: nowrap;
}
.about {
  flex-direction: column;
}
.about-container {
  display: flex;
  gap: 5rem;
  flex-grow: 1;
  margin: 2rem auto;
}
.about-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}
.about-grid-item {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 120px;
}
.about-grid-item:nth-child(2) {
  background-color: white;
  color: black;
}
.about-grid-item span,
.event-info h2 {
  font-weight: bold;
  text-align: center;
}
.about-grid-item a {
  position: absolute;
  text-decoration-line: underline;
  bottom: 0.5rem;
  right: 2rem;
}
.about-grid-item a:hover {
  transform: scale(1.05);
}
.event-info {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
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
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
}
.new-article-content img {
  width: 8rem;
  height: 8rem;
}
.team {
  flex-direction: column;
  justify-content: center;
}
.navigation {
  display: none;
}
.team-container {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.sub-team {
  scroll-snap-align: center;
}
.line-decoration-left {
  width: 60%;
  border: 0.5px grey solid;
  margin: 20px;
}
.line-decoration-right {
  width: 60%;
  border: 0.5px grey solid;
  margin: 20px;
  align-self: flex-end;
}

@media screen and (max-width: 1064px) {
  .navigation {
    display: block;
  }
}
@media screen and (max-width: 1000px) {
  .hero img {
    width: 400px;
  }
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-grid-item span {
    font-size: 1.5rem;
  }
  .about-grid-item a {
    font-size: 0.75rem;
  }
  .new-article-content img {
    width: 6rem;
    height: 6rem;
  }
  .new-article-content span {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
    gap: 0;
  }
  .hero img {
    width: auto;
  }
  .new-article-content img {
    width: 4rem;
    height: 4rem;
  }
  .new-article-content span {
    font-size: 0.8rem;
  }
}
</style>
