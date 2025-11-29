// ===============================
// 질문 데이터
// ===============================

const questions = [
  // ① 피부 (1~10)
  { id: 1, cat: "skin", text: "나는 아침, 저녁으로 규칙적인 세안을 한다." },
  { id: 2, cat: "skin", text: "나는 세안할 때 비누가 아니라, 폼클렌징 또는 오일클렌징을 사용한다." },
  { id: 3, cat: "skin", text: "나는 세안 후 기본 보습 제품(토너·로션·크림)을 하루 한 번 이상 반드시 바른다." },
  { id: 4, cat: "skin", text: "나는 자외선 차단제(선크림)를 외출 시 꼭 바른다." },
  { id: 5, cat: "skin", text: "나는 내 피부타입(건성·지성·복합성)을 정확히 알고, 그에 맞는 제품을 꾸준히 사용한다." },
  { id: 6, cat: "skin", text: "나는 각질·진정·보습 관리를 주기적으로 하며 피부 컨디션을 일정하게 유지하거나 유지하려고 노력한다." },
  { id: 7, cat: "skin", text: "나는 내 피부 톤(쿨/웜 + 파운데이션 호수)을 알고 있으며, 필요하면 톤업·쿠션 등 기본 커버 제품을 자연스럽게 사용할 수 있다." },
  { id: 8, cat: "skin", text: "나는 계절 변화, 시술 후, 트러블 발생 등 상황에 따라 사용하는 제품을 바꾸거나 홈케어 루틴을 조절할 수 있다." },
  { id: 9, cat: "skin", text: "나는 화장품 성분과 효과를 어느 정도 알고, 내 피부 문제에 맞는 화장품을 선택해서 사용한다." },
  { id: 10, cat: "skin", text: "나는 필요할 때 피부과 시술·관리를 정기적 또는 주기적으로 받고 있다." },

  // ② 헤어 (11~20)
  { id: 11, cat: "hair", text: "나는 한 달에 한 번 이상 미용실에서 머리를 정리(컷트)한다." },
  { id: 12, cat: "hair", text: "나는 동네 아무 미용실이 아닌, 내가 선호하는 단골 미용실 또는 주로 가는 곳이 있다." },
  { id: 13, cat: "hair", text: "나는 다운펌·볼륨펌·매직 등 컷트 외 시술을 한 번 이상 받아본 적이 있다." },
  { id: 14, cat: "hair", text: "나는 내 모질(직모·곱슬·반곱슬), 두상, 이마 라인의 특징을 어느 정도 알고 있다." },
  { id: 15, cat: "hair", text: "나는 나에게 가장 잘 맞는 대표 헤어스타일 1가지를 확신하며 꾸준히 유지해본 적이 있다." },
  { id: 16, cat: "hair", text: "나는 탈모 관리(약·두피 제품 등)를 하고 있거나, 모발·두피 건강을 위해 꾸준히 관리하고 있다." },
  { id: 17, cat: "hair", text: "나는 손·롤빗·고데기 등을 이용해 기본 스타일링이 가능하며, 컬크림·토닉·스프레이 등으로 일정한 퀄리티를 유지할 수 있다." },
  { id: 18, cat: "hair", text: "나는 뜨는 부위·눌리는 부위·볼륨이 필요한 구역을 알고 있으며, 스타일링 시 이를 의도적으로 조절해 다양한 스타일을 연출할 수 있다." },
  { id: 19, cat: "hair", text: "나는 미용사를 기준으로 미용실을 선택하며, 소개해준 사람도 망하지 않을 정도로 ‘미용사 보는 눈’이 있다." },
  { id: 20, cat: "hair", text: "나는 “머리 어디서 했어?”, “머리 스타일 잘한다”, “미용실 추천해줘”라는 말을 들어본 적이 있다." },

  // ③ 패션 (21~30)
  { id: 21, cat: "style", text: "나는 외출할 때 상황(출근·약속·데이트 등)에 맞춰 옷을 최소한 다르게 고른다." },
  { id: 22, cat: "style", text: "나는 내 신체 단점(어깨, 기장, 비율 등)을 보완해주는 핏을 알고 있다." },
  { id: 23, cat: "style", text: "나는 외출 전 전신거울로 핏, 구김, 전체 실루엣을 반드시 체크한다." },
  { id: 24, cat: "style", text: "나는 내 신체 사이즈(어깨·가슴·허리·기장)를 cm 단위로 대략 알고 있다." },
  { id: 25, cat: "style", text: "나는 옷장에 기본템 상·하의 각각 최소 3개 이상 갖추고 있다.(예: 흰/검 티셔츠, 슬랙스, 데님 등)" },
  { id: 26, cat: "style", text: "나는 상·하의 색 조합(톤온톤, 대비)이나 소재 매치를 고려해 코디한다." },
  { id: 27, cat: "style", text: "나는 기존 옷만으로도 다양한 무드의 스타일(미니멀/캐주얼/깔끔한 데일리 등)을 연출할 수 있다." },
  { id: 28, cat: "style", text: "나는 시계 외에 반지·팔찌·목걸이·안경 등 액세서리를 활용해 룩의 완성도를 높인다." },
  { id: 29, cat: "style", text: "나는 주변에서 “옷 잘 입는다”, “어디서 샀냐”는 질문을 받아본 적이 있다." },
  { id: 30, cat: "style", text: "나는 유행을 과하게 따라가지 않고, 내 스타일(미니멀·클래식·스트릿 등)이 명확히 확립되어 있다." },

  // ④ 향 (31~40)
  { id: 31, cat: "scent", text: "나는 겨드랑이·발·사타구니·귀 뒤 등 냄새가 나는 부위를 신경 써서 씻는다." },
  { id: 32, cat: "scent", text: "나는 빨래에서 쿰쿰한 냄새가 나지 않도록 섬유유연제·건조기·환기 등으로 관리한다." },
  { id: 33, cat: "scent", text: "나는 외출 시 향수·바디미스트·섬유향수 등 발향 제품을 사용한다." },
  { id: 34, cat: "scent", text: "나는 향을 뿌리기 전 탈취(땀 냄새, 담배 냄새 등 악취 제거)를 해야 한다는 것을 알고 있으며 탈취제를 사용한다." },
  { id: 35, cat: "scent", text: "나는 나의 선호 향 계열(시트러스/우디/머스크/바닐라 등)을 알고 있다." },
  { id: 36, cat: "scent", text: "나는 향의 농도, 계절, 상황에 따라 제품을 다르게 쓴다." },
  { id: 37, cat: "scent", text: "나는 향 지속력 원리(보습 → 뿌리는 위치 → 잔향 구조)를 이해하고 적용한다." },
  { id: 38, cat: "scent", text: "나는 내 방·옷장·차 등 생활 공간 향 관리(디퓨저·사쉐·룸스프레이)를 하고 있다." },
  { id: 39, cat: "scent", text: "나는 향을 선택할 때 개인 취향뿐 아니라 나의 무드·이미지·스타일과의 조화까지 고려한다." },
  { id: 40, cat: "scent", text: "나는 “향 좋다”, “향 뭐 써요?”라는 질문을 받은 적이 있다." },

  // ⑤ 운동 (41~50)
  { id: 41, cat: "fitness", text: "나는 하루 2,000보(20~30분) 이상 걷는 날이 자주 있다." },
  { id: 42, cat: "fitness", text: "나는 일주일에 최소 한 번, 땀이 날 정도의 운동을 한다." },
  { id: 43, cat: "fitness", text: "나는 내 몸무게·골격근량·체지방률과 같은 기초 수치를 알고 있다." },
  { id: 44, cat: "fitness", text: "나는 체지방 감소·근육 증가 등 명확한 목표로 운동 루틴을 만든 경험이 있다." },
  { id: 45, cat: "fitness", text: "나는 최소 4주 이상, 주 1~2회 운동 루틴을 유지해본 적이 있다." },
  { id: 46, cat: "fitness", text: "나는 주 3회 이상(1시간 이상) 땀 흘리는 운동을 꾸준히 한다." },
  { id: 47, cat: "fitness", text: "나는 신체 부위별 대표 운동과 기본적인 운동 원리를 알고 있다." },
  { id: 48, cat: "fitness", text: "나는 근육이 잡힌 탄탄한 체형을 유지하고 있다. (복부 포함)" },
  { id: 49, cat: "fitness", text: "나는 주 5회 이상 루틴과 식단을 스스로 설계·관리하며 꾸준히 실천하고 있다." },
  { id: 50, cat: "fitness", text: "나는 주변에서 “몸 좋아졌다”, “체형 달라졌다”, “건강해 보인다”는 말을 들어본 적이 있다." },

  // ⑥ 디테일 (51~60)
  { id: 51, cat: "detail", text: "나는 주 1회 손톱·발톱을 깔끔하게 정리한다." },
  { id: 52, cat: "detail", text: "나는 수건·양말·속옷을 하루 단위로 깨끗하게 교체한다." },
  { id: 53, cat: "detail", text: "나는 콧털이 보이지 않도록 정기적으로 정리한다." },
  { id: 54, cat: "detail", text: "나는 핸드크림·풋케어·립밤 등을 사용해 손·발·입술을 꾸준히 관리한다." },
  { id: 55, cat: "detail", text: "나는 꾸준히 면도하고, 수염 자국이 남지 않도록 관리하며 필요 시 레이저 제모를 고려하거나 하고 있다." },
  { id: 56, cat: "detail", text: "나는 눈썹 칼·가위·족집게를 사용해 눈썹을 깔끔하게 정돈할 수 있다." },
  { id: 57, cat: "detail", text: "나는 괄사 또는 마사지로 얼굴 붓기를 빼고 얼굴 라인을 관리한다." },
  { id: 58, cat: "detail", text: "나는 휴대폰·에어팟·시계·차키 등 개인 휴대물품을 주 1회 알코올로 소독한다." },
  { id: 59, cat: "detail", text: "나는 베개커버·수건·속옷 등 냄새·세균이 쉽게 쌓이는 품목을 정기적인 주기로 교체한다." },
  { id: 60, cat: "detail", text: "나는 내 라이프스타일에 필요한 영양제를 꾸준히 섭취한다." },
];

