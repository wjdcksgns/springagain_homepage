import styles from './Platforms.module.css';

const Platforms = () => {
    return (
        <section className={styles.platformsSection}>
            <h1>Our Platforms</h1>
            <p className={styles.subtitle}>
                다시봄의 플랫폼은 곧 공개됩니다.
            </p>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <h2>Platform 1</h2>
                    <span className={styles.date}>2025년 10월</span>
                    <p className={styles.soon}>Coming Soon</p>
                </div>

                <div className={styles.card}>
                    <h2>Platform 2</h2>
                    <span className={styles.date}>2025년 12월</span>
                    <p className={styles.soon}>Coming Soon</p>
                </div>

                <div className={styles.card}>
                    <h2>Platform 3</h2>
                    <span className={styles.date}>2026년 3월</span>
                    <p className={styles.soon}>Coming Soon</p>
                </div>
            </div>
        </section>
    );
};

export default Platforms;
