<!------------------------------------->
<!-- This defines the projects page. -->
<!------------------------------------->

<template>
  <div id="projects">
    <div class="flex gap-12 m-20">
      <ImageCarousel class="flex-1" :images="images" />
      <div class="flex-1 flex flex-col">
        <h1 class="text-[2rem] border-solid border-t border-b border-black">
          眾多的多項專案成果，並與多家業合作，促進產學合作的發展。
        </h1>
        <div class="mt-4 p-4 bg-gray-200 rounded-[--border-radius] text-center">
          <h2 class="text-2xl mb-4">歷年合作公司</h2>
          <ul class="list-disc list-inside">
            <li>和泰企業</li>
            <li>和泰企業</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-center">
      <ul v-for="filter in filters" :key="filter">
        <li :style="{ backgroundColor: filter.color }" class="filter">
          {{ filter.tag }}
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-3 gap-6 my-12">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @selected="openModal"
      />
    </div>

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

const filters = [
  { tag: '跨校合作', color: '#E5F8D5' },
  { tag: '開源合作', color: '#FFD1D5' },
  { tag: '社團提案', color: '#CFD9F5' },
];

const images = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
  alt: 'alt',
}));

const members = [
  { name: '施尚丞', profile: '/img/profile.png' },
  { name: '黃意婕', profile: '/img/profile.png' },
  { name: '楊芷捷', profile: '/img/profile.png' },
  { name: '李芸瑄', profile: '/img/profile.png' },
  { name: '余沁恩', profile: '/img/profile.png' },
  { name: '陳宥任', profile: '/img/profile.png' },
  { name: '魏琦蓁', profile: '/img/profile.png' },
  { name: '劉晉嘉', profile: '/img/profile.png' },
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
.filter {
  border: solid 1px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
}
</style>
