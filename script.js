// ==============================
//  질문 데이터 정의
// ==============================

const categories = [
  {
    id: "skin",
    name: "피부 / 외모",
    sub: "세안·보습·자외선·커버까지",
    questions: [
      "나는 세안할 때 비누가 아니라, 폼클렌징 또는 오일클렌징을 사용한다.",
      "나는 세안 후 기본 보습 제품(토너·로션·크림)을 하루 한 번 이상 반드시 바른다.",
      "나는 자외선 차단제를 ‘외출하는 날에는 꼭 발라야 한다’는 사실을 알고 있고, 실제로 그렇게 하려고 한다.",
      "나는 트러블·각질·모공·색소침착 등 내 피부 고민의 원인을 알고 있다.",
      "나는 내 피부타입(건성·지성·복합)을 정확히 알고 있으며, 그에 맞는 클렌징·스킨케어 제품을 꾸준히 사용한다.",
      "나는 각질·진정·보습 관리를 주기적으로 하고, 피부 컨디션을 일정하게 유지하려 노력한다.",
      "나는 내 피부 톤(쿨/웜 + 파운데이션 호수)을 알고 있으며, 필요하면 톤업·쿠션 등 기본 커버 제품을 자연스럽게 사용할 수 있다.",
      "나는 계절 변화, 시술 후, 트러블 발생 등 상황에 따라 사용하는 제품을 바꾸거나 홈케어 루틴을 조절할 수 있다.",
      "나는 레티놀·나이아신아마이드·시카·티트리·PDRN 등 화장품 성분과 효과를 어느 정도 알고, 내 피부 문제에 맞는 성분 제품을 선택해 사용한다.",
      "나는 필요할 때 피부과 시술·관리를 정기적 또는 주기적으로 받고 있다."
    ]
  },
  {
    id: "hair",
    name: "헤어",
    sub: "컷·시술·스타일링·미용실 선택",
    questions: [
      "나는 한 달에 한 번 이상 미용실에서 머리를 정리(컷트)한다.",
      "나는 동네 아무 미용실이 아닌, 내가 ‘여기가 좀 더 낫다’고 느끼는 단골 또는 주로 가는 미용실이 있다.",
      "나는 다운펌·볼륨펌·매직 등 컷트 외 시술을 한 번 이상 받아본 적이 있다.",
      "나는 내 모질(직모·곱슬·반곱슬), 두상, 이마 라인의 특징을 어느 정도 이해하고 있다.",
      "나는 나에게 가장 잘 맞는 대표 헤어스타일 1가지를 확신하고 있으며, 그 스타일을 꾸준히 유지해본 경험이 있다.",
      "나는 기본적인 스타일링(손·롤빗·고데기)을 할 줄 알며, 컬크림·그루밍 토닉 등 기본 제품을 사용해 매일 일정한 퀄리티로 셀프 손질이 가능하다.",
      "나는 뜨는 부위·눌리는 부위·볼륨이 필요한 구역을 알고 있으며, 스타일링 시 이를 의도적으로 조절할 수 있다.",
      "나는 필요한 시술(다운펌·볼륨·매직·컷 구조 등)을 정확한 언어로 설명할 수 있고, 미용사와 원하는 디테일을 잘 소통할 수 있다.",
      "나는 원하는 스타일과 내 모질·두상에 맞춰 ‘미용사(1인)’를 기준으로 미용실을 선택하며, 내가 받는 시술뿐 아니라 다른 사람에게 소개해도 실패하지 않을 정도로 미용사를 볼 줄 아는 눈이 있다.",
      "나는 주변에서 “머리 어디서 했어?”, “머리 스타일 진짜 잘한다”, “미용실 추천해줘” 같은 말을 자주 들어본 적이 있다."
    ]
  },
  {
    id: "style",
    name: "패션 / 스타일",
    sub: "핏·컬러·실루엣·스타일 구축",
    questions: [
      "나는 외출할 때 상황(출근·약속·데이트 등)에 맞춰 옷을 최소한 다르게 고른다.",
      "나는 외출 전 전신거울로 핏, 구김, 전체 실루엣을 반드시 체크한다.",
      "나는 내 신체 단점(어깨, 기장, 상체·하체 비율 등)을 보완해주는 핏(오버핏, 스트레이트핏, 와이드 등)을 알고 있다.",
      "나는 내 신체 사이즈(어깨·가슴·허리·기장)를 cm 단위로 대략 알고 있다.",
      "내 옷장에는 상의·하의 각각 ‘기본템’이 3가지 이상 있다. (예: 흰/검 티셔츠, 슬랙스, 데님 등)",
      "나는 상·하의 색 조합(톤온톤, 대비 등)이나 소재 매치를 고려해 코디를 만든다.",
      "나는 이미 가지고 있는 옷들만으로도 다양한 느낌의 스타일을 연출할 수 있다.",
      "나는 반지·팔찌·안경·향수 등 액세서리를 활용해 룩의 완성도를 높인다.",
      "나는 주변에서 ‘옷 잘 입는다’는 말을 듣거나, 옷 또는 브랜드 정보를 물어본 적이 있다.",
      "나는 유행에 휘둘리지 않고, 트렌드를 내 취향에 맞게 녹여낸 나만의 스타일(클래식·미니멀·스트릿 등)이 확고하다."
    ]
  },
  {
    id: "scent",
    name: "향 & 청결",
    sub: "기본 냄새 관리 + 향 선택",
    questions: [
      "나는 겨드랑이·발·사타구니·귀 뒤 등 냄새가 나기 쉬운 부위를 신경 써서 씻는다.",
      "나는 샤워/세안 후 기본 보습을 한다.",
      "나는 향을 뿌리기 전 땀·냄새 제거를 먼저 해야 한다는 것을 알고 있으며, 탈취제를 사용한다.",
      "나는 외출 시 향수·바디미스트·섬유향수 등 발향 제품을 사용한다.",
      "나는 내가 좋아하는 향의 계열(시트러스·우디·머스크 등)을 알고 있다.",
      "나는 향의 지속력을 높이는 기본 원리(보습 → 위치 → 잔향)를 이해한다.",
      "나는 하루 일정·옷차림·계절에 따라 향을 다르게 선택한다.",
      "나는 자주 머무는 공간(방·차·옷장)에 디퓨저·사쉐 등을 사용해 좋은 향을 유지한다.",
      "나는 향을 선택할 때 나의 분위기·이미지와 어울리는지를 고려한다.",
      "나는 “향 좋다”, “향 뭐 써요?”라는 질문을 받은 적이 있다."
    ]
  },
  {
    id: "fitness",
    name: "운동 / 체형",
    sub: "활동량·운동 루틴·체형 관리",
    questions: [
      "나는 하루 2,000보(20~30분) 이상 걷는 날이 자주 있다.",
      "나는 일주일에 최소 한 번, 땀이 날 정도의 운동을 한다.",
      "나는 내 몸무게와 함께 골격근량·체지방률을 알고 있다.",
      "나는 체지방 감소·근육 증가 등 명확한 목표로 운동 루틴을 만든 경험이 있다.",
      "나는 최소 4주 이상, 주 1~2회라도 운동 루틴을 유지해본 적이 있다.",
      "나는 주 3회 이상(1시간 이상) 꾸준히 땀 흘리는 운동을 한다.",
      "나는 신체 부위별 대표 운동과 기본적인 운동 원리를 알고 있다.",
      "나는 근육이 잡힌 탄탄한 체형(복부 포함)을 유지하고 있다.",
      "나는 주 5회 이상 운동과 식단(단백질·탄수·지방)을 직접 설계해 실천한다.",
      "나는 주변에서 “몸 좋아졌다”, “체형 달라졌다”는 말을 들어본 적이 있다."
    ]
  },
  {
    id: "detail",
    name: "디테일 관리",
    sub: "손·발·수염·위생·생활습관",
    questions: [
      "나는 주 1회 손톱·발톱을 깔끔하게 정리한다.",
      "나는 수건·양말·속옷을 하루 단위로 깨끗하게 교체한다.",
      "나는 콧털이 보이지 않도록 정기적으로 정리한다.",
      "나는 핸드크림·풋케어·립밤 등을 사용해 손·발·입술을 꾸준히 관리한다.",
      "나는 꾸준히 면도하고, 수염 자국이 남지 않도록 관리하며 필요 시 레이저 제모도 고려하거나 하고 있다.",
      "나는 눈썹 칼·가위·족집게로 눈썹 정돈을 할 수 있다.",
      "나는 괄사 또는 마사지를 통해 얼굴 붓기를 빼고 얼굴 라인을 관리한다.",
      "나는 개인 휴대물품(휴대폰, 에어팟, 시계, 차키 등)을 주 1회 알코올로 소독한다.",
      "나는 베개커버·수건·속옷 등 냄새·오염이 쉬운 품목을 정기적인 주기로 교체한다.",
      "나는 내 라이프스타일에 필요한 영양제를 꾸준히 챙겨 먹는다."
    ]
  }
];

