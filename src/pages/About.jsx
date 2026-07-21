import styles from './About.module.css';
import { ceoIntro, teamList, partners } from '../data/companyData';
import { historyData } from '../data/historyData';

const About = () => {
  return (
    <section className={styles.about}>
      <div className="wrap">
        <div className="container">
          <div className={styles.hero}>
            <h1>About Us</h1>
            <p>
              <strong>다시봄(Spring Again)</strong>은 소프트웨어 기술로 산업 현장의 문제를 해결하는 IT 기업입니다.
              AI · 컴퓨터 비전 · AR · 모바일 앱 등 다양한 분야에서 쌓아온 개발 역량으로,
              보안·헬스케어·게임·산업 협업, 그리고 농업까지 — 기술이 필요한 곳이라면 어디든 함께합니다.
            </p>
          </div>

          {/* 대표 소개 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>CEO</h2>
            <div className={styles.ceoCard}>
              <div className={styles.ceoName}>
                <strong>{ceoIntro.name}</strong>
                <span>{ceoIntro.title}</span>
              </div>
              <p className={styles.ceoMessage}>{ceoIntro.message}</p>
            </div>
          </div>

          {/* 팀 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Team</h2>
            <ul className={styles.teamList}>
              {teamList.map((member) => (
                <li key={member.role} className={styles.teamCard}>
                  <h3>{member.role}</h3>
                  <p>{member.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 연혁 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>History</h2>
            <div className={styles.timeline}>
              {historyData.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <ul className={styles.timelineEvents}>
                    {item.events.map((event) => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 협력사 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Partners</h2>
            <ul className={styles.partnerList}>
              {partners.map((partner) => (
                <li key={partner.name} className={styles.partnerCard}>
                  <h3>
                    {partner.name}
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className={styles.partnerBtn}>
                      바로가기
                    </a>
                  </h3>
                  <p>{partner.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
