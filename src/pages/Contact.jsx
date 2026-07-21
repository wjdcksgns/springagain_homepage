import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { companyInfo } from "../data/companyData";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>프로젝트 의뢰, 협업 제안, 어떤 이야기든 환영합니다.</p>
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
          <h3>{companyInfo.name}</h3>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} />
            <span>{companyInfo.address}</span>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.infoIcon} />
            <span>{companyInfo.phone}</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <span>
              {companyInfo.emails.map((email) => (
                <span key={email} className={styles.email}>{email}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
