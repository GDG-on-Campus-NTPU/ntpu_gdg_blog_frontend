<template>
  <div class="w-full side-padding">
    <section class="projects__hero">
      <ImageCarousel class="projects__images" :images="images" />
      <div class="wrapper">
        <h1 class="projects__heading">
          眾多的專案成果，並與多家企業合作，促進產學合作的發展。
        </h1>
        <div class="projects__partners">
          <ul class="flex gap-6 justify-center items-center">
            <li>
              <img
                src="/assets/img/Hotai_Motor_logo.svg.png"
                alt="Hotai_Motor_logo"
              />
            </li>
            <li>
              <img
                src="/assets/img/Line_Corporation_logo.svg.png "
                alt="Line_Corporation_logo"
              />
            </li>
            <li>
              <img src="assets/img/Google_logo.svg.png" alt="Google_logo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--
    <div class="projects__filter">
      <select id="year" class="projects__filter__year w-20">
        <option>年份</option>
        <option>2025</option>
        <option>2024</option>
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
-->
    <section class="grid-container mt-20">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @selected="openModal"
      />
    </section>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :members="selectedProject.members"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
const { data: projects } = await useFetch('/api/project/all');

const selectedProject = ref(null);
const isLoadingProject = ref(false);

const openModal = async (projectId) => {
  isLoadingProject.value = true;
  const { data, error } = await useFetch(`/api/project/${projectId}`);
  if (!error.value) {
    selectedProject.value = data.value;
  } else {
    console.error('Failed to fetch project data:', error.value);
  }
  isLoadingProject.value = false;
};

const tags = [
  { name: '跨校合作', color: '#E5F8D5' },
  { name: '開源合作', color: '#FFD1D5' },
  { name: '社團提案', color: '#CFD9F5' },
];

const { data: images } = await useFetch('/cloudinary/project-highlights');
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
  border-top: solid;
  border-bottom: solid;
}
.projects__partners {
  padding: var(--sp-4);
}
.projects__partners img {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%);
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
  .projects__partners img {
    height: 2rem;
  }
}
.image {
  mix-blend-mode: multiply;
  background-color: white;
}
</style>
