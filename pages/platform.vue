<template>
  <section>
    <div class="text">
      <h2>我們致力於打造一個，</h2>
      <h2>文組入門的科技社群平台，</h2>
      <h2>給予開發者交流討論的環境。</h2>
    </div>
    <div class="social-links">
      <div v-for="(link, index) in links" :key="index" class="social-link-item">
        <a :href="link.link" target="_blank" rel="noopener noreferrer"
          ><img :src="link.src" alt="logo"
        /></a>
      </div>
    </div>
  </section>
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
section {
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
}
h2 {
  text-align: center;
}
.text {
  margin-top: 5rem;
}
.social-links {
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.social-links div {
  margin: 0 auto;
}
img {
  width: 5rem;
  height: 5rem;
}
</style>
