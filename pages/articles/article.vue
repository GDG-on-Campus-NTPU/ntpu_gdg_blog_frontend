<template>
  <div class="workshop">
    <div class="workshop__header">
      <div class="workshop__info">
        <div>
          <h1
            class="workshop__title"
            v-for="(line, index) in splitTitle"
            :key="index"
          >
            {{ line }}
          </h1>
        </div>
        <div class="workshop__speaker-card">
          <div class="speaker">
            <img class="speaker__photo" src="/img/profile.png" />
            <p class="speaker__name">
              {{ speaker.name }}
            </p>
          </div>
          <div class="speaker__details">
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
      <img class="workshop__image" src="/img/workshop.png" />
    </div>

    <!-- Table of Contents -->
    <div v-if="tableOfContents.length" class="workshop__toc">
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
      <div class="w-full max-w-none prose" v-html="previewContent"></div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';

const content = ref(`**【活動回顧】20240926 Welcome Party**

[](https://medium.com/@ntpugdsc?source=post_page---byline--c33adc417a93---------------------------------------)

![GDG on Campus NTPU](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.001.jpeg)[](https://medium.com/@ntpugdsc?source=post_page---byline--c33adc417a93---------------------------------------)

[](https://medium.com/@ntpugdsc?source=post_page---byline--c33adc417a93---------------------------------------)

[GDG on Campus NTPU](https://medium.com/@ntpugdsc?source=post_page---byline--c33adc417a93---------------------------------------)

·

Following

10 min read

·

Oct 8, 2024

63

作者 | 林潘、黃雨涵、蘇芸平 2024.10.08

![一張含有 服裝, 人員, 足部穿著, 室內 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.002.jpeg)

在社團博覽會的最後一晚，我們舉辦了 Welcome Party，帶大家進一步了解社團宗旨、未來社課與活動規劃，以及各個產學合作專案，並邀請社師、北科大專案團隊及社團畢業學長進行分享，期待讓各位更認識我們，接下來就跟著我們的腳步一同回顧當天的活動吧！

**Contents**

- [GDG on campus NTPU 介紹及社團未來規劃](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#6d3c)
- [社師時間](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#3139)
- [Kahoot! 快問快答](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#e334)
- [北科大 Linux Odyssey 專案團隊分享](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#4f96)
- [GDG on campus 畢業學長分享](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#e656)
- [專案介紹](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#22e9)
- [抽獎時間](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#42c0)
- [自由討論專案時間](https://medium.com/@ntpugdsc/%E6%B4%BB%E5%8B%95%E5%9B%9E%E9%A1%A7-20240926-welcome-party-c33adc417a93#50c6)

**一、GDG on campus NTPU 介紹及社團未來規劃**

GDG on Campus 是由 Google 所支持的學生社群，目前在全球擁有超過 1000 個社群，而 GDG on Campus NTPU 就是其中之一。

GDG on Campus NTPU 成立的宗旨是希望成為「文組人入門的科技社群，開發者交流的技術平臺」，透過「三軌制的社團規劃」，幫助成員提升技術並執行影響力專案，達到學以致用的目標。此外也規劃「科技業 Round Table 與科技實習週」等業界接軌活動，從學習到實作，直通科技職場！

**二、社師時間**

*Join GDG on campus to level up your HARD and SOFT skills & career!*

![一張含有 文字, 人員, 服裝, 筆跡 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.003.jpeg)

本屆社長 Wesley（左），社師 Roger（右）

社師介紹：Roger，現任 Google GNSS Wireless System Engineer

本次 Welcome Party 很高興能邀請現任 Google 工程師的社師現身分享，親自說明加入 GDG on campus NTPU 將會收穫哪些好處與成長。

在這學年，我們將社團主軸定調為「專案執行」，你可以結識志同道合的夥伴、提升團隊合作與交際能力，並找到自己的專屬定位；「主題社課」與「社團讀書會」則能幫助你掌握 Python、HackMD 等熱門科技工具，了解生成式 AI 的應用，提升專業知識並打造作品集；通過業師講座、黑客松、實作工作坊等活動，你還能開拓視野、連結業界，為踏入職涯做好準備。此外，達到參與標準的社員還可獲得 Google 官方徽章，**甚至有機會進入 Google 辦公室享用午餐喔！（X）**

**三、Kahoot! 快問快答之獎品我來了🎁**

在這個環節中，我們準備了十二個快問快答，題目從社團基本知識、Google 冷知識到意想不到的題目都有，遊戲積分前三名可獲得「社費優惠」或「超商禮券」～ 有興趣的讀者也可以跟著遊玩（答案請見文末）：

***Q1. GDG on campus NTPU 的社師叫什麼？***

**A1.** Rodman / Ramen / Rocker / Roger

***Q2. GDG on campus NTPU 的社員不會…？***

**A2.** 與資工系系排一的APP開發大神一起協作 / 去湧群學長工作的公司實習(超讚!!!!) / 與 Linux Odyssey 一起做**超酷**的網站 / 和副行政長帥氣勤倫一起打甲二

***Q3. Google 伺服器最初是用什麼材料建造的？***

**A3.** 樂高積木 / 廢棄的金屬 / 木頭 / 鋼材

*Q4. Google 的新員工會被稱為…？*

**A4.** Google Newbies / Googlers / Nooglers / Tech Titans

*Q5. Google 成立於哪一年？*

**A5.** 1996** / 1998 / 2000 / 2001

*Q6. Google 的最初名稱叫做…？*

**A6.** Backrub** / Google Search / PageRank / InfoFinder

![一張含有 室內, 椅子, 人員, 服裝 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.004.jpeg)

認真參與遊戲的大家！

*Q7. Google Pixel Watch 3 沒有什麼功能？*

**A7.** 心率顯示** / 用手錶操作家電 / 幫你送月餅 / 記錄睡眠資訊

*Q8. GDG on campus 本學期的入社報名到什麼時候？*

**A8.** 9月29日** / 9月27日 / 9月28日 / 9月30日

*Q9. Google 新成立的硬體研發辦公室離哪個捷運站最近？*

**A9.** 亞東醫院** / 松江南京 / 市政府 / 象山

*Q10. GDG on Campus NTPU 左上角是什麼顏色？*

**A10.** 綠色** / 紅色 / 藍色 / 黃色

*Q11. 截至9/26凌晨1:40，[本社 IG](https://www.instagram.com/ntpu_gdsc)有幾個粉絲？*

**A11.** 315 / 346/ 357/ 666

*Q12. 有什麼是今天的主持人不會的？*

**A12.** 跳啦啦 / 打羽球 / 跳popping / 大延畢

**四、北科大 Linux Odyssey 專案團隊分享**

![一張含有 室內, 人員, 服裝, 資料表 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.005.jpeg)

此專案團隊負責人林宏信，為臺北科技大學智慧自動化工程科的學生，喜愛使用 Linux 的他，平時便熱衷於推廣相關技術給身邊的人們，而在這樣的過程中，他發現系統中的「操作指令」是讓多數人較難以快速上手的門檻。

基於想改變大眾對於「指令很難、很恐怖」的認知，林宏信與同科系的其他三位夥伴們在畢業之際共同組建了 Linux Odyssey 專案團隊，打算製作「以指令為媒材的教學遊戲」，讓使用者即便沒有任何相關的學習基礎，也可以從零開始，用遊戲闖關式的方法學習，從實際應用中獲得成就感與樂趣。

**|** **Linux Odyssey 特色**

- 互動式教學：即時互動、即時回饋（終端將有實時錯誤提示）
- 設定開發環境：針對程式開發過程中會遇到的各種問題設定個別環境，讓使用者不會在初學階段卡關
- 適合指令教學：不論是大家耳熟能詳的 Git（版本操作工具），還是 Vim（文字編輯工具），只要是在終端機內可以完成的工作，都可以利用本平臺製作對應的教學課程
- 終端圖像化設計：清晰呈現檔案間的關係以及權限等概念，便於使用者的閱讀及學習

**| 專案主題的迭代**

- 團隊最初發想：以「遊戲」作為主體，設計一個精彩的解謎遊戲。
- 在執行過程中發現困難：由於「指令」這個媒介對遊戲設計的主題性太強，當時的團隊又缺乏故事設計人才，導致作品受眾受限於 Linux 愛好者，故後續改以「教學」作為主軸，希望能擴大使用群體。
- 最終確立定位：團隊在訪談多位潛在使用者、有經驗的開發者後，將受眾設定為程式初學者，並以「開發者的入門課」作為設計的核心目標。

**| 為何選擇開源？**

團隊成員們考量此專案的盈利可能性較低，同時又希望在畢業後，自己的專案作品仍然可以繼續發揮價值，再加上成為開源社群的一員，不但能夠讓專案開發過程更為透明，也得以完整發揮「Linux 精神」，因此決定加入開源社群，做出自己的貢獻，也和社群成員互相合作、共同進步。

**| 高效工作方式分享：Scrum**

1. 定期會議：透過每日開小會，以回報本日進度、遭遇的問題，並統整隔日的代辦事項，與每週週末開總結會議，回顧及檢討上週次進度、分配成員的新工作，並討論共同決定的問題，團隊得以更有效率地執行專案。
1. 聯絡與管理工具：Linux Odyssey 團隊使用「Notion」統整腦力激盪、會議紀錄，以及工作分配等資料，讓它們變得結構化且容易回顧；利用「GitHub」自動審核和測試程式碼，確保其符合要求和格式；並藉由功能強大、去中心化，且方便的通訊工具「Element」聯絡彼此。

![一張含有 文字, 字型, 標誌, 圖形 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.006.png)

高效工具推薦

在未來規劃中，Linux Odyssey 預計招攬更多人才，團隊也打算設計更多豐富課程、開源教學工具，並與資訊工程學系的教授洽談合作機會、提供相關的測驗與證書認證，以及嘗試連結高中學習歷程，讓 Linux Odyssey 教學網站能有更廣泛的應用。

（前往 Linux Odyssey 的酷酷網站[請點我](https://linuxodyssey.xyz/)）

![一張含有 文字, 服裝, 人員, 人的臉孔 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.007.jpeg)

感謝講者不遠千里而來！

**五、GDG on campus NTPU 畢業學長分享**

![一張含有 文字, 室內, 簡報, 服裝 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.008.jpeg)

講者介紹：湧群學長

**| 個人經歷**

- GDSCxNTPU 19’ Lead
- PDIS Ray 5.0 見習生
- HP Inc. 22’ Intern
- 現任 HP inc. Software/System Engineer

很榮幸能邀請過去曾任 GDSCxNTPU Lead 的學長返校分享，從學生時期就開始參與社群的他，在 Welcome Party 當天分享了許多參與社群帶給自身的啟發，直到進入職場工作後，也會定期參與大大小小的社群年會與活動。對他來說，參與社群以建立人與人之間的連結、與社群夥伴一同製作酷酷的專案，是他之所以持續參與社群的主要原因，因此歡迎學弟妹們也能一同參與社群！

**| 學長過往的出沒地**

- SITCON 學生計算機年會
- COSCUP 開源人年會
- Hacks In Taiwan Conference (HITCON) 台灣駭客年會
- g0v臺灣零時政府
- GDG DevFest
- 教育部資訊安全人才培育計畫
- AIS3
- 臺灣好厲駭

**六、專案介紹**

本社運作採三軌制並行，除教授主題課程、舉辦讀書會外，更有專案實作與討論環節，而我們的專案來源主要包含與各界合作的產學合作專案，以及社團的內部提案，目前共有以下 9 項：

- 和泰汽車-【機器學習/數據分析】（難易度：中/高）
- 北科大 Linux Odyssey【互動教學網站開發】（難易度：中）
- Awesome Taiwan Knowledge Dataset（ATK）【繁體中文AI開源實踐專案】（難易度：中）
- 國立臺北大學三峽校區學生會【北大APP開發】（難易度：中/高）
- GDG on Campus NTPU【社團部落格開發】（難易度：中/高）
- GDG on Campus NTPU【北大法規問答小幫手】（難易度：中）
- GDG on Campus NTPU【運動聯盟 APP 開發】（難易度：中/高）
- GDG on Campus NTPU【社團 LINE Bot 開發】（難易度：中）
- 社團入門專案【利用Gemini來解決生活中會遇到的問題】（難易度：易）

**七、抽獎時間**

稱職的活動怎麼可能少了抽獎環節呢，由衷感謝當天參與活動的大家，也恭喜以下獲獎的同學們！

![一張含有 文字, 服裝, 牆, 筆跡 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.009.jpeg)

超商禮券第一組得獎者🎉

![一張含有 服裝, 人員, 文字, 筆跡 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.010.jpeg)

超商禮券第二組得獎者🎉

![一張含有 服裝, 人員, 人的臉孔, 文字 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.011.jpeg)

整組社費優惠 🔥

再次恭喜獲獎同學！

**八、自由討論專案時間**

在活動迎來尾聲後，我們開放各專案的自由討論時間～希望聽了負責人的解說，可以讓大家對專案內容有更進一步的認識，也祝福社員們如願進入感興趣的專案組別！

![一張含有 服裝, 人員, 室內, 群組 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.012.jpeg)

![一張含有 服裝, 人員, 室內, 男人 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.013.jpeg)

**Kahoot! 的答案們**

*1. Roger*

*2. 和副行政長帥氣勤倫一起打甲二*

*3. Lego 積木*

![一張含有 圖書, 文字, 牆, 裝訂 的圖片

AI 產生的內容可能不正確。](Aspose.Words.628c8a6d-0a1d-4b57-90e8-eaf8d9b7b736.014.jpeg)

圖片支援：此品自西元2010年開始在黃仁勳工學院中心（Jen-Hsun Huang Engineering Center）永久展出

*4. Nooglers*

*5. 1998*

*6. Backrub*

*7. 幫你送月餅*

*8. 9/28 週六 23:59*

*9. 亞東醫院*

*10. 紅色*

*11. 346*

*12. 跳 popping*

如果各位喜歡這篇文章，請不吝於給我們拍手，慰勞一下行銷組的肝（X）

關注 GDG on campus NTPU，最新消息不漏接💡
IG：[@gdg.ntpu](https://www.instagram.com/ntpu_gdsc)
threads：[@gdg.ntpu](https://www.threads.net/@ntpu_gdsc)
FB：[Google Developer Groups on Campus NTPU](https://www.facebook.com/dscntpu)

63

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

<style scoped>
.workshop {
  margin: 5rem 12%;
  display: flex;
  flex-direction: column;
}

.workshop__header {
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 50vh;
}

.workshop__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.workshop__title {
  text-align: center;
  font-size: clamp(2rem, calc(2vw + 1rem), 5rem);
}

.workshop__speaker-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-bottom-right-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
  text-wrap: nowrap;
}
.speaker {
  flex: 1;
}
.speaker__photo {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  min-width: 75px;
  min-height: 75px;
  max-width: 100px;
  max-height: 100px;
  aspect-ratio: 1/1;
}

.speaker__name {
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.speaker__details {
  flex: 2;
}

.workshop__image {
  flex: 1;
  object-fit: cover;
}

.workshop__toc {
  background-color: #e5e7eb;
  width: 50%;
  align-self: center;
  margin: 5rem 0 4rem;
  padding: 2rem;
}
@media (max-width: 1000px) {
  .workshop__header {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .workshop__image {
    width: auto;
    margin-top: 1rem;
    max-height: 300px;
  }
  .workshop__toc {
    width: 90%;
  }
}
</style>

<!--
<template>
  <div class="side-padding my-20 flex flex-col">
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
-->
