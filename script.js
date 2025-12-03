// ===============================
//  티어 판정 함수 (0~60점 기준)
// ===============================
function scoreToTier(score) {
  if (score <= 8) return "아이언";
  if (score <= 21) return "브론즈";
  if (score <= 34) return "실버";
  if (score <= 40) return "골드";
  if (score <= 45) return "플래티넘";
  if (score <= 50) return "다이아";
  if (score <= 53) return "마스터";
  if (score <= 57) return "그랜드마스터";
  return "챌린저";
}

// ===============================
//  티어별 메타 정보
// ===============================
const tierMeta = {
  아이언: {
    code: "IRON",
    rank: "하위 20%",
    status:
      "관리라고 부르기 어려운 단계에 가까워요. 기본적인 위생 루틴(세안, 보습, 향, 체모)조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성이 거의 없는 구간입니다.",
    brand:
      "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’입니다."
  },
  브론즈: {
    code: "BRONZE",
    rank: "하위 40%",
    status:
      "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하기에는 부족한 단계입니다. 어디서부터 시작해야 할지 막연한 구간이에요.",
    brand:
      "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리."
  },
  실버: {
    code: "SILVER",
    rank: "평균(중위 20~60%)",
    status:
      "기본 위생·기초 관리는 하지만, 꾸준함과 디테일이 부족해 ‘관리한다’고 보긴 애매한 단계예요. 관리를 시작한 사람의 초입에 머문 상태입니다.",
    brand:
      "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 만들 때 변화가 시작됩니다."
  },
  골드: {
    code: "GOLD",
    rank: "상위 30%",
    status:
      "관리를 시작한 티는 확실하지만 깊이·일관성·디테일은 아직 아쉬운 단계입니다. 영역별 밸런스를 잡으면 한 단계 더 상승할 수 있어요.",
    brand:
      "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다."
  },
  플래티넘: {
    code: "PLATINUM",
    rank: "상위 15%",
    status:
      "어느 항목을 봐도 ‘관리한다’는 이미지가 확실하게 잡힌 단계입니다. 다만 루틴의 논리·취향·감성 측면은 조금 더 다듬을 여지가 있습니다.",
    brand:
      "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다."
  },
  다이아: {
    code: "DIAMOND",
    rank: "상위 10%",
    status:
      "루틴이 안정적이고 디테일도 살아 있어 주변에서 ‘관리 잘한다’는 말을 듣는 단계입니다. 이제는 정답보다 나만의 색을 입힐 차례예요.",
    brand:
      "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고 ‘나만의 색’을 찾아보세요."
  },
  마스터: {
    code: "MASTER",
    rank: "상위 8%",
    status:
      "피부, 향, 스타일, 체형 등 대부분의 영역이 루틴 → 습관으로 안정적으로 굴러가는 단계입니다. 이미 주변에서 ‘관리 잘한다’는 인정을 받는 사람입니다.",
    brand:
      "관리의 목적을 잊지마세요, 목적은 남과 비교하며 ‘완벽함’을 찾는 강박보다, 지속 가능한 나만의 리듬을 찾는 것입니다."
  },
  그랜드마스터: {
    code: "GRANDMASTER",
    rank: "상위 3%",
    status:
      "어느 하나 빠지지 않는 수준 높은 관리 루틴을 가진, 거의 완성형 자기관리자에 가깝습니다. 주변에서 ‘관리의 기준’으로 여겨지는 단계예요.",
    brand:
      "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리가 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다."
  },
  챌린저: {
    code: "CHALLENGER",
    rank: "상위 1%",
    status:
      "삶 전반이 체계적이고 아름답게 정돈된, 자기관리의 정점에 가까운 단계입니다. 외적·내적 루틴 모두 높은 수준에서 유지되고 있습니다.",
    brand:
      "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기와 매력’, ‘나만의 라이프스타일’을 완성하는 것입니다."
  }
};

// ===============================
//  카테고리 정의
// ===============================
const categoryDefs = [
  { id: "skin", name: "피부 / 외모", start: 1, end: 10 },
  { id: "hair", name: "헤어", start: 11, end: 20 },
  { id: "style", name: "패션 / 스타일", start: 21, end: 30 },
  { id: "scent", name: "향 & 청결 습관", start: 31, end: 40 },
  { id: "fitness", name: "운동 / 체형", start: 41, end: 50 },
  { id: "detail", name: "디테일 관리", start: 51, end: 60 }
];

