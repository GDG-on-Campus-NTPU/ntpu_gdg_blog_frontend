<template>
  <div class="layout">
    <div class="workshop">
      <div class="details">
        <h1 v-for="(line, index) in splitTitle" :key="index">{{ line }}</h1>
        <br />
        <small v-for="(detail, index) in splitDetails" :key="index">
          {{ detail }}
        </small>
      </div>
      <div class="speaker">
        <div class="left">
          <img src="/img/profile.png" />
          <p>{{ speaker.name }}</p>
        </div>
        <div class="right">
          <p>{{ speaker.jobTitle }}</p>
          <ul>
            <li v-for="(experience, index) in speaker.experiences" :key="index">
              {{ experience }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="summary">
      <h2>講座內容摘要</h2>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum
          sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum
          molestiae minus atque vel ratione illo quia, iure commodi dicta porro
          excepturi quam. Facere, commodi corrupti ipsam neque totam
          reprehenderit laboriosam laborum veniam est quo, repellat saepe
          impedit labore?
        </p>
        <div class="reaction">
          <IconsHeart class="icons-heart" @click="inc_likes" />
          <span>{{ likes }}</span>
          <IconsStar class="icons-star" @click="inc_saved" />
          <span>{{ saved }}</span>
        </div>
      </article>
    </section>
    <div class="images">
      <h2>活動花絮照片</h2>
      <div class="image-grid">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="image-grid-item"
        >
          <img :src="img" alt="Event Photo" />
        </div>
      </div>
    </div>
    <div class="comments">
      <h2>留言區</h2>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const likes = ref(0);
const saved = ref(0);

const inc_likes = () => {
  likes.value++;
};

const inc_saved = () => {
  saved.value++;
};

const title = `平面設計跨領域\nUI/UX轉職經驗談`;
const details = `講座日期：10/17 (四)\n地點：北大商院 209`;
const splitTitle = ref(title.split('\n'));
const splitDetails = ref(details.split('\n'));
const speaker = {
  name: '阿倢',
  jobTitle: '台灣大哥大 電信金融部 管理師',
  experiences: [
    '國立台灣藝術大學 視覺藝術設計學系',
    '台灣大哥大實習生',
    'Mo-bo 服飾有限公司 電商行銷美編',
  ],
};

const images = ['/img/workshop.png', '/img/workshop.png', '/img/workshop.png'];
</script>

<style scoped>
.workshop {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.details {
  display: flex;
  flex-direction: column;
}
.speaker {
  display: flex;
  background-color: #fff3db;
  border-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  align-items: center;
  padding: 0 3rem;
  margin: 1rem 0;
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
.summary {
  margin-top: 3rem;
  flex-direction: column;
}
.summary h2 {
  align-self: flex-start;
}
.summary article {
  flex-grow: 1;
  background-color: #fff3db;
  margin: 1rem 0 5rem 0;
  border-radius: var(--border-radius);
  box-shadow: 3rem 3rem rgb(255, 243, 219, 0.41);
  position: relative;
  padding: 2rem 3rem;
}
.reaction {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem 3rem;
  align-items: center;
}
.reaction span {
  font-size: 1.5rem;
}
.icons-heart,
.icons-star {
  stroke: black;
  stroke-width: 1px;
}
.icons-heart :hover {
  transform: scale(1.05);
  fill: #e05041;
}
.icons-star :hover {
  transform: scale(1.05);
  fill: #f5c444;
}
.images {
  flex-direction: column;
}
.image-grid {
  display: grid;
  width: 90%;
  height: 70%;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem auto;
}
.comments {
  margin: 5rem 0;
  height: 50vh;
}
.comments div {
  flex-grow: 1;
}
</style>
