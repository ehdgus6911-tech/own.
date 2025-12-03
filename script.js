// ======================================
// OWN. 자기관리 티어 테스트 스크립트
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // 기본 설정
  // -------------------------------
  const TOTAL_QUESTIONS = 60;
  const QUESTIONS_PER_STEP = 10;
  const TOTAL_STEPS = 6;

  const categories = [
    { id: "skin", name: "피부 / 외모" },
    { id: "hair", name: "헤어" },
    { id: "style", name: "패션 / 스타일" },
    { id: "fragrance", name: "향 & 청결 습관" },
    { id: "fitness", name: "운동 / 체형" },
    { id: "detail", name: "디테일 관리" },
  ];

  // 티어 메타데이터
  const tierMeta = {
    아이언: {
      percent: "하위 20%",
      state:
        "관리라고 부르기 어려운 단계에 가까워요. 기본적인 위생 루틴조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성을 거의 느끼지 않는 구간입니다.",
      brand:
        "지금 필요한 건 멋이 아니라 ‘기본 정리’입니다. 세안·보습·샤워·빨래 같은 생활 루틴부터 가볍게 시작해보세요.",
    },
    브론즈: {
      percent: "하위 40%",
      state:
        "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하기엔 부족한 단계입니다. 어디서부터 시작해야 할지 막막한 구간이에요.",
      brand:
        "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리의 기준을 만들어 보세요.",
    },
    실버: {
      percent: "중위 20~60%",
      state:
        "기본 위생·기초 관리는 하지만 꾸준함과 디테일이 부족해, 관리를 ‘시작한 사람의 초입’에 머문 상태입니다.",
      brand:
        "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 하나 만드는 순간부터 변화가 시작됩니다.",
    },
    골드: {
      percent: "상위 30%",
      state:
        "관리를 시작한 티는 나지만, 깊이와 일관성은 아직 아쉬운 단계입니다. 루틴과 밸런스를 잡으면 바로 한 단계 올라갈 수 있어요.",
      brand:
        "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해질수록 A급 매력이 만들어집니다.",
    },
    플래티넘: {
      percent: "상위 15%",
      state:
        "누가 봐도 ‘관리하는 사람’이라는 인상이 생긴 단계입니다. 다만 루틴의 논리·취향·전문성은 아직 더 쌓을 수 있어요.",
      brand:
        "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각과 무드를 키워보세요.",
    },
    다이아: {
      percent: "상위 10%",
      state:
        "루틴이 안정적이고 디테일도 살아 있어 ‘관리 잘한다’는 말을 듣는 단계입니다. 약한 한두 영역만 보완해도 바로 상위권입니다.",
      brand:
        "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 좇기보다, 나만의 색과 스타일을 더 선명하게 만들어 보세요.",
    },
    마스터: {
      percent: "상위 8%",
      state:
        "피부, 향, 스타일, 체형 등 대부분의 영역이 루틴 → 습관으로 안정적으로 굴러가는 단계입니다. 주변에서 조언을 구하는 사람도 생겼을 거예요.",
      brand:
        "관리의 목적을 잊지 마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박보다, 지속 가능한 나만의 리듬을 찾는 데 있습니다.",
    },
    그랜드마스터: {
      percent: "상위 3%",
      state:
        "피부·스타일·향·운동·디테일까지 어느 하나 빠지지 않는 수준 높은 관리 루틴을 가진 단계입니다. 주변에서 ‘관리 기준’으로 보는 사람입니다.",
      brand:
        "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 할 때입니다. 관리는 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
    },
    챌린저: {
      percent: "상위 1%",
      state:
        "자기관리의 정점에 가까운 단계입니다. 외적인 부분뿐 아니라 라이프스타일까지 체계적으로 정리된 사람입니다.",
      brand:
        "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기·매력·라이프스타일’을 완성하는 것입니다.",
    },
  };

  // -------------------------------
  // 요소 선택
  // -------------------------------
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

  const surveyProgressBar = document.getElementById("surveyProgressBar");

  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  let currentStep = 1;

  // ======================================
  // 점수(0~60) → 티어 변환
  // ======================================
  function scoreToTier(score) {
    const s = Math.round(score); // 안전하게 반올림

    if (s <= 8) return "아이언"; // 1–8
    if (s <= 21) return "브론즈"; // 9–21
    if (s <= 34) return "실버"; // 22–34
    if (s <= 39) return "골드"; // 35–39
    if (s <= 45) return "플래티넘"; // 40–45
    if (s <= 50) return "다이아"; // 46–50
    if (s <= 53) return "마스터"; // 51–53
    if (s <= 57) return "그랜드마스터"; // 54–57
    return "챌린저"; // 58–60
  }

  // ======================================
  // 진행 바 업데이트 (0~100%)
  // ======================================
  function updateProgressBar() {
    if (!surveyProgressBar || !surveyForm) return;

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
    surveyProgressBar.style.width = `${ratio}%`;
  }

  // ======================================
  // 페이지 전환
  // ======================================
  function showStep(step) {
    if (step < 1) step = 1;
    if (step > TOTAL_STEPS) step = TOTAL_STEPS;
    currentStep = step;

    questionPages.forEach((page) => {
      const pageStep = Number(page.dataset.step);
      page.classList.toggle("hidden", pageStep !== currentStep);
    });

    if (stepIndicator) {
      stepIndicator.textContent = `${currentStep} / ${TOTAL_STEPS}단계`;
    }

    if (prevBtn) prevBtn.disabled = currentStep === 1;
    if (nextBtn)
      nextBtn.classList.toggle("hidden", currentStep === TOTAL_STEPS);
    if (submitBtn)
      submitBtn.classList.toggle("hidden", currentStep !== TOTAL_STEPS);

    updateProgressBar();
  }

  // 현재 페이지 문항 체크
  function validateStep(step) {
    const page = document.querySelector(
      `.question-page[data-step="${step}"]`
    );
    if (!page) return true;

    const radios = Array.from(
      page.querySelectorAll('input[type="radio"]')
    );
    const names = [...new Set(radios.map((r) => r.name))];

    for (const name of names) {
      const checked = page.querySelector(`input[name="${name}"]:checked`);
      if (!checked) {
        const num = name.replace("q", "");
        alert(`${num}번 문항에 답변해주세요.`);
        return false;
      }
    }
    return true;
  }

  // ======================================
  // 전체 결과 계산
  // ======================================
  function collectResults() {
    let totalScore = 0;
    const missing = [];
    const categoryScores = new Array(TOTAL_STEPS).fill(0);

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(
        `input[name="q${i}"][value="1"]:checked`
      );
      const no = document.querySelector(
        `input[name="q${i}"][value="0"]:checked`
      );

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
    const overallTier = scoreToTier(totalScore);

    const categoryResults = categories.map((cat, idx) => {
      const score = categoryScores[idx]; // 0~10
      const ratio = (score / QUESTIONS_PER_STEP) * 100; // %
      const scaledScore =
        (score / QUESTIONS_PER_STEP) * TOTAL_QUESTIONS; // 0~60로 환산
      const tier = scoreToTier(scaledScore);

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
        tier: overallTier,
      },
      categories: categoryResults,
    };
  }

  // ======================================
  // 결과 렌더링
  // ======================================
  function renderResults(result) {
    const overall = result.overall;
    const meta = tierMeta[overall.tier] || tierMeta["브론즈"];

    // 상대적으로 약한 카테고리 (전체 비율보다 10%p 낮은 곳)
    const weak = result.categories.filter(
      (cat) => cat.ratio < overall.ratio - 10
    );
    const weakIds = weak.map((c) => c.id);

    // 전체 카드
    overallBox.innerHTML = `
      <div class="overall-card">
        <div class="overall-header">
          <div class="tier-main">
            <span class="tier-name">${overall.tier}</span>
            <span class="tier-percent">${meta.percent}</span>
          </div>
          <div class="overall-score">
            전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다. 
            (${overall.score} / ${overall.max} · ${overall.ratio.toFixed(1)}%)
          </div>
        </div>
        <div class="overall-desc">
          <p class="state-text">${meta.state}</p>
          <p class="brand-title">OWN.이 전하는 메시지</p>
          <p class="brand-text">${meta.brand}</p>
          ${
            weak.length > 0
              ? `<p class="weak-msg"><strong>특히 보완하면 좋은 영역:</strong> ${weak
                  .map((c) => c.name)
                  .join(", ")}</p>`
              : `<p class="weak-msg">6개 영역이 전체적으로 균형 있게 관리되고 있습니다.</p>`
          }
        </div>
      </div>
    `;

    // 카테고리별 리스트
    const catItems = result.categories
      .map((cat) => {
        const isWeak = weakIds.includes(cat.id);
        const itemClass = isWeak
          ? "category-item weak"
          : "category-item";

        return `
        <li class="${itemClass}">
          <div class="cat-main">
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
          </div>
          <div class="cat-side">
            <div class="cat-tier">${cat.tier}</div>
            <div class="cat-ratio">${cat.ratio.toFixed(1)}%</div>
          </div>
        </li>
      `;
      })
      .join("");

    catBox.innerHTML = `<ul class="category-list">${catItems}</ul>`;
  }

  // ======================================
  // 설문 초기화
  // ======================================
  function resetSurvey() {
    if (!surveyForm) return;
    const inputs = surveyForm.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = false;
    });

    updateProgressBar();
    showStep(1);
  }

  // ======================================
  // 이벤트 바인딩
  // ======================================

  // 시작하기
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      introSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      updateProgressBar();
    });
  }

  // 이전 / 다음 페이지
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;
      showStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 결과 보기
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;

      const result = collectResults();
      if (result.error) {
        const firstMissing = result.missing[0];
        const pageIndex = Math.floor((firstMissing - 1) / QUESTIONS_PER_STEP) + 1;
        alert(
          `답변하지 않은 문항이 있습니다.\n\n첫 누락 문항: ${firstMissing}번\n해당 페이지로 이동합니다.`
        );
        showStep(pageIndex);
        return;
      }

      renderResults(result);
      surveySection.classList.add("hidden");
      resultSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 다시 하기
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      resetSurvey();
      resultSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 라디오 클릭마다 진행도 업데이트
  if (surveyForm) {
    const allRadios = surveyForm.querySelectorAll('input[type="radio"]');
    allRadios.forEach((input) => {
      input.addEventListener("change", updateProgressBar);
    });
  }

  // 초기 상태 세팅
  showStep(1);
  updateProgressBar();
});
