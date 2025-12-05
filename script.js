// =====================================
// OWN. 자기관리 티어 테스트 스크립트
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_QUESTIONS = 60;
  const QUESTIONS_PER_STEP = 10;
  const TOTAL_STEPS = 6;

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
  const categoryBox = document.getElementById("category-results");

  let currentStep = 1;

  // 6개 카테고리 이름 (index 0~5)
  const categories = [
    { id: "skin", name: "피부 / 외모" },
    { id: "hair", name: "헤어" },
    { id: "style", name: "패션 / 스타일" },
    { id: "scent", name: "향 & 청결 습관" },
    { id: "fitness", name: "운동 / 체형" },
    { id: "detail", name: "디테일 관리" }
  ];

  // 티어 메타데이터
  const tierMeta = {
    Iron: {
      name: "아이언",
      emoji: "🪨",
      percentile: "하위 20%",
      range: "1–8점",
      summary:
        "관리라고 부르기 어려운 단계에 가까워요. 기본 위생 루틴부터 다시 정리할 시기입니다.",
      brandMessage:
        "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’입니다."
    },
    Bronze: {
      name: "브론즈",
      emoji: "🥉",
      percentile: "하위 40%",
      range: "9–21점",
      summary:
        "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하기엔 아직 부족한 단계입니다.",
      brandMessage:
        "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하기보다, 나에게 맞는 관리부터 시작해보세요."
    },
    Silver: {
      name: "실버",
      emoji: "🥈",
      percentile: "평균 (중위 20~60%)",
      range: "22–34점",
      summary:
        "기초 관리는 하지만 꾸준함·디테일이 부족해요. ‘관리를 막 시작한 사람’ 단계에 머물러 있습니다.",
      brandMessage:
        "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 최소 한 가지 ‘시그니처’를 만들 때 변화가 시작됩니다."
    },
    Gold: {
      name: "골드",
      emoji: "🥇",
      percentile: "상위 30%",
      range: "35–40점",
      summary:
        "관리를 시작한 티는 나지만, 깊이·일관성·영역별 밸런스가 조금만 더 정리되면 확 올라갈 단계입니다.",
      brandMessage:
        "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다."
    },
    Platinum: {
      name: "플래티넘",
      emoji: "💎",
      percentile: "상위 15%",
      range: "41–45점",
      summary:
        "주변에서 봐도 ‘관리하는 사람’으로 보이는 수준입니다. 다만 루틴의 논리·취향·전문성이 살짝 아쉬운 단계입니다.",
      brandMessage:
        "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키워보세요."
    },
    Diamond: {
      name: "다이아몬드",
      emoji: "💠",
      percentile: "상위 10%",
      range: "46–50점",
      summary:
        "루틴이 안정적이고 디테일도 살아있는 단계입니다. 다만 특정 영역이 상대적으로 약할 수 있어요.",
      brandMessage:
        "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만 찾기보다, 나만의 색을 더 선명하게 만들어보세요."
    },
    Master: {
      name: "마스터",
      emoji: "🎖",
      percentile: "상위 8%",
      range: "51–53점",
      summary:
        "피부, 헤어, 스타일, 체형 등 대부분의 영역에서 ‘관리 시스템’이 잘 잡혀 있는 사람입니다.",
      brandMessage:
        "관리의 목적을 잊지 마세요. 완벽을 향한 강박보다, 내 삶에 맞는 지속 가능한 리듬을 찾는 것이 더 중요합니다."
    },
    Grandmaster: {
      name: "그랜드마스터",
      emoji: "🥇",
      percentile: "상위 3%",
      range: "54–57점",
      summary:
        "대부분의 영역에서 완성형 자기관리자에 가깝습니다. 주변에서 ‘관리의 기준’으로 여길 수 있는 레벨입니다.",
      brandMessage:
        "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각할 단계입니다. 관리가 나를 규정하기보다, 나를 돕는 수단이 되도록 조절해보세요."
    },
    Challenger: {
      name: "챌린저",
      emoji: "👑",
      percentile: "상위 1%",
      range: "58–60점",
      summary:
        "자기관리의 정점에 가까운 단계입니다. 외적·내적 루틴이 모두 체계적으로 잡혀 있고, 로컬 롤모델 같은 존재일 수 있어요.",
      brandMessage:
        "이제 필요한 것은 ‘더 열심히’가 아니라 ‘더 나답게’입니다. 관리의 끝은 완벽한 외모가 아니라, 나만의 분위기와 라이프스타일입니다."
    }
  };

  // 점수 → 티어 변환
  function scoreToTier(score) {
    if (score <= 8) return "Iron";
    if (score <= 21) return "Bronze";
    if (score <= 34) return "Silver";
    if (score <= 40) return "Gold";
    if (score <= 45) return "Platinum";
    if (score <= 50) return "Diamond";
    if (score <= 53) return "Master";
    if (score <= 57) return "Grandmaster";
    return "Challenger";
  }

  // =====================================
  // 페이지 이동
  // =====================================

  function showStep(step) {
    if (step < 1 || step > TOTAL_STEPS) return;

    currentStep = step;

    questionPages.forEach((page) => {
      const pageStep = Number(page.dataset.step);
      page.classList.toggle("hidden", pageStep !== currentStep);
    });

    if (stepIndicator) {
      stepIndicator.textContent = `${currentStep} / ${TOTAL_STEPS}`;
    }

    // 버튼 표시/숨김
    if (prevBtn) {
      prevBtn.disabled = currentStep === 1;
    }
    if (nextBtn && submitBtn) {
      if (currentStep === TOTAL_STEPS) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
      } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
      }
    }

    // 진행 바 업데이트
    updateProgressBar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 현재 페이지의 문항 전부 체크됐는지 확인
  function validateStep(step) {
    const page = document.querySelector(
      `.question-page[data-step="${step}"]`
    );
    if (!page) return true;

    const questions = page.querySelectorAll(".question");
    for (const q of questions) {
      const inputs = q.querySelectorAll('input[type="radio"]');
      const checked = Array.from(inputs).some((i) => i.checked);
      if (!checked) {
        alert("현재 페이지에서 답변하지 않은 문항이 있습니다.");
        return false;
      }
    }
    return true;
  }

  // =====================================
  // 전체 결과 수집
  // =====================================

  function collectResults() {
    let totalScore = 0;
    const categoryScores = Array(categories.length).fill(0);
    const missing = [];

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yesInput = document.querySelector(
        `input[name="q${i}"][value="1"]`
      );
      const noInput = document.querySelector(
        `input[name="q${i}"][value="0"]`
      );

      const yesChecked = yesInput && yesInput.checked;
      const noChecked = noInput && noInput.checked;

      if (!yesChecked && !noChecked) {
        missing.push(i);
      }

      if (yesChecked) {
        totalScore += 1;
        const catIndex = Math.floor((i - 1) / QUESTIONS_PER_STEP);
        if (categoryScores[catIndex] !== undefined) {
          categoryScores[catIndex] += 1;
        }
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
      const tier = scoreToTier(score);
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

  // =====================================
  // 결과 렌더링
  // =====================================

  function renderResults(result) {
    if (!overallBox || !categoryBox) return;

    const overall = result.overall;
    const cats = result.categories;
    const meta = tierMeta[overall.tier];

    const weakCats = cats.filter(
      (cat) => cat.ratio + 10 < overall.ratio
    );
    let weakMessage = "";

    if (weakCats.length > 0) {
      const names = weakCats.map((c) => c.name).join(" · ");
      weakMessage = `
        <p class="weak-msg">
          <strong>${names}</strong> 영역의 관리가 상대적으로 약한 편입니다.<br>
          이 영역을 보완하면 전체 티어가 더 빠르게 올라갈 수 있어요.
        </p>
      `;
    } else {
      weakMessage = `
        <p class="weak-msg">
          6개 영역의 밸런스가 고르게 잡혀 있습니다. 지금의 리듬을 유지하면서, 나만의 개성을 더해보세요.
        </p>
      `;
    }

    // 전체 결과 카드
    overallBox.innerHTML = `
      <div class="overall-card">
        <div class="overall-header">
          <div class="overall-tier-main">
            <span class="tier-emoji">${meta.emoji}</span>
            <span class="tier-name">${meta.name}</span>
            <span class="tier-range">${meta.range}</span>
          </div>
          <div class="tier-percentile">상위 ${meta.percentile}</div>
        </div>

        <div class="overall-body">
          <p class="overall-score">
            전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
            <span class="overall-ratio">(${overall.score} / ${overall.max}, ${overall.ratio.toFixed(
      1
    )}%)</span>
          </p>
          <p class="overall-summary">
            ${meta.summary}
          </p>
          ${weakMessage}
        </div>

        <div class="overall-brand-message">
          <p>${meta.brandMessage}</p>
        </div>
      </div>
    `;

    // 카테고리별 결과 카드
    const catItems = cats
      .map((cat) => {
        const catMeta = tierMeta[cat.tier];
        const isWeak = cat.ratio + 10 < overall.ratio;

        return `
          <li class="category-item${isWeak ? " category-item--weak" : ""}">
            <div class="cat-main">
              <div class="cat-name">${cat.name}</div>
              <div class="cat-count">
                ${cat.score} / ${cat.max} 문항 관리 중
              </div>
            </div>
            <div class="cat-side">
              <div class="cat-tier">
                <span class="cat-tier-emoji">${catMeta.emoji}</span>
                <span class="cat-tier-name">${catMeta.name}</span>
              </div>
              <div class="cat-ratio">${cat.ratio.toFixed(1)}%</div>
            </div>
          </li>
        `;
      })
      .join("");

    categoryBox.innerHTML = `
      <ul class="category-list">
        ${catItems}
      </ul>
    `;
  }

  // =====================================
  // 설문 리셋
  // =====================================

  function resetSurvey() {
    const inputs = surveyForm.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = false;
    });
    currentStep = 1;
    showStep(1);
    updateProgressBar();
  }

  // =====================================
  // 진행도 바
  // =====================================

  function updateProgressBar() {
    if (!progressBar) return;

    let answered = 0;
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(
        `input[name="q${i}"][value="1"]`
      );
      const no = document.querySelector(
        `input[name="q${i}"][value="0"]`
      );
      if ((yes && yes.checked) || (no && no.checked)) {
        answered += 1;
      }
    }

    const ratio = (answered / TOTAL_QUESTIONS) * 100;
    progressBar.style.width = `${ratio}%`;
  }

  // =====================================
  // 이벤트 바인딩
  // =====================================

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      introSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      showStep(1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;
      if (currentStep < TOTAL_STEPS) {
        showStep(currentStep + 1);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  }

  // 👉 결과 보기 버튼
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) {
        return;
      }

      const result = collectResults();

      if (result.error) {
        const firstMissing = result.missing[0];
        const pageIndex =
          Math.floor((firstMissing - 1) / QUESTIONS_PER_STEP) + 1;

        alert(
          `답하지 않은 문항이 있습니다.\n\n` +
            `${pageIndex}페이지로 이동해서 빠진 문항을 먼저 체크해주세요.\n` +
            `(빠진 문항 번호: ${firstMissing}번)`
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

  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      resetSurvey();
      resultSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 라디오 체크 시마다 진행 바 갱신
  const allRadios = surveyForm.querySelectorAll('input[type="radio"]');
  allRadios.forEach((radio) => {
    radio.addEventListener("change", updateProgressBar);
  });

  // 초기 상태 : 인트로 보이고, 설문/결과 숨김
  introSection.classList.remove("hidden");
  surveySection.classList.add("hidden");
  resultSection.classList.add("hidden");
});
