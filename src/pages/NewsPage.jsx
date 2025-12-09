import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import styles from "./NewsPage.module.css";

export default function NewsPage() {
    return (
        <section className={styles.newsSection}>
            <h1>활동소식</h1>
            <p className={styles.subtitle}>
                다시봄의 최신 활동과 행사 소식을 전해드립니다.
            </p>
            <div className={styles.newsList}>
                {newsData.map((news) => (
                    <Link to={`/news/${news.id}`} key={news.id} className={styles.newsCard}>
                        <img src={news.thumbnail} alt={news.title} />
                        <div className={styles.cardContent}>
                            <h3>{news.title}</h3>
                            <p className={styles.date}>{news.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
