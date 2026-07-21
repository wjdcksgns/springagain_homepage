import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Business.module.css';
import { businessAreas, techList, heyfarmingFeatures } from '../data/businessData';
import ContactModal from '../components/common/Modals/ContactModal';

const Business = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className={styles.business}>
      <div className="wrap">
        <div className="container">
          <div className={styles.hero}>
            <h1>Business</h1>
            <p>AI·소프트웨어 개발부터 스마트팜, 외주 개발까지 — 다시봄의 사업영역을 소개합니다.</p>
          </div>

          {/* 사업영역 요약 */}
          <div className={styles.areaGrid}>
            {businessAreas.map(({ id, title, summary, icon: Icon }) => (
              <a href={`#${id}`} key={id} className={styles.areaCard}>
                <div className={styles.areaIcon}><Icon /></div>
                <h3>{title}</h3>
                <p>{summary}</p>
              </a>
            ))}
          </div>

          {/* IT 솔루션 */}
          <div id="it" className={styles.block}>
            <h2 className={styles.blockTitle}>AI · 소프트웨어 개발</h2>
            <p className={styles.blockSub}>다시봄이 보유한 핵심 기술과 적용 분야입니다.</p>
            <div className={styles.techGrid}>
              {techList.map(({ title, description, fields, icon: Icon }) => (
                <div key={title} className={styles.techCard}>
                  <div className={styles.techIcon}><Icon /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className={styles.tags}>
                    {fields.map((field) => (
                      <span key={field} className={styles.tag}>{field}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 헤이파밍 */}
          <div id="heyfarming" className={styles.block}>
            <h2 className={styles.blockTitle}>스마트팜 플랫폼 헤이파밍</h2>
            <p className={styles.blockSub}>
              농업 현장을 위한 통합 플랫폼. 기록부터 예측, 거래까지 앱 하나로 해결합니다.
            </p>
            <div className={styles.featureGrid}>
              {heyfarmingFeatures.map(({ title, description, icon: Icon, comingSoon }) => (
                <div key={title} className={styles.featureCard}>
                  <div className={styles.featureIcon}><Icon /></div>
                  <h3>
                    {title}
                    {comingSoon && <span className={styles.soonBadge}>Coming Soon</span>}
                  </h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 외주 개발 */}
          <div id="outsourcing" className={styles.block}>
            <h2 className={styles.blockTitle}>외주 개발 · R&D</h2>
            <p className={styles.blockSub}>
              모바일 앱, 웹 서비스, AR/VR 콘텐츠, AI 솔루션까지 —
              기획부터 출시·운영까지 전 과정을 함께합니다.
              수행 이력은 <Link to="/portfolio" className={styles.inlineLink}>포트폴리오</Link>에서 확인하실 수 있습니다.
            </p>
            <div className={styles.contactBox}>
              <button onClick={() => setShowContact(true)} className={styles.contactBtn}>
                프로젝트 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  );
};

export default Business;
