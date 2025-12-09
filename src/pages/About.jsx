import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutWrap}>
        <div className={styles.intro}>
          <h1>About Us</h1>
          <p>
            <strong>다시봄(Spring Again)</strong>은 농업의 디지털 전환을 선도하는 스타트업입니다.
            우리는 최신 <b>AI와 데이터 기술</b>을 활용해 농업 현장을 더 효율적이고 스마트하게 만들고,
            농민과 소비자가 <b>더 가깝게 연결되는 새로운 생태계</b>를 만들어가고 있습니다.
          </p>
        </div>

        <div className={styles.ceo}>
          <h2>CEO 인사말</h2>
          <p>
            안녕하세요, 대표이사 <b>정찬훈</b>입니다.<br />
            저는 북경대학교 경제학(학사), 서울대학교 국제농업기술학(석사)을 전공하고,
            데이터 분석·스마트 농업·탄소 저감 등 다양한 연구 경험을 바탕으로
            농업의 디지털 혁신을 이끌고자 합니다.
            ICT와 농업을 융합하여 청년과 고령 농민 모두가 쉽게 활용할 수 있는
            지속가능한 농업 시스템을 만드는 것이 저희의 비전입니다.
          </p>
        </div>

        <div className={styles.team}>
          <h2>Our Team</h2>
          <ul>
            <li>
              <h3>수석연구원</h3>
              <p>프론트/백엔드 개발 – SW 개발 17년 경력, Flutter 기반 플랫폼 시스템 설계 및 API 연동</p>
            </li>
            <li>
              <h3>선임연구원</h3>
              <p>LLM / AI Agent 개발 – AI 알고리즘 개발 5년 경력, Transformer·CNN·LSTM 기반 모델 구현</p>
            </li>
            <li className={styles.partnerItem}>
              <h3>협력사 – 사라팜<a href="https://sarafarm.kr/" target="_blank" rel="noopener noreferrer" className={styles.partnerBtn}>
                바로가기
              </a></h3>
              <p>
                스마트팜 전문 기업, 태백 실증지 운영 및 현장 데이터 제공, 농민 대상 현장 테스트 지원
              </p>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
