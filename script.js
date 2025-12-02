// ============================
// 기본 설정
// ============================
const TOTAL_QUESTIONS = 60;
const STEP_COUNT = 6;
const STEP_SIZE = 10;

const tierOrder = [
  "IRON",
  "BRONZE",
  "SILVER",
  "GOLD",
  "PLATINUM",
  "DIAMOND",
  "MASTER",
  "GRANDMASTER",
  "CHALLENGER",
];

const tierMeta = {
  IRON: {
    code: "IRON",
    label: "아이언",
    rankText: "하위 20%",
    summary: [
      "관리라고 부르기 어려운 단계에 가깝습니다.",
      "기본적인 위생 루틴조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성을 거의 느끼지 않는 구간입니다.",
    ],
    brandMessage:
      "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’입니다.",
  },
  BRONZE: {
    code: "BRONZE",
    label: "브론즈",
    rankText: "하위 40%",
    summary: [
      "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 보기엔 부족한 단계입니다.",
      "관리에 대한 이해도가 낮아, 어디서부터 시작해야 할지 막연한 구간입니다.",
    ],
    brandMessage:
      "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리.",
  },
  SILVER: {
    code: "SILVER",
    label: "실버",
    rankText: "중위 20~60%",
    summary: [
      "기본 위생·기초 관리는 하지만, 꾸준함과 디테일이 부족해 ‘관리한다’고 보긴 애매한 단계입니다.",
      "티는 안 나지만 관리를 시작한 초입에 머문 상태입니다.",
    ],
    brandMessage:
      "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 만들 때 변화가 시작됩니다.",
  },
  GOLD: {
    code: "GOLD",
    label: "골드",
    rankText: "상위 30%",
    summary: [
      "관리를 시작한 티는 나지만, 깊이·일관성·디테일은 아직 아쉬운 단계입니다.",
      "꾸준함과 영역별 밸런스를 잡으면 한 단계 더 상승할 수 있습니다.",
    ],
    brandMessage:
      "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다.",
  },
  PLATINUM: {
    code: "PLATINUM",
    label: "플래티넘",
    rankText: "상위 15%",
    summary: [
      "헤어·피부·패션·운동 어느 하나를 봐도 ‘관리한다’는 이미지가 잡힌 단계입니다.",
      "다만 루틴의 논리·성분 이해·시술/고급 관리 등 전문성은 아직 더 쌓을 여지가 있습니다.",
    ],
    brandMessage:
      "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다.",
  },
  DIAMOND: {
    code: "DIAMOND",
    label: "다이아몬드",
    rankText: "상위 10%",
    summary: [
      "루틴이 안정적이고 디테일도 살아 있어, 주변에서 ‘관리 잘한다’는 말을 듣는 단계입니다.",
      "다만 특정 영역이 상대적으로 약할 수 있어, 그 부분을 보완하면 상위권으로 확실히 진입합니다.",
    ],
    brandMessage:
      "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고 ‘나만의 색’을 찾아보세요.",
  },
  MASTER: {
    code: "MASTER",
    label: "마스터",
    rankText: "상위 8%",
    summary: [
      "피부·향·스타일·체형 등 대부분의 영역이 ‘루틴 → 습관’으로 정착된 단계입니다.",
      "이미 일반적인 기준에서는 ‘관리 잘하는 사람’으로 인정받는 수준입니다.",
    ],
    brandMessage:
      "관리의 목적을 잊지 마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박보다, 지속 가능한 나만의 리듬을 찾는 것입니다.",
  },
  GRANDMASTER: {
    code: "GRANDMASTER",
    label: "그랜드마스터",
    rankText: "상위 3%",
    summary: [
      "피부·스타일·향·운동·디테일까지 어느 하나 빠지지 않는 높은 수준의 루틴을 가진 단계입니다.",
      "주변에서 ‘관리의 기준’으로 여겨질 정도의 완성형 자기관리자입니다.",
    ],
    brandMessage:
      "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리는 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
  },
  CHALLENGER: {
    code: "CHALLENGER",
    label: "챌린저",
    rankText: "상위 1%",
    summary: [
      "자기관리의 정점에 가까운 단계입니다. 삶 전반이 체계적이고 아름답게 정돈된 상태에 가깝습니다.",
      "외적·내적 루틴 모두 거의 완성형에 가까우며, 주변에서 롤모델처럼 여겨질 수 있습니다.",
    ],
    brandMessage:
      "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기와 매력’, ‘나만의 라이프스타일’을 완성하는 것입니다.",
  },
};