// 카테고리 메타
const categories = [
  { id: "skin", name: "피부 / 외모" },
  { id: "hair", name: "헤어" },
  { id: "style", name: "패션 / 스타일" },
  { id: "scent", name: "향 & 청결" },
  { id: "fitness", name: "운동 / 체형" },
  { id: "detail", name: "디테일 관리" },
];

// 질문 번호 → 카테고리별 매핑
const categoryIndexMap = {
  skin: questions.filter((q) => q.cat === "skin").map((q) => q.id),
  hair: questions.filter((q) => q.cat === "hair").map((q) => q.id),
  style: questions.filter((q) => q.cat === "style").map((q) => q.id),
  scent: questions.filter((q) => q.cat === "scent").map((q) => q.id),
  fitness: questions.filter((q) => q.cat === "fitness").map((q) => q.id),
  detail: questions.filter((q) => q.cat === "detail").map((q) => q.id),
};

// ===============================
// 티어 메타 + 가이드
// ===============================

const tierMeta = {
  아이언: {
    label: "아이언",
    desc: "거의 방치된 상태에 가깝습니다. 기본 위생과 최소 루틴부터 다시 세우는 단계예요.",
    focus: "하루 10분, 한 가지 영역부터 '예'를 만들어 가는 게 목표입니다.",
  },
  브론즈: {
    label: "브론즈",
    desc: "가끔 관리하긴 하지만, 일관성이 부족한 단계입니다.",
    focus: "가장 부담 없는 루틴 2~3가지를 정해서 습관화하는 게 핵심입니다.",
  },
  실버: {
    label: "실버",
    desc: "한국 남자 평균 정도의 관리 수준입니다.",
    focus: "눈에 잘 보이는 영역(피부·헤어·향)을 먼저 올려서 '관리하는 사람' 이미지를 만드는 것이 좋습니다.",
  },
  골드: {
    label: "골드",
    desc: "주변에서 ‘관리 좀 한다’고 느낄 수 있는 수준입니다.",
    focus: "꾸준함을 유지하면서, 나만의 스타일을 명확히 만드는 단계입니다.",
  },
  플래티넘: {
    label: "플래티넘",
    desc: "여러 영역을 균형 있게 관리하고 있는 상위권 수준입니다.",
    focus: "약한 영역 1~2개를 골라 보완하면 다이아 이상도 노려볼 수 있습니다.",
  },
  다이아: {
    label: "다이아",
    desc: "대부분의 관리 루틴이 체계적으로 잡혀 있는 상위 10% 수준입니다.",
    focus: "주변에 조언해줄 수 있을 정도로 ‘관리 지식’을 언어로 정리해보면 좋습니다.",
  },
  마스터: {
    label: "마스터",
    desc: "관리 자체가 라이프스타일에 깊이 녹아든 단계입니다.",
    focus: "지금 수준을 유지하면서, 장기적인 건강(수면·검진 등)을 함께 챙기는 것이 중요합니다.",
  },
  그랜드마스터: {
    label: "그랜드마스터",
    desc: "관리 자체가 생활화되어 있고, 다른 사람에게 조언을 해줄 수 있는 수준입니다.",
    focus: "브랜드로서의 ‘나’를 설계해도 좋을 단계입니다.",
  },
  챌린저: {
    label: "챌린저",
    desc: "상위 1% 감도. OWN. 기준 롤 모델급 관리력입니다.",
    focus: "이제부터는 방향 유지와 번아웃 방지가 핵심 과제예요.",
  },
};

