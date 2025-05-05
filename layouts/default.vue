<template>
  <div class="default-layout">
    <header>
      <nav class="nav" :class="{ 'nav--hidden': !showNav }">
        <NuxtLink to="/" @click="scrollToTop">
          <IconsLogoGDG class="header__logo" />
        </NuxtLink>

        <button class="nav__hamburger" @click="toggleMenu">
          <i v-if="isMenuOpen" class="bx bx-x bx-md"></i>
          <i v-else class="bx bx-menu bx-md"></i>
        </button>

        <div class="nav__menu" :class="{ active: isMenuOpen }">
          <!-- v-if="isMenuOpen" -->
          <ul class="nav__list">
            <li>
              <NuxtLink to="/about" @click="closeMenu">關於我們</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" @click="closeMenu">歷年專案</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/articles" @click="closeMenu">課程活動</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" @click="closeMenu">聯絡我們</NuxtLink>
            </li>
          </ul>

          <NuxtLink
            v-if="isLoggedIn"
            to="/profile"
            class="nav__login"
            @click="closeMenu"
          >
            個人檔案
          </NuxtLink>
          <NuxtLink v-else to="/login" class="nav__login" @click="closeMenu">
            登入
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <IconsLogoGDG class="footer__logo" />
      <div>
        <p>國立臺北大學</p>
        <p>Google 學生開發者社群</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
/*===== Hamburger menu =====*/
const isMenuOpen = ref(false);

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value;
}
function closeMenu(): void {
  isMenuOpen.value = false;
}

/*===== Check login status =====*/
const { data: isLoggedIn, refresh: refreshLoginStatus } = useFetch(
  '/api/login/check',
  {
    method: 'GET',
    transform: (data: { isLoggedIn: boolean }) => {
      return data.isLoggedIn;
    },
  }
);
useNuxtApp().provide('refreshLoginStatus', refreshLoginStatus);

/*===== Scroll to top of the page =====*/
function scrollToTop(): void {
  window.scrollTo({
    top: 0,
  });
}

/*===== Show/hide nav based on scrolling direction =====*/
const showNav = ref(true);
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
    showNav.value = true;
  } else if (!isAtTop && !isAtBottom) {
    showNav.value = currentScrollPosition < lastScrollPosition.value;
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
.default-layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--medium-font-size);
  font-weight: var(--font-semi);
  padding: var(--sp-6);
  width: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.3s ease;
  z-index: 10;
}
.nav--hidden {
  transform: translate3d(0, -100%, 0);
}
.header__logo {
  height: 2.5rem;
  width: auto;
}
.nav__hamburger {
  cursor: pointer;
}
.nav__menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: black;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-12);
  padding: var(--sp-12) 0;
}
.nav__menu.active {
  display: flex;
}
.nav__list {
  display: flex;
  flex-direction: column;
  gap: var(--sp-12);
  color: white;
}
.nav__list a:hover {
  color: #f1c46a;
  transition: color 0.2s;
}
.nav__login {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: white;
  color: black;
  font-size: var(--normal-font-size);
  border-radius: var(--border-radius);
  cursor: pointer;
}
.nav__login:hover {
  transform: scale(1.05);
}

@media screen and (min-width: 768px) {
  .nav {
    gap: var(--sp-8);
  }
  .nav__hamburger {
    display: none;
  }
  .nav__menu {
    position: static;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    border-radius: var(--border-radius);
    padding: 0.5rem 2.5rem;
    justify-content: space-between;
    text-wrap: nowrap;
  }
  .nav__list {
    flex-direction: row;
  }
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  /* 
  margin-top: 5rem;
  padding: 0 12%; 
  flex-grow: 1; 
  */
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
.footer__logo {
  height: 2.5rem;
  width: auto;
  background-color: white;
  padding: 0.25rem;
}
</style>
