<template>
  <div>
    <h1 class="medium-heading text-center">
      我們致力於打造一個文組<br />
      也能輕鬆入門的科技社群平台，<br />
      提供開發者交流與討論的友善環境。
    </h1>
    <div class="contact__menu">
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        :href="contact.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex flex-col gap-6 items-center">
          <img class="w-20 h-20" :src="contact.src" alt="logo" />
          <span class="text-nowrap">{{ contact.description }} </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const contacts = [
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
    src: '/icons/mailbox.png',
    link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ntpugdsc@gmail.com',
    description: '寫信給我們',
  },
];
</script>

<style scoped>
.contact__menu {
  margin: 5rem auto;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-8);
}
@media screen and (max-width: 768px) {
  .contact__menu {
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    font-size: var(--small-font-size);
  }
}
</style>
