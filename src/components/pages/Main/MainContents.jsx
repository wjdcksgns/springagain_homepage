import styles from './MainContents.module.css';

const MainContents = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.slogan}>
        <p>"AI와 데이터로 농업의 미래를 열다"<br></br><br></br>다시봄은 농민과 소비자를 연결하는 스마트 농업 플랫폼을 만듭니다.</p>
      </div>
      <svg className={styles.title}>
        <defs>
          <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="75%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50">
              <animate
                attributeName="stop-color"
                values="#4CAF50; #81C784; #2196F3; #64B5F6; #FFEB3B; #FBC02D; #FF9800; #4CAF50"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#2E7D32">
              <animate
                attributeName="stop-color"
                values="#81C784; #2196F3; #64B5F6; #FFEB3B; #FBC02D; #FF9800; #4CAF50; #2E7D32"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <text x="50%" y="40%" textAnchor="middle">
          다시봄의
        </text>
        <text x="50%" y="85%" textAnchor="middle">
          헤이파밍
        </text>
      </svg>
    </div>
  )
}

export default MainContents;