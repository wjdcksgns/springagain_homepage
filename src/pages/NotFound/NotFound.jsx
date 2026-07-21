import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className="wrap">
        <div className={styles.msgBox}>
          <h2 className={styles.errorCode}>404</h2>
          <strong>페이지를 찾을 수 없습니다</strong>
          <p>
            주소가 잘못 입력되었거나, 페이지가 변경 혹은 삭제되었습니다.<br />
            입력하신 주소를 다시 한번 확인해 주세요.
          </p>
          <Link to="/" className={styles.homeBtn}>홈으로 가기</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound;
