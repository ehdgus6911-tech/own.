// ===============================
// 설문 기본 설정
// ===============================

// 총 문항 수
const TOTAL_QUESTIONS = 60;

// 카테고리 구성 (6개 × 10문항)
const categories = [
  { id: "skin", name: "피부 / 외모" },
  { id: "hair", name: "헤어" },
  { id: "style", name: "패션 / 스타일" },
  { id: "scent", name: "향 & 청결 습관" },
  { id: "fitness", name: "운동 / 체형" },
  { id: "detail", name: "디테일 관리" },
];

// ===============================
// DOM 요소
// ===============================
const introSection = document.getElementById("introSection");
const surveySection = document.getElementById("surveySection");
const resultSection = document.getElementById("resultSection");

const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");

const stepIndicator = document.getElementById("stepIndicator");
const progressBar = document.getElementById("surveyProgressBar");

const questionPages = document.querySelectorAll(".question-page");

const overallBox = document.getElementById("overall-result");
const categoryBox = document.getElementById("category-results");

// ===============================
// 티어 계산 기준 (최종본)
// ===============================
function scoreToTier(score) {
  if (score <= 8) return "아이언";
  if (score <= 21) return "브론즈";
  if (score <= 34) return "실버";
  if (score <= 40) return "골드";
  if (score <= 45) return "플래티넘";
  if (score <= 50) return "다이아몬드";
  if (score <= 53) return "마스터";
  if (score <= 57) return "그랜드마스터";
  return "챌린저";
}

// 티어 이모지 매칭
const tierEmoji = {
  "아이언": "🪨",
  "브론즈": "🥉",
  "실버": "🥈",
  "골드": "🥇",
  "플래티넘": "💎",
  "다이아몬드": "💠",
  "마스터": "🎖",
  "그랜드마스터": "🥇",
  "챌린저": "👑"
};

// ===============================
// 페이지 전환
// ===============================
let currentStep = 1;

function showStep(step) {
  currentStep = step;

  questionPages.forEach((page) => {
    page.classList.toggle(
      "hidden",
      Number(page.dataset.step) !== step
    );
  });

  stepIndicator.textContent = `${step} / 6`;
  updateProgressBar();
}

// ===============================
// 전체 진행도 업데이트
// ===============================
function updateProgressBar() {
  let answered = 0;

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);
    if (yes || no) answered++;
  }

  const ratio = (answered / TOTAL_QUESTIONS) * 100;
  progressBar.style.width = `${ratio}%`;
}

// ===============================
// 설문 검증
// ===============================
function validateStep(step) {
  const page = document.querySelector(`.question-page[data-step="${step}"]`);
  const questions = page.querySelectorAll(".question");

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const name = q.querySelector("input").name;
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (!checked) return false;
  }
  return true;
}

// ===============================
// 결과 계산
// ===============================
function collectResults() {
  let totalScore = 0;
  let categoryScores = [0, 0, 0, 0, 0, 0];
  let missing = [];

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      missing.push(i);
      continue;
    }
    if (yes) {
      totalScore++;
      const catIndex = Math.floor((i - 1) / 10);
      categoryScores[catIndex]++;
    }
  }

  if (missing.length > 0) {
    return { error: true, missing };
  }

  const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
  const overallTier = scoreToTier(totalScore);

  const categoryResults = categories.map((cat, idx) => {
    const score = categoryScores[idx];
    const ratio = (score / 10) * 100;
    const tier = scoreToTier(score * 6); // 10문항 → 60점 환산
    return {
      id: cat.id,
      name: cat.name,
      score,
      max: 10,
      ratio,
      tier,
    };
  });

  return {
    error: false,
    overall: {
      score: totalScore,
      ratio: overallRatio,
      tier: overallTier,
    },
    categories: categoryResults,
  };
}

// ===============================
// 결과 렌더링
// ===============================
function renderResults(result) {
  const overall = result.overall;

  overallBox.innerHTML = `
    <div class="overall-card">
      <div class="overall-tier">
        ${tierEmoji[overall.tier]} ${overall.tier}
      </div>
      <div class="overall-score">
        총 ${overall.score} / 60문항 (${overall.ratio.toFixed(1)}%)
      </div>
    </div>
  `;

  // 카테고리 박스
  categoryBox.innerHTML = result.categories
    .map((cat) => {
      return `
        <li class="category-item">
          <div class="cat-main">
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
          </div>
          <div class="cat-side">
            <div class="cat-tier">${tierEmoji[cat.tier]} ${cat.tier}</div>
            <div class="cat-ratio">${cat.ratio.toFixed(1)}%</div>
          </div>
        </li>
      `;
    })
    .join("");
}

// ===============================
// 이벤트 연결
// ===============================
startBtn.addEventListener("click", () => {
  introSection.classList.add("hidden");
  surveySection.classList.remove("hidden");
  showStep(1);
});

submitBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) {
    alert("아직 체크하지 않은 문항이 있어요!");
    return;
  }

  const result = collectResults();
  if (result.error) {
    alert(`${result.missing[0]}번 문항이 체크되지 않았습니다.`);
    return;
  }

  renderResults(result);

  surveySection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

retryBtn.addEventListener("click", () => {
  window.location.reload();
});

// 페이지 이동 버튼들
document.querySelectorAll(".nextBtn").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (!validateStep(idx + 1)) {
      alert("아직 체크하지 않은 문항이 있어요!");
      return;
    }
    showStep(idx + 2);
  });
});

document.querySelectorAll(".prevBtn").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    showStep(idx + 1);
  });
});
