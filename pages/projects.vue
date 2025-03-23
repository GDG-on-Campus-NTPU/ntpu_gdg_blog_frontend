<template>
  <div>
    <h1>
      每個專案都是我們團隊合作、創新思維和學習熱情的結晶。
      開發過程中都充滿挑戰，也充滿成就感。
      一起來看看我們所做的工作，或許下個項目就是屬於你的！
    </h1>
    <div class="projects-grid">
      <article
        class="projects-grid-item"
        v-for="project in projects"
        :key="project.title"
      >
        <img src="assets/img/project.jpg" alt="project thumbnail" />
        <p>{{ project.category }}</p>
        <h2>{{ project.title }}</h2>
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
const projects = [
  {
    title: '和泰汽車數據分析',
    category: '業界合作',
  },
  {
    title: 'Linux Odyssey',
    category: '跨校合作',
  },
  {
    title: 'ATK TaiSoc',
    category: '開源合作',
  },
  {
    title: '社團官網',
    category: '社團提案',
  },
  {
    title: 'HoopUp',
    category: '社團提案',
  },
  {
    title: 'LINE Bot',
    category: '社團提案',
  },
  {
    title: '法規問答小幫手',
    category: '社團提案',
  },
];
</script>
<style scoped>
h1 {
  font-size: 2rem;
  margin: 5rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem 0 5rem;
}
.projects-grid-item {
  border-radius: var(--border-radius);
  padding: 2rem;
  border: solid 1px grey;
}
.projects-grid-item:hover {
  color: white;
  background: black;
  transition: 0.5s;
  cursor: pointer;
}
img {
  border-radius: var(--border-radius);
}
h2 {
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
p {
  margin: 1.5rem;
  text-align: left;
}
</style>
