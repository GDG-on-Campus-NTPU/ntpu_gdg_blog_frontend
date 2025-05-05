<template>
  <div class="side-padding">
    <section class="about section">
      <div class="flex-1">
        <img class="about__photo" src="/img/about-photo.png" alt="thumbnail" />
      </div>

      <div class="about__text">
        <h1 class="big-heading">關於我們</h1>
        <p style="line-height: 28px">
          Google Developer Groups on Campus NTPU 是由 Google
          官方支持的學生科技社群，我們致力於推廣 Google 技術與開發資源，
          並打造一個讓學生跨域學習、實作專案、連結職涯的開放平台。 我們相信
          <strong
            ><span style="color: var(--color-blue)">科技</span> ×
            <span style="color: var(--color-red)">創意</span> ×
            <span style="color: var(--color-green)">社群</span> </strong
          >，能改變學生的未來。
          無論你來自什麼科系、有沒有技術背景，只要對科技、AI、創意實作有興趣，
          都歡迎加入，一起從零開始打造自己的作品與未來藍圖！
        </p>
      </div>
    </section>

    <section class="values section">
      <div class="triangle-wrapper">
        <h1 class="big-heading">核心價值</h1>
        <div class="triangle-base left"></div>
      </div>

      <div class="values-container">
        <div class="value-item" v-for="value in values" :key="value.name">
          <div
            class="hexagon basis-1/3"
            :style="{ backgroundColor: value.color }"
          >
            {{ value.name }}
          </div>
          <p class="basis-2/3">
            <strong class="block">{{ value.slogan }}</strong>
            <br />{{ value.description }}
          </p>
        </div>
      </div>

      <div class="triangle-wrapper">
        <div class="triangle-base right"></div>
      </div>
    </section>

    <section class="our-activities section">
      <h1 class="big-heading">我們的活動</h1>

      <div class="activities-container">
        <div class="border-2 border-[--color-red] activity-wrapper">
          <p class="activity-title">讀書會</p>
          <p class="font-bold text-neutral-400 mb-2">
            以專案為導向的實作型讀書會
          </p>
          <p class="text-justify">
            每週依照技術主題分組推進，大家會一起拆解知識點、實作功能、互相教學與回饋。
            不論你是剛入門還是想挑戰進階主題，我們都鼓勵
            <span class="text-red-400">邊學邊做、邊做邊分享</span
            >，讓學習不再只是看書，而是成為解決問題的過程。
          </p>
        </div>

        <div class="border-2 border-[--color-yellow] activity-wrapper">
          <p class="activity-title">社課</p>
          <p class="font-bold text-neutral-400 mb-2">
            從零開始也能玩轉科技的主題課程
          </p>
          <p class="text-justify">
            每週四晚上的社課，是我們的核心活動。課程設計由幹部與業界導師共同規劃，
            <span class="text-yellow-400">從入門工具到熱門技術</span
            >，每週都有新收穫！
            我們相信「學習應該充滿好奇與成就感」，因此課程不僅教你怎麼做，
            更讓你理解為什麼這樣做，搭配實作練習，幫助你真正把技術學起來。
          </p>
        </div>

        <div class="border-2 border-[--color-green] activity-wrapper">
          <p class="activity-title">專案</p>
          <p class="font-bold text-neutral-400 mb-2">
            把想法做出來，把作品帶出場
          </p>
          <p class="text-justify">
            我們鼓勵每位社員參與實作專案，無論是<span class="text-green-600"
              >自發提案、內部共創、或產學合作</span
            >
            ，我們提供資源與舞台，讓學生有機會把學到的技能轉化為實際成果。
            合作對象包括和泰汽車、ATK、北科開發團隊、學生會等，
            學生可以在專案中練習跨領域溝通、版本控管、簡報發表，累積作品集與實戰經驗。
          </p>
        </div>

        <div
          class="w-full bg-[--color-blue] rounded-2xl p-6 flex flex-col justify-center items-center text-white text-center"
        >
          <p class="text-xl">無論科系背景，歡迎熱愛科技的你加入。</p>
          <a
            href="https://www.instagram.com/gdg.ntpu/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-400 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-500 transition-all mt-6"
          >
            JOIN US!
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    color: 'var(--color-red)',
    name: '激發',
    slogan: '🌱 科技入門好上手',
    description:
      '我們相信每個人都有學習科技的潛力。 無論背景為何，從 Python 到生成式 AI，透過社課、工作坊、讀書會，讓零基礎的你也能找到學習起點與熱情所在。',
  },
  {
    color: 'var(--color-green)',
    name: '創新',
    slogan: '💡 創意實踐有舞台',
    description:
      '不只是學習，更要創造！透過內部提案、跨校合作與國際競賽等專案實作，將腦中的點子轉化為可被看見的作品，展現你的技術力與創造力。',
  },
  {
    color: 'var(--color-blue)',
    name: '經驗',
    slogan: '🚀 接軌產業加速器',
    description:
      '與 Google 專業導師交流、參訪企業、業界人士分享，透過這些產業連結機會，你可以了解職場實況、提早探索適合自己的未來方向。',
  },
  {
    color: 'var(--color-yellow)',
    name: '成長',
    slogan: '📚 跨域共學 × 專案淬鍊',
    description:
      '不論是社課吸收新知、讀書會的共學交流，還是專案中的團隊協作與期末成果發表，我們致力於打造一個持續進化與自我突破的環境。',
  },
];
</script>

<style scoped>
.about {
  flex-direction: column;
  gap: var(--sp-12);
}
.about__photo {
  border-radius: 100%;
  outline: 3px solid var(--color-red);
  width: 80%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;
  aspect-ratio: 1/1;
  object-position: center;
  margin: 0 auto;
}
.about__text {
  flex: 1;
}
.big-heading {
  margin-bottom: var(--sp-12);
  font-weight: bold;
}
.values {
  flex-direction: column;
  position: relative;
}
.triangle-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.triangle-base {
  width: 0;
  height: 0;
  border-top: 8rem solid transparent;
  border-bottom: 8rem solid transparent;
  position: absolute;
}
.left {
  border-right: 12rem solid #ffe153;
  left: 100%;
}
.right {
  border-left: 12rem solid #ffe153;
  left: 0;
  translate: -100% 0;
}
.values-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  width: 90%;
  gap: 2.5rem;
  margin: auto 0;
  padding-bottom: 3rem;
}
.value-item {
  display: flex;
  gap: var(--sp-8);
  width: 100%;
  align-items: center;
  text-align: justify;
  line-height: normal;
}
.value-item strong {
  font-size: 1.15rem;
  text-wrap: nowrap;
}
.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  height: 100%;
  max-width: 175px;
  max-height: 175px;
  aspect-ratio: 1/1;
}
.our-activities {
  flex-direction: column;
}
.activities-container {
  display: grid;
  grid-template-columns: 1;
  gap: 2rem;
}
.activity-wrapper {
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.activity-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: var(--sp-2);
}
@media screen and (min-width: 1000px) {
  .about {
    flex-direction: row;
  }
  .about__photo {
    width: 100%;
    height: 100%;
  }
  .about__text {
    margin: 0 var(--sp-6) 0 var(--sp-12);
  }
  .values-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .hexagon {
    min-width: 150px;
    min-height: 150px;
  }
  .activities-container {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}
</style>
