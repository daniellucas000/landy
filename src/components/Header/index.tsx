import { useState } from 'react';

import { Button } from '../Button';

import { HeaderContainer, HeaderWrapper, MenuContainer } from './styled';
import styles from './darkmode.module.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

import { MenuMobile } from '../MenuMobile';

interface HeaderProps {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <HeaderContainer id="header">
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <HeaderWrapper>
        <a href="#">Landy</a>

        <nav>
          <MenuContainer>
            <li>
              <div className={styles['container-only-for-centering']}>
                <div className={styles['darkmode-toggle-wrapper']}>
                  <input
                    onClick={toggleTheme}
                    type="checkbox"
                    id="darkmode-toggle"
                    aria-label="dark mode toggle"
                    className={styles['darkmode-toggle-checkbox']}
                  />
                  <div className={styles['darkmode-toggle-circle']}></div>
                  <span className={styles['darkmode-toggle-emoji']}>
                    <FiMoon />
                  </span>
                  <span className={styles['darkmode-toggle-emoji']}>
                    <FiSun />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <a onClick={() => scrollTo('about')} href="#">
                About
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo('mission')} href="#">
                Mission
              </a>
            </li>
            <li onClick={() => scrollTo('product')}>
              <a href="#">Product</a>
            </li>
            <Button>Contact</Button>
          </MenuContainer>
          <HiOutlineMenuAlt3 onClick={() => setMenuIsVisible(true)} size={35} />
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