// 카테고리별 레벨 가이드 (low / mid / high)
const categoryAdviceMap = {
  skin: {
    low: "세안·보습·선크림 이 세 가지만이라도 확실히 루틴으로 만들면 피부 인상이 급격히 좋아집니다.",
    mid: "이미 기초는 잘 하고 있습니다. 특정 고민(트러블, 모공, 톤)을 하나 골라 집중 케어를 추가해보세요.",
    high: "피부과 시술과 홈케어 밸런스를 유지하면서, 과한 시술로 인한 장기 손상만 조심하면 좋습니다.",
  },
  hair: {
    low: "먼저 나에게 맞는 한 가지 머리 스타일과 괜찮은 미용실/미용사를 찾는 것이 1순위입니다.",
    mid: "스타일 재현력은 있지만 디테일에서 갈립니다. 뜨는 부위와 볼륨 포인트를 정확히 파악해보세요.",
    high: "지금 수준이면 계절·상황별 헤어 버전을 2~3개 정도 만들어두면 이미지 연출이 훨씬 쉬워집니다.",
  },
  style: {
    low: "기본템(흰/검 티, 슬랙스, 깔끔한 스니커즈)을 먼저 갖추고, 상황에 맞는 옷 고르기부터 연습해보세요.",
    mid: "핏과 색 조합은 어느 정도 알고 있습니다. 액세서리와 아우터 선택으로 무드를 더 나눠보세요.",
    high: "이미지 일관성이 중요합니다. 나만의 시그니처 아이템(시계, 향, 실루엣)을 정해두면 좋습니다.",
  },
  scent: {
    low: "샤워·빨래·탈취까지 '냄새 제거'를 먼저 정리하고, 그 위에 향수를 얹는 구조로 생각해보세요.",
    mid: "향을 쓰고는 있지만, 농도·계절·동선에 따라 조절하면 훨씬 덜 부담스럽고 고급스럽게 느껴집니다.",
    high: "공간 향과 바디 향의 콘셉트를 맞추면, '이 사람=이 향'이라는 강한 인상을 만들 수 있습니다.",
  },
  fitness: {
    low: "걷기·가벼운 유산소라도 주 2~3회 꾸준히 하는 것이 최우선입니다. 숫자보다 '습관'에 집중하세요.",
    mid: "운동 루틴은 있으니, 식단과 수면을 함께 관리하면 체형 변화 속도가 훨씬 빨라집니다.",
    high: "과부하와 부상, 호르몬 밸런스를 항상 체크하면서, 장기적인 퍼포먼스를 설계해보세요.",
  },
  detail: {
    low: "손톱·콧털·수건 교체 같은 기본 디테일만 챙겨도 전체 인상이 확 달라집니다.",
    mid: "이미 기본 디테일은 좋습니다. 면도 자국, 각질, 휴대물품 청결까지 한 단계만 더 신경 써보세요.",
    high: "디테일이 강점인 사람입니다. 과한 강박만 조심하면, 누구에게나 설득력 있는 '관리 롤모델'입니다.",
  },
};

