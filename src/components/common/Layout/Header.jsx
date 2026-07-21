import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';

import Container from './Container';
import MobileNav from './MobileNav';

const NAV_ITEMS = [
  { to: '/about', label: '회사 소개' },
  { to: '/business', label: '사업영역' },
  { to: '/portfolio', label: '포트폴리오' },
  { to: '/news', label: '활동소식' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const { windowWidth } = useSelector((state) => state.viewport);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_ITEMS.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => isActive ? styles.active : undefined}
    >
      {label}
    </NavLink>
  ));

  return (
    <header id="header" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="wrap">
        <Container isWide={true}>
          <div className={styles.contents}>
            <h1 className={styles.logo}>
              <Link to="/">
                다시봄<span className={styles.logoDot}>.</span>
              </Link>
            </h1>
            {windowWidth > 1024 ? (
              <nav className={styles.nav}>
                {navLinks}
              </nav>
            ) : (
              <MobileNav>
                <nav className={styles.nav}>
                  {navLinks}
                </nav>
              </MobileNav>
            )}
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header;