// ==============================
// 전체 점수 & 카테고리 점수 계산
// ==============================
function collectResults() {
  const totalQuestions = 60;
  let totalScore = 0;

  // 전체 문항 체크 (미답변 있으면 바로 리턴)
  for (let i = 1; i <= totalQuestions; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      return { error: true, missing: i };
    }

    if (yes) totalScore += 1;
  }

  const overallRatio = (totalScore / totalQuestions) * 100;
  const overallTier = scoreToTier(totalScore);

  // 카테고리 정의 (번호 구간)
  const categoryDefs = [
    { id: "skin", name: "피부 / 외모", start: 1, end: 10 },
    { id: "hair", name: "헤어", start: 11, end: 20 },
    { id: "style", name: "패션 / 스타일", start: 21, end: 30 },
    { id: "scent", name: "향 & 청결 습관", start: 31, end: 40 },
    { id: "fitness", name: "운동 / 체형", start: 41, end: 50 },
    { id: "detail", name: "디테일 관리", start: 51, end: 60 },
  ];

  const categories = categoryDefs.map((def) => {
    let score = 0;

    for (let i = def.start; i <= def.end; i++) {
      const yes = document.querySelector(
        `input[name="q${i}"][value="1"]:checked`
      );
      if (yes) score += 1;
    }

    const max = def.end - def.start + 1; // 보통 10
    const ratio = (score / max) * 100;

    // ★ 핵심: 10문항 점수를 60점 만점 기준으로 환산해서 티어 계산
    const scaledScore = Math.round((score / max) * 60);
    const tier = scoreToTier(scaledScore);

    return {
      id: def.id,
      name: def.name,
      score,
      max,
      ratio,
      tier,
    };
  });

  return {
    error: false,
    overall: {
      score: totalScore,
      max: totalQuestions,
      ratio: overallRatio,
      tier: overallTier,
    },
    categories,
  };
}

