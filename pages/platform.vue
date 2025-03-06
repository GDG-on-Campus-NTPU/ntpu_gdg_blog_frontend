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
          ><img :src="link.src" alt="logo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { src: '/icons/instagram.png', link: 'https://www.instagram.com/gdg.ntpu/' },
  { src: '/icons/facebook.png', link: 'https://www.facebook.com/dscntpu/' },
  {
    src: '/icons/gdgtaipei.png',
    link: 'https://gdg.community.dev/gdg-taipei/',
  },
  { src: '/icons/open-source-logo.png', link: '/platform' },
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
