<template>
  <main>
    <section class="hero">
      <img src="/assets/svg/orbit.svg" alt="orbit animation" />
      <div class="hero-text">
        <h1>我們是...</h1>
        <h2>Google 學生開發者社群</h2>
        <h2>國立臺北大學</h2>
        <p>
          成立於 2020 年，由 Google 支持的學生社群計畫，
          旨在能鼓勵學生們學習與應用 Google 技術，
          並提供成員們資源協助及與專家互動交流的機會。
          我們致力於打造一個文組人入門的科技社群，提供良好的學習環境，
          給予開發者交流的技術平台。
        </p>
      </div>
    </section>
    <section class="about">
      <h1>我們在做...</h1>
      <div class="about-grid">
        <div
          v-for="(item, index) in aboutItems"
          :key="index"
          class="about-grid-item"
        >
          <span>{{ item.title }}</span>
          <NuxtLink :to="item.link">更多內容...</NuxtLink>
        </div>
      </div>
    </section>
    <section class="event">
      <h1>Calendar</h1>
    </section>
    <section class="article">
      <h1>最新文章</h1>
      <div class="new_article" v-for="index in 2" :key="index">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum
          cupiditate mollitia dolor provident aspernatur dignissimos omnis
          explicabo neque iste libero, consectetur, veniam ullam hic
          voluptatibus reiciendis repudiandae, tempora tempore?
        </div>
        <a href="#"
          ><img src="https://via.placeholder.com/150" alt="文章預覽圖"
        /></a>
      </div>
    </section>
    <section class="team">
      <h1>開發團隊</h1>
      <div></div>
    </section>
  </main>
</template>

<script setup lang="ts">
const aboutItems = [
  { title: '程式設計', link: '/test' },
  { title: '課程講座', link: '/workshops' },
  { title: '專案實作', link: '/projects' },
  { title: '交流平台', link: '/platform' },
];
</script>

<style scoped>
.hero {
  display: flex;
  gap: 3rem;
}
.hero image {
  flex: 1;
}
.hero text {
  flex: 1;
}
.hero h1 {
  margin-bottom: 1rem;
}
.hero p {
  margin-top: 1rem;
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
  margin-top: 3rem;
}
.about-grid-item {
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  border: 1px solid black;
  border-radius: var(--border-radius);
  box-shadow: 0 1rem black;
  justify-content: center;
  position: relative;
}
.about-grid-item span {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.about-grid-item a {
  position: absolute;
  align-self: flex-end;
  text-decoration-line: underline;
  padding: 0.5rem 1rem;
  bottom: 1rem;
  right: 1rem;
}
.about-grid-item a:hover {
  transform: scale(1.05);
}
.about-grid-item:nth-child(2),
.about-grid-item:nth-child(3) {
  background-color: black;
  color: white;
}
.team {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.team div {
  border: 1px solid black;
  border-radius: var(--border-radius);
  box-shadow: 0 1rem black;
  height: 80%;
  width: 100%;
  margin-top: 1rem;
}
/* 最新文章專區 */
.article {
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  padding: 10px;
  margin: 5rem auto;
}
/* 單篇文章容器 */
.new_article {
  flex: 1;
  border: solid 2px;
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 0.8px 3px rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
  padding: 10px;
}
.new_article a img {
  display: inline-block;
  width: 30%; /* 調整圖片容器寬度 */
  text-align: center; /* 讓圖片居中 */
  vertical-align: top;
}
.new_article div {
  font-size: 1rem;
  display: inline-block;
  width: 65%; /* 調整內文寬度 */
  vertical-align: top; /* 保證圖片和內文對齊 */
  padding: 10px;
  text-indent: 2em;
}
</style>
