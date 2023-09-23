import { useEffect } from 'react';

import { Button } from '../Button';

import { Container } from './styled';
import { IoClose } from 'react-icons/io5';

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
    
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

      <nav>
        <ul>
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
        </ul>
      </nav>
    </Container>
  );
}
