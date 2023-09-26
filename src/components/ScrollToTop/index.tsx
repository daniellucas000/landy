import { IoIosArrowUp } from 'react-icons/io';
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
      <IoIosArrowUp size={20}/>
    </ScrollUpContainer>
  );
}
