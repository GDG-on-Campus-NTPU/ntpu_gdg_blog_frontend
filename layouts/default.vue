<template>
  <div class="layout">
    <nav :class="{ 'navbar--hidden': !showNavbar }">
      <NuxtLink to="/" @click="scrollToTop">
        <img class="logo" src="/icons/gdg_logo.svg" alt="GDG Logo" />
      </NuxtLink>
      <div class="nav-items">
        <ul>
          <li><NuxtLink to="/about">關於我們</NuxtLink></li>
          <li><NuxtLink to="/projects">歷年專案</NuxtLink></li>
          <li><NuxtLink to="/events">課程活動</NuxtLink></li>
          <li><NuxtLink to="/contact">聯絡我們</NuxtLink></li>
        </ul>
        <NuxtLink v-if="true" to="/profile" class="button-link"
          >個人檔案</NuxtLink
        >
        <NuxtLink v-else to="/login" class="button-link">登入</NuxtLink>
      </div>
    </nav>

    <div class="page-content">
      <NuxtPage keepalive />
    </div>

    <footer>
      <img src="/icons/gdg_logo.svg" alt="GDG Logo" />
      <div>
        <p>Google 學生開發者社群</p>
        <p>國立臺北大學</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// show and hide nav bar based on scrolling direction
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

function onScroll(): void {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;
  const lingerThreshold = 100;
  const isAtTop = currentScrollPosition <= 0;
  const isAtBottom =
    currentScrollPosition + window.innerHeight >=
    document.documentElement.scrollHeight;

  if (currentScrollPosition <= lingerThreshold) {
    showNavbar.value = true;
  } else if (!isAtTop && !isAtBottom) {
    showNavbar.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
nav {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;
  width: 100%;
  background-color: white;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.3s ease;
  z-index: 1;
}
nav.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
.logo {
  height: 3rem;
  width: auto;
}
.nav-items {
  display: flex;
  flex-grow: 1;
  background-color: black;
  border-radius: var(--border-radius);
  padding: 0.5rem 2.5rem;
  justify-content: space-between;
}
.nav-items ul {
  display: flex;
  gap: 3.5rem;
}
nav a {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}
nav a:hover {
  color: #f1c46a;
  transition: color 0.2s;
}
.button-link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  text-align: center;
  cursor: pointer;
}
.button-link:hover {
  color: black;
  background-color: white;
  transform: scale(1.05);
}
.page-content {
  margin-top: 5%;
  flex-grow: 1;
  padding: 1.5rem 10rem;
}
footer {
  display: flex;
  gap: 2rem;
  align-items: center;
  font-weight: bold;
  padding: 1rem 3rem;
  background-color: rgb(212 212 216);
}
footer img {
  height: 2.5rem;
  width: auto;
  background-color: white;
  padding: 0.25rem;
}
</style>
