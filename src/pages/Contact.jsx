import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.hero}>
        <h2>Contact Us</h2>
        <p>다시봄은 여러분과 함께 농업의 디지털화를 선도하겠습니다.</p>
      </div>

      <div className={styles.container}>
        {/* 지도 영역 */}
        <div className={styles.mapWrapper}>
          <iframe
            title="company-location"
            src="https://www.google.com/maps?q=37.300586,127.038294&hl=ko&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* 회사 정보 */}
        <div className={styles.info}>
          <h3>다시봄</h3>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <span>경기도 수원시 영통구 광교산로 154-42, 경기대학교 창업보육센터 408호</span>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.infoIcon} />
            <span>010-2868-0655</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <span>springagain2025@gmail.com<br></br>diksik2001@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
