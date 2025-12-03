// script.js — OWN. 자기관리 티어 테스트 (완전 리셋 버전)

// ==============================
// 상수 설정
// ==============================
const TOTAL_QUESTIONS = 60;
const QUESTIONS_PER_STEP = 10;

// 카테고리 정의 (문항 번호 구간)
const categories = [
  { id: "skin", name: "피부 / 외모", start: 1, end: 10 },
  { id: "hair", name: "헤어", start: 11, end: 20 },
  { id: "style", name: "패션 / 스타일", start: 21, end: 30 },
  { id: "scent", name: "향 & 청결 습관", start: 31, end: 40 },
  { id: "fitness", name: "운동 / 체형", start: 41, end: 50 },
  { id: "detail", name: "디테일 관리", start: 51, end: 60 },
];

// ==============================
// 티어 변환 (예 개수 기준)
// ==============================
// score = "예" 개수 (0~60)
function scoreToTier(score) {
  if (score <= 8) return "아이언";          // 1–8
  if (score <= 21) return "브론즈";        // 9–21
  if (score <= 34) return "실버";          // 22–34
  if (score <= 40) return "골드";          // 35–40
  if (score <= 45) return "플래티넘";      // 41–45
  if (score <= 50) return "다이아";        // 46–50
  if (score <= 53) return "마스터";        // 51–53
  if (score <= 57) return "그랜드마스터";  // 54–57
  return "챌린저";                         // 58–60
}

// ==============================
// 티어 메타데이터 (아이콘 + 상위 퍼센트 + 카피)
// ==============================
const tierMeta = {
  "아이언": {
    icon: "🥄",
    percentile: "하위 20%",
    headline: "지금 필요한 건 멋이 아니라 기본.",
    current:
      "관리라고 부르기 어려운 단계에 가깝습니다. 기본적인 위생 루틴(세안, 보습, 향, 체모)조차 일정하지 않고, 관리 자체에 대한 필요성을 거의 느끼지 않는 구간이에요.",
    message:
      "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 세안·보습·샤워 루틴부터 하루 1번씩만 안정적으로 가져가는 걸 목표로 잡아보세요.",
  },
  "브론즈": {
    icon: "🥉",
    percentile: "하위 40%",
    headline: "기본 위생은 OK, 하지만 ‘관리’라고 하긴 아직 애매한 단계.",
    current:
      "기본적인 위생은 지키지만 외모·스타일·체형을 ‘관리한다’고 부르긴 부족한 단계입니다. 어디서부터 시작해야 할지 막연한 구간이에요.",
    message:
      "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하기보다, 내 피부타입·모질·체형 같은 기초 정보부터 정리해 보세요.",
  },
  "실버": {
    icon: "🥈",
    percentile: "중위 20~60%",
    headline: "기초 관리는 하지만, 꾸준함과 디테일이 부족한 단계.",
    current:
      "기본 위생·기초 관리 정도는 하지만, 꾸준함과 디테일이 부족해 ‘관리한다’고 말하기 애매한 단계입니다. 관리를 시작한 사람의 초입에 머무른 상태예요.",
    message:
      "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 하나 정해서 그거 하나만이라도 끝까지 가져가 보세요.",
  },
  "골드": {
    icon: "🥇",
    percentile: "상위 30%",
    headline: "티는 나지만, 깊이와 정교함이 아직 부족한 단계.",
    current:
      "관리하는 티는 분명히 납니다. 다만 영역별 밸런스와 디테일이 아쉬워요. 피부·헤어·패션 중 한두 영역이 유난히 발목을 잡고 있을 가능성이 큽니다.",
    message:
      "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나에게 어울리는 1착 코디·헤어·향을 확실하게 정의해 보세요.",
  },
  "플래티넘": {
    icon: "💎",
    percentile: "상위 15%",
    headline: "누가 봐도 ‘관리하는 사람’ 이미지가 잡혀 있는 단계.",
    current:
      "피부·헤어·패션·운동 어느 하나 눈에 띄게 어긋나는 곳이 없습니다. 다만 루틴의 논리, 성분 이해, 취향의 깊이는 아직 더 가져갈 수 있어요.",
    message:
      "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각과 무드를 키워 보세요.",
  },
  "다이아": {
    icon: "💠",
    percentile: "상위 10%",
    headline: "주변에서 ‘관리 잘한다’는 말을 자주 듣는 단계.",
    current:
      "루틴도 안정적이고 디테일도 살아 있습니다. 다만 특정 한두 영역이 상대적으로 약하거나, ‘정답’에 집착해 나다움이 묻히는 경우가 있어요.",
    message:
      "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고, 나만의 색을 찾는 방향으로 한 번 더 조정해 보세요.",
  },
  "마스터": {
    icon: "🎖",
    percentile: "상위 8%",
    headline: "당신은 이미 ‘관리 시스템’을 가진 사람입니다.",
    current:
      "피부·향·스타일·체형 등 대부분의 영역이 루틴 → 습관으로 안정적으로 굴러가는 단계입니다. 주변에서 조언을 요청받는 사람에 가깝죠.",
    message:
      "관리의 목적을 잊지 마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박이 아니라, 지속 가능한 나만의 리듬을 찾는 것입니다.",
  },
  "그랜드마스터": {
    icon: "🏆",
    percentile: "상위 3%",
    headline: "대부분의 영역에서 완성형 자기관리자.",
    current:
      "피부, 스타일, 향, 운동, 디테일 어느 하나 빠지지 않는 수준입니다. 주변에서 ‘관리의 기준’으로 보는 단계예요.",
    message:
      "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리는 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
  },
  "챌린저": {
    icon: "👑",
    percentile: "상위 1%",
    headline: "자기관리의 정점. 이제는 ‘더 나답게’가 키워드.",
    current:
      "외적·내적 루틴 모두 거의 완성형에 가깝습니다. 롤모델로 보일 정도로 삶이 정돈된 느낌을 주는 단계예요.",
    message:
      "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라 ‘나만의 분위기·매력·라이프스타일’을 완성하는 것입니다.",
  },
};

