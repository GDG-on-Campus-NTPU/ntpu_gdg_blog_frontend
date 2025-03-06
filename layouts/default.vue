<template>
  <div id="default-layout">
    <header>
      <nav :class="{ 'navbar--hidden': !showNavbar }">
        <NuxtLink to="/" @click="scrollToTop">
          <IconsLogoGDG class="logo-header" />
        </NuxtLink>
        <div class="nav-items">
          <ul>
            <li><NuxtLink to="/about">關於我們</NuxtLink></li>
            <li><NuxtLink to="/projects">歷年專案</NuxtLink></li>
            <li><NuxtLink to="/events">課程活動</NuxtLink></li>
            <li><NuxtLink to="/contact">聯絡我們</NuxtLink></li>
          </ul>
          <NuxtLink v-if="false" to="/profile" class="auth-links"
            >個人檔案</NuxtLink
          >
          <NuxtLink v-else to="/login" class="auth-links">登入</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <IconsLogoGDG class="logo-footer" />
      <div>
        <p>國立臺北大學</p>
        <p>Google 學生開發者社群</p>
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
#default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
nav {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 2rem;
  width: 100%;
  background: white;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.3s ease;
  z-index: 1;
}
.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
.logo-header {
  height: 3rem;
  width: auto;
}
.nav-items {
  display: flex;
  flex-grow: 1;
  background: black;
  border-radius: var(--border-radius);
  padding: 0.5rem 2.5rem;
  justify-content: space-between;
  text-wrap: nowrap;
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
.auth-links {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  text-align: center;
  cursor: pointer;
}
.auth-links:hover {
  color: black;
  transform: scale(1.05);
}
main {
  margin-top: 5rem;
  padding: 0 12%;
  flex-grow: 1; /**/
}
footer {
  display: flex;
  margin-top: auto;
  align-items: center;
  gap: 2rem;
  padding: 1rem 3rem;
  font-weight: bold;
  background: rgb(212 212 216);
}
.logo-footer {
  height: 2.5rem;
  width: auto;
  background-color: white;
  padding: 0.25rem;
}
</style>
