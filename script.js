// ==============================
//  질문 데이터 정의
// ==============================

const categories = [
  {
    id: "skin",
    name: "피부 / 외모",
    sub: "세안·보습·자외선·커버까지",
    questions: [
      "나는 아침, 저녁으로 규칙적인 세안을 한다.",
      "나는 세안할 때 비누가 아니라, 폼클렌징 또는 오일클렌징을 사용한다.",
      "나는 세안 후 기본 보습 제품(토너·로션·크림)을 하루 한 번 이상 반드시 바른다.",
      "나는 자외선 차단제(선크림)를 외출 시 꼭 발라야 한다는 사실을 알고 있고 실제로 그렇게 한다.",
      "나는 내 피부타입(건성·지성·복합)을 정확히 알고 있으며, 그에 맞는 클렌징·스킨케어 제품을 꾸준히 사용한다.",
      "나는 각질·진정·보습 관리를 주기적으로 하고, 피부 컨디션을 일정하게 유지하려 노력한다.",
      "나는 내 피부 톤(쿨/웜 + 파운데이션 호수)을 알고 있으며, 필요하면 톤업·쿠션 등 기본 커버 제품을 자연스럽게 사용할 수 있다.",
      "나는 계절 변화, 시술 후, 트러블 발생 등 상황에 따라 사용하는 제품을 바꾸거나 홈케어 루틴을 조절할 수 있다.",
      "나는 화장품 성분(레티놀·나이아신아마이드·히알루론산·판테놀 등)과 효과를 어느 정도 알고, 내 피부 문제에 맞는 화장품을 선택해서 사용한다.",
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
      "나는 탈모 관리(약·두피 제품 등)를 하고 있거나, 탈모가 아니더라도 모발·두피 건강을 위해 꾸준히 관리하고 있다.",
      "나는 손·롤빗·고데기 등을 이용해 기본 스타일링이 가능하며, 컬크림·토닉·스프레이 등 헤어 제품으로 일정한 퀄리티를 유지할 수 있다.",
      "나는 뜨는 부위·눌리는 부위·볼륨이 필요한 구역을 알고 있으며, 스타일링 시 이를 의도적으로 조절해 다양한 스타일을 연출할 수 있다.",
      "나는 미용사를 기준으로 미용실을 선택하며, 나뿐 아니라 소개받은 사람도 망하지 않을 정도로 ‘미용사 보는 눈’이 있다.",
      "나는 “머리 어디서 했어?”, “머리 스타일 잘한다”, “미용실 추천해줘”라는 말을 들어본 적이 있다."
    ]
  },
  {
    id: "style",
    name: "패션 / 스타일",
    sub: "핏·컬러·실루엣·스타일 구축",
    questions: [
      "나는 외출할 때 상황(출근·약속·데이트 등)에 맞춰 옷을 최소한 다르게 고른다.",
      "나는 내 신체 단점(어깨, 기장, 비율 등)을 보완해주는 핏을 알고 있다.",
      "나는 외출 전 전신거울로 핏, 구김, 전체 실루엣을 반드시 체크한다.",
      "나는 내 신체 사이즈(어깨·가슴·허리·기장)를 cm 단위로 대략 알고 있다.",
      "나는 옷장에 기본템 상·하의 각각 최소 3개 이상 갖추고 있다. (예: 흰/검 티셔츠, 슬랙스, 데님 등)",
      "나는 상·하의 색 조합(톤온톤, 대비 등)이나 소재 매치를 고려해 코디를 만든다.",
      "나는 기존 옷만으로도 다양한 무드의 스타일을 연출할 수 있다.(미니멀 / 캐주얼 / 깔끔한 데일리 등 믹스매치 가능)",
      "나는 시계·반지·팔찌·목걸이·안경 등 액세서리를 활용해 룩의 완성도를 높인다.",
      "나는 주변에서 “옷 잘 입는다”, “어디서 샀냐”는 질문을 받아본 적이 있다.",
      "나는 유행을 과하게 따라가지 않고, 내 스타일(미니멀·클래식·스트릿 등)이 명확히 확립되어 있다."
    ]
  },
  {
    id: "scent",
    name: "향 & 청결",
    sub: "기본 냄새 관리 + 향 선택",
    questions: [
      "나는 겨드랑이·발·사타구니·귀 뒤 등 냄새가 나기 쉬운 부위를 신경 써서 씻는다.",
      "나는 빨래에서 쿰쿰한 냄새가 나지 않도록 섬유유연제·건조기·환기 등으로 관리한다.",
      "나는 외출 시 향수·바디미스트·섬유향수 등 발향 제품을 사용한다.",
      "나는 향을 뿌리기 전 땀·냄새 제거를 먼저 해야 한다는 것을 알고 있으며, 탈취제를 사용한다.",
      "나는 나의 선호 향 계열(시트러스/우디/머스크/바닐라 등)을 알고 있다.",
      "나는 향의 농도, 계절, 상황에 따라 제품을 다르게 쓴다.",
      "나는 향 지속력 원리(보습 → 뿌리는 위치 → 잔향 구조)를 이해하고 적용한다.",
      "나는 내 방·옷장·차 등 생활 공간 향 관리(디퓨저·사쉐·룸스프레이)를 하고 있다.",
      "나는 향을 선택할 때 개인 취향뿐 아니라 나의 무드·이미지·스타일과의 조화까지 고려한다.",
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
      "나는 주 3회 이상(1시간 이상) 땀 흘리는 운동을 꾸준히 한다.",
      "나는 신체 부위별 대표 운동과 기본적인 운동 원리를 알고 있다.",
      "나는 근육이 잡힌 탄탄한 체형을 유지하고 있다. (복부 포함)",
      "나는 주 5회 이상 루틴과 식단을 스스로 설계·관리하며 꾸준히 실천하고 있다.",
      "나는 주변에서 “몸 좋아졌다”, “체형 달라졌다”, “건강해 보인다”는 말을 들어본 적이 있다."
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
      "나는 눈썹 칼·가위·족집게를 사용해 눈썹을 깔끔하게 정돈할 수 있다.",
      "나는 괄사 또는 마사지를 통해 얼굴 붓기를 빼고 얼굴 라인을 관리한다.",
      "나는 휴대폰·에어팟·시계·차키 등 개인 휴대물품을 주 1회 알코올로 소독한다.",
      "나는 베개커버·수건·속옷 등 냄새·세균이 쉽게 쌓이는 품목을 정기적인 주기로 교체한다.",
      "나는 내 라이프스타일에 필요한 영양제를 꾸준히 섭취한다."
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
// 점수(%) → 실점수(1~60) 변환 후 티어 판정
// ==============================
function scoreToTier(ratio) {
  const score = Math.round((ratio / 100) * 60); // 퍼센트를 실점수로 변환

  if (score <= 8)  return '아이언';        // 1–8
  if (score <= 21) return '브론즈';        // 9–21
  if (score <= 34) return '실버';          // 22–34
  if (score <= 40) return '골드';          // 35–40
  if (score <= 45) return '플래티넘';      // 41–45
  if (score <= 50) return '다이아';        // 46–50
  if (score <= 53) return '마스터';        // 51–53
  if (score <= 57) return '그랜드마스터';  // 54–57
  return '챌린저';                         // 58–60
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
