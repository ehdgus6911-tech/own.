document.addEventListener("DOMContentLoaded", () => {
  const introPage = document.getElementById("introPage");
  const surveyPage = document.getElementById("surveyPage");
  const resultPage = document.getElementById("resultPage");

  const startBtn = document.getElementById("startBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");
  const stepIndicator = document.getElementById("stepIndicator");

  const steps = Array.from(document.querySelectorAll(".survey-step"));
  const overallResultBox = document.getElementById("overallResult");
  const categoryResultsBox = document.getElementById("categoryResults");

  let currentStep = 0;

  const categories = [
    { id: "skin", label: "피부 / 외모", start: 1, end: 10 },
    { id: "hair", label: "헤어", start: 11, end: 20 },
    { id: "style", label: "패션 / 스타일", start: 21, end: 30 },
    { id: "scent", label: "향 & 청결 습관", start: 31, end: 40 },
    { id: "fitness", label: "운동 / 체형", start: 41, end: 50 },
    { id: "detail", label: "디테일 관리", start: 51, end: 60 },
  ];

  // 티어 메타 정보
  const tierMeta = {
    아이언: {
      label: "아이언",
      percentile: "하위 20%",
      icon: "🥄",
      status:
        "관리라고 부르기 어려운 단계에 가까워요. 기본적인 위생 루틴(세안, 보습, 향, 체모)조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성을 크게 느끼지 않는 구간입니다.",
      brand:
        "지금 필요한 건 멋이 아니라 ‘기본’입니다. 관리의 시작은 ‘꾸미기’가 아니라 ‘정리’라는 걸 기억하세요.",
    },
    브론즈: {
      label: "브론즈",
      percentile: "하위 40%",
      icon: "🥉",
      status:
        "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하기엔 부족한 단계입니다. 관리가 왜 필요한지는 알지만, 어디서부터 시작해야 할지 막막한 구간입니다.",
      brand:
        "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하는 관리가 아니라, 나에게 맞는 관리.",
    },
    실버: {
      label: "실버",
      percentile: "평균 (중위 20~60%)",
      icon: "🥈",
      status:
        "기본 위생·기초 관리는 하고 있지만 꾸준함과 디테일이 부족해, 스스로도 ‘관리한다’고 확신하기 애매한 단계입니다. 관리를 시작한 초입에 머무르고 있어요.",
      brand:
        "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 만들 때 변화가 시작됩니다.",
    },
    골드: {
      label: "골드",
      percentile: "상위 30%",
      icon: "🥇",
      status:
        "관리를 시작한 티는 나지만, 깊이·일관성·디테일은 여전히 아쉬운 단계입니다. 영역별 밸런스와 루틴의 안정성을 잡으면 한 단계 도약할 수 있어요.",
      brand:
        "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다.",
    },
    플래티넘: {
      label: "플래티넘",
      percentile: "상위 15%",
      icon: "💎",
      status:
        "헤어·피부·패션·운동 어떤 항목을 봐도 ‘관리한다’는 이미지가 분명한 단계입니다. 기본기는 좋지만, 아직은 법칙과 정보에 의존하는 비율이 높은 편입니다.",
      brand:
        "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다.",
    },
    다이아: {
      label: "다이아",
      percentile: "상위 10%",
      icon: "💠",
      status:
        "루틴이 안정적이고 디테일도 살아 있어 주변에서 ‘관리 잘한다’는 말을 자주 듣는 단계입니다. 다만 여전히 정답을 쫓다 보니, 나만의 색이 부족할 수 있어요.",
      brand:
        "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고 ‘나만의 색’을 찾아보세요.",
    },
    마스터: {
      label: "마스터",
      percentile: "상위 8%",
      icon: "🎖",
      status:
        "피부, 향, 스타일, 체형 등 대부분의 영역이 ‘루틴 → 습관’으로 안정적으로 굴러가는 단계입니다. 일반적인 기준에서 이미 ‘관리 잘한다’는 인정을 받는 사람입니다.",
      brand:
        "관리의 목적을 잊지 마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박보다, 지속 가능한 나만의 리듬을 찾는 것입니다.",
    },
    그랜드마스터: {
      label: "그랜드마스터",
      percentile: "상위 3%",
      icon: "🏆",
      status:
        "피부, 스타일, 향, 운동, 디테일까지 어느 하나 빠지지 않는 수준의 관리 루틴을 가진 단계입니다. 주변에서 ‘관리의 기준’처럼 여겨지는 사람입니다.",
      brand:
        "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리가 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
    },
    챌린저: {
      label: "챌린저",
      percentile: "상위 1%",
      icon: "👑",
      status:
        "자기 관리의 정점에 가깝습니다. 외적·내적 루틴 모두 체계적으로 정돈되어 있고, 주변에서 롤모델처럼 바라보는 단계입니다.",
      brand:
        "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기와 매력’, ‘나만의 라이프스타일’을 완성하는 것입니다.",
    },
  };

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

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });

    currentStep = index;
    stepIndicator.textContent = `STEP ${index + 1} / ${steps.length}`;

    prevBtn.disabled = index === 0;
    prevBtn.classList.toggle("hidden", index === 0);

    const isLast = index === steps.length - 1;
    nextBtn.classList.toggle("hidden", isLast);
    submitBtn.classList.toggle("hidden", !isLast);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep(index) {
    const step = steps[index];
    const radios = step.querySelectorAll('input[type="radio"]');
    const names = [...new Set(Array.from(radios).map((r) => r.name))];

    for (const name of names) {
      const checked = step.querySelector(`input[name="${name}"]:checked`);
      if (!checked) return false;
    }
    return true;
  }

  function collectResults() {
    const answers = {};
    let totalScore = 0;

    for (let i = 1; i <= 60; i++) {
      const checked = document.querySelector(`input[name="q${i}"]:checked`);
      if (!checked) {
        return { error: true, missing: i };
      }
      const value = Number(checked.value || 0);
      answers[`q${i}`] = value;
      totalScore += value;
    }

    const overallTier = scoreToTier(totalScore);
    const overallRatio = (totalScore / 60) * 100;

    const categoryResults = categories.map((cat) => {
      let score = 0;
      for (let i = cat.start; i <= cat.end; i++) {
        score += answers[`q${i}`] || 0;
      }
      const ratio = (score / 10) * 100;
      const tier = scoreToTier(score);
      return { ...cat, score, ratio, tier };
    });

    return {
      error: false,
      totalScore,
      overallTier,
      overallRatio,
      categories: categoryResults,
    };
  }

  function renderResults(result) {
    const meta = tierMeta[result.overallTier];

    const ratioText = result.overallRatio.toFixed(1);

    overallResultBox.innerHTML = `
      <div class="overall-header">
        <div class="tier-line">
          <span class="tier-name">${meta.icon} ${meta.label}</span>
          <span class="tier-percentile">${meta.percentile}</span>
        </div>
        <p class="overall-score">
          전체 문항 중 <strong>${result.totalScore}</strong>개를 관리하고 있습니다.
          (<strong>${result.totalScore}</strong> / 60, ${ratioText}%)
        </p>
      </div>
      <div class="overall-status">
        <h3>현재 상태</h3>
        <p>${meta.status}</p>
      </div>
      <div class="brand-message">
        <h3>OWN.이 전하는 메시지</h3>
        <p>${meta.brand}</p>
      </div>
    `;

    categoryResultsBox.innerHTML = "";
    result.categories.forEach((cat) => {
      const catRatio = cat.ratio.toFixed(1);
      const catTierMeta = tierMeta[cat.tier];

      const item = document.createElement("div");
      item.className = "category-item";

      item.innerHTML = `
        <div class="category-header">
          <span class="category-name">${cat.label}</span>
          <span class="category-tier">${catTierMeta.icon} ${cat.tier} · ${catRatio}%</span>
        </div>
        <div class="category-score">
          ${cat.score} / 10 문항 관리 중
        </div>
      `;

      // 전체 대비 약한 구간이면 살짝 강조
      if (cat.ratio + 10 < result.overallRatio) {
        item.classList.add("weak");
      }

      categoryResultsBox.appendChild(item);
    });
  }

  function resetSurvey() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((r) => {
      r.checked = false;
    });
    showStep(0);
  }

  /* 이벤트 */

  startBtn.addEventListener("click", () => {
    introPage.classList.add("hidden");
    resultPage.classList.add("hidden");
    surveyPage.classList.remove("hidden");
    resetSurvey();
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      showStep(currentStep - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
      return;
    }
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    }
  });

  submitBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
      return;
    }

    const result = collectResults();
    if (result.error) {
      const pageIndex = Math.floor((result.missing - 1) / 10);
      alert(`답하지 않은 문항이 있습니다. (문항 ${result.missing}번)`);
      showStep(pageIndex);
      return;
    }

    renderResults(result);
    surveyPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  retryBtn.addEventListener("click", () => {
    resetSurvey();
    resultPage.classList.add("hidden");
    surveyPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