// 카테고리 정보
const categories = [
  { id: "skin", title: "피부 / 외모", start: 1, end: 10 },
  { id: "hair", title: "헤어", start: 11, end: 20 },
  { id: "style", title: "패션 / 스타일", start: 21, end: 30 },
  { id: "scent", title: "향 & 센트 습관", start: 31, end: 40 },
  { id: "fitness", title: "운동 / 체형", start: 41, end: 50 },
  { id: "detail", title: "디테일 관리", start: 51, end: 60 },
];

// 카테고리별 개선 포인트 (짧게)
const categoryTips = {
  skin: "피부는 세안·보습·자외선 3가지만 4주 유지해도 인상이 크게 바뀝니다. 매일 같은 시간대 루틴을 만들어보세요.",
  hair: "헤어는 ‘단골 미용사 + 대표 스타일 1개’만 확실히 잡아도 티가 확 납니다. 4~6주 컷 주기부터 고정해보세요.",
  style: "패션은 모든 걸 새로 살 필요 없이, 기본템 핏과 신발·액세서리 조합만 다듬어도 이미지가 달라집니다.",
  scent: "향은 ‘냄새 제거 → 보습 → 향’ 순서가 기본입니다. 본인 페르소나에 맞는 시그니처 향 1개를 먼저 정해보세요.",
  fitness: "운동은 주 2회 유산소 + 주 2~3회 근력만 고정해도 체형이 안정됩니다. 너무 빡센 루틴보다 지속 가능한 루틴이 우선입니다.",
  detail: "손톱·수염·눈썹·냄새 같은 디테일은 작은 차이가 큰 인상을 만듭니다. 주 1회 ‘디테일 관리 요일’을 정해두세요.",
};

// 티어를 퍼센트로 계산
function scoreToTier(ratio) {
  const r = Math.round(ratio);
  if (r <= 13) return "IRON"; // 1~8 / 60
  if (r <= 35) return "BRONZE"; // 9~21
  if (r <= 57) return "SILVER"; // 22~34
  if (r <= 67) return "GOLD"; // 35~40
  if (r <= 75) return "PLATINUM"; // 41~45
  if (r <= 83) return "DIAMOND"; // 46~50
  if (r <= 88) return "MASTER"; // 51~53
  if (r <= 95) return "GRANDMASTER"; // 54~57
  return "CHALLENGER"; // 58~60
}

function getTierRank(code) {
  return tierOrder.indexOf(code);
}

// ============================
// DOM 요소
// ============================
const introPage = document.getElementById("introPage");
const surveyPage = document.getElementById("surveyPage");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

const stepLabel = document.getElementById("stepLabel");
const stepTitle = document.getElementById("stepTitle");
const surveySteps = document.querySelectorAll(".survey-step");

const overallResultBox = document.getElementById("overallResult");
const categoryResultsBox = document.getElementById("categoryResults");
const focusBlock = document.getElementById("focusBlock");

// ============================
// 상태
// ============================
let currentStep = 0;

// ============================
// 페이지 전환
// ============================
function showPage(pageId) {
  [introPage, surveyPage, resultPage].forEach((p) =>
    p.classList.add("hidden")
  );
  const target = document.getElementById(pageId);
  if (target) target.classList.remove("hidden");
}

function updateStepView() {
  surveySteps.forEach((step, idx) => {
    if (idx === currentStep) step.classList.add("active");
    else step.classList.remove("active");
  });

  stepLabel.textContent = `${currentStep + 1} / ${STEP_COUNT}`;
  stepTitle.textContent = categories[currentStep].title;

  // 버튼 상태
  prevBtn.disabled = currentStep === 0;
  if (currentStep === STEP_COUNT - 1) {
    nextBtn.textContent = "결과 보기";
  } else {
    nextBtn.textContent = "다음 페이지";
  }
}

// 해당 스텝의 모든 문항이 응답되었는지 체크
function validateStep(stepIndex) {
  const start = stepIndex * STEP_SIZE + 1;
  const end = start + STEP_SIZE - 1;

  for (let i = start; i <= end; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);
    if (!yes && !no) {
      alert(`${i}번 문항이 아직 선택되지 않았어요.`);
      return false;
    }
  }
  return true;
}

