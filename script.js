// ===============================
// 공통 설정
// ===============================
const TOTAL_QUESTIONS = 60;
const QUESTIONS_PER_STEP = 10;
const TOTAL_STEPS = 6;

// 카테고리 메타
const categories = [
  { id: "skin", name: "피부 / 외모", range: [1, 10] },
  { id: "hair", name: "헤어", range: [11, 20] },
  { id: "style", name: "패션 / 스타일", range: [21, 30] },
  { id: "scent", name: "향 & 청결 습관", range: [31, 40] },
  { id: "fitness", name: "운동 / 체형", range: [41, 50] },
  { id: "detail", name: "디테일 관리", range: [51, 60] },
];

// 티어 메타 (이모지 + 상위 퍼센트 + 설명 + 브랜드 메시지)
const tierMeta = {
  IRON: {
    name: "아이언",
    icon: "🪙",
    top: "하위 20%",
    desc:
      "관리라고 부르기 어려운 단계에 가까워요. 기본적인 위생 루틴조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성이 낮은 구간입니다.",
    brand:
      "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’을 정리하는 일입니다.",
  },
  BRONZE: {
    name: "브론즈",
    icon: "🥉",
    top: "하위 40%",
    desc:
      "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하긴 애매한 단계예요. 어디서부터 시작해야 할지 막연한 구간입니다.",
    brand:
      "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리부터 시작해 보세요.",
  },
  SILVER: {
    name: "실버",
    icon: "🥈",
    top: "중위 20~60%",
    desc:
      "기본 위생·기초 관리는 하지만 꾸준함과 디테일이 부족해 ‘관리하는 사람’ 느낌은 약한 단계입니다. 관리 입문 초입에 머문 상태예요.",
    brand:
      "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 만들 때 변화가 시작됩니다.",
  },
  GOLD: {
    name: "골드",
    icon: "🥇",
    top: "상위 30%",
    desc:
      "관리를 시작한 티는 나지만 깊이·일관성·디테일은 아직 아쉬운 단계입니다. 꾸준함과 영역별 밸런스를 잡으면 한 단계 더 상승할 수 있어요.",
    brand:
      "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다.",
  },
  PLATINUM: {
    name: "플래티넘",
    icon: "💎",
    top: "상위 15%",
    desc:
      "어느 정도 누구나 봐도 ‘관리하는 사람’이라는 이미지는 잡힌 단계예요. 다만 루틴의 논리·성분 이해·고급 관리 등에서 발전 여지가 있습니다.",
    brand:
      "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다.",
  },
  DIAMOND: {
    name: "다이아몬드",
    icon: "💠",
    top: "상위 10%",
    desc:
      "루틴이 안정적이고 디테일도 살아 있어 주변에서 ‘관리 잘한다’는 말을 듣는 단계입니다. 이제는 정답보다 나만의 색을 찾는 구간이에요.",
    brand:
      "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고 ‘나만의 색’을 찾아보세요.",
  },
  MASTER: {
    name: "마스터",
    icon: "🎖",
    top: "상위 8%",
    desc:
      "피부, 향, 스타일, 체형 등 대부분의 영역이 ‘루틴 → 습관’으로 굴러가는 단계입니다. 일반적인 기준에서는 이미 ‘관리 잘하는 사람’입니다.",
    brand:
      "관리의 목적을 잊지마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박보다, 지속 가능한 나만의 리듬을 찾는 것입니다.",
  },
  GRANDMASTER: {
    name: "그랜드마스터",
    icon: "🥇",
    top: "상위 3%",
    desc:
      "여러 영역에서 거의 완성형 관리자에 가까운 단계입니다. 주변에서도 ‘관리의 기준’처럼 보는 사람이 많을 거예요.",
    brand:
      "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리는 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
  },
  CHALLENGER: {
    name: "챌린저",
    icon: "👑",
    top: "상위 1%",
    desc:
      "자기관리가 삶 전반에 자연스럽게 녹아 있는 정점 구간입니다. 외적·내적 루틴 모두 높은 수준에서 유지되고 있어요.",
    brand:
      "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기와 매력’, ‘나만의 라이프스타일’을 완성하는 것입니다.",
  },
};

