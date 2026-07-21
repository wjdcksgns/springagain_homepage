import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import { companyInfo } from '../../../data/companyData';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  const infoList = [
    { title: 'COMPANY', description: companyInfo.name },
    { title: 'CEO', description: companyInfo.ceo },
    { title: 'ADDRESS', description: companyInfo.address },
    { title: 'EMAIL', description: companyInfo.emails[0] },
    ...(companyInfo.bizNumber ? [{ title: '사업자등록번호', description: companyInfo.bizNumber }] : []),
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className="wrap">
        <div className="container">
          <div className={styles.contents}>
            <div className={styles.logo}>
              <img src="/favicon.png" alt="다시봄 로고" className={styles.logoImg} />
              <div>
                <h2>다시봄<span className={styles.logoDot}>.</span></h2>
                <p>IT 기술로 산업의 문제를 해결합니다</p>
              </div>
            </div>
            <div className={styles.info}>
              <address className={styles.contact}>
                {infoList.map(v => (
                  <p key={v.title}>{v.title} : {v.description}</p>
                ))}
              </address>
              <div className={styles.bottom}>
                <span className={styles.copyright}>
                  Copyright ⓒ {thisYear} SpringAgain All rights reserved.
                </span>
                <Link to="/privacy" className={styles.privacyLink}>개인정보처리방침</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
