// src/data/newsData.js
export const newsData = [
    {
        id: 1,
        title: "연세대학교 연구자 창업 세미나 초청 강연",
        date: "2025-10-24",
        thumbnail: "/images/news/2025-10-yonsei-03.jpg", // 리스트 카드용 썸네일
        images: [
            "/images/news/2025-10-yonsei-poster.png",
            "/images/news/2025-10-yonsei-01.jpg",
            "/images/news/2025-10-yonsei-02.jpg",
            "/images/news/2025-10-yonsei-03.jpg",
        ],
        content: `
<p><strong>다시봄(Spring Again)</strong>의 정찬훈 대표가 연세대학교 BK21 <em>“연구자 창업 세미나”</em>에 초청되어 
<strong>AI 기반 농업 혁신과 스타트업의 현실</strong>을 주제로 강연을 진행했습니다. 
현장에는 대학(원)생과 연구자들이 참석해, 연구 성과를 사업화하는 방법과 실제 창업 과정에서의 시행착오를 공유했습니다.</p>

<h3>강연 핵심 포인트</h3>
<ul>
  <li>연구→제품화로 이어지는 <strong>초기 검증(POC) 전략</strong>과 실증지(농가) 협업 방법</li>
  <li>스마트 농업 플랫폼 <strong>헤이파밍(HEYFARMING)</strong>의 데이터 수집·활용 구조</li>
  <li>AI 모델(수확량 예측/병해충 진단) 고도화를 위한 <strong>데이터 파이프라인</strong> 설계</li>
  <li>정부과제·투자 병행 전략, <strong>MVP 출시 이후 피벗</strong> 판단 기준</li>
</ul>

<h3>Q&amp;A 하이라이트</h3>
<ul>
  <li><em>“대학 기술을 사업화하려면 무엇부터?”</em> → 문제정의 → 실사용자 인터뷰 → 파일럿(소규모 유료) 순으로 <strong>빠른 학습</strong></li>
  <li><em>“AI 정확도보다 더 중요한 것은?”</em> → 현장 적용성, 데이터 확보 구조, <strong>반복 사용</strong>을 만드는 UX</li>
</ul>

<p>다시봄은 앞으로도 대학·연구기관과의 협력을 확대하여, 
<strong>데이터 기반 농업 혁신</strong>을 지속적으로 실현하겠습니다.</p>
`,
        tags: ["연세대학교", "창업세미나", "활동소식", "HEYFARMING", "AI농업"],
    },
];
