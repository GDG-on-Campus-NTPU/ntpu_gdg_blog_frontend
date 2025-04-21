<template>
  <div id="platform">
    <div class="slogan">
      <h2>
        我們致力於打造一個，<br />
        文組入門的科技社群平台，<br />
        給予開發者交流討論的環境。
      </h2>
    </div>
    <div class="social-links">
      <div v-for="(link, index) in links" :key="index" class="social-link-item">
        <a :href="link.link" target="_blank" rel="noopener noreferrer"
          ><div class="flex flex-col gap-6 items-center">
            <img :src="link.src" alt="logo" /><span>{{
              link.description
            }}</span>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    src: '/icons/instagram.png',
    link: 'https://www.instagram.com/gdg.ntpu/',
    description: '追蹤我們 IG',
  },
  {
    src: '/icons/facebook.png',
    link: 'https://www.facebook.com/dscntpu/',
    description: '前往 Facebook 專頁',
  },
  {
    src: '/icons/gdgtaipei.png',
    link: 'https://gdg.community.dev/gdg-taipei/',
    description: '加入 GDG Taipei 社群',
  },
  {
    src: '/icons/mail.png',
    link: 'mailto:ntpugdsc@gmail.com',
    description: '寫信給我們',
  },
];
</script>

<style scoped>
#platform {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 8rem;
}
.social-links {
  align-items: center;
  margin: 5rem auto;
  justify-content: center;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.social-links div {
  margin: 0 auto;
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
