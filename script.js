// =============================
//  OWN. 자기관리 티어 테스트
//  script.js (전체 교체용)
// =============================

document.addEventListener("DOMContentLoaded", () => {
  // 기본 상수
  const TOTAL_QUESTIONS = 60;
  const QUESTIONS_PER_STEP = 10;
  const TOTAL_STEPS = 6;

  // DOM 요소
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
  const pageInfo = document.getElementById("surveyPageInfo");
  const progressBar = document.getElementById("surveyProgressBar");

  const overallBox = document.getElementById("overallResult");
  const categoryBox = document.getElementById("categoryResults");
  const brandBlock = document.getElementById("brandBlock");

  const productLink = document.getElementById("productLink");

  let currentStep = 1;

  // 각 페이지 라벨 (상단 "1 페이지 · 피부 · 위생" 이런 문구)
  const stepLabels = [
    "1 페이지 · 피부 · 위생",
    "2 페이지 · 헤어",
    "3 페이지 · 패션 · 스타일",
    "4 페이지 · 향 · 청결 습관",
    "5 페이지 · 운동 · 체형",
    "6 페이지 · 디테일 관리"
  ];

  // =============================
  // 티어 메타 정보
  // =============================
  const tierMeta = {
    iron: {
      key: "iron",
      emoji: "🪨",
      nameKo: "아이언",
      range: "1–8점 · 하위 20%",
      state:
        "관리라고 부르기 어려운 단계에 가까워요. 기본 위생 루틴조차 일정하지 않고, 관리 자체에 대한 관심이나 필요성을 거의 느끼지 않는 구간입니다.",
      brand:
        "관리의 시작은 ‘꾸미기’가 아니라 ‘정리’입니다. 지금 필요한 건 멋이 아니라 ‘기본’이에요.",
      actionTitle: "지금 필요한 첫 단계",
      actions: [
        "세안 · 보습 · 샤워 루틴을 매일 1회 정착시키기",
        "미용실 방문, 손톱 정리, 빨래 등 생활 루틴부터 잡기",
        "향 · 패션 · 운동은 그 다음 단계로 천천히 시작하기"
      ],
      percentile: "하위 20%"
    },
    bronze: {
      key: "bronze",
      emoji: "🥉",
      nameKo: "브론즈",
      range: "9–21점 · 하위 40%",
      state:
        "기본적인 위생은 있지만, 외모·스타일·체형을 ‘관리한다’고 말하기엔 부족한 단계예요. 관리는 막연히 필요하다고 느끼지만, 정확한 방법을 모르기 쉬운 구간입니다.",
      brand:
        "지금 필요한 건 ‘나를 아는 관리’입니다. 무작정 따라 하기보다, 나에게 맞는 관리가 무엇인지부터 찾는 게 시작이에요.",
      actionTitle: "브론즈에서 올라가는 법",
      actions: [
        "피부타입·모질·체형 등 내 상태를 먼저 정확히 파악하기",
        "세안 · 보습 · 선크림 3스텝 루틴 만들기",
        "미용실 4~6주 주기로 고정해 헤어 기본기 다지기",
        "주 1회라도 땀나는 운동 넣어보기"
      ],
      percentile: "하위 40%"
    },
    silver: {
      key: "silver",
      emoji: "🥈",
      nameKo: "실버",
      range: "22–34점 · 평균(중위 20~60%)",
      state:
        "기본 위생 · 기초 관리는 하지만, 꾸준함과 디테일이 부족해 ‘관리한다’고 보긴 애매한 단계입니다. 막 시작한 느낌에서 크게 벗어나지 못한 상태예요.",
      brand:
        "평균은 안전하지만, 매력은 평균에서 나오지 않습니다. 나만의 ‘시그니처’를 만들 때 변화가 시작돼요.",
      actionTitle: "실버에서 골드로 가려면",
      actions: [
        "피부 · 헤어 · 패션 중 하나를 골라 ‘대표 강점’으로 키우기",
        "헤어스타일 1개를 나의 고정 시그니처로 확립하기",
        "기본템 + 액세서리 1개로 룩 완성도 끌어올리기",
        "향 1개는 ‘나를 떠올리는 향’으로 고정하기"
      ],
      percentile: "중위권"
    },
    gold: {
      key: "gold",
      emoji: "🥇",
      nameKo: "골드",
      range: "35–40점 · 상위 30%",
      state:
        "관리를 시작한 티는 나지만, 깊이 · 일관성 · 디테일은 아직 부족해요. 전반적으로 괜찮지만 ‘와, 관리 진짜 한다’는 느낌까진 살짝 아쉬운 단계입니다.",
      brand:
        "관리의 다음 단계는 ‘꾸미기’가 아니라 ‘정교함’입니다. 나를 이해하는 깊이가 더해지면 A급 매력이 나옵니다.",
      actionTitle: "골드에서 플래티넘으로",
      actions: [
        "나에게 가장 잘 어울리는 1착 코디 · 헤어 · 향을 확실히 정의하기",
        "피부 루틴 또는 운동 루틴 하나를 집중 강화해 눈에 띄는 변화 만들기",
        "손 · 발 · 눈썹 같은 디테일 관리를 루틴에 추가하기",
        "패션에서 내 베스트 핏 실루엣을 찾아 고정하기"
      ],
      percentile: "상위 30%"
    },
    platinum: {
      key: "platinum",
      emoji: "💎",
      nameKo: "플래티넘",
      range: "41–45점 · 상위 15%",
      state:
        "누가 봐도 ‘관리하는 사람’이라는 인상이 확실한 단계입니다. 다만 루틴의 논리, 성분 이해, 시술/고급 관리 같은 전문성은 아직 조금 여유가 있는 상태예요.",
      brand:
        "지금부터는 ‘법칙’이 아니라 ‘취향’이 중요합니다. 외적 디테일뿐 아니라, 나만의 감각을 키울 때입니다.",
      actionTitle: "플래티넘의 다음 스텝",
      actions: [
        "나만의 룩 코어(예: 미니멀 + 데님, 모노톤 + 포인트)를 정의하기",
        "헤어를 ‘항상 똑같이’에서 ‘상황별 변형 가능’ 단계로 올리기",
        "상황별 2~3개 향을 로테이션하며 무드 연출하기",
        "운동 루틴에 기록과 피드백을 넣어 체형 변화를 명확하게 보기"
      ],
      percentile: "상위 15%"
    },
    diamond: {
      key: "diamond",
      emoji: "💠",
      nameKo: "다이아몬드",
      range: "46–50점 · 상위 10%",
      state:
        "루틴이 안정적이고 디테일도 살아 있어, 주변에서 ‘관리 잘한다’는 말을 자주 듣는 단계입니다. 다만 일부 영역에서 ‘정답’만 따르고 나만의 색은 부족할 수 있어요.",
      brand:
        "관리의 끝은 ‘정답’이 아니라 ‘나다움’입니다. 정답만을 찾지 말고, ‘나만의 색’을 찾아보세요.",
      actionTitle: "다이아가 신경 써야 할 것",
      actions: [
        "패션과 향에서 지금까지의 ‘정답’을 버리고, 진짜 취향을 실험해 보기",
        "너무 많은 관리 루틴 중 의미 없는 것을 줄이고, 즐거운 루틴만 남기기",
        "시그니처 향 + 취향 향을 나누어 두 개의 페르소나 만들기",
        "운동은 단순 체형 유지에서 바디 밸런스와 기능성으로 확장하기"
      ],
      percentile: "상위 10%"
    },
    master: {
      key: "master",
      emoji: "🎖",
      nameKo: "마스터",
      range: "51–53점 · 상위 8%",
      state:
        "피부, 향, 스타일, 체형 등 대부분의 영역이 ‘루틴 → 습관’으로 잡힌 단계입니다. 일반적인 기준에서는 이미 ‘관리 잘한다’고 인정받는 사람입니다.",
      brand:
        "관리의 목적을 잊지 마세요. 목적은 남과 비교하며 ‘완벽함’을 찾는 강박이 아니라, 지속 가능한 나만의 리듬을 찾는 것입니다.",
      actionTitle: "마스터가 조심해야 할 점",
      actions: [
        "의미 없이 남겨둔 루틴은 과감히 정리하기",
        "‘왜 이 관리를 하고 있는가?’를 가끔씩 점검하기",
        "티어를 위한 관리가 아니라, 삶의 질을 위한 관리로 포커스 옮기기"
      ],
      percentile: "상위 8%"
    },
    grandmaster: {
      key: "grandmaster",
      emoji: "🥇",
      nameKo: "그랜드마스터",
      range: "54–57점 · 상위 3%",
      state:
        "대부분의 영역에서 완성형 자기관리자에 가까운 단계입니다. 주변에서도 ‘관리의 기준’처럼 여겨지는 사람일 가능성이 높아요.",
      brand:
        "이제는 ‘관리의 완성’보다 ‘내 삶의 완성’을 생각해야 하는 단계입니다. 관리가 나를 규정하는 것이 아니라, 나를 돕는 수단이어야 합니다.",
      actionTitle: "그마급에게 필요한 것",
      actions: [
        "취향 · 감성 · 라이프스타일 관리에 더 많은 시간을 쓰기",
        "머리부터 패션까지 ‘나만의 스타일 가이드’를 만들어 보기",
        "루틴의 양을 줄이고, 나를 더 드러내는 선택들만 남기기"
      ],
      percentile: "상위 3%"
    },
    challenger: {
      key: "challenger",
      emoji: "👑",
      nameKo: "챌린저",
      range: "58–60점 · 상위 1%",
      state:
        "외적 · 내적 관리 루틴이 모두 높은 수준으로 정리된 단계입니다. 주변에서 롤모델처럼 보일 가능성이 큰, 자기관리의 ‘정점’ 구간입니다.",
      brand:
        "더 채우는 것이 아니라 더 나답게 비워내는 것이 중요합니다. 관리의 끝은 ‘완벽한 외모’가 아니라, ‘나만의 분위기와 매력’, ‘나만의 라이프스타일’을 완성하는 것입니다.",
      actionTitle: "챌린저에게 남은 과제",
      actions: [
        "관리보다 내면 · 취향 · 감성 루틴을 더 공들여 설계하기",
        "패션 · 향 · 라이프스타일을 ‘시그니처 브랜드’처럼 통일감 있게 만들기",
        "관리 시간을 줄이고, 정말 나다운 것에 시간을 더 쓰기"
      ],
      percentile: "상위 1%"
    }
  };

  // 티어 계산 함수
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

  // 카테고리 메타 (6개 영역)
  const categories = [
    { id: "skin", name: "피부 / 외모" },
    { id: "hair", name: "헤어" },
    { id: "style", name: "패션 / 스타일" },
    { id: "fragrance", name: "향 & 청결 습관" },
    { id: "fitness", name: "운동 / 체형" },
    { id: "detail", name: "디테일 관리" }
  ];

  // =============================
  // 페이지 전환
  // =============================
  function showStep(step) {
    currentStep = step;

    // 질문 페이지 표시/숨김
    questionPages.forEach((page) => {
      const s = Number(page.dataset.step);
      page.classList.toggle("hidden", s !== step);
    });

    // 상단 "1 / 6"
    stepIndicator.textContent = `${step} / ${TOTAL_STEPS}`;

    // 상단 페이지 설명
    if (pageInfo) {
      pageInfo.textContent = stepLabels[step - 1] || "";
    }

    // 버튼 상태
    prevBtn.disabled = step === 1;
    prevBtn.classList.toggle("hidden", step === 1);

    if (step === TOTAL_STEPS) {
      nextBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }

    updateProgressBar();
  }

  // 해당 스텝이 모두 응답됐는지 검사
  function validateStep(step) {
    const start = (step - 1) * QUESTIONS_PER_STEP + 1;
    const end = step * QUESTIONS_PER_STEP;

    for (let i = start; i <= end; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (!yes || !no) continue;

      if (!yes.checked && !no.checked) {
        return false;
      }
    }
    return true;
  }

  // 전체 결과 계산
  function collectResults() {
    let totalScore = 0;
    const categoryScores = [0, 0, 0, 0, 0, 0];

    const missing = [];

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);

      if (!yes || !no) continue;

      if (!yes.checked && !no.checked) {
        missing.push(i);
        continue;
      }

      if (yes.checked) {
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
    const overallTierKey = scoreToTier(totalScore);

    const categoryResults = categories.map((cat, idx) => {
      const score = categoryScores[idx];
      const ratio = (score / QUESTIONS_PER_STEP) * 100;
      const tierKey = scoreToTier(score * (TOTAL_QUESTIONS / QUESTIONS_PER_STEP)); // 카테고리는 비율기준
      return {
        id: cat.id,
        name: cat.name,
        score,
        max: QUESTIONS_PER_STEP,
        ratio,
        tierKey
      };
    });

    return {
      error: false,
      overall: {
        score: totalScore,
        ratio: overallRatio,
        tierKey: overallTierKey
      },
      categories: categoryResults
    };
  }

  // 전체 결과 렌더링
  function renderResults(result) {
    const { overall, categories } = result;
    const tier = tierMeta[overall.tierKey];

    // 상대적으로 약한 카테고리 (전체 비율보다 10%p 이상 낮은 구간)
    const weak = categories.filter(
      (c) => c.ratio < overall.ratio - 10
    );
    let weakText = "";

    if (weak.length > 0) {
      const names = weak.map((w) => w.name).join(" · ");
      weakText = `특히 <strong>${names}</strong> 영역의 관리 비율이 다른 영역보다 낮아요. 이 부분을 먼저 챙기면 티어가 훨씬 빨리 올라갈 수 있습니다.`;
    } else {
      weakText =
        "6개 영역이 비교적 고르게 관리되고 있습니다. 지금의 흐름을 유지하면서, 나만의 색을 더해보세요.";
    }

    // 전체 결과 박스
    overallBox.innerHTML = `
      <div class="overall-card">
        <div class="overall-row">
          <div class="overall-tier">
            <span class="overall-tier-main">${tier.emoji} ${tier.nameKo}</span>
            <span class="overall-tier-sub">${tier.range}</span>
          </div>
          <div class="overall-percentile">${tier.percentile}</div>
        </div>
        <div class="overall-score-line">
          전체 60문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
          (<strong>${overall.ratio.toFixed(1)}%</strong>)
        </div>
        <p class="overall-state">${tier.state}</p>
        <p class="overall-weak">${weakText}</p>
      </div>
    `;

    // 카테고리별 결과 박스
    const catItems = categories
      .map((cat) => {
        const catTier = tierMeta[cat.tierKey];
        const isWeak = cat.ratio < overall.ratio - 10;
        const weakClass = isWeak ? "cat-weak" : "";
        return `
        <li class="category-item ${weakClass}">
          <div class="cat-main">
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.score} / ${cat.max} 문항 관리 중</div>
          </div>
          <div class="cat-side">
            <div class="cat-tier">
              ${catTier.emoji} ${catTier.nameKo}
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

    // 브랜드 블록 (공통 메시지 + 티어별 메시지)
    brandBlock.innerHTML = `
      <p><strong>OWN.은 “나를 알아가는 관리”로 나만의 매력을 완성해가는 과정을 함께합니다.</strong></p>
      <p>지금 티어는 <strong>${tier.emoji} ${tier.nameKo}</strong> 구간입니다.</p>
      <p>${tier.brand}</p>
      <p class="brand-actions-title">지금 단계에서 추천하는 방향</p>
      <ul class="brand-actions">
        ${tier.actions.map((a) => `<li>${a}</li>`).join("")}
      </ul>
      <p class="brand-slogan">
        당신만의 매력을 찾고, 소유하세요.<br>
        <strong>Own your attraction.</strong>
      </p>
    `;
  }

  // =============================
  // 진행도 바
  // =============================
  function updateProgressBar() {
    if (!progressBar) return;

    let answered = 0;
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (!yes || !no) continue;
      if (yes.checked || no.checked) answered += 1;
    }
    const ratio = (answered / TOTAL_QUESTIONS) * 100;
    progressBar.style.width = `${ratio}%`;
  }

  // 라디오 클릭 시 진행도 업데이트
  const allRadios = document.querySelectorAll(
    '#surveyForm input[type="radio"]'
  );
  allRadios.forEach((r) => {
    r.addEventListener("change", updateProgressBar);
  });

  // =============================
  // 이벤트 바인딩
  // =============================

  // 인트로 → 설문 시작
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      introSection.classList.add("hidden");
      resultSection.classList.add("hidden");
      surveySection.classList.remove("hidden");
      showStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 이전 페이지
  prevBtn.addEventListener("click", () => {
    if (currentStep <= 1) return;
    showStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 다음 페이지
  nextBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      alert("현재 페이지의 모든 문항에 답변해 주세요.");
      return;
    }
    if (currentStep >= TOTAL_STEPS) return;
    showStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 👉 결과 보기 버튼
submitBtn.addEventListener("click", () => {
  // 1) 마지막 페이지(6페이지)도 모두 체크했는지 확인
  if (!validateStep(currentStep)) {
    // validateStep 안에서 이미 "답하지 않은 문항이 있습니다" 알림을 띄움
    return;
  }

  // 2) 전체 60문항 다시 검사하면서 점수 계산
  const result = collectResults();

  if (result.error) {
    // 하나라도 안 체크된 문항이 있으면 여기로 옴
    const firstMissing = result.missing[0]; // 제일 먼저 빠진 문항 번호
    const pageIndex = Math.floor((firstMissing - 1) / QUESTIONS_PER_STEP) + 1;

    alert(
      `답하지 않은 문항이 있습니다.\n\n` +
      `${pageIndex}페이지로 이동해서 빠진 문항을 먼저 체크해주세요.\n` +
      `(빠진 문항 번호: ${firstMissing}번)`
    );

    // 빠진 문항이 있는 페이지로 이동
    showStep(pageIndex);
    return;
  }

  // 3) 여기까지 왔다는 건 60문항 전부 체크 완료 + 점수 계산 끝
  renderResults(result);

  // 4) 설문 섹션 숨기고 결과 섹션 보여주기
  surveySection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  // 5) 결과 맨 위로 스크롤
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  // 다시 하기
  retryBtn.addEventListener("click", () => {
    // 라디오 초기화
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (yes) yes.checked = false;
      if (no) no.checked = false;
    }
    updateProgressBar();

    resultSection.classList.add("hidden");
    surveySection.classList.remove("hidden");
    showStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 제품 링크 (나중에 href만 바꿔 쓰면 됨)
  if (productLink) {
    productLink.addEventListener("click", (e) => {
      // href="#" 상태일 때는 페이지 이동 막기
      if (!productLink.getAttribute("href") || productLink.getAttribute("href") === "#") {
        e.preventDefault();
        alert("곧 당신의 매력에 맞춘 추천 제품 리스트가 연결될 예정입니다. 🙂");
      }
    });
  }

  // 초기 상태: 인트로 보이기
  introSection.classList.remove("hidden");
  surveySection.classList.add("hidden");
  resultSection.classList.add("hidden");
});
