// ================================
// 기본 데이터
// ================================
const categories = [
  { id: "skin", label: "피부 / 외모", from: 1, to: 10 },
  { id: "hair", label: "헤어", from: 11, to: 20 },
  { id: "style", label: "패션 / 스타일", from: 21, to: 30 },
  { id: "scent", label: "향 & 청결", from: 31, to: 40 },
  { id: "fitness", label: "운동 / 체형", from: 41, to: 50 },
  { id: "detail", label: "디테일 관리", from: 51, to: 60 }
];

const tierMeta = {
  "아이언": {
    label: "아이언",
    desc: "관리 자체가 거의 방치된 단계입니다. 하나씩 습관을 쌓기 시작하면, 변화 폭이 가장 큰 구간이기도 합니다."
  },
  "브론즈": {
    label: "브론즈",
    desc: "기초 위생과 관리가 들쑥날쑥한 단계입니다. ‘매일 할 수 있는 최소 루틴’을 정해서 반복하는 것이 핵심입니다."
  },
  "실버": {
    label: "실버",
    desc: "한국 남자 평균 정도의 관리 수준입니다. 눈에 띄는 단점은 없지만, 강한 매력이 느껴지기엔 아쉬운 단계입니다."
  },
  "골드": {
    label: "골드",
    desc: "“관리 좀 한다”는 말을 들을 수 있는 단계입니다. 1~2개 영역만 더 올리면 상위권으로 올라섭니다."
  },
  "플래티넘": {
    label: "플래티넘",
    desc: "대부분의 영역에서 기본 이상은 잡혀 있습니다. 이제는 나만의 스타일과 디테일을 세팅할 타이밍입니다."
  },
  "다이아": {
    label: "다이아",
    desc: "확실히 ‘관리 잘하는 사람’으로 보이는 단계입니다. 방향성은 유지하되, 번아웃만 조심하면 좋습니다."
  },
  "마스터": {
    label: "마스터",
    desc: "관리 루틴이 거의 생활화되어 있습니다. 주변에서 관리 관련 질문을 자주 받는 수준입니다."
  },
  "그랜드마스터": {
    label: "그랜드마스터",
    desc: "거의 롤 모델급 자기관리입니다. 브랜드로서의 ‘나’를 설계해도 좋을 정도의 단계입니다."
  },
  "챌린저": {
    label: "챌린저",
    desc: "상위 1%급 자기관리입니다. 이제는 유지와 건강, 번아웃 방지가 가장 중요한 과제입니다."
  }
};

const adviceMessages = {
  low: "{cat} 관리는 지금 ‘기초 세팅’이 필요한 단계입니다. 매일 할 수 있는 1~2가지 루틴부터 만들어보세요.",
  mid: "{cat}은(는) 기본은 되어 있지만, 디테일을 조금만 올리면 상위권으로 갈 수 있는 구간입니다.",
  high: "{cat}은(는) 이미 상위권입니다. 루틴을 유지하면서 무리만 하지 않는 것이 중요합니다."
};

// ================================
// 화면 전환
// ================================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ================================
// 검증 로직 (각 영역별 10문항 체크)
// ================================
function validateCategory(catId) {
  const cat = categories.find((c) => c.id === catId);
  if (!cat) return true;

  for (let i = cat.from; i <= cat.to; i++) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      alert(`아직 체크하지 않은 문항이 있습니다. (${cat.label} 영역, 문항 ${i})`);
      return false;
    }
  }
  return true;
}

// ================================
// 티어 계산
// ================================
function scoreToTierTotal(score) {
  // score: 0 ~ 60
  if (score <= 8) return "아이언";        // 1~8
  if (score <= 21) return "브론즈";      // 9~21
  if (score <= 34) return "실버";        // 22~34
  if (score <= 40) return "골드";        // 35~40
  if (score <= 45) return "플래티넘";    // 41~45
  if (score <= 50) return "다이아";      // 46~50
  if (score <= 53) return "마스터";      // 51~53
  if (score <= 57) return "그랜드마스터"; // 54~57
  return "챌린저";                       // 58~60
}

function scoreToTierCategory(score) {
  // 각 영역 0~10점 → 0~60점으로 환산
  const scaled = score * 6;
  return scoreToTierTotal(scaled);
}

function getAdviceForCategory(label, tier) {
  let level = "mid";
  if (tier === "아이언" || tier === "브론즈") level = "low";
  else if (tier === "실버" || tier === "골드" || tier === "플래티넘") level = "mid";
  else level = "high";

  return adviceMessages[level].replace("{cat}", label);
}

