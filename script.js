// ===============================
// 설정 값
// ===============================

// 나중에 링크트리 주소만 여기 바꿔 넣으면 됨
const PRODUCT_LINK = "https://example.com/your-linktree";

// ===============================
// 질문 데이터
// ===============================

const categories = [
  {
    id: "skin",
    name: "피부 / 외모",
    subtitle: "피부 루틴, 기초 케어, 시술 포함",
    questions: [
      "나는 아침, 저녁으로 규칙적인 세안을 한다.",
      "나는 세안할 때 비누가 아니라, 폼클렌징 또는 오일클렌징을 사용한다.",
      "나는 세안 후 기본 보습 제품(토너·로션·크림)을 하루 한 번 이상 반드시 바른다.",
      "나는 자외선 차단제(선크림)를 외출 시 꼭 발라야 한다는 사실을 알고 있고 실제로 그렇게 한다.",
      "나는 내 피부타입(건성·지성·복합성)을 정확히 알고, 그에 맞는 제품(클렌징·스킨케어 등)을 꾸준히 사용한다.",
      "나는 각질·진정·보습 관리를 주기적으로 하며 피부 컨디션을 일정하게 유지한다, 또는 유지하려고 노력한다.",
      "나는 내 피부 톤(쿨/웜 + 파운데이션 호수)을 알고 있으며, 필요하면 톤업·쿠션 등 기본 커버 제품을 자연스럽게 사용할 수 있다.",
      "나는 계절 변화, 시술 후, 트러블 발생 등 상황에 따라 사용하는 제품을 바꾸거나 홈케어 루틴을 조절할 수 있다.",
      "나는 화장품 성분(레티놀·나이아신아마이드·히알루론산·판테놀 등)과 효과를 어느 정도 알고, 내 피부 문제에 맞는 화장품을 선택해서 사용한다.",
      "나는 필요할 때 피부과 시술·관리를 정기적 또는 주기적으로 받고 있다."
    ]
  },
  {
    id: "hair",
    name: "헤어",
    subtitle: "컷, 스타일링, 탈모·두피 관리",
    questions: [
      "나는 한 달에 한 번 이상 미용실에서 머리를 정리(컷트)한다.",
      "나는 동네 아무 미용실이 아닌, 내가 선호하는 단골 미용실 / 주로 가는 곳이 있다.",
      "나는 다운펌·볼륨펌·매직 등 컷트 외 시술을 한 번 이상 받아본 적이 있다.",
      "나는 내 모질(직모·곱슬·반곱슬), 두상, 이마 라인의 특징을 어느 정도 알고 있다.",
      "나는 나에게 가장 잘 맞는 대표 헤어스타일 1가지를 확신하며 꾸준히 유지해본 적이 있다.",
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
    subtitle: "코디, 핏, 스타일 방향성",
    questions: [
      "나는 외출할 때 상황(출근·약속·데이트 등)에 맞춰 옷을 최소한 다르게 고른다.",
      "나는 내 신체 단점(어깨, 기장, 비율 등)을 보완해주는 핏을 알고 있다.",
      "나는 외출 전 전신거울로 핏, 구김, 전체 실루엣을 반드시 체크한다.",
      "나는 내 신체 사이즈(어깨·가슴·허리·기장)를 cm 단위로 대략 알고 있다.",
      "나는 옷장에 기본템 상·하의 각각 최소 3개 이상 갖추고 있다. (예: 흰/검 티셔츠, 슬랙스, 데님 등)",
      "나는 상·하의 색 조합(톤온톤, 대비)이나 소재 매치를 고려해 코디한다.",
      "나는 기존 옷만으로도 다양한 무드의 스타일을 연출할 수 있다. (미니멀 / 캐주얼 / 깔끔한 데일리 등)",
      "나는 시계 외에 반지·팔찌·목걸이·안경 등 액세서리를 활용해 룩의 완성도를 높인다.",
      "나는 주변에서 “옷 잘 입는다”, “어디서 샀냐”는 질문을 받아본 적이 있다.",
      "나는 유행을 과하게 따라가지 않고, 내 스타일(미니멀·클래식·스트릿 등)이 명확히 확립되어 있다."
    ]
  },
  {
    id: "scent",
    name: "향 & 청결",
    subtitle: "체취, 향수, 공간 향 관리",
    questions: [
      "나는 겨드랑이·발·사타구니·귀 뒤 등 냄새가 나는 부위를 신경 써서 씻는다.",
      "나는 빨래에서 쿰쿰한 냄새가 나지 않도록 섬유유연제·건조기·환기 등으로 관리한다.",
      "나는 외출 시 향수·바디미스트·섬유향수 등 발향 제품을 사용한다.",
      "나는 향을 뿌리기 전 탈취(땀 냄새, 담배 냄새 등 악취 제거)를 해야 한다는 것을 알고 있으며 탈취제를 사용한다.",
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
    subtitle: "운동 습관, 체형, 식단 수준",
    questions: [
      "나는 하루 2,000보(20~30분) 이상 걷는 날이 자주 있다.",
      "나는 일주일에 최소 한 번, 땀이 날 정도의 운동을 한다.",
      "나는 내 몸무게·골격근량·체지방률과 같은 기초 수치를 알고 있다.",
      "나는 체지방 감소·근육 증가 등 명확한 목표로 운동 루틴을 만든 경험이 있다.",
      "나는 최소 4주 이상, 주 1~2회 운동 루틴을 유지해본 적이 있다.",
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
    subtitle: "손·발, 체모, 위생, 소도구",
    questions: [
      "나는 주 1회 손톱·발톱을 깔끔하게 정리한다.",
      "나는 수건·양말·속옷을 하루 단위로 깨끗하게 교체한다.",
      "나는 콧털이 보이지 않도록 정기적으로 정리한다.",
      "나는 핸드크림·풋케어·립밤 등을 사용해 손·발·입술을 꾸준히 관리한다.",
      "나는 꾸준히 면도하고, 수염 자국이 남지 않도록 관리하며 필요 시 레이저 제모도 고려하거나 하고 있다.",
      "나는 눈썹 칼·가위·족집게를 사용해 눈썹을 깔끔하게 정돈할 수 있다.",
      "나는 괄사 또는 마사지로 얼굴 붓기를 빼고 얼굴 라인을 관리한다.",
      "나는 휴대폰·에어팟·시계·차키 등 개인 휴대물품을 주 1회 알코올로 소독한다.",
      "나는 베개커버·수건·속옷 등 냄새·세균이 쉽게 쌓이는 품목을 정기적인 주기로 교체한다.",
      "나는 내 라이프스타일에 필요한 영양제를 꾸준히 섭취한다."
    ]
  }
];

// 전체 문항 수 (자동 계산)
const TOTAL_QUESTIONS = categories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0
);

// ===============================
// 티어 메타 정보 (전체 티어 설명)
// ===============================

const tierMeta = {
  "아이언": {
    label: "아이언",
    desc:
      "관리라고 부를 수 있는 루틴이 거의 없는 단계입니다. 당장 피부 세안·보습, 수건·양말·속옷 교체부터 ‘위생 기본기’ 루틴을 만드는 것이 1순위입니다."
  },
  "브론즈": {
    label: "브론즈",
    desc:
      "가끔 관리하긴 하지만 일관성이 부족한 상태입니다. 한두 가지 영역(예: 세안+보습, 수건 교체)을 ‘매일/매주’로 고정해 관리가 습관이 되게 만드는 것이 중요합니다."
  },
  "실버": {
    label: "실버",
    desc:
      "한국 남성 평균 수준, ‘기본 관리’는 대체로 되고 있습니다. 이제는 내가 약한 영역(피부, 향, 디테일 등)을 하나씩 끌어올려 전체 밸런스를 맞추는 것이 핵심입니다."
  },
  "골드": {
    label: "골드",
    desc:
      "주변에서 ‘관리 좀 한다’는 말을 듣는 단계입니다. 지금의 루틴을 유지하되, 패션·향·디테일 같은 외부에 바로 보이는 요소를 조금만 정교하게 다듬으면 상위권으로 올라갈 수 있습니다."
  },
  "플래티넘": {
    label: "플래티넘",
    desc:
      "관리 루틴이 꽤 잘 잡혀 있고, 전반적으로 ‘잘 관리된 사람’ 인상을 줍니다. 다만 특정 영역(운동, 향, 디테일)에서 약점이 있을 수 있으니 그 한 두 영역을 보완하는 것이 포인트입니다."
  },
  "다이아": {
    label: "다이아",
    desc:
      "눈에 띄게 관리가 잘 되어 있는 상위권 티어입니다. 관리가 ‘습관’을 넘어 ‘자기표현’으로 이어지는 단계로, 이제는 나만의 스타일과 무드를 더 선명하게 만드는 것이 좋습니다."
  },
  "마스터": {
    label: "마스터",
    desc:
      "대부분의 관리가 체계적으로 잡혀 있고, 스스로도 방향성을 알고 있는 단계입니다. 이제는 ‘나만의 규칙’을 만들어 나에게 맞는 관리만 남기고, 과한 부분은 덜어내는 정제가 필요합니다."
  },
  "그랜드마스터": {
    label: "그랜드마스터",
    desc:
      "관리 자체가 라이프스타일이 된 단계입니다. 다른 사람에게도 조언을 해줄 수 있는 수준이며, 브랜드로서의 ‘나’를 설계해도 좋을 정도로 디테일이 정교합니다."
  },
  "챌린저": {
    label: "챌린저",
    desc:
      "상위 1% 감도. OWN. 입장에선 롤 모델급 관리력입니다. 이제부터는 방향 유지와 번아웃 방지가 핵심 과제예요. 관리가 ‘나를 억지로 끌고 가는 것’이 아니라 ‘자연스러운 선택’으로 남도록 조절하는 것이 중요합니다."
  }
};

// ===============================
// 카테고리별 액션 가이드 (간단 버전)
// ===============================

function getCategoryAdvice(catId, tier) {
  const low = ["아이언", "브론즈"];
  const mid = ["실버", "골드", "플래티넘"];
  const high = ["다이아", "마스터", "그랜드마스터", "챌린저"];

  if (catId === "skin") {
    if (low.includes(tier)) {
      return "세안 → 보습 → 선크림, 이 3가지를 ‘매일’ 하는 것부터 시작해보세요. 화장품은 많을 필요 없고, 나에게 맞는 폼클렌징 1개와 보습제 1개만 먼저 고르는 것이 좋습니다.";
    }
    if (mid.includes(tier)) {
      return "이미 기본 루틴은 잡혀 있습니다. 트러블 원인(수면·스트레스·식습관)을 함께 체크하고, 계절/상황에 따라 사용하는 제품을 2~3개로 나눠 세트화해두면 훨씬 편해집니다.";
    }
    return "피부과 시술·홈케어 루틴까지 어느 정도 완성된 단계입니다. 과한 시술/성분으로 피부 장벽이 무너지지 않도록 ‘휴식 루틴’을 정해두는 것이 좋습니다.";
  }

  if (catId === "hair") {
    if (low.includes(tier)) {
      return "우선 ‘한 미용실’에 3번 이상 가보며, 나와 맞는 스타일리스트를 찾는 것부터가 시작입니다. 머리는 최소 한 달에 한 번, 같은 사람에게 자르는 경험을 쌓아보세요.";
    }
    if (mid.includes(tier)) {
      return "대표 헤어스타일 1가지를 정해 3~6개월 유지해보세요. 그 과정에서 뜨는 부위·누르는 부위를 파악하고, 드라이/왁스/컬크림 중 나에게 잘 맞는 1~2개만 남기는 것이 좋습니다.";
    }
    return "이제는 ‘머리=브랜드’ 단계입니다. 계절/상황(일, 데이트, 사진 촬영)에 따라 2~3가지 변주 스타일을 만들고, 탈모/두피 관리 루틴을 장기 플랜으로 가져가면 좋습니다.";
  }

  if (catId === "style") {
    if (low.includes(tier)) {
      return "기본템(흰/검 티셔츠, 슬랙스, 데님)부터 1~2벌씩 갖추고, ‘상황별 기본 코디 3개’를 만들어두세요. 거울로 핏과 구김만 체크해도 인상이 크게 달라집니다.";
    }
    if (mid.includes(tier)) {
      return "지금 입는 옷 사진을 찍어보며 ‘나에게 잘 어울리는 실루엣’을 정리해보세요. 그리고 좋아하는 브랜드/스타일 사진 5장을 모아, 나의 베이스 스타일을 한 문장으로 정의해 보는 것이 좋습니다.";
    }
    return "이미 ‘옷 잘 입는다’는 피드백을 받는 단계입니다. 이제는 컬러 팔레트와 소재, 액세서리까지 일관된 톤을 잡아 ‘브랜드로서의 나’가 드러나도록 세트업하는 것이 좋습니다.";
  }

  if (catId === "scent") {
    if (low.includes(tier)) {
      return "샤워 후 겨드랑이·발·사타구니를 꼼꼼히 씻고, 수건·양말을 매일 교체하는 습관부터 잡으세요. 향수보다 먼저 ‘악취 제거’가 우선입니다.";
    }
    if (mid.includes(tier)) {
      return "나만의 시그니처 향 1개와 상황별 향(가벼운 데일리/조금 진한 향)을 1~2개 정도만 두고 돌려 쓰면 좋습니다. 빨래/방/옷장 냄새 관리도 함께 체크하세요.";
    }
    return "체취, 향수, 공간 향까지 잘 관리된 상태입니다. 향수 레이어링(두 가지 이상 섞어 쓰기)이나 계절별/장소별 시그니처 향을 정해두면 ‘기억에 남는 사람’이 되기 좋습니다.";
  }

  if (catId === "fitness") {
    if (low.includes(tier)) {
      return "하루 20~30분 걷기부터 ‘매일’ 해보세요. 그다음 주 1회, 땀나는 운동을 추가하면 체형과 컨디션이 눈에 띄게 달라집니다.";
    }
    if (mid.includes(tier)) {
      return "주 3회, 30~60분 루틴을 4주만 유지해보세요. 체지방·골격근량을 주 1회 체크하며, 야식/과음 빈도만 줄여도 체형 변화가 빨라집니다.";
    }
    return "이미 운동과 식단이 삶의 한 부분이 되어 있는 단계입니다. 과도한 체중/체지방 목표보다는, 관절·수면·피로도까지 고려한 ‘장기 유지 가능한 루틴’으로 조정하는 것이 좋습니다.";
  }

  if (catId === "detail") {
    if (low.includes(tier)) {
      return "손톱·발톱 정리, 수건·속옷 일일 교체, 콧털 정리 3가지만 먼저 습관화해도 전체 인상이 크게 좋아집니다.";
    }
    if (mid.includes(tier)) {
      return "손·발·입술 보습, 눈썹 정리, 수염/체모 관리까지 기본 루틴으로 가져가 보세요. 특히 베개커버 주 1회 교체만 해도 피부/냄새 관리에 큰 도움이 됩니다.";
    }
    return "이미 디테일 관리에 대한 감도가 높은 상태입니다. 이제는 나만의 그루밍 키트(자주 쓰는 도구와 제품)를 하나의 파우치로 모아, 언제 어디서든 같은 퀄리티로 셀프 케어가 가능하게 만드는 것이 좋습니다.";
  }

  return "";
}

// ===============================
// 점수 → 티어 변환 (전체 60점 기준)
// ===============================

function scoreToTierTotal(score) {
  // score: 0 ~ 60
  if (score <= 8) return "아이언"; // 1~8
  if (score <= 21) return "브론즈"; // 9~21
  if (score <= 34) return "실버"; // 22~34
  if (score <= 39) return "골드"; // 35~39
  if (score <= 45) return "플래티넘"; // 40~45
  if (score <= 49) return "다이아"; // 46~49
  if (score <= 53) return "마스터"; // 50~53
  if (score <= 57) return "그랜드마스터"; // 54~57
  return "챌린저"; // 58~60
}

// 카테고리(0~10점) 전용 티어 변환
function scoreToTierCategory(score10) {
  switch (score10) {
    case 0:
    case 1:
      return "아이언";
    case 2:
      return "브론즈";
    case 3:
    case 4:
      return "실버";
    case 5:
      return "골드";
    case 6:
      return "플래티넘";
    case 7:
      return "다이아";
    case 8:
      return "마스터";
    case 9:
      return "그랜드마스터";
    case 10:
      return "챌린저";
    default:
      return "아이언";
  }
}

// ===============================
// 질문 DOM 생성
// ===============================

function buildQuestions() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  let qNumber = 1;

  categories.forEach((cat) => {
    const details = document.createElement("details");
    details.className = "category";
    details.open = true;

    const summary = document.createElement("summary");
    const headLeft = document.createElement("div");
    headLeft.className = "cat-label";
    const headTitle = document.createElement("div");
    headTitle.className = "cat-title";
    headTitle.textContent = cat.name;
    const headSub = document.createElement("div");
    headSub.className = "cat-sub";
    headSub.textContent = cat.subtitle;
    headLeft.appendChild(headTitle);
    headLeft.appendChild(headSub);

    const headRight = document.createElement("div");
    headRight.className = "cat-sub";
    headRight.textContent = `${cat.questions.length}문항`;

    summary.appendChild(headLeft);
    summary.appendChild(headRight);

    const inner = document.createElement("div");
    inner.className = "category-inner";

    cat.questions.forEach((text) => {
      const item = document.createElement("div");
      item.className = "question-item";

      const label = document.createElement("div");
      label.className = "q-label";
      label.innerHTML = `<strong>Q${qNumber}.</strong> ${text}`;

      const controls = document.createElement("div");
      controls.className = "q-controls";

      const yesId = `q${qNumber}_yes`;
      const noId = `q${qNumber}_no`;

      const yesLabel = document.createElement("label");
      yesLabel.innerHTML = `<input type="radio" name="q${qNumber}" id="${yesId}" value="1" /> 예 (YES)`;

      const noLabel = document.createElement("label");
      noLabel.innerHTML = `<input type="radio" name="q${qNumber}" id="${noId}" value="0" /> 아니오 (NO)`;

      controls.appendChild(yesLabel);
      controls.appendChild(noLabel);

      item.appendChild(label);
      item.appendChild(controls);
      inner.appendChild(item);

      qNumber += 1;
    });

    details.appendChild(summary);
    details.appendChild(inner);
    container.appendChild(details);
  });
}

// ===============================
// 점수 계산
// ===============================

function calculateResult() {
  let totalScore = 0;

  // 전체 응답 체크 + 총 점수 계산
  for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
    const yes = document.querySelector(`input[name="q${i}"][value="1"]:checked`);
    const no = document.querySelector(`input[name="q${i}"][value="0"]:checked`);

    if (!yes && !no) {
      return {
        error: true,
        message: "모든 문항에 예/아니오를 선택해 주세요."
      };
    }

    if (yes) totalScore += 1;
  }

  // 전체 티어
  const overallRatio = (totalScore / TOTAL_QUESTIONS) * 100;
  const overallTier = scoreToTierTotal(totalScore);

  // 카테고리별 점수
  const categoryResults = [];
  let qIndex = 1;

  categories.forEach((cat) => {
    let catScore = 0;
    const indices = [];

    for (let i = 0; i < cat.questions.length; i++) {
      indices.push(qIndex);
      qIndex += 1;
    }

    indices.forEach((num) => {
      const yes = document.querySelector(
        `input[name="q${num}"][value="1"]:checked`
      );
      if (yes) catScore += 1;
    });

    const ratio = (catScore / cat.questions.length) * 100;
    const catTier = scoreToTierCategory(catScore);

    categoryResults.push({
      id: cat.id,
      name: cat.name,
      score: catScore,
      max: cat.questions.length,
      ratio,
      tier: catTier
    });
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

// ===============================
// 결과 렌더링
// ===============================

function renderResults(result) {
  const overallBox = document.getElementById("overall-result");
  const catBox = document.getElementById("category-results");

  const overall = result.overall;
  const meta = tierMeta[overall.tier] || tierMeta["아이언"];

  overallBox.innerHTML = `
    <div class="tier-badge">
      <span class="main">${overall.tier}</span>
      <span class="sub">${overall.ratio.toFixed(1)}%</span>
    </div>
    <div class="result-score">
      전체 문항 중 <strong>${overall.score}</strong>개를 관리하고 있습니다.
      (<strong>${overall.score}</strong> / ${overall.max})
    </div>
    <div class="result-desc">
      <strong>현재 상태</strong> — ${meta.desc}
    </div>
  `;

  // 카테고리 카드들
  catBox.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "category-grid";

  result.categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";

    const advice = getCategoryAdvice(cat.id, cat.tier);

    card.innerHTML = `
      <div class="category-head">
        <div>
          <div class="category-name">${cat.name}</div>
          <div class="category-score">${cat.score} / ${cat.max} 문항 관리 중</div>
        </div>
        <div class="category-tier">
          <strong>${cat.tier}</strong> · ${cat.ratio.toFixed(1)}%
        </div>
      </div>
      ${
        advice
          ? `<div class="category-advice"><strong>추천 액션</strong> — ${advice}</div>`
          : ""
      }
    `;

    wrapper.appendChild(card);
  });

  catBox.appendChild(wrapper);
}

// ===============================
// 화면 전환 & 이벤트
// ===============================

function showSection(id) {
  document.getElementById("intro-section").classList.remove("active");
  document.getElementById("question-section").classList.remove("active");
  document.getElementById("result-section").classList.remove("active");

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  buildQuestions();

  // 상품 링크 기본값 세팅
  const productLink = document.getElementById("productLink");
  if (productLink && PRODUCT_LINK) {
    productLink.href = PRODUCT_LINK;
  }

  const startBtn = document.getElementById("startBtn");
  const backToIntroBtn = document.getElementById("backToIntroBtn");
  const submitBtn = document.getElementById("submitBtn");
  const retryBtn = document.getElementById("retryBtn");

  startBtn.addEventListener("click", () => {
    showSection("question-section");
  });

  backToIntroBtn.addEventListener("click", () => {
    showSection("intro-section");
  });

  submitBtn.addEventListener("click", () => {
    const result = calculateResult();
    if (result.error) {
      alert(result.message);
      return;
    }
    renderResults(result);
    showSection("result-section");
  });

  retryBtn.addEventListener("click", () => {
    // 라디오 선택 초기화
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const yes = document.querySelector(`input[name="q${i}"][value="1"]`);
      const no = document.querySelector(`input[name="q${i}"][value="0"]`);
      if (yes) yes.checked = false;
      if (no) no.checked = false;
    }
    showSection("intro-section");
  });
});
