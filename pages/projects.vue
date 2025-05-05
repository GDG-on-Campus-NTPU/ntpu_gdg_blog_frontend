<template>
  <div class="w-full side-padding">
    <section class="projects__hero">
      <ImageCarousel class="projects__images" :images="images" />
      <div class="wrapper">
        <h1 class="projects__heading">
          眾多的專案成果，並與多家企業合作，促進產學合作的發展。
        </h1>
        <div class="projects__partners">
          <h2 class="text-2xl mb-4">歷年合作公司</h2>
          <ul class="list-disc list-inside">
            <li>和泰企業</li>
            <li>和泰企業</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="projects__filter">
      <select id="year" class="projects__filter__year w-20">
        <option>年份</option>
        <option>2025</option>
        <option>2024</option>
        <option>2023</option>
      </select>

      <ul class="projects__filter__tags">
        <li
          v-for="tag in tags"
          :key="tag"
          :style="{ backgroundColor: tag.color }"
          class="tag no-select"
        >
          {{ tag.name }}
        </li>
      </ul>
    </div>

    <section class="grid-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @selected="openModal"
      />
    </section>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :members="selectedProject.members"
      :images="selectedProject.images"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const tags = [
  { name: '跨校合作', color: '#E5F8D5' },
  { name: '開源合作', color: '#FFD1D5' },
  { name: '社團提案', color: '#CFD9F5' },
];

const images = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
  alt: 'alt',
}));

const members = [
  {
    name: '施尚丞',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: '黃意婕',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: '楊芷捷',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: '李芸瑄',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: '余沁恩',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    instagram: 'https://instagram.com/',
  },
  {
    name: '陳宥任',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: '魏琦蓁',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    github: 'https://github.com/',
  },
  {
    name: '劉晉嘉',
    profile: '/img/profile.png',
    major: '企業管理學系',
    info: '個人介紹經驗實習專長個人介紹經驗實習專長個人介紹經驗實習專長',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/',
  },
];

const projects = [
  {
    title: '和泰汽車數據分析',
    category: '業界合作',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
    year: 2024,
  },
  {
    title: 'Linux Odyssey',
    category: '跨校合作',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
  {
    title: 'ATK TaiSoc',
    category: '開源合作',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
  {
    title: '社團官網',
    category: '社團提案',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
  {
    title: 'HoopUp',
    category: '社團提案',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
  {
    title: 'LINE Bot',
    category: '社團提案',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
  {
    title: '法規問答小幫手',
    category: '社團提案',
    description:
      '從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。從設計到執行，從零開始發想社團部落格的風格與設計，再由工程師完成網站建構為北大GDG。',
    startDate: '2024 / 10',
    endDate: 'Present',
    members: members,
    images: images,
  },
];
</script>

<style scoped>
.projects__hero {
  display: flex;
  gap: var(--sp-12);
  margin: var(--sp-12) 0 var(--sp-6);
}
.projects__images {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.projects__heading {
  font-size: clamp(1.5rem, calc(1.5vw + 1rem), 3.5rem);
  line-height: normal;
  padding: var(--sp-4) 0;
  /*
  background-image: conic-gradient(red,blue,red);
  animation: 1s spin linear infinite;
  */
  border-top: solid;
  border-bottom: solid;
}
.projects__partners {
  padding: var(--sp-4);
  background: lightgray;
  text-align: center;
  border-radius: var(--border-radius);
}
.projects__filter {
  display: flex;
  justify-content: space-between;
  padding: var(--sp-12);
}
.projects__filter__tags {
  display: flex;
  gap: 1rem;
}
.tag {
  border: solid 1px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
}
@media screen and (max-width: 768px) {
  .projects__hero {
    flex-direction: column;
  }
  .projects__images {
    width: 100%;
  }
  .projects__filter__tags {
    flex-direction: column;
    height: calc(1rem + 20px);
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  .tag {
    scroll-snap-align: center;
  }
}
.image {
  mix-blend-mode: multiply; /* or screen, overlay, etc. */
  background-color: white;
}
</style>
