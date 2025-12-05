// =========================================
//  OWN. 자기관리 티어 테스트 스크립트
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_QUESTIONS = 60;
  const QUESTIONS_PER_STEP = 10;
  const TOTAL_STEPS = 6;

  // 버튼 & 섹션
  const startBtn = document.getElementById("startBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  const introSection = document.getElementById("introSection");
  const surveySection = document.getElementById("surveySection");
  const resultSection = document.getElementById("resultSection");

  const stepIndicator = document.getElementById("stepIndicator");
  const surveyForm = document.getElementById("surveyForm");
  const questionPages = document.querySelectorAll(".question-page");
  const progressBar = document.getElementById("surveyProgressBar");

  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  let currentStep = 1;

  // 카테고리 정보 (각 10문항)
  const categories = [
    { id: "skin", name: "피부 / 외모" },       // 1~10
    { id: "hair", name: "헤어" },              // 11~20
    { id: "style", name: "패션 / 스타일" },    // 21~30
    { id: "scent", name: "향 & 청결 습관" },    // 31~40
    { id: "fitness", name: "운동 / 체형" },    // 41~50
    { id: "detail", name: "디테일 관리" }      // 51~60
  ];

  // 티어 메타 정보 (요약본) – 텍스트는 이전에 맞춰둔 버전 그대로 축약
  const tierMeta = {
    iron: {
      emoji: "🪨",
      label: "아이언",
      range: "1–8점",
      percentile: "하위 20%",
      current:
        "관리라고 부르기 어려운 단계에 가까워요. 기본적인 위생 루틴조차 일정하지 않고, 관리 자체에 대한 필요성을 거의 느끼지 않는 구간입니다.",
      message:
        "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’입니다.",
      problems: [
        "“관리? 그게 왜 필요해?”라는 무관심",
        "피부 · 헤어 · 향 · 체형이 전체적으로 흐트러짐",
        "외모 변화 욕구는 있지만 방법을 모름"
      ],
      actions: [
        "세안 · 보습 · 샤워 루틴을 매일 1회 정착시키기",
        "미용실, 손톱정리, 빨래 같은 생활 루틴 먼저 잡기",
        "향 · 패션 · 운동은 그 다음 단계로 천천히 시작하기"
      ],
      summary: "기초가 잡히면 변화 속도가 가장 빠른 구간입니다."
    },
    bronze: {
      emoji: "🥉",
      label: "브론즈",
      range: "9–21점",
      percentile: "하위 40%",
      current:
        "기본적인 위생은 있지만, 외모 · 스타일 · 체형을 ‘관리한다’고 말하기엔 부족한 단계입니다. 관리를 어떻게 시작해야 할지 막연한 구간이에요.",
      message:
        "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리.",
      problems: [
        "관리 루틴이 들쭉날쭉해 꾸준함이 부족함",
        "피부와 헤어를 거의 ‘운’에 맡기는 경우가 많음",
        "자기 이해(피부타입, 모질, 체형)가 낮음"
      ],
      actions: [
        "피부타입 · 모질 · 체형부터 간단히 정리해보기",
        "세안 · 보습 · 선크림 3스텝 루틴 만들기",
        "미용실은 1달 주기로 고정하고, 운동은 주 1회라도 땀나는 활동 추가하기"
      ],
      summary: "‘기초를 아는 것’만으로도 관리의 난이도가 확 내려가는 구간입니다."
    },
    silver: {
      emoji: "🥈",
      label: "실버",
      range: "22–34점",
      percentile: "평균 (중위 20~60%)",
      current:
        "기본 위생과 기초 관리는 하지만, 꾸준함과 디테일이 부족해 ‘관리한다’고 보긴 애매한 단계예요. 관리를 시작한 사람의 초입에 머문 상태입니다.",
      message:
        "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나에게 맞는 최소 한 가지 ‘시그니처’를 만들 때 변화가 시작됩니다.",
      problems: [
        "피부 · 헤어 · 향 · 패션 중 최소 2개 영역이 취약",
        "필요할 때만 하는 관리에 머무름",
        "기초는 알지만 응용이 부족하고, 유행에 쉽게 흔들림"
      ],
      actions: [
        "피부 하나만이라도 올인해 변화 경험 쌓기",
        "나와 잘 맞는 헤어스타일 1개 확립",
        "기본템 + 액세서리 하나로 룩 완성도 올려보기",
        "향 1개는 ‘나의 시그니처 향’으로 고정하기"
      ],
      summary: "‘평균’에서 한 발만 나와도 사람들은 바로 알아봅니다."
    },
    gold: {
      emoji: "🥇",
      label: "골드",
      range: "35–40점",
      percentile: "상위 30%",
      current:
        "관리를 시작한 티는 확실히 나지만, 깊이와 일관성, 디테일은 아직 아쉬운 단계입니다. 밸런스를 잡으면 바로 한 단계 도약할 수 있어요.",
      message:
        "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다.",
      problems: [
        "꾸준히는 하지만 섬세함이 부족함",
        "피부 · 헤어 · 패션 중 한두 영역이 유독 발목을 잡음",
        "향이나 디테일 관리에 소홀한 편"
      ],
      actions: [
        "나에게 어울리는 1착 코디 · 헤어 · 향 세트를 확립하기",
        "피부 루틴이나 운동 루틴 중 하나만이라도 강하게 가져가기",
        "손 · 발 · 눈썹 등 디테일 관리 시작하기"
      ],
      summary:
        "‘관리를 한다’는 이미지에서 ‘저 사람은 좀 다르다’는 인상으로 넘어가는 구간입니다."
    },
    platinum: {
      emoji: "💎",
      label: "플래티넘",
      range: "41–45점",
      percentile: "상위 15%",
      current:
        "어디서 보더라도 ‘관리하는 사람’이라는 인상이 분명합니다. 다만 루틴의 논리나 취향, 깊이에서 아직 업그레이드 여지가 있어요.",
      message:
        "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다.",
      problems: [
        "루틴은 좋은데 본인만의 체계가 덜 잡힘",
        "‘잘하는 법칙’ 위주로만 움직여 취향이 약하게 드러남",
        "운동 · 패션 · 향 중 한 영역은 아직 애매함"
      ],
      actions: [
        "나만의 룩 코어(예: 미니멀 + 워싱 데님)를 정리해보기",
        "헤어 스타일링을 ‘재현 가능’에서 ‘변형 가능’ 단계로 올리기",
        "상황별 향 2~3개 로테이션 구성하기"
      ],
      summary: "이제는 ‘괜찮은 사람’에서 ‘매력이 분명한 사람’으로 넘어갈 차례입니다."
    },
    diamond: {
      emoji: "💠",
      label: "다이아몬드",
      range: "46–50점",
      percentile: "상위 10%",
      current:
        "루틴이 안정적이고 디테일도 살아 있어, 주변에서 ‘관리 잘한다’는 말을 자주 듣는 단계입니다.",
      message:
        "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 다이아몬드는 자기 확립의 시작점입니다.",
      problems: [
        "디테일에 과하게 집착해 피로도가 높아짐",
        "루틴이 삶을 잠식하기 쉬운 구조",
        "향 · 패션에서 자기 색이 약한 경우가 많음"
      ],
      actions: [
        "취향 기반 스타일링으로 업그레이드하기",
        "시그니처 향 + 취향 향 조합 만들기",
        "디테일 루틴 일부를 줄이고, 즐거운 관리 중심으로 재구성하기"
      ],
      summary:
        "‘완벽함’보다 ‘나답다’는 말이 더 자주 들리도록 방향을 살짝 틀어보세요."
    },
    master: {
      emoji: "🎖",
      label: "마스터",
      range: "50–53점",
      percentile: "상위 8%",
      current:
        "피부, 향, 스타일, 체형 등 대부분의 영역이 ‘루틴 → 습관’으로 안정적으로 굴러가는 단계입니다. 주변에서 도움을 요청받는 경우도 많을 거예요.",
      message:
        "관리의 목적을 잊지 마세요. 남과 비교하며 ‘더 잘해야 한다’는 강박보다, 지금의 나에게 맞는 리듬을 찾는 것이 진짜 OWN입니다.",
      problems: [
        "스스로를 더 채찍질하며 부담감을 키움",
        "관리를 ‘해야 하는 일’로 느끼기 시작함",
        "루틴이 나를 위한 것보다 티어를 위한 것으로 바뀌기 쉬움"
      ],
      actions: [
        "의미 없는 루틴은 과감히 버리기",
        "“왜 이걸 하는가?”를 한 번씩 되돌아보기",
        "내 삶에 맞는 지속 가능한 루틴으로 다듬기"
      ],
      summary: "마스터의 목표는 완성이 아니라 ‘지속성’입니다."
    },
    grandmaster: {
      emoji: "🥇",
      label: "그랜드마스터",
      range: "54–57점",
      percentile: "상위 3%",
      current:
        "피부, 스타일, 향, 운동, 디테일까지 어느 하나 빠지지 않는 수준 높은 관리 루틴을 갖춘 단계입니다. 주변에서 ‘관리의 기준’으로 여겨집니다.",
      message:
        "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리가 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
      problems: [
        "관리 자체에 중독되어 루틴을 줄이기 어려움",
        "본질보다 디테일에 집착하기 쉬움",
        "취향 · 감성 관리가 상대적으로 약해질 수 있음"
      ],
      actions: [
        "취향 · 감성 · 라이프스타일 관리에 투자하기",
        "머리부터 패션까지 나만의 스타일 가이드 정리하기",
        "루틴을 줄이고, 나를 드러내는 관리 비중을 늘리기"
      ],
      summary:
        "‘관리하는 사람’을 넘어서 ‘자신만의 스타일을 가진 사람’으로 완전히 넘어갈 시점입니다."
    },
    challenger: {
      emoji: "👑",
      label: "챌린저",
      range: "58–60점",
      percentile: "상위 1%",
      current:
        "외적 · 내적 루틴 모두 매우 높은 수준으로 정리된, 자기관리의 정점에 가까운 단계입니다. 주변에서 롤모델처럼 여겨질 가능성이 높아요.",
      message:
        "이제는 더 채워 넣는 것보다 더 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기와 매력’을 완성하는 것입니다.",
      problems: [
        "디테일에 과몰입해, 완벽하지 않으면 불안해지는 심리",
        "루틴에 시간이 과도하게 묶여버릴 수 있음",
        "휴식과 여유가 줄어들 위험"
      ],
      actions: [
        "관리보다 내면 · 취향 · 감성 루틴을 정립하기",
        "패션 · 향 · 라이프스타일을 나만의 시그니처로 만들기",
        "관리 시간을 줄이고, 나다운 것에 더 많은 시간을 쓰기"
      ],
      summary:
        "이제 당신에게 필요한 건 ‘더 열심히’가 아니라 ‘더 나답게’입니다."
    }
  };

  // -----------------------------------------
  // 티어 계산
  // -----------------------------------------
  function scoreToTier(score) {
    if (score <= 8) return "iron";
    if (score <= 21) return "bronze";
    if (score <= 34) return "silver";
    if (score <= 40) return "gold";
    if (score <= 45) return "platinum";
    if (score <= 50) return "diamond";
    if (score <= 53) return "master";
    if (score <= 57) return "grandmaster";
    return "challenger";
  }

  // -----------------------------------------
  // 페이지 전환
  // -----------------------------------------
  function showStep(step) {
    currentStep = step;

    questionPages.forEach((page) => {
      const pageStep = Number(page.dataset.step);
      page.classList.toggle("hidden", pageStep !== step);
    });

    // 상단 "1 / 6페이지" 텍스트
    if (stepIndicator) {
      stepIndicator.textContent = `${step} / ${TOTAL_STEPS}`;
    }

    // 버튼 숨김 / 표시
    if (step === 1) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (step === TOTAL_STEPS) {
      nextBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }

    updateProgressBar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // -----------------------------------------
  // 현재 페이지 문항 체크 확인
  // -----------------------------------------
  function validateStep(step) {
    const startIdx = (step - 1) * QUESTIONS_PER_STEP + 1;
    const endIdx = step * QUESTIONS_PER_STEP;

    for (let i = startIdx; i <= endIdx; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (!(yes && yes.checked) && !(no && no.checked)) {
        return false;
      }
    }
    return true;
  }

  // -----------------------------------------
  // 전체 결과 계산
  // -----------------------------------------
  function collectResults() {
    let totalScore = 0;
    const categoryScores = [0, 0, 0, 0, 0, 0];
    const missing = [];

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);

      if (!(yes && yes.checked) && !(no && no.checked)) {
        missing.push(i);
        continue;
      }

      if (yes && yes.checked) {
        totalScore += 1;
        const catIndex = Math.floor((i - 1) / QUESTIONS_PER_STEP);
        categoryScores[catIndex] += 1;
      }
    }

    if (missing.length > 0) {
      return { error: true, missing };
    }

    const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
    const overallTier = scoreToTier(totalScore);

    const categoryResults = categories.map((cat, idx) => {
      const score = categoryScores[idx];
      const ratio = (score / QUESTIONS_PER_STEP) * 100;

      // 🔥 10점 만점을 60점 만점으로 환산해서 티어 계산
      const scaledScore = score * 6;
      const tier = scoreToTier(scaledScore);

      return {
        id: cat.id,
        name: cat.name,
        score,
        max: QUESTIONS_PER_STEP,
        ratio,
        tier
      };
    });

    return {
      error: false,
      overall: {
        score: totalScore,
        max: TOTAL_QUESTIONS,
        ratio: overallRatio,
        tier: overallTier
      },
      categories: categoryResults
    };
  }

  // -----------------------------------------
  // 결과 렌더링
  // -----------------------------------------
  function renderResults(result) {
    const overall = result.overall;
    const meta = tierMeta[overall.tier];

    const overallScoreText = `${overall.score} / ${overall.max}`;
    const ratioText = `${overall.ratio.toFixed(1)}%`;

    // 상대적으로 약한 카테고리 찾기 (전체 비율보다 10%p 이상 낮은 영역)
    const weak = result.categories.filter(
      (cat) => cat.ratio < overall.ratio - 10
    );

    let weakSummaryText = "";
    if (weak.length > 0) {
      const names = weak.map((c) => c.name).join(" · ");
      weakSummaryText = `현재 기준으로 상대적으로 약한 영역은 <strong>${names}</strong> 입니다. 이 영역을 보완하면 전체 티어가 더 빠르게 상승할 수 있어요.`;
    } else {
      weakSummaryText =
        "모든 영역이 전체 평균과 비슷하거나 그 이상입니다. 지금의 리듬을 유지하면서, 장기적인 지속 가능성을 점검해보세요.";
    }

    const emoji = meta?.emoji || "";
    const titleLabel = meta?.label || "";
    const range = meta?.range || "";
    const percentile = meta?.percentile || "";
    const currentText = meta?.current || "";
    const messageText = meta?.message || "";
    const problems = meta?.problems || [];
    const actions = meta?.actions || [];
    const summary = meta?.summary || "";

    const problemsHtml =
      problems.length > 0
        ? `<ul class="overall-list">${problems
            .map((p) => `<li>${p}</li>`)
            .join("")}</ul>`
        : "";

    const actionsHtml =
      actions.length > 0
        ? `<ul class="overall-list">${actions
            .map((a) => `<li>${a}</li>`)
            .join("")}</ul>`
        : "";

    // 🔹 전체 결과 카드
    overallBox.innerHTML = `
      <div class="overall-card">
        <!-- 티어 헤더 (작은 그라데이션 박스) -->
        <div class="overall-tier-chip">
          <div class="overall-tier-main">
            <span class="overall-tier-emoji">${emoji}</span>
            <span class="overall-tier-title">${titleLabel}</span>
          </div>
          <div class="overall-tier-sub">
            <span>${range}</span>
            <span class="dot-separator"></span>
            <span>${percentile}</span>
          </div>
          <div class="overall-tier-score">
            ${overallScoreText}
            <span class="overall-tier-score-ratio">(${ratioText})</span>
          </div>
        </div>

        <!-- 현재 상태 -->
        <div class="overall-block">
          <h3 class="overall-block-title">🔥 현재 상태</h3>
          <p class="overall-text">
            ${currentText}
          </p>
        </div>

        <div class="overall-divider"></div>

        <!-- OWN 메시지 -->
        <div class="overall-block">
          <div class="overall-block-caption">🌿 OWN 메시지</div>
          <p class="overall-text">
            ${messageText}
          </p>
        </div>

        <div class="overall-divider"></div>

        <!-- 자주 나타나는 패턴 -->
        <div class="overall-block">
          <h3 class="overall-block-title">자주 나타나는 패턴</h3>
          ${problemsHtml}
        </div>

        <!-- 개선 방향 -->
        <div class="overall-block">
          <h3 class="overall-block-title">🎯 개선 방향</h3>
          ${actionsHtml}
          ${
            summary
              ? `<p class="overall-text overall-summary">${summary}</p>`
              : ""
          }
        </div>

        <div class="overall-divider"></div>

        <!-- 약한 영역 요약 -->
        <div class="overall-block">
          <h3 class="overall-block-title">약한 영역 요약</h3>
          <p class="overall-text">
            ${weakSummaryText}
          </p>
        </div>
      </div>
    `;

    // 🔹 카테고리 카드
    const catItems = result.categories
      .map((cat) => {
        const catTier = tierMeta[cat.tier];
        const isWeak = weak.some((w) => w.id === cat.id);

        return `
          <li class="category-card ${isWeak ? "category-card-weak" : ""}">
            <div class="category-main">
              <div class="category-name">${cat.name}</div>
              <div class="category-count">
                ${cat.score} / ${cat.max} 문항 관리 중
              </div>
            </div>
            <div class="category-side">
              <div class="category-tier">
                <span class="category-tier-emoji">${catTier?.emoji || ""}</span>
                <span class="category-tier-label">${catTier?.label || ""}</span>
              </div>
              <div class="category-ratio">${cat.ratio.toFixed(1)}%</div>
            </div>
          </li>
        `;
      })
      .join("");

    catBox.innerHTML = `
      <ul class="category-list">
        ${catItems}
      </ul>
    `;
  }

  // -----------------------------------------
  // 설문 리셋
  // -----------------------------------------
  function resetSurvey() {
    const inputs = document.querySelectorAll('#surveyForm input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = false;
    });

    currentStep = 1;
    showStep(1);
    updateProgressBar();
  }

  // -----------------------------------------
  // 진행도 바 (0~100%)
  // -----------------------------------------
  function updateProgressBar() {
    if (!progressBar) return;

    let answered = 0;
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(
        `input[name="q${i}"][value="1"]:checked`
      );
      const no = document.querySelector(
        `input[name="q${i}"][value="0"]:checked`
      );
      if (yes || no) answered += 1;
    }

    const ratio = (answered / TOTAL_QUESTIONS) * 100;
    progressBar.style.width = `${ratio}%`;
  }

  // -----------------------------------------
  // 이벤트 바인딩
  // -----------------------------------------

  // 인트로 → 설문 시작
  startBtn.addEventListener("click", () => {
    introSection.classList.add("hidden");
    surveySection.classList.remove("hidden");
    showStep(1);
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
        `답하지 않은 문항이 있습니다.\n\n첫 미응답 문항: ${firstMissing}번\n해당 페이지: ${pageIndex} 페이지`
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

  // 라디오 선택 시마다 진행도 업데이트
  surveyForm.addEventListener("change", (e) => {
    if (e.target.matches('input[type="radio"]')) {
      updateProgressBar();
    }
  });

  // 초기 상태
  showStep(1);
  updateProgressBar();
});