// 비율 -> 티어
function scoreToTier(ratio) {
 // 1~60점 "원점수" 기반 티어 계산
function scoreToTier(score) {
  if (score <= 8)  return "아이언";         // 1~8
  if (score <= 21) return "브론즈";         // 9~21
  if (score <= 34) return "실버";           // 22~34
  if (score <= 40) return "골드";           // 35~40
  if (score <= 45) return "플래티넘";       // 41~45
  if (score <= 50) return "다이아";         // 46~50
  if (score <= 53) return "마스터";         // 51~53
  if (score <= 57) return "그랜드마스터";   // 54~57
  return "챌린저";                          // 58~60
}
  
// ===============================
// DOM 참조
// ===============================
const introSection = document.getElementById("introSection");
const surveySection = document.getElementById("surveySection");
const resultSection = document.getElementById("resultSection");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");

const stepIndicator = document.getElementById("stepIndicator");
const surveyForm = document.getElementById("surveyForm");

const questionPages = document.querySelectorAll(".question-page");
const overallBox = document.getElementById("overall-result");
const catBox = document.getElementById("category-results");

let currentStep = 1;

// ===============================
// 페이지 전환
// ===============================
function showStep(step) {
  currentStep = step;

  questionPages.forEach((page) => {
    const pageStep = Number(page.dataset.step);
    page.classList.toggle("hidden", pageStep !== step);
  });

  stepIndicator.textContent = `${step} / ${TOTAL_STEPS}`;

  // 버튼 상태
  if (step === 1) {
    prevBtn.disabled = true;
    prevBtn.classList.add("hidden");
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove("hidden");
  }

  if (step === TOTAL_STEPS) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 현재 step의 질문에 모두 답했는지 확인
function validateStep(step) {
  const start = (step - 1) * QUESTIONS_PER_STEP + 1;
  const end = step * QUESTIONS_PER_STEP;

  for (let i = start; i <= end; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);
    if (!yes && !no) return false;
  }
  return true;
}

// 전체 결과 수집
function collectResults() {
  let totalScore = 0;
  const missing = [];
  const categoryScores = new Array(categories.length).fill(0);

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      missing.push(i);
      continue;
    }

    if (yes) {
      totalScore += 1;
      const catIndex = Math.floor((i - 1) / QUESTIONS_PER_STEP);
      categoryScores[catIndex] += 1;
    }
  }

  if (missing.length > 0) {
    return { error: true, missing };
  }

  const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
  const overallTier  = scoreToTier(totalScore);     // 퍼센트X, "점수"로

  const categoryResults = categories.map((cat, idx) => {
    const score = categoryScores[idx];
    const ratio = (score / QUESTIONS_PER_STEP) * 100;
    const tier = scoreToTier(Score);
    return {
      id: cat.id,
      name: cat.name,
      score,
      max: QUESTIONS_PER_STEP,
      ratio,
      tier,
    };
  });

  return {
    error: false,
    overall: {
      score: totalScore,
      max: TOTAL_QUESTIONS,
      ratio: overallRatio,
      tier: overallTierKey,
    },
    categories: categoryResults,
  };
}

// ===============================
// 결과 렌더링
// ===============================
function renderResults(result) {
  const overall = result.overall;
  const meta = tierMeta[overall.tier];

  const ratioText = overall.ratio.toFixed(1);
  const weak = result.categories.filter(
    (cat) => cat.ratio <= overall.ratio - 10
  );

  let weakMessage = "";
  if (weak.length > 0) {
    const names = weak.map((c) => c.name).join(", ");
    weakMessage = `<p class="weak-msg"><strong>특히 ${names}</strong> 영역이 전체 대비 상대적으로 약한 편입니다. 이 영역에 루틴을 한두 개씩만 추가해도 티어 상승 체감이 빠르게 올 거예요.</p>`;
  } else {
    weakMessage =
      '<p class="weak-msg">6개 영역이 고르게 관리되고 있습니다. 지금의 리듬을 유지하면서, 한두 영역에만 조금 더 힘을 줘도 다음 티어를 노려볼 수 있어요.</p>';
  }

  overallBox.innerHTML = `
    <div class="overall-header">
      <div class="tier-main">
        <span class="tier-icon">${meta.icon}</span>
        <span class="tier-name">${meta.name}</span>
        <span class="tier-top">${meta.top}</span>
      </div>
      <div class="overall-score-line">
        전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
        (<strong>${overall.score} / ${overall.max}</strong> · ${ratioText}%)
      </div>
    </div>
    <div class="overall-body">
      <p class="overall-desc">${meta.desc}</p>
      <p class="brand-msg-label">OWN.이 전하는 메시지</p>
      <p class="brand-msg">${meta.brand}</p>
      ${weakMessage}
    </div>
  `;

  // 카테고리 리스트
  const weakIds = new Set(weak.map((w) => w.id));

  const catItems = result.categories
    .map((cat) => {
      const tier = tierMeta[cat.tier];
      const ratio = cat.ratio.toFixed(1);
      const weakClass = weakIds.has(cat.id) ? " weak" : "";
      return `
      <li class="category-item${weakClass}">
        <div class="cat-main">
          <div class="cat-name">${cat.name}</div>
          <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
        </div>
        <div class="cat-side">
          <div class="cat-tier-line">
            <span class="cat-tier-icon">${tier.icon}</span>
            <span class="cat-tier-name">${tier.name}</span>
          </div>
          <div class="cat-ratio">${ratio}%</div>
        </div>
      </li>
    `;
    })
    .join("");

  catBox.innerHTML = catItems;
}

// 설문 리셋
function resetSurvey() {
  const inputs = surveyForm.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.checked = false;
  });
  showStep(1);
}

// ===============================
// 이벤트 바인딩
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // 시작 버튼
  startBtn.addEventListener("click", () => {
    introSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    surveySection.classList.remove("hidden");
    resetSurvey();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 이전
  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  });

  // 다음
  nextBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
      return;
    }
    if (currentStep < TOTAL_STEPS) {
      showStep(currentStep + 1);
    }
  });

  // 결과 보기
  submitBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
      return;
    }

    const result = collectResults();
    if (result.error) {
      const firstMissing = result.missing[0];
      const pageIndex = Math.floor((firstMissing - 1) / QUESTIONS_PER_STEP) + 1;
      alert(
        `답하지 않은 문항이 있습니다. (문항 번호: ${firstMissing})\n해당 페이지로 이동합니다.`
      );
      showStep(pageIndex);
      return;
    }

    renderResults(result);

    surveySection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 다시 하기
  retryBtn.addEventListener("click", () => {
    resetSurvey();
    resultSection.classList.add("hidden");
    surveySection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
// ✅ 페이지 바뀔 때마다 진행도 갱신
  updateProgressBar();
}
                          
  // 초기 상태
  showStep(1);
});

// 전체 설문 진행도 업데이트 (0~100%)
function updateProgressBar() {
  const bar = document.getElementById("surveyProgressBar");
  if (!bar) return;

  let answered = 0;
  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);
    if (yes || no) answered += 1;
  }

  const ratio = (answered / TOTAL_QUESTIONS) * 100;
  bar.style.width = `${ratio}%`;
}
