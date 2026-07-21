import { useState } from 'react';

import styles from './Portfolio.module.css';
import { portfolioData } from '../data/portfolioData';
import ContactModal from '../components/common/Modals/ContactModal';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.portfolio}>
      <div className="wrap">
        <div className="container">
          <div className={styles.hero}>
            <h1>Portfolio</h1>
            <p>다시봄이 수행한 대표 프로젝트를 소개합니다.</p>
          </div>

          <div className={styles.list}>
            {portfolioData.map((proj) => (
              <div key={proj.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={proj.images[0]} alt={proj.title} loading="lazy" />
                  <button
                    className={styles.moreBtn}
                    onClick={() => {
                      setSelectedProject(proj);
                      setCurrentIndex(0);
                    }}
                  >
                    더보기
                  </button>
                </div>
                <div className={styles.textWrapper}>
                  <span className={styles.category}>{proj.category}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <ul className={styles.features}>
                    {proj.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 이미지 모달 */}
          {selectedProject && (
            <div
              className={styles.modalOverlay}
              onClick={() => setSelectedProject(null)}
            >
              <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h3>{selectedProject.title}</h3>

                <div className={styles.slider}>
                  <button className={`${styles.navBtn} ${styles.left}`} onClick={handlePrev}>
                    ◀
                  </button>
                  <img
                    src={selectedProject.images[currentIndex]}
                    alt={`${selectedProject.title} ${currentIndex + 1}`}
                    className={styles.slideImage}
                  />
                  <button className={`${styles.navBtn} ${styles.right}`} onClick={handleNext}>
                    ▶
                  </button>
                </div>

                <p className={styles.counter}>
                  {currentIndex + 1} / {selectedProject.images.length}
                </p>

                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedProject(null)}
                >
                  닫기
                </button>
              </div>
            </div>
          )}

          <div className={styles.contactBox}>
            <button onClick={() => setShowContact(true)} className={styles.contactBtn}>
              프로젝트 문의하기
            </button>
          </div>
        </div>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </section>
  );
}

export default Portfolio;
