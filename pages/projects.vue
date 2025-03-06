<template>
  <div id="projects">
    <section class="overview">
      <h1>眾多的專案成果</h1>
      <h1>猜你想看...</h1>
      <div class="categories">
        <div class="category-year">
          <h2>年份分類</h2>
          <ul>
            <a href="#year2024"><li>2024</li></a>
            <a href="#year2023"><li>2023</li></a>
          </ul>
        </div>
        <div class="category-type">
          <h2>類型分類</h2>
          <ul>
            <a href="#Web"><li>Web</li></a>
            <a href="#AI"><li>AI</li></a>
          </ul>
        </div>
      </div>
    </section>
    <section
      v-for="(articles, category) in categories"
      :key="category"
      class="articles-by-categories"
    >
      <div class="section-header">
        <h1 :id="category">{{ category.replace('year', '') }}</h1>
        <div>
          <IconsThumbUp />
          <IconsHeart />
          <IconsBookmark />
        </div>
      </div>
      <ArticleCarousel :articles="articles" class="articles" />
    </section>
  </div>
</template>

<script setup lang="ts">
/* articles by categories */
const categories = {
  year2024: [
    { title: '2024 Project 1', description: 'Description for project 1' },
    { title: '2024 Project 2', description: 'Description for project 2' },
  ],
  year2023: [
    { title: '2023 Project 1', description: 'Description for project 1' },
    { title: '2023 Project 2', description: 'Description for project 2' },
  ],
  Web: [
    { title: 'Web Project 1', description: 'Description for web project 1' },
    { title: 'Web Project 2', description: 'Description for web project 2' },
  ],
  AI: [
    { title: 'AI Project 1', description: 'Description for AI project 1' },
    { title: 'AI Project 2', description: 'Description for AI project 2' },
  ],
};
</script>

<style scoped>
#projects {
  display: flex;
  flex-direction: column;
}
.overview {
  flex-direction: column;
}
h1 {
  margin-bottom: 2rem;
}
.categories {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.category-year,
.category-type {
  display: flex;
  flex-direction: column;
  text-align: center;
}
ul {
  margin-top: 2rem;
}
.categories li {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #fff3db;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  padding: 0.5rem 3rem;
}
.articles-by-categories {
  flex-direction: column;
}
.section-header {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1rem;
}
.section-header div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.5rem;
}
.section-header div :hover {
  transform: scale(1.05);
}
.articles {
  position: relative;
  z-index: 0;
}
</style>
