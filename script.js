/* ===========================
   기본 셀렉터
=========================== */
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

const introSection = document.getElementById("introSection");
const surveySection = document.getElementById("surveySection");
const resultSection = document.getElementById("resultSection");

const stepIndicator = document.getElementById("stepIndicator");
const progressBar = document.getElementById("surveyProgressBar");

const overallBox = document.getElementById("overall-result");
const catBox = document.getElementById("category-results");

const TOTAL_QUESTIONS = 60;
const QUESTIONS_PER_STEP = 10;
let currentStep = 1;

/* ===========================
   티어 메타
=========================== */
const tierList = [
  { name: "🪨 아이언", min: 0, max: 8 },
  { name: "🥉 브론즈", min: 9, max: 21 },
  { name: "🥈 실버", min: 22, max: 34 },
  { name: "🥇 골드", min: 35, max: 40 },
  { name: "💎 플래티넘", min: 41, max: 45 },
  { name: "💠 다이아몬드", min: 46, max: 50 },
  { name: "🎖 마스터", min: 51, max: 53 },
  { name: "🥇 그랜드마스터", min: 54, max: 57 },
  { name: "👑 챌린저", min: 58, max: 60 }
];

function getTier(score) {
  return tierList.find(t => score >= t.min && score <= t.max).name;
}

/* ===========================
   페이지 이동
=========================== */
function showStep(step) {
  currentStep = step;
  const pages = document.querySelectorAll(".question-page");

  pages.forEach(page => {
    page.classList.toggle("hidden", Number(page.dataset.step) !== step);
  });

  stepIndicator.textContent = `${step} / 6`;
  updateProgressBar();
}

/* ===========================
   진행 바 업데이트
=========================== */
function updateProgressBar() {
  let answered = 0;

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no  = document.querySelector(`input[name="q${i}"][value="0"]:checked`);
    if (yes || no) answered++;
  }

  const ratio = (answered / TOTAL_QUESTIONS) * 100;
  progressBar.style.width = `${ratio}%`;
}

/* ===========================
   결과 계산
=========================== */
function collectResults() {
  let totalScore = 0;
  let missing = [];

  let categoryScores = [0, 0, 0, 0, 0, 0]; // 6개 영역

  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no  = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      missing.push(i);
      continue;
    }

    if (yes) {
      totalScore++;
      const catIndex = Math.floor((i - 1) / QUESTIONS_PER_STEP);
      categoryScores[catIndex]++;
    }
  }

  if (missing.length > 0) {
    return { error: true, missing };
  }

  return { totalScore, categoryScores };
}

/* ===========================
   결과 렌더링
=========================== */
function renderResults(res) {
  const score = res.totalScore;
  const tier = getTier(score);
  const ratio = ((score / 60) * 100).toFixed(1);

  overallBox.innerHTML = `
    <div class="overall-header">
      <div class="overall-tier">${tier}</div>
      <div class="overall-ratio">${score}/60 (${ratio}%)</div>
    </div>
  `;

  /* 카테고리 결과 */
  const categoryNames = ["피부/외모", "헤어", "패션/스타일", "향/청결", "운동/체형", "디테일"];

  let items = "";

  for (let i = 0; i < 6; i++) {
    const cScore = res.categoryScores[i];
    const percent = ((cScore / 10) * 100).toFixed(1);
    const cTier = getTier(cScore);

    const weak = cScore <= 5 ? "weak" : "";

    items += `
      <li class="category-item ${weak}">
        <div class="cat-main">
          <div class="cat-name">${categoryNames[i]}</div>
          <div class="cat-count">${cScore} / 10 문항 관리 중</div>
        </div>
        <div class="cat-side">
          <div class="cat-tier">${cTier}</div>
          <div class="cat-ratio">${percent}%</div>
        </div>
      </li>
    `;
  }

  catBox.innerHTML = `<ul class="category-list">${items}</ul>`;
}

/* ===========================
   EVENT
=========================== */

startBtn.addEventListener("click", () => {
  introSection.classList.add("hidden");
  surveySection.classList.remove("hidden");
  showStep(1);
});

nextBtn.addEventListener("click", () => {
  if (currentStep < 6) {
    showStep(currentStep + 1);
    return;
  }

  const result = collectResults();

  if (result.error) {
    alert(`답변하지 않은 문항이 있습니다. (첫 미답변: ${result.missing[0]}번)`);
    const pageIndex = Math.floor((result.missing[0] - 1) / 10) + 1;
    showStep(pageIndex);
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