// ==============================
//  티어 메타 정보
// ==============================

const tierMeta = {
  아이언: {
    label: "아이언",
    desc: "거의 관리가 없는 초기 상태입니다. 지금부터 하나씩만 쌓아도 체감 변화가 크게 올 구간이에요."
  },
  브론즈: {
    label: "브론즈",
    desc: "가끔 떠오를 때만 관리하는 수준입니다. 생활 루틴에 ‘기본 관리’를 끼워 넣는 것이 1차 목표예요."
  },
  실버: {
    label: "실버",
    desc: "어느 정도 기본은 하지만, 영역별로 구멍이 있는 상태입니다. ‘나에게 맞는 관리’를 찾기 시작하는 구간."
  },
  골드: {
    label: "골드",
    desc: "기본 관리 루틴은 잘 잡혀 있고, 티가 나는 편입니다. 이제는 디테일과 꾸준함을 챙기면 됩니다."
  },
  플래티넘: {
    label: "플래티넘",
    desc: "관리하는 남자라는 인상을 주기 시작합니다. 나에게 맞는 방향만 제대로 잡으면 상위권까지 충분히 노려볼 수 있어요."
  },
  다이아: {
    label: "다이아",
    desc: "주변에서 이미 관리 잘한다는 말을 듣는 수준입니다. 전반적인 밸런스와 과한 부분만 조절하면 됩니다."
  },
  마스터: {
    label: "마스터",
    desc: "대부분의 관리가 체계적으로 잡혀 있고, 스스로도 방향성을 알고 있는 단계입니다. 이제는 ‘나만의 스타일’을 더 선명하게 만드는 구간."
  },
  그랜드마스터: {
    label: "그랜드마스터",
    desc: "관리 자체가 생활화되어 있고, 다른 사람에게 조언을 해줄 수 있는 수준입니다. 브랜드로서의 ‘나’를 설계해도 좋을 단계."
  },
  챌린저: {
    label: "챌린저",
    desc: "상위 1% 감도. OWN. 입장에선 롤 모델급 관리력입니다. 이제는 방향 유지와 번아웃 방지가 핵심 과제예요."
  }
};