// 티어 → 레벨 매핑
function tierToLevel(tier) {
  if (tier === "아이언" || tier === "브론즈") return "low";
  if (tier === "실버" || tier === "골드" || tier === "플래티넘") return "mid";
  return "high"; // 다이아, 마스터, 그마, 챌린저
}

// ===============================
// 점수 → 티어 변환
// (공통: 0~60 점수 기준)
// ===============================

function tierByScore(score) {
  // 안전 가드
  if (score <= 0) return "아이언";

  if (score <= 8) return "아이언"; // 0~8
  if (score <= 21) return "브론즈"; // 9~21
  if (score <= 34) return "실버"; // 22~34
  if (score <= 39) return "골드"; // 35~39
  if (score <= 45) return "플래티넘"; // 40~45
  if (score <= 49) return "다이아"; // 46~49
  if (score <= 53) return "마스터"; // 50~53
  if (score <= 57) return "그랜드마스터"; // 54~57
  return "챌린저"; // 58~60
}

// ===============================
// DOM 생성: 질문 페이지
// ===============================

const questionContainer = document.getElementById("question-container");

function renderQuestions() {
  questionContainer.innerHTML = "";

  categories.forEach((cat) => {
    const group = document.createElement("div");
    group.className = "category-group";

    const header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = `
      <div class="category-title">${cat.name}</div>
      <div class="category-sub">${categoryIndexMap[cat.id].length}문항</div>
    `;
    group.appendChild(header);

    categoryIndexMap[cat.id].forEach((num) => {
      const q = questions.find((qq) => qq.id === num);
      const item = document.createElement("div");
      item.className = "question-item";

      const label = document.createElement("label");
      label.className = "question-label";
      label.textContent = `${q.id}. ${q.text}`;
      item.appendChild(label);

      const options = document.createElement("div");
      options.className = "question-options";
      options.innerHTML = `
        <label>
          <input type="radio" name="q${q.id}" value="1" />
          예
        </label>
        <label>
          <input type="radio" name="q${q.id}" value="0" />
          아니오
        </label>
      `;

      item.appendChild(options);
      group.appendChild(item);
    });

    questionContainer.appendChild(group);
  });
}