// 전체 결과 계산
function calculateResults() {
  let totalScore = 0;
  const catScores = new Array(STEP_COUNT).fill(0);

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    if (yes) {
      totalScore += 1;
      const idx = Math.floor((i - 1) / STEP_SIZE);
      catScores[idx] += 1;
    }
  }

  const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
  const overallTierCode = scoreToTier(overallRatio);
  const overallTierMeta = tierMeta[overallTierCode];

  const catData = categories.map((cat, idx) => {
    const score = catScores[idx];
    const ratio = (score / STEP_SIZE) * 100;
    const tierCode = scoreToTier(ratio);
    return {
      id: cat.id,
      title: cat.title,
      score,
      ratio,
      tierCode,
      tierMeta: tierMeta[tierCode],
    };
  });

  const result = {
    overall: {
      score: totalScore,
      ratio: overallRatio,
      tierCode: overallTierCode,
      tierMeta: overallTierMeta,
    },
    categories: catData,
  };

  renderResults(result);
  showPage("resultPage");
}

// 결과 렌더링
function renderResults(result) {
  const { overall, categories: catData } = result;
  const tier = overall.tierMeta;

  // 전체 결과
  overallResultBox.innerHTML = `
    <div class="tier-badge tier-${tier.code.toLowerCase()}">
      <div class="tier-main">
        <span class="tier-name">${tier.label}</span>
        <span class="tier-percent">${overall.ratio.toFixed(1)}%</span>
      </div>
      <div class="tier-sub">${tier.rankText}</div>
    </div>
    <div class="result-score">
      전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
      <span class="result-score-detail">(${overall.score} / ${TOTAL_QUESTIONS})</span>
    </div>
    <div class="result-desc">
      ${tier.summary.map((line) => `<p>${line}</p>`).join("")}
    </div>
    <div class="result-brand-msg">
      <p>${tier.brandMessage}</p>
    </div>
  `;

  // 영역별 카드
  categoryResultsBox.innerHTML = "";
  catData.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <div class="category-header">
        <span class="category-name">${cat.title}</span>
        <span class="category-tier">${cat.tierMeta.label} · ${cat.ratio.toFixed(
      1
    )}%</span>
      </div>
      <div class="category-body">
        <div class="category-score">${cat.score} / 10 문항 관리 중</div>
      </div>
    `;
    categoryResultsBox.appendChild(card);
  });

  // 약점 영역 분석
  const overallRank = getTierRank(overall.tierCode);
  const weakCats = catData.filter((cat) => {
    const rank = getTierRank(cat.tierCode);
    return rank <= overallRank - 2 || cat.ratio < 50;
  });

  if (weakCats.length === 0) {
    focusBlock.classList.remove("hidden");
    focusBlock.innerHTML = `
      <h3>당신은 전반적으로 밸런스가 좋은 편입니다.</h3>
      <p>이제는 ‘더 많이’가 아니라, ‘어떻게 꾸준히 가져갈지’를 고민해보면 좋습니다.</p>
    `;
  } else {
    const listHtml = weakCats
      .map((cat) => {
        const tip = categoryTips[cat.id] || "";
        return `
          <li>
            <strong>${cat.title}</strong> – ${cat.tierMeta.label} (${cat.ratio.toFixed(
          1
        )}%)<br/>
            <span class="focus-tip">${tip}</span>
          </li>
        `;
      })
      .join("");

    focusBlock.classList.remove("hidden");
    focusBlock.innerHTML = `
      <h3>당신에게 특히 중요한 관리 포인트</h3>
      <p>아래 영역은 전체 티어 대비 상대적으로 약하게 나온 부분이에요. 이 영역부터 먼저 다듬어보면 좋습니다.</p>
      <ul class="focus-list">
        ${listHtml}
      </ul>
    `;
  }
}

// ============================
// 이벤트 바인딩
// ============================
if (startBtn) {
  startBtn.addEventListener("click", () => {
    showPage("surveyPage");
    currentStep = 0;
    updateStepView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentStep <= 0) return;
    currentStep -= 1;
    updateStepView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    // 현재 스텝 검증
    if (!validateStep(currentStep)) return;

    if (currentStep === STEP_COUNT - 1) {
      // 마지막 스텝 → 결과 계산
      calculateResults();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      currentStep += 1;
      updateStepView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

if (retryBtn) {
  retryBtn.addEventListener("click", () => {
    // 모든 선택 초기화
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (yes) yes.checked = false;
      if (no) no.checked = false;
    }
    currentStep = 0;
    updateStepView();
    showPage("introPage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