// ==============================
// 점수(%) → 9티어 변환
// ratio: 0 ~ 100 ( % )
function scoreToTier(ratio) {
  // 안전하게 반올림
  const r = Math.round(ratio);

  if (r <= 13) return "아이언";        // 1–8점
  if (r <= 36) return "브론즈";        // 9–22점
  if (r <= 60) return "실버";          // 23–36점
  if (r <= 73) return "골드";          // 37–44점
  if (r <= 81) return "다이아";        // 45–49점
  if (r <= 88) return "마스터";        // 50–53점
  if (r <= 93) return "그랜드마스터";  // 54–56점
  return "챌린저";                     // 57–60점
}

// ==============================
//  질문 DOM 생성
// ==============================

const questionContainer = document.getElementById("question-container");
let totalQuestions = 0;
const categoryIndexMap = {}; // { skin: [1,2,...] }

function buildQuestions() {
  let qNumber = 1;

  categories.forEach((cat) => {
    categoryIndexMap[cat.id] = [];

    const details = document.createElement("section");
    details.className = "category";

    const header = document.createElement("div");
    header.className = "category-header";

    const title = document.createElement("div");
    title.className = "category-title";
    title.textContent = cat.name;

    const sub = document.createElement("div");
    sub.className = "category-sub";
    sub.textContent = cat.sub;

    header.appendChild(title);
    header.appendChild(sub);
    details.appendChild(header);

    cat.questions.forEach((qText) => {
      const qId = `q${qNumber}`;
      categoryIndexMap[cat.id].push(qNumber);

      const qDiv = document.createElement("div");
      qDiv.className = "question";

      const label = document.createElement("div");
      label.className = "question-label";
      label.innerHTML = `<span class="question-number">${qNumber}.</span> ${qText}`;

      const answers = document.createElement("div");
      answers.className = "answer-group";

      const yesId = `${qId}_yes`;
      const noId = `${qId}_no`;

      const yesLabel = document.createElement("label");
      yesLabel.innerHTML = `<input type="radio" name="${qId}" value="1" id="${yesId}"> 예`;

      const noLabel = document.createElement("label");
      noLabel.innerHTML = `<input type="radio" name="${qId}" value="0" id="${noId}"> 아니오`;

      answers.appendChild(yesLabel);
      answers.appendChild(noLabel);

      qDiv.appendChild(label);
      qDiv.appendChild(answers);
      details.appendChild(qDiv);

      qNumber++;
    });

    questionContainer.appendChild(details);
  });

  totalQuestions = qNumber - 1;
}

