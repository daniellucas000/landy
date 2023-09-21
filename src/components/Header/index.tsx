import LandyLogo from '../../img/svg/logo.svg';
import { Button } from '../Button';

import { HeaderContainer, HeaderWrapper, MenuContainer } from './styles';

export function Header() {
  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <HeaderContainer id="header">
      <HeaderWrapper>
        <a href="#">
          <img src={LandyLogo} alt="Landy logo" width={101} height={64} />
        </a>

        <nav>
          <MenuContainer>
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
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
