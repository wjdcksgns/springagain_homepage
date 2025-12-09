// src/pages/NewsDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import styles from "./NewsDetailPage.module.css";

export default function NewsDetailPage() {
    const { id } = useParams();
    const news = newsData.find((n) => n.id === Number(id));
    if (!news) return <div className={styles.detailPage}>해당 소식을 찾을 수 없습니다.</div>;

    return (
        <section className={styles.detailSection}>
            <h1>{news.title}</h1>
            <p className={styles.subtitle}>다시봄의 최신 활동과 행사 소식을 전해드립니다.</p>
            <p className={styles.date}>{news.date}</p>

            {/* 갤러리 */}
            {news.images?.length > 0 && (
                <div className={styles.gallery}>
                    {news.images.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noreferrer">
                            <img src={src} alt={`${news.title} ${i + 1}`} />
                        </a>
                    ))}
                </div>
            )}

            {/* 본문 */}
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* 태그 */}
            {news.tags?.length > 0 && (
                <ul className={styles.tags}>
                    {news.tags.map((t) => (
                        <li key={t}>#{t}</li>
                    ))}
                </ul>
            )}

            <Link to="/news" className={styles.backButton}>← 목록으로</Link>
        </section>
    );
}
