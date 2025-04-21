<template>
  <div class="my-20 flex flex-col">
    <div class="flex w-full h-[50vh] gap-16">
      <div class="flex flex-col flex-2 justify-center">
        <h1
          class="text-center text-4xl"
          v-for="(line, index) in splitTitle"
          :key="index"
        >
          {{ line }}
        </h1>
        <div
          class="mt-8 flex gap-8 rounded-br-[--border-radius] items-center px-8 py-4 shadow-lg"
        >
          <div>
            <img class="rounded-full size-[100px]" src="/img/profile.png" />
            <p class="text-sm text-center font-bold mt-[10%]">
              {{ speaker.name }}
            </p>
          </div>
          <div>
            <p class="text-sm font-bold">{{ speaker.jobTitle }}</p>
            <ul class="list-inside list-disc text-xs mt-[10%]">
              <li
                v-for="(experience, index) in speaker.experiences"
                :key="index"
              >
                {{ experience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img class="flex-1" src="/img/workshop.png" />
    </div>

    <!-- Table of Contents -->
    <div
      v-if="tableOfContents.length"
      class="w-[50%] bg-gray-200 self-center my-12 p-8"
    >
      <h2 class="text-center">講座內容摘要</h2>
      <ul class="mt-2 space-y-1">
        <li v-for="item in tableOfContents" :key="item.id">
          <button @click="scrollToSection(item.id)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>

    <div class="w-full p-4">
      <div class="w-full max-w-none prose mt-2" v-html="previewContent"></div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';

const content = ref(`# 一、關於講師

## 轉職動機

1. **UI/UX 初體驗**  
   大學時期，阿倢為了探索適合發展的領域，嘗試了不同類型的設計工作。偶然間在課堂上選修了 UI 設計的課程後，便對這個領域漸漸萌生了興趣，但後來發覺課程內容還是過於單一，與職場實際應用上仍有些落差。

2. **畢製作品 ──【無用紙箱】**  
   在大學畢業之際，阿倢以畢製作品參與了由設計研究院主辦的「臺灣新一代設計展」（New Generation Design Exhibition），這是全臺規模最大、針對設計相關科系學生而舉辦的年度展覽活動。不僅為學生提供了展示創新作品的平臺，也吸引企業和業界專業人士觀摩、促進人才與產業的交流，許多學生更將因此獲得入職機會。  
   當時阿倢與她的團隊成員想要改變「大眾對於紙箱的既定使用」，便展出【無用紙箱】作品，最終成功從 5.7% 的大學生中脫穎而出，獲得了「金點新秀-包裝設計特別獎」。  

   **【無用紙箱】作品簡介**  
   莊子曾云「無用之用，是為大用」，團隊以生活中出現的問題作為發想，來設計紙箱，即便它們在使用情境中可能看似無用，只要發現潛能，就能發掘更多趣味。從簡單搬運的問題，到減少物質使用的議題，都在團隊的設計範圍內，每款紙箱都有著本身獨特的功能，具備可重複使用性與風趣，使得獨特不再只是乘載在外觀上的華麗，而能更深入地融入日常生活中。

3. **毅然決定轉職**  
   累積四年平面設計工作經驗的阿倢，因為看到了薪資天花板的盡頭，基於想嘗試更具以人為本，且注重理性思考的 UI/UX 產業，因而選擇轉職。

## 工作產品介紹【大哥付你分期】

在台灣大哥大，阿倢主要負責的產品為「大哥付你分期」，它是一種 BNPL，目前提供 momo 購物網、myfone 購物、486團購等使用通路。

**台灣大哥大「大哥付你分期」**  
BNPL（先買後付 / Buy Now, Pay Later）是一種有 3~24 期分期期數、不需要信用卡的分期購買方式，也被稱為「無卡分期」服務，疫情期間在歐美爆紅，擁有靈活性高、可即時購買、申請過程簡單等優點。  
BNPL 的運營機制（營收模式）為收取消費者逾期繳款的滯納金（e.g. 逾期繳費須另外收取利息費用／刷卡3期0利率），以及與電商品牌協議抽成費用（品牌會把費用另外加在商品售價上）。  
臺灣使用商家：Zingala 銀角、AFTEE、Fasney、Fula 付啦；海外使用商家：Klarna、Apple Pay Later、Afterpay。

---

# 二、UI/UX 設計現況＆趨勢

## 簡單介紹 UI 和 UX

### UI 與 UX 在三大方面的比較

| 項目 | UI | UX |
| --- | --- | --- |
| **定義** | 用戶界面設計，主要專注於外觀和互動設計 | 用戶體驗設計，關注整體使用過程的感受 |
| **重點** | 圖形界面、顏色、按鈕、排版等視覺元素 | 用戶需求、行為研究、流程設計 |
| **目標** | 提升產品的視覺吸引力和易用性 | 增強產品的可用性和用戶滿意度 |

## 行業現狀＆困境（以臺灣為例）

『在這個資訊爆炸的時代，多功能人才已經成為市場上不可或缺的存在』  
阿倢提到，如今 UI/UX 市場競爭越來越激烈，變得非常「內卷」，連初階（Junior）的入門門檻都變得相當高。而在臺灣的 UI、UX 產業裡，職位間的區分並不是非常明確，設計師往往需要身兼數職，有時 PM 和 UI 設計師也可能需要同時負責 UX 工作。  
此外，阿倢也提到，UI/UX 設計師的工作之一就是不斷的「溝通、溝通、再溝通」！因此建議若對 UI/UX 有興趣，可以多學習一些前端的知識，試圖去理解其他職位遇到的困難、了解彼此立場的不同，讓溝通時能更加順暢。

## 未來趨勢：產品設計師（Product Designer）

正因為「UI、UX 以及 PM」三者的工作內容密不可分，集三者核心技能於一身、能夠完整參與產品設計與開發的「產品設計師」，也成為 UI/UX 設計師未來的發展方向之一。

---

# 三、跨入 UI/UX 設計的起跑點

## 從實習到正職的過程

阿倢表示，當初看到台灣大哥大的實習生招募訊息時，想轉職的自己便立馬著手整理作品集並提交履歷，最後有幸展開實習旅程。而在今年受到主管的肯定後，成功轉任正職，才得以擔任現在的設計師職位。

## 現任職務

阿倢在團隊中的主要任務，是將實習期間所創造的獨特 IP 角色人物逐漸品牌化，藉以強化產品特色與消費者印象。透過與團隊緊密溝通協作，將品牌視覺規劃延伸至應用程式介面、官網、社群等各種行銷曝光管道，以確保品牌形象的一致性和視覺語言的流暢性。由於「大哥付你分期」是已經上線2年多的產品，因此角色品牌化外，阿倢目前的 UI/UX 工作主要集中在局部功能更新和後臺介面的優化。

為了提升收款效率、減緩用戶逾期風險，並在最終提高轉換率與用戶滿意度，阿倢想出了結合角色 IP 與逾期繳款提醒，希望能透過友好的提醒方式，增強用戶的繳款意願，並促進業務成長。

### UI＆角色結合案例分享（逾期繳款提醒）

## 工作心得分享

在產品推出的前期，團隊花了大量時間整理介面檔案，也讓阿倢逐漸提升了自己的 Figma 技能。實習期間，她得以用自己的設計影響力，讓產品變得更有辨識度與溫度；轉成正職後，也持續將角色品牌化，持續曝光逐漸融入到產品功能中。  
阿倢：「剛加入台灣大哥大時，我 UI/UX 相關的工作經驗還不太成熟，但非常感謝我的 mentor 細心指導，讓我能夠從不同的角度來理解使用者需求，找出最佳方案。如今我已能夠獨立應對一些介面設計需求，同時也能發揮我的平面設計專長。我致力於打造出既美觀又實用、受大眾喜愛的 APP，並為此感到自豪😎」

除了個人成長之外，阿倢也和我們分享了一個自己工作時實際發生的故事：她曾經想要優化一個產品的新功能，跟 PM 討論一個很細部的調整，但花滿多時間用 UI 畫面溝通，還是雙方僵持不下了快兩個禮拜，最後發現做「最初始的功能」才是最好的 UX 體驗。
`);

const title = `平面設計跨領域\nUI/UX轉職經驗談`;
const details = `日期：10/17 (四)\n地點：北大商院 209`;
const splitTitle = ref(title.split('\n'));
const splitDetails = ref(details.split('\n'));
const speaker = {
  name: '阿倢',
  jobTitle: '台灣大哥大 電信金融部 管理師',
  experiences: [
    '國立台灣藝術大學 視覺藝術設計學系',
    '台灣大哥大實習生',
    'Mo-bo 服飾有限公司 電商行銷美編',
  ],
};

const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/\s+/g, '-');

    return `
            <h${depth} id="${escapedText}">
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${depth}>`;
  },
};
marked.use({ renderer });
const previewContent = computed(() => marked.parse(content.value));

const tableOfContents = computed(() => {
  const headingRegex = /^(#{1})\s(.+)$/gm;
  const matches = [...content.value.matchAll(headingRegex)];
  return matches.map((match) => ({
    level: match[1].length,
    text: match[2],
    id: match[2].toLowerCase().replace(/\s+/g, '-'),
  }));
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