// ===============================
// 채점 로직
// ===============================

function calculateResult() {
  let totalScore = 0;
  let answeredCount = 0;

  for (let i = 1; i <= questions.length; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      return {
        error: true,
        message: "모든 문항에 예/아니오를 선택해주세요.",
      };
    }

    if (yes) totalScore += 1;
    answeredCount += 1;
  }

  const maxScore = answeredCount;
  const overallPercent = (totalScore / maxScore) * 100;
  const overallTier = tierByScore(totalScore);

  // 카테고리별
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
    const catPercent = (catScore / catMax) * 100;

    // 카테고리도 0~60 점수로 환산 (문항 * 6)
    const virtualScore = catScore * 6;
    const catTier = tierByScore(virtualScore);

    categoryResults.push({
      id: cat.id,
      name: cat.name,
      score: catScore,
      max: catMax,
      percent: catPercent,
      tier: catTier,
    });
  });

  return {
    error: false,
    overall: {
      score: totalScore,
      max: maxScore,
      percent: overallPercent,
      tier: overallTier,
    },
    categories: categoryResults,
  };
}

// ===============================
// 결과 렌더링
// ===============================

const overallBox = document.getElementById("overall-result");
const catBox = document.getElementById("category-results");

function renderResults(result) {
  const overall = result.overall;
  const meta = tierMeta[overall.tier];

  overallBox.innerHTML = `
    <div class="tier-badge">
      <span class="main">${overall.tier}</span>
      <span class="sub">${overall.percent.toFixed(1)}%</span>
    </div>
    <div class="result-score">
      전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
      (${overall.score} / ${overall.max})
    </div>
    <div class="result-desc">
      <strong>${meta.label}</strong> 티어 기준 설명<br />
      ${meta.desc}<br />
      <br />
      <strong>OWN.가 제안하는 다음 단계</strong> – ${meta.focus}
    </div>
  `;

  catBox.innerHTML = "";
  result.categories.forEach((cat) => {
    const level = tierToLevel(cat.tier);
    const advice = categoryAdviceMap[cat.id][level];

    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <div class="cat-header">
        <div>
          <div class="cat-name">${cat.name}</div>
          <div class="cat-score">${cat.score} / ${cat.max} 문항 관리 중</div>
        </div>
        <div class="cat-tier">${cat.tier} · ${cat.percent.toFixed(1)}%</div>
      </div>
      <div class="cat-advice">${advice}</div>
    `;
    catBox.appendChild(card);
  });
}

// ===============================
// 페이지 전환 & 이벤트
// ===============================

const introPage = document.getElementById("intro-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

function showPage(page) {
  [introPage, quizPage, resultPage].forEach((p) => (p.className = "page"));
  page.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("startBtn").addEventListener("click", () => {
  showPage(quizPage);
});

document.getElementById("backIntroBtn").addEventListener("click", () => {
  showPage(introPage);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const result = calculateResult();
  if (result.error) {
    alert(result.message);
    return;
  }
  renderResults(result);
  showPage(resultPage);
});

document.getElementById("retryBtn").addEventListener("click", () => {
  // 선택 리셋
  for (let i = 1; i <= questions.length; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]`);
    if (yes) yes.checked = false;
    if (no) no.checked = false;
  }
  showPage(quizPage);
});

// CTA 링크 (나중에 네 Linktree 주소로 교체하면 됨)
const productLink = document.getElementById("productLink");
// 예시: productLink.href = "https://linktr.ee/your-id";
// 지금은 빈 # 상태로 두면 됨.

// 초기 질문 렌더링
renderQuestions();
