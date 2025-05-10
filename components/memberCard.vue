<template>
  <div class="container" @mouseover="hover = true" @mouseleave="hover = false">
    <MemberBasic class="member mb-8" :member="member"></MemberBasic>
    <div class="member__info" v-if="hover">
      <p class="text-sm font-black text-center">{{ member.major }}</p>
      <p class="text-xs font-thin mt-4 text-justify">{{ member.info }}</p>
      <div class="icons">
        <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
          <IconsLinkedin />
        </a>
        <a v-if="member.github" :href="member.github" target="_blank"
          ><IconsGithub />
        </a>
        <a v-if="member.instagram" :href="member.instagram" target="_blank"
          ><IconsInstagram
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['member']);
const hover = ref(false);
</script>

<style scoped>
.member {
  transform: scale(1);
  transition: transform 0.3s;
}
.member:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-width: 96px;
  scroll-snap-align: center;
}
.member__info {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
.member__info::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}
.container:hover .member__info {
  display: block;
  animation: mymove 0.3s;
}
.icons {
  margin-top: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

@keyframes mymove {
  from {
    margin-top: 100px;
  }
  to {
    margin-top: 0;
  }
}
</style>
