import { SvgIcon } from '../SvgIcon';
import { ScrollUpContainer } from './styled';

function handleScroll() {
  const element = document.getElementById('header');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function ScrollToTop() {
  return (
    <ScrollUpContainer onClick={handleScroll}>
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
}
