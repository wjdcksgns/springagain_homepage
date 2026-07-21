export const companyInfo = {
  name: '다시봄',
  nameEn: 'Spring Again',
  ceo: '정찬훈',
  address: '경기도 수원시 영통구 광교산로 154-42, 경기대학교 창업보육센터 408호',
  phone: '010-2868-0655',
  emails: ['springagain2025@gmail.com', 'diksik2001@gmail.com'],
  bizNumber: null, // 사업자등록번호 수령 시 기재 (null이면 미노출)
};

// 대표 소개 문구는 대표 확정본 수령 시 교체
export const ceoIntro = {
  name: '정찬훈',
  title: '대표이사',
  message: `안녕하세요, 다시봄 대표 정찬훈입니다.
다시봄은 소프트웨어 기술로 산업 현장의 문제를 해결하는 IT 기업입니다.
AI·컴퓨터 비전·AR·모바일 앱 등 다양한 분야에서 쌓아온 개발 역량을 바탕으로,
현장에서 실제로 쓰이는 기술을 만드는 것을 가장 중요하게 생각합니다.
스마트팜 플랫폼 헤이파밍을 비롯해, 기술이 필요한 곳이라면 어떤 산업이든 함께하겠습니다.`,
};

export const teamList = [
  {
    role: '리드 개발자',
    description: 'SW 개발 17년 경력 — 프론트/백엔드, Flutter 기반 플랫폼 시스템 설계 및 API 연동',
  },
  {
    role: 'AI 엔지니어',
    description: 'AI 알고리즘 개발 5년 경력 — LLM/AI Agent, Transformer·CNN·LSTM 기반 모델 구현',
  },
  {
    role: 'AI/SW 엔지니어',
    description: 'AI 데이터 전처리·후처리 및 서비스 적용 — 헤이파밍 플랫폼(앱·웹·서버) 개발',
  },
];

export const partners = [
  {
    name: '사라팜',
    url: 'https://sarafarm.kr/',
    description: '스마트팜 전문 기업 — 태백 실증지 운영, 현장 데이터 제공, 농민 대상 현장 테스트 지원',
  },
];
