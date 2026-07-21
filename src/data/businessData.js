import {
  FaVideo, FaUserCheck, FaGlasses, FaMobileAlt, FaBrain, FaCube, FaGlobe, FaEye,
  FaLaptopCode, FaSeedling, FaHandshake, FaMicrophone, FaChartLine, FaBug, FaStore,
} from 'react-icons/fa';

// 사업영역 3축 — IT가 첫 번째, 농업은 그중 하나 (260720 회의록 포지셔닝)
export const businessAreas = [
  {
    id: 'it',
    title: 'AI · 소프트웨어 개발',
    summary: 'AI, 컴퓨터 비전, AR/VR, 모바일 앱까지 — 산업 현장의 문제를 소프트웨어로 해결합니다.',
    icon: FaLaptopCode,
  },
  {
    id: 'heyfarming',
    title: '스마트팜 플랫폼 헤이파밍',
    summary: '음성 영농일지, AI 수확량 예측, 예약거래까지 — 농업 현장을 위한 통합 플랫폼을 만듭니다.',
    icon: FaSeedling,
  },
  {
    id: 'outsourcing',
    title: '외주 개발 · R&D',
    summary: '기획부터 출시까지, 검증된 개발 역량으로 맞춤형 소프트웨어를 수탁 개발합니다.',
    icon: FaHandshake,
  },
];

// IT 솔루션 보유 기술 (구 Technology 페이지 콘텐츠)
export const techList = [
  {
    title: 'CCTV 활용 감지 기술',
    description: 'CCTV와 센서를 결합하여 객체·이상행동·침입 등을 실시간 탐지합니다.',
    fields: ['보안', '안전 관리', '스마트시티', '공장 모니터링'],
    icon: FaVideo,
  },
  {
    title: '안면인식 기술',
    description: '딥러닝 기반 얼굴 인식 알고리즘으로 신원 확인, 출입 통제, 맞춤형 서비스를 제공합니다.',
    fields: ['보안 출입 시스템', '근태 관리', '맞춤형 서비스'],
    icon: FaUserCheck,
  },
  {
    title: 'AR 활용 원격협업 기술',
    description: 'AR 글래스와 태블릿을 활용해 원격에서도 동일한 공간을 공유하며 협업할 수 있습니다.',
    fields: ['산업 현장', '교육/훈련', '원격 지원'],
    icon: FaGlasses,
  },
  {
    title: 'Android/iOS 어플리케이션 개발',
    description: '네이티브와 크로스플랫폼 기반으로 다양한 모바일 앱을 설계·개발합니다.',
    fields: ['엔터테인먼트', '교육', '비즈니스', 'IoT 연동'],
    icon: FaMobileAlt,
  },
  {
    title: 'LLM & AI Agent 개발',
    description: 'LLM과 AI 에이전트를 활용해 복잡한 문제 해결과 자동화된 의사결정을 지원합니다.',
    fields: ['대화형 서비스', '업무 자동화', '지능형 데이터 분석'],
    icon: FaBrain,
  },
  {
    title: '디지털트윈 개발',
    description: '현실 데이터를 실시간으로 반영하는 디지털 공간을 구축해 모니터링과 시뮬레이션이 가능합니다.',
    fields: ['스마트 팩토리', '건설', '물류 관리'],
    icon: FaCube,
  },
  {
    title: '홈페이지 제작',
    description: '브랜딩 목적 홍보 페이지부터 맞춤형 서비스까지 다양한 웹사이트를 제작합니다.',
    fields: ['기업 홍보', '전시/이벤트', '온라인 서비스'],
    icon: FaGlobe,
  },
  {
    title: '비전 AI',
    description: '영상·이미지 데이터 기반 객체 탐지, 행동 분석, 이상 징후 파악 등 상황 인식을 지원합니다. 의료 영상(CT, MRI, X-ray) 분석 같은 특수 분야에도 적용할 수 있습니다.',
    fields: ['스마트 시티', '보안 모니터링', '의료 영상 분석', '제조·품질 검사'],
    icon: FaEye,
  },
];

// 헤이파밍 핵심 기능
export const heyfarmingFeatures = [
  {
    title: '음성 영농일지',
    description: '말로 기록하면 AI가 정리하는 영농일지. 현장에서 손을 쓰지 않고도 기록이 끝납니다.',
    icon: FaMicrophone,
  },
  {
    title: 'AI 수확량 예측',
    description: '작물·환경 데이터를 학습한 AI가 수확량을 예측해 재배 계획과 판로 준비를 돕습니다.',
    icon: FaChartLine,
  },
  {
    title: 'AI 병해충 진단',
    description: '사진 한 장으로 병해충을 진단하고 대처 방법을 안내합니다.',
    icon: FaBug,
  },
  {
    title: '예약거래 플랫폼',
    description: '농가와 소비자를 직접 연결하는 예약거래. 수확 전에 판로를 확보합니다.',
    icon: FaStore,
    comingSoon: true,
  },
];
