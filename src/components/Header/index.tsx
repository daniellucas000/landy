import { useState } from 'react';

import { Button } from '../Button';

import { HeaderContainer, HeaderWrapper, MenuContainer } from './styled';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

import { MenuMobile } from '../MenuMobile';

interface HeaderProps {
  toggleTheme(): void;
  theme: string;
}

export function Header({ toggleTheme, theme }: HeaderProps) {
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
              {theme === 'light' ? (
                <FiSun size={28} onClick={toggleTheme} />
              ) : (
                <FiMoon size={28} onClick={toggleTheme} />
              )}
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
