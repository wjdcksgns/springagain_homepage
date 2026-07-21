import { Link } from 'react-router-dom';

import styles from './Main.module.css';
import { businessAreas } from '../../data/businessData';
import { portfolioData } from '../../data/portfolioData';
import { newsData } from '../../data/newsData';

const Main = () => {
  const latestNews = [...newsData].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="wrap">
          <div className="container">
            <span className={styles.badge}>IT COMPANY</span>
            <h2 className={styles.heroTitle}>
              익숙한 문제를,<br />
              기술로 <em>다시 봄</em>니다
            </h2>
            <p className={styles.heroSub}>
              다시봄은 AI · 컴퓨터 비전 · AR · 모바일 앱을 개발하는 IT 기업입니다.<br />
              스마트팜 플랫폼 헤이파밍을 비롯해, 산업 현장의 문제를 소프트웨어로 해결합니다.
            </p>
            <div className={styles.heroActions}>
              <Link to="/business" className={styles.btnPrimary}>사업영역 보기</Link>
              <Link to="/contact" className={styles.btnGhost}>Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 사업영역 */}
      <section className={styles.section}>
        <div className="wrap">
          <div className="container">
            <h2 className={styles.sectionTitle}>Business</h2>
            <p className={styles.sectionSub}>다시봄이 만드는 세 가지 축</p>
            <div className={styles.areaGrid}>
              {businessAreas.map(({ id, title, summary, icon: Icon }) => (
                <Link to="/business" key={id} className={styles.areaCard}>
                  <div className={styles.areaIcon}><Icon /></div>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 포트폴리오 하이라이트 */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className="container">
            <h2 className={styles.sectionTitle}>Portfolio</h2>
            <p className={styles.sectionSub}>현장에서 검증된 프로젝트</p>
            <div className={styles.portfolioGrid}>
              {portfolioData.slice(0, 3).map((proj) => (
                <Link to="/portfolio" key={proj.id} className={styles.portfolioCard}>
                  <div className={styles.portfolioThumb}>
                    {proj.images.length > 0 ? (
                      <img src={proj.images[0]} alt={proj.title} loading="lazy" />
                    ) : (
                      <div className={styles.thumbPlaceholder}>HeyFarming</div>
                    )}
                  </div>
                  <span className={styles.portfolioCategory}>{proj.category}</span>
                  <h3>{proj.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 최근 소식 */}
      <section className={styles.section}>
        <div className="wrap">
          <div className="container">
            <h2 className={styles.sectionTitle}>News</h2>
            <p className={styles.sectionSub}>다시봄의 최근 활동</p>
            <div className={styles.newsList}>
              {latestNews.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id} className={styles.newsCard}>
                  <img src={news.thumbnail} alt={news.title} loading="lazy" />
                  <div className={styles.newsText}>
                    <h3>{news.title}</h3>
                    <p>{news.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaBand}>
        <div className="wrap">
          <div className="container">
            <h2>프로젝트를 구상 중이신가요?</h2>
            <p>아이디어 단계부터 출시까지, 다시봄이 함께합니다.</p>
            <Link to="/contact" className={styles.btnPrimary}>문의하기</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;