// ==============================
// 결과 렌더링
// ==============================
function renderResults(result) {
  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  if (!overallBox || !catBox) return;

  const overall = result.overall;
  const categories = result.categories;

  // tierMeta 없을 때도 에러 안 나게 보호
  const meta =
    typeof tierMeta !== "undefined" && tierMeta[overall.tier]
      ? tierMeta[overall.tier]
      : {};

  // 티어별 아이콘
  const tierIcons = {
    아이언: "🛠️",
    브론즈: "🥉",
    실버: "🥈",
    골드: "🥇",
    플래티넘: "💎",
    다이아: "💠",
    마스터: "🎖️",
    그랜드마스터: "🏅",
    챌린저: "👑",
  };

  const tierLabel = `${tierIcons[overall.tier] || ""} ${overall.tier}`.trim();
  const overallScoreText = `${overall.score} / ${overall.max}`;
  const ratioText = `${overall.ratio.toFixed(1)}%`;

  // 전체 비율보다 10%p 이상 낮은 카테고리 = 약한 영역
  const weak = categories.filter(
    (cat) => cat.ratio < overall.ratio - 10
  );

  let weakMessageHtml = "";
  if (weak.length > 0) {
    const names = weak.map((c) => c.name).join(" · ");
    weakMessageHtml = `
      <p class="weak-msg">
        <strong>특히 약한 영역:</strong> ${names}<br />
        이 영역부터 루틴을 정비해 주면 전체 티어가 가장 빠르게 올라갑니다.
      </p>
    `;
  } else {
    weakMessageHtml = `
      <p class="weak-msg">
        6개 영역이 비교적 균형 있게 관리되고 있습니다.<br />
        지금의 리듬을 유지하면서, 나만의 스타일과 취향을 더 선명하게 만들어 보세요.
      </p>
    `;
  }

  // 상단 전체 티어 카드
  overallBox.innerHTML = `
    <div class="overall-card">
      <div class="overall-header">
        <div class="overall-tier-row">
          <span class="overall-tier-text">${tierLabel}</span>
          <span class="overall-tier-percent">${meta.percent || ""}</span>
        </div>
        <div class="overall-score">
          <strong>${overallScoreText}</strong>
          <span class="sub">(${overall.score} / ${
    overall.max
  } 문항 관리 중 · ${ratioText})</span>
        </div>
      </div>
      <div class="overall-desc">
        ${meta.status ? `<p class="tier-status">${meta.status}</p>` : ""}
        ${meta.message ? `<p class="tier-message">${meta.message}</p>` : ""}
        ${
          meta.brand
            ? `<p class="tier-brand"><strong>OWN.이 전하는 메시지</strong><br />${meta.brand}</p>`
            : ""
        }
        ${weakMessageHtml}
      </div>
    </div>
  `;

  // 카테고리별 리스트
  const catItemsHtml = categories
    .map((cat) => {
      const isWeak = weak.some((w) => w.id === cat.id);
      const catTierLabel = `${
        tierIcons[cat.tier] || ""
      } ${cat.tier}`.trim();
      const ratio = cat.ratio.toFixed(1);

      return `
        <li class="category-item${isWeak ? " weak" : ""}" ${
        isWeak ? 'style="border-color:#ff4d4f;"' : ""
      }>
          <div class="cat-main">
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
          </div>
          <div class="cat-side">
            <div class="cat-tier">${catTierLabel}</div>
            <div class="cat-ratio">${ratio}%</div>
          </div>
        </li>
      `;
    })
    .join("");

  catBox.innerHTML = `<ul class="category-list">${catItemsHtml}</ul>`;
}
  // === 상단 전체 티어 카드 ===
  overallBox.innerHTML = `
    <div class="overall-card">
      <div class="overall-header">
        <div class="overall-tier-line">
          <span class="overall-tier-icon">${getTierIcon(overall.tier)}</span>
          <span class="overall-tier-label">${overall.tier}</span>
          <span class="overall-tier-percent">${meta.percent || ""}</span>
        </div>
        <div class="overall-score-line">
          전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
          <span class="overall-score-sub">(${overall.score} / ${overall.max} · ${overallRatio.toFixed(1)}%)</span>
        </div>
      </div>
      <div class="overall-body">
        ${meta.status ? `<p class="overall-status">${meta.status}</p>` : ""}
        <div class="overall-brand-block">
          <p class="overall-brand-title">OWN.이 전하는 메시지</p>
          ${meta.brand ? `<p class="overall-brand">${meta.brand}</p>` : ""}
          ${meta.advice ? `<p class="overall-advice">${meta.advice}</p>` : ""}
        </div>
      </div>
    </div>
  `;

  // === 영역별 티어 카드 ===
  const categoriesHtml = result.categories.map((cat) => {
    const catMeta = TIER_META[cat.tier] || {};
    // 👉 평균(전체 비율)보다 낮으면 약점으로 판단해 빨간 테두리
    const isWeak = cat.ratio < overallRatio;
    const rowClass = isWeak ? "category-row category-row-weak" : "category-row";

    return `
      <div class="${rowClass}">
        <div class="cat-left">
          <div class="cat-title">${cat.label}</div>
          <div class="cat-sub">${cat.score} / ${cat.max} 문항 관리 중</div>
        </div>
        <div class="cat-right">
          <div class="cat-tier-chip">
            <span class="cat-tier-icon">${getTierIcon(cat.tier)}</span>
            <span class="cat-tier-label">${cat.tier}</span>
            <span class="cat-tier-percent">${cat.ratio.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  catBox.innerHTML = categoriesHtml;

  // 결과 섹션 보이기
  resultSection.classList.remove("hidden");
}

// ===============================
//  설문 리셋
// ===============================
function resetSurvey() {
  const inputs = document.querySelectorAll(
    '#surveyForm input[type="radio"]'
  );
  inputs.forEach((input) => {
    input.checked = false;
  });
}

// ===============================
//  페이지 & 네비게이션 제어
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const introPage = document.getElementById("introPage");
  const surveyPage = document.getElementById("surveyPage");
  const resultPage = document.getElementById("resultPage");

  const startBtn = document.getElementById("startBtn");
  const prevStepBtn = document.getElementById("prevStepBtn");
  const nextStepBtn = document.getElementById("nextStepBtn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  const steps = Array.from(document.querySelectorAll(".step"));
  const totalSteps = steps.length;
  let currentStep = 1;

  const progressLabel = document.getElementById("progressLabel");
  const progressFill = document.getElementById("progressFill");

  function showStep(step) {
    currentStep = step;
    steps.forEach((el, index) => {
      el.classList.toggle("hidden", index + 1 !== step);
    });

    // progress
    progressLabel.textContent = `${step} / ${totalSteps}`;
    const percent = (step / totalSteps) * 100;
    progressFill.style.width = `${percent}%`;

    // nav 버튼 상태
    prevStepBtn.disabled = step === 1;
    if (step === totalSteps) {
      nextStepBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextStepBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep(step) {
    const stepEl = steps[step - 1];
    const radios = stepEl.querySelectorAll('input[type="radio"]');
    const names = Array.from(new Set(Array.from(radios).map((r) => r.name)));
    for (const name of names) {
      const checked = stepEl.querySelector(`input[name="${name}"]:checked`);
      if (!checked) return false;
    }
    return true;
  }

  // 시작 버튼
  startBtn.addEventListener("click", () => {
    introPage.classList.add("hidden");
    surveyPage.classList.remove("hidden");
    showStep(1);
  });

  // 다음
  nextStepBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
      return;
    }
    if (currentStep < totalSteps) {
      showStep(currentStep + 1);
    }
  });

  // 이전
  prevStepBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
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
      const pageIndex = Math.floor((result.missing - 1) / 10) + 1;
      alert(`답하지 않은 문항이 있습니다. (문항 ${result.missing}번)`);
      showStep(pageIndex);
      return;
    }

    renderResults(result);
    surveyPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 다시 테스트
  retryBtn.addEventListener("click", () => {
    resetSurvey();
    resultPage.classList.add("hidden");
    introPage.classList.remove("hidden");
    showStep(1);
  });
});
