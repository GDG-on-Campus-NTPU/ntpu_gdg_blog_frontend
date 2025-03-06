<template>
  <div id="workshops">
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
    <section class="past-workshops">
      <h1>過去我們曾舉辦的課程講座...</h1>
      <div class="workshop-container">
        <div
          class="workshop"
          v-for="(workshop, index) in workshops"
          :key="index"
        >
          <div class="speaker">
            <div class="speaker-profile">
              <img src="/img/profile.png" />
              <p>{{ workshop.speaker.name }}</p>
            </div>
            <div class="speaker-info">
              <p>{{ workshop.speaker.jobTitle }}</p>
              <ul>
                <li
                  v-for="(experience, i) in workshop.speaker.experiences"
                  :key="i"
                >
                  {{ experience }}
                </li>
              </ul>
            </div>
          </div>
          <div class="lecture-content">
            <h3 class="lecture-title" v-html="workshop.title"></h3>
            <p>
              講座日期：{{ workshop.date }}<br />地點：{{ workshop.location }}
            </p>
            <p>{{ workshop.description }}</p>
            <div class="arrow-background">
              <NuxtLink to="/post"><IconsArrow class="arrow" /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="upcoming-workshops">
      <h1>精彩活動預告</h1>
      <div class="workshop-container">
        <div
          class="workshop"
          v-for="(workshop, index) in workshops"
          :key="index"
        >
          <div class="speaker">
            <div class="speaker-profile">
              <img src="/img/profile.png" />
              <p>{{ workshop.speaker.name }}</p>
            </div>
            <div class="speaker-info">
              <p>{{ workshop.speaker.jobTitle }}</p>
              <ul>
                <li
                  v-for="(experience, i) in workshop.speaker.experiences"
                  :key="i"
                >
                  {{ experience }}
                </li>
              </ul>
            </div>
          </div>
          <div class="lecture-content">
            <h3 class="lecture-title" v-html="workshop.title"></h3>
            <p>
              講座日期：{{ workshop.date }}<br />地點：{{ workshop.location }}
            </p>
            <p>{{ workshop.description }}</p>
            <div class="arrow-background">
              <NuxtLink to="/post"><IconsArrow class="arrow" /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
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

const workshops = [
  {
    speaker: {
      name: '阿倢',
      jobTitle: '台灣大哥大 電信金融部 管理師',
      experiences: ['國立台灣藝術大學 視覺藝術設計學系', '台灣大哥大實習生'],
    },
    title: '平面設計跨領域<br />UI/UX轉職經驗談',
    date: '10/17 (四)',
    location: '北大商院 209',
    description: '從平面設計轉職至UI/UX的動機及 心路歷程、UI/UX產業現況與趨勢…',
  },
  {
    speaker: {
      name: '小明',
      jobTitle: 'Google 軟體工程師',
      experiences: ['台大資工', 'GDSC Taipei Leader', '前端開發經驗5年'],
    },
    title: '如何進入Google工作？',
    date: '11/05 (日)',
    location: '線上直播',
    description: '分享如何準備面試、技術要求、以及職涯發展心得。',
  },
  {
    speaker: {
      name: '小華',
      jobTitle: '獨立遊戲開發者',
      experiences: ['Unity開發', '曾獲獎項', '擁有Steam遊戲發行經驗'],
    },
    title: '遊戲開發的奇幻旅程',
    date: '12/10 (六)',
    location: '松山文創園區',
    description: '從零開始，分享遊戲開發的完整過程與心路歷程。',
  },
];
</script>

