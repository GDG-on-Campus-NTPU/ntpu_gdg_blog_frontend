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
      <div class="about-grid">
        <div
          v-for="(item, index) in aboutItems"
          :key="index"
          class="about-grid-item box-design"
        >
          <span>{{ item.title }}</span>
          <NuxtLink :to="item.link">更多內容...</NuxtLink>
        </div>
      </div>
    </section>
    <section class="events">
      <h1>Calendar</h1>
      <div class="events-overview">
        <div class="events-calendar box-design">
          <h2>近期活動</h2>
          <div>
            <client-only>
              <VDatePicker v-model="date" :attributes="attrs" />
            </client-only>
          </div>
        </div>
        <div class="events-info box-design">
          <h2>重要活動</h2>
        </div>
      </div>
    </section>
    <section class="articles">
      <h1>最新文章</h1>
      <div class="new-article box-design" v-for="i in 2" :key="i">
        <span class="line-decoration-right"></span>
        <div class="new-article-content">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            nostrum cupiditate mollitia dolor provident aspernatur dignissimos
            omnis explicabo neque iste libero, consectetur, veniam ullam hic
            voluptatibus reiciendis repudiandae, tempora tempore?
          </div>
          <a href="#"
            ><img src="https://via.placeholder.com/150" alt="文章預覽圖"
          /></a>
        </div>
        <span class="line-decoration-left"></span>
      </div>
    </section>
    <section class="team">
      <h1>開發團隊</h1>
      <div class="box-design"></div>
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
  { title: '程式設計', link: '/programming' },
  { title: '課程講座', link: '/workshops' },
  { title: '專案實作', link: '/projects' },
  { title: '交流平台', link: '/platform' },
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
  width: 90%;
  height: 70%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem auto;
  flex-grow: 1;
}
.about-grid-item {
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  justify-content: center;
  position: relative;
}
.about-grid-item:nth-child(2),
.about-grid-item:nth-child(3) {
  background-color: black;
  color: white;
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
  bottom: 1rem;
  right: 2rem;
}
.about-grid-item a:hover {
  transform: scale(1.05);
}
.events {
  flex-direction: column;
}
.events-overview {
  margin: 3rem auto;
  display: flex;
  width: 100%;
  /*height: 70%;*/
  gap: 3rem;
  text-align: center;
  flex-grow: 1;
}
.events-calendar {
  flex: 2;
  padding: 0.5rem 1rem;
}
.events-calendar div {
  margin-top: 2rem;
}
.events-info {
  flex: 1;
  padding: 0.5rem 1rem;
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
}
.new-article-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.new-article-content img {
  width: 12rem;
  height: 8rem;
}
.new-article-content div {
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
.team div {
  width: 100%;
  margin-top: 1rem;
  flex-grow: 1;
}
</style>
