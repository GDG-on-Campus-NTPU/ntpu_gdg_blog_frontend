<template>
  <div>
    <section class="flex justify-end">
      <img
        class="object-fit rounded-full outline outline-red-400 absolute left-[50px] h-[65%]"
        src="/img/about-photo.png"
        alt="thumbnail"
      />
      <div class="w-1/2">
        <h1 class="mb-[3rem]">關於我們</h1>
        <p class="leading-[28px]">
          Google Developer Groups on Campus NTPU 是由 Google
          官方支持的學生科技社群，我們致力於推廣 Google 技術與開發資源，
          並打造一個讓學生跨域學習、實作專案、連結職涯的開放平台。 我們相信
          <strong class="font-bold"
            ><span class="text-blue-500">科技</span> ×
            <span class="text-red-500">創意</span> ×
            <span class="text-green-600">社群</span> </strong
          >，能改變學生的未來。
          無論你來自什麼科系、有沒有技術背景，只要對科技、AI、創意實作有興趣，
          都歡迎加入，一起從零開始打造自己的作品與未來藍圖！
        </p>
      </div>
    </section>
    <section class="flex-col relative">
      <h1 class="self-start">核心價值</h1>

      <div class="triangle-left absolute right-[-10.5rem]"></div>
      <div
        class="grid grid-cols-2 flex items-center justify-between w-[90%] gap-6 my-auto pb-12"
      >
        <!--
        <div class="flex gap-4 w-full">
          <div class="hexagon-wrapper basis-1/3">
            <div
              class="hexagon flex items-center justify-center text-red-500 font-bold"
            >
              激發
            </div>
          </div>
          <p class="basis-2/3">
            <strong class="block">🌱 科技入門好上手</strong>
            <br />我們相信每個人都有學習科技的潛力。
            <br />無論背景為何，從Python 到生成式AI，
            <br />透過社課、工作坊、讀書會，讓零基礎的你也能找到學習起點與熱情所在。
          </p>
        </div>
        -->
        <div class="flex gap-4 w-full">
          <div class="bg-red-500 hex basis-1/3">激發</div>
          <p class="basis-2/3">
            <strong class="block">🌱 科技入門好上手</strong>
            <br />我們相信每個人都有學習科技的潛力。
            <br />無論背景為何，從Python 到生成式AI，
            <br />透過社課、工作坊、讀書會，讓零基礎的你也能找到學習起點與熱情所在。
          </p>
        </div>

        <div class="flex gap-4 w-full">
          <div class="bg-green-600 hex basis-1/3">創新</div>
          <p class="basis-2/3">
            <strong class="block">💡 創意實踐有舞台</strong>

            <br />不只是學習，更要創造！透過內部提案、跨校合作與國際競賽等專案實作，
            <br />將腦中的點子轉化為可被看見的作品，展現你的技術力與創造力。
          </p>
        </div>

        <div class="flex gap-4 w-full">
          <div class="bg-blue-500 hex basis-1/3">經驗</div>
          <p class="basis-2/3">
            <strong class="block">🚀 接軌產業加速器</strong>
            <br />與 Google 專業導師交流、參訪 LINE Taiwan、參加 PM Round
            Table……
            <br />透過這些產業連結機會，你可以了解職場實況、提早探索適合自己的未來方向。
          </p>
        </div>

        <div class="flex gap-4 w-full">
          <div class="bg-yellow-400 hex basis-1/3">成長</div>
          <p class="basis-2/3">
            <strong class="block">📚 跨域共學 × 專案淬鍊</strong>
            <br />不論是社課吸收新知、讀書會的共學交流，還是專案中的團隊協作
            <br />與期末成果發表，我們致力於打造一個持續進化與自我突破的環境。
          </p>
        </div>
      </div>
      <div class="triangle-right absolute left-[-10.5rem] bottom-0"></div>
    </section>
    <section class="flex flex-col text-center">
      <h1 class="text-4xl font-bold mb-12">我們的活動</h1>

      <div class="grid grid-cols-2 gap-6 justify-items-center">
        <div
          class="border-2 border-red-400 rounded-2xl py-4 px-6 flex flex-col justify-center items-center"
        >
          <h3 class="font-bold text-2xl mb-2">讀書會</h3>
          <strong class="text-neutral-400 mb-2"
            >以專案為導向的實作型讀書會</strong
          >
          <p class="text-justify">
            每週依照技術主題分組推進，大家會一起拆解知識點、實作功能、互相教學與回饋。
            不論你是剛入門還是想挑戰進階主題，我們都鼓勵
            <span class="text-red-400">邊學邊做、邊做邊分享</span
            >，讓學習不再只是看書，而是成為解決問題的過程。
          </p>
        </div>

        <div
          class="border-2 border-yellow-400 rounded-2xl p-6 flex flex-col justify-center items-center"
        >
          <h3 class="font-bold text-2xl mb-2">社課</h3>
          <strong class="text-neutral-400 mb-2"
            >從零開始也能玩轉科技的主題課程</strong
          >
          <p class="text-justify">
            每週四晚上的社課，是我們的核心活動。課程設計由幹部與業界導師共同規劃，
            <span class="text-yellow-400">從入門工具到熱門技術</span
            >，每週都有新收穫！
            我們相信「學習應該充滿好奇與成就感」，因此課程不僅教你怎麼做，
            更讓你理解為什麼這樣做，搭配實作練習，幫助你真正把技術學起來。
          </p>
        </div>

        <div
          class="border-2 border-green-600 rounded-2xl p-6 flex flex-col justify-center items-center"
        >
          <h3 class="font-bold text-2xl mb-2">專案</h3>
          <strong class="text-neutral-400 mb-2"
            >把想法做出來，把作品帶出場</strong
          >
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
          class="bg-blue-500 text-white rounded-2xl p-6 w-full flex flex-col items-center text-left"
        >
          <p class="text-xl my-auto">無論科系背景，歡迎熱愛科技的你加入。</p>
          <button
            class="bg-red-400 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-500 transition-all"
          >
            JOIN US!
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.triangle-left {
  width: 0;
  height: 0;
  border-top: 8rem solid transparent;
  border-bottom: 8rem solid transparent;
  border-right: 12rem solid #ffe153;
}

.triangle-right {
  width: 0;
  height: 0;
  border-top: 8rem solid transparent;
  border-bottom: 8rem solid transparent;
  border-left: 12rem solid #ffe153;
}
.icon {
  padding: 1rem;
  border: 2px solid #ffe153;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.hex {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
.hexagon-wrapper {
  background-color: #ef4444;
  padding: 4px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.hexagon {
  background-color: white;
  width: 100%;
  height: 100%;
  clip-path: inherit;
}
</style>