<style scoped>
#workshops {
  display: flex;
  flex-direction: column;
}
.img-slider {
  position: relative;
  z-index: 0;
  height: 400px;
  display: flex;
  align-items: center;
}
.past-workshops,
.upcoming-workshops {
  flex-direction: column;
}
.workshop-container {
  height: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  flex-grow: 1;
}
.workshop {
  display: flex;
  flex-direction: column;
}
.speaker {
  display: flex;
  background-color: #fff3db;
  border-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  gap: 1rem;
  flex: 1;
}
.speaker-profile {
  flex: 1;
  text-align: center;
  font-weight: bold;
}
.speaker-info {
  flex: 2;
}
.speaker img {
  border-radius: 999px;
  margin-bottom: 10px;
}
.speaker-info p {
  font-size: 14px;
  font-weight: bold;
}
.speaker-info ul {
  list-style: inside;
  font-size: 12px;
  margin-top: 10px;
}
.lecture-content {
  flex: 2;
  background: black;
  color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.lecture-title {
  font-size: 1rem;
  font-weight: bold;
}
.lecture-content p {
  margin-top: 1rem;
}
.arrow {
  height: 5rem;
  width: 5rem;
  background: #936405;
  border-radius: 100%;
}
.arrow-background:hover {
  transform: scale(1.05);
}
/* curved design */
.arrow-background {
  background: white;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  border-top-left-radius: 25px;
}
.arrow-background::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -50px;
  height: 25px;
  width: 50px;
  border-bottom-right-radius: 25px;
  box-shadow: 25px 0 #ffffff;
}
.arrow-background::after {
  content: '';
  position: absolute;
  top: -50px;
  left: calc(100% - 25px);
  height: 50px;
  width: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 25px #ffffff;
}
</style>

<!--
<template>
  <div class="side-padding">
    <section class="img-slideshow">
      <img
        class="main_picture"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb43R3bD_1jRzYoo21wdK6SSgJ1_WilS7-eQ&s"
      />
    </section>
    <section class="past-workshops">
      <h1>過去我們曾舉辦的課程講座...</h1>
      <div class="workshop">
        <div class="speaker">
          <div class="left">
            <img src="/img/profile.png" />
            <p>{{ speaker.name }}</p>
          </div>
          <div class="right">
            <p>{{ speaker.jobTitle }}</p>
            <ul>
              <li
                v-for="(experience, index) in speaker.experiences"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
        <div class="lecture-content">
          <h3 class="lecture-title">平面設計跨領域<br />UI/UX轉職經驗談</h3>
          <p>講座日期：10/17 (四)<br />地點：北大商院 209</p>
          <p>從平面設計轉職至UI/UX的動機及 心路歷程、UI/UX產業現況與趨勢…</p>
          <IconsArrow class="arrow" />
        </div>
      </div>
    </section>
    <section class="upcoming-workshops">
      <h1>精彩活動預告</h1>
    </section>
  </div>
</template>

<script setup lang="ts">
const speaker = {
  name: '阿倢',
  jobTitle: '台灣大哥大 電信金融部 管理師',
  experiences: [
    '國立台灣藝術大學 視覺藝術設計學系',
    '台灣大哥大實習生',
    'Mo-bo 服飾有限公司 電商行銷美編',
  ],
};
</script>
<style scoped>
.past-workshops {
  flex-direction: column;
}

.workshop {
  display: flex;
  flex-direction: column;
  height: 90%;
}
.speaker {
  display: flex;
  background-color: #fff3db;
  border-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  align-items: center;
  padding: 0 3rem;
  margin: 1rem 0;
  flex: 1;
}
.speaker img {
  width: 100px;
  height: 100px;
  border-radius: 999px;
}
.speaker ul {
  list-style: inside;
  font-size: 12px;
  margin-top: 10%;
}
.left p {
  text-align: center;
  font-weight: bold;
  margin-top: 10%;
}
.right {
  padding-left: 2rem;
}
.right p {
  font-size: 14px;
  font-weight: bold;
}
.lecture-content {
  flex: 2;
  background: black;
  color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.lecture-title {
  font-size: 2rem;
  font-weight: bold;
}
.lecture-content p {
  margin-top: 1rem;
}
.arrow {
  height: 5rem;
  width: 5rem;
  background: #936405;
  border-radius: 100%;

  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
-->