// ================================
// 결과 계산
// ================================
function computeResults() {
  let totalScore = 0;
  const categoryResults = [];

  categories.forEach((cat) => {
    let catScore = 0;

    for (let i = cat.from; i <= cat.to; i++) {
      const checked = document.querySelector(`input[name="q${i}"]:checked`);
      if (checked && checked.value === "1") {
        catScore += 1;
      }
    }

    totalScore += catScore;

    const ratio = Math.round((catScore / 10) * 100);
    const tier = scoreToTierCategory(catScore);

    categoryResults.push({
      id: cat.id,
      label: cat.label,
      score: catScore,
      ratio,
      tier
    });
  });

  const overallRatio = Math.round((totalScore / 60) * 100);
  const overallTier = scoreToTierTotal(totalScore);

  return {
    overall: {
      score: totalScore,
      ratio: overallRatio,
      tier: overallTier,
      max: 60
    },
    categories: categoryResults
  };
}

// ================================
// 결과 렌더링
// ================================
function renderResults(result) {
  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  const overallMeta = tierMeta[result.overall.tier];

  overallBox.innerHTML = `
    <div class="overall-card">
      <div class="tier-badge">
        <span class="main">${result.overall.tier}</span>
        <span class="sub">${result.overall.ratio.toFixed(1)}%</span>
      </div>
      <div class="result-score">
        전체 문항 중 <strong>${result.overall.score}</strong>개를 관리하고 있습니다. 
        (${result.overall.score} / ${result.overall.max})
      </div>
      <div class="result-desc">
        ${overallMeta ? overallMeta.desc : ""}
      </div>
    </div>
  `;

  const catHTML = result.categories
    .map((cat) => {
      const advice = getAdviceForCategory(cat.label, cat.tier);
      return `
        <div class="category-card">
          <div class="category-top">
            <div class="category-main">
              <div class="cat-label">${cat.label}</div>
              <div class="cat-progress">${cat.score} / 10 문항 관리 중</div>
            </div>
            <div class="cat-tier">
              <span class="tier-name">${cat.tier}</span>
              <span class="tier-ratio">${cat.ratio.toFixed(1)}%</span>
            </div>
          </div>
          <p class="cat-advice">${advice}</p>
        </div>
      `;
    })
    .join("");

  catBox.innerHTML = `
    <h3 class="category-title">영역별 상세 티어</h3>
    ${catHTML}
  `;
}

// ================================
// 폼 리셋
// ================================
function resetForm() {
  document.querySelectorAll('input[type="radio"]').forEach((el) => {
    el.checked = false;
  });
}

// ================================
// 이벤트 바인딩
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // 인트로 → 피부
  document.getElementById("startBtn").addEventListener("click", () => {
    showPage("page-skin");
  });

  // 영역 이동 (이전/다음)
  document.getElementById("back-skin").addEventListener("click", () => {
    // 인트로에서 온 거라 뒤로 가도 인트로
    showPage("page-intro");
  });

  document.getElementById("next-skin").addEventListener("click", () => {
    if (validateCategory("skin")) showPage("page-hair");
  });

  document.getElementById("back-hair").addEventListener("click", () => {
    showPage("page-skin");
  });
  document.getElementById("next-hair").addEventListener("click", () => {
    if (validateCategory("hair")) showPage("page-style");
  });

  document.getElementById("back-style").addEventListener("click", () => {
    showPage("page-hair");
  });
  document.getElementById("next-style").addEventListener("click", () => {
    if (validateCategory("style")) showPage("page-scent");
  });

  document.getElementById("back-scent").addEventListener("click", () => {
    showPage("page-style");
  });
  document.getElementById("next-scent").addEventListener("click", () => {
    if (validateCategory("scent")) showPage("page-fitness");
  });

  document.getElementById("back-fitness").addEventListener("click", () => {
    showPage("page-scent");
  });
  document.getElementById("next-fitness").addEventListener("click", () => {
    if (validateCategory("fitness")) showPage("page-detail");
  });

  document.getElementById("back-detail").addEventListener("click", () => {
    showPage("page-fitness");
  });

  // 결과 보기
  document.getElementById("showResultBtn").addEventListener("click", () => {
    if (!validateCategory("detail")) return;

    const result = computeResults();
    renderResults(result);
    showPage("page-result");
  });

  // 다시 테스트
  document.getElementById("retryBtn").addEventListener("click", () => {
    resetForm();
    showPage("page-intro");
  });
});