// ==============================
//  결과 계산
// ==============================

function calculateResults() {
  let totalScore = 0;
  let answeredCount = 0;

  // 전체 점수 계산
  for (let i = 1; i <= totalQuestions; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      return { error: true, message: "모든 문항에 답변해 주세요." };
    }

    if (yes) {
      totalScore += 1;
    }
    answeredCount += 1;
  }

  const maxScore = answeredCount;
  const overallRatio = (totalScore / maxScore) * 100;
  const overallTier = scoreToTier(overallRatio);

  // 영역별 점수
  const categoryResults = [];

  categories.forEach((cat) => {
    const indices = categoryIndexMap[cat.id];
    let catScore = 0;

    indices.forEach((num) => {
      const yes = document.querySelector(
        `input[name="q${num}"][value="1"]:checked`
      );
      if (yes) catScore += 1;
    });

    const catMax = indices.length;
    const catRatio = (catScore / catMax) * 100;
    const catTier = scoreToTier(catRatio);

    categoryResults.push({
      id: cat.id,
      name: cat.name,
      score: catScore,
      max: catMax,
      ratio: catRatio,
      tier: catTier
    });
  });

  return {
    error: false,
    overall: {
      score: totalScore,
      max: maxScore,
      ratio: overallRatio,
      tier: overallTier
    },
    categories: categoryResults
  };
}

// ==============================
//  결과 렌더링
// ==============================

function renderResults(result) {
  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");
  const resultSection = document.getElementById("result-section");

  const overall = result.overall;
  const meta = tierMeta[overall.tier];

  overallBox.innerHTML = `
    <div class="tier-badge">
      <span class="main">${overall.tier}</span>
      <span class="sub">${overall.ratio.toFixed(1)}%</span>
    </div>
    <div class="result-score">
      전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
      (${overall.score} / ${overall.max})
    </div>
    <div class="result-desc">
      ${meta ? meta.desc : ""}
    </div>
  `;

  catBox.innerHTML = "";
  result.categories.forEach((c) => {
    const meta = tierMeta[c.tier];
    const div = document.createElement("div");
    div.className = "category-card";
    div.innerHTML = `
      <div class="category-card-title">
        <span class="name">${c.name}</span>
        <span class="tier">${c.tier} · ${c.ratio.toFixed(1)}%</span>
      </div>
      <p>${c.score} / ${c.max} 문항 관리 중</p>
    `;
    catBox.appendChild(div);
  });

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth" });
}

// ==============================
//  이벤트 바인딩
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  buildQuestions();

  const startBtn = document.getElementById("startBtn");
  const submitBtn = document.getElementById("submitBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const section = document.getElementById("question-section");
      section.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const result = calculateResults();
      if (result.error) {
        alert(result.message);
        return;
      }
      renderResults(result);
    });
  }
});