// ==============================
// DOM 로딩 후 실행
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const introSection = document.getElementById("introSection");
  const surveySection = document.getElementById("surveySection");
  const resultSection = document.getElementById("resultSection");

  const startBtn = document.getElementById("startBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  const surveyForm = document.getElementById("surveyForm");
  const questionPages = document.querySelectorAll(".question-page");
  const stepIndicator = document.getElementById("stepIndicator");
  const progressBar = document.getElementById("surveyProgressBar");

  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  let currentStep = 1;

  // ==========================
  // 헬퍼: 페이지 전환
  // ==========================
  function showStep(step) {
    currentStep = step;

    questionPages.forEach((page) => {
      const pageStep = Number(page.dataset.step);
      page.classList.toggle("hidden", pageStep !== step);
    });

    // 단계 텍스트 (1 / 6)
    if (stepIndicator) {
      stepIndicator.textContent = `${step} / ${questionPages.length}`;
    }

    // 버튼 상태
    if (prevBtn) prevBtn.disabled = step === 1;
    if (nextBtn) nextBtn.classList.toggle("hidden", step === questionPages.length);
    if (submitBtn) submitBtn.classList.toggle("hidden", step !== questionPages.length);

    updateProgressBar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================
  // 헬퍼: 해당 페이지 응답 체크
  // ==========================
  function validateStep(step) {
    const page = Array.from(questionPages).find(
      (p) => Number(p.dataset.step) === step
    );
    if (!page) return true;

    const inputs = page.querySelectorAll('input[type="radio"]');
    const questionNames = new Set();
    inputs.forEach((input) => questionNames.add(input.name));

    for (const name of questionNames) {
      const checked = page.querySelector(`input[name="${name}"]:checked`);
      if (!checked) return false;
    }
    return true;
  }

  // ==========================
  // 전체 점수 수집
  // ==========================
  function collectResults() {
    let totalScore = 0;
    const categoryScores = new Array(categories.length).fill(0);
    const missing = [];

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

    // 전체 티어는 "예 개수" 기준
    const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
    const overallTier = scoreToTier(totalScore);

    // 카테고리별 결과
    const categoryResults = categories.map((cat, idx) => {
      const score = categoryScores[idx];          // 0~10
      const ratio = (score / QUESTIONS_PER_STEP) * 100; // 0~100%
      const scaledScore = score * 6;              // 0~60로 스케일 조정
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

  // ==========================
  // 결과 렌더링
  // ==========================
  function renderResults(result) {
    const overall = result.overall;
    const meta = tierMeta[overall.tier] || {
      icon: "",
      percentile: "",
      headline: "",
      current: "",
      message: "",
    };

    const scoreText = `${overall.score} / ${overall.max}`;
    const ratioText = `${overall.ratio.toFixed(1)}%`;
    const tierLabel = `${meta.icon} ${overall.tier}`;

    // 상대적으로 약한 카테고리 (전체 비율보다 10%p 이상 낮은 영역)
    const weak = result.categories.filter(
      (cat) => cat.ratio < overall.ratio - 10
    );

    let weakMessage = "";
    if (weak.length > 0) {
      const names = weak.map((c) => c.name).join(" · ");
      weakMessage = `<p class="weak-msg"><strong>특히 ${names}</strong> 영역이 상대적으로 약한 편입니다. 이 부분을 보완하면 티어 상승 폭이 큽니다.</p>`;
    } else {
      weakMessage =
        '<p class="weak-msg">6개 영역이 비교적 고르게 관리되고 있습니다. 지금의 리듬을 유지하면서, 나만의 취향을 더해 보세요.</p>';
    }

    // 전체 결과 카드
    overallBox.innerHTML = `
      <div class="card overall-card">
        <div class="overall-header">
          <div class="tier-badge">
            <div class="tier-main">${tierLabel}</div>
            <div class="tier-sub">${meta.percentile}</div>
          </div>
          <div class="overall-score">
            <div class="score-line">${scoreText}</div>
            <div class="score-ratio">${ratioText}</div>
          </div>
        </div>

        <div class="overall-copy">
          <p class="headline">${meta.headline}</p>
          <p class="current">${meta.current}</p>
          ${weakMessage}
          <p class="brand-msg">${meta.message}</p>
        </div>
      </div>
    `;

    // 카테고리별 결과 리스트
    const catItems = result.categories
      .map((cat) => {
        const scaledScore = cat.score * 6;
        const t = scoreToTier(scaledScore);
        const tm = tierMeta[t] || {};
        const icon = tm.icon || "";

        const isWeak = weak.find((w) => w.id === cat.id);

        return `
          <li class="category-item ${isWeak ? "weak" : ""}">
            <div class="cat-main">
              <div class="cat-name">${cat.name}</div>
              <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
            </div>
            <div class="cat-side">
              <div class="cat-tier">${icon} ${t}</div>
              <div class="cat-ratio">${cat.ratio.toFixed(1)}%</div>
            </div>
          </li>
        `;
      })
      .join("");

    catBox.innerHTML = `<ul class="category-list">${catItems}</ul>`;
  }

  // ==========================
  // 설문 리셋
  // ==========================
  function resetSurvey() {
    const inputs = document.querySelectorAll('#surveyForm input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = false;
    });
    showStep(1);
    updateProgressBar();
  }

  // ==========================
  // 진행 바 (0~100%)
  // ==========================
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

  // ==========================
  // 이벤트 바인딩
  // ==========================

  // 인트로 → 설문 시작
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      introSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      showStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 이전 / 다음 페이지
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) {
        alert("현재 페이지에서 답하지 않은 문항이 있습니다.");
        return;
      }
      if (currentStep < questionPages.length) {
        showStep(currentStep + 1);
      }
    });
  }

  // 결과 보기
  if (submitBtn) {
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
          `답하지 않은 문항이 있습니다.\n\n첫 번째 미응답 문항 번호: ${firstMissing}\n해당 페이지( ${pageIndex} / 6 )로 이동합니다.`
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
      introSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 라디오 클릭할 때마다 진행 바 업데이트
  surveyForm.addEventListener("change", (e) => {
    if (e.target.matches('input[type="radio"]')) {
      updateProgressBar();
    }
  });

  // 초기 상태
  showStep(1);
  updateProgressBar();
});
