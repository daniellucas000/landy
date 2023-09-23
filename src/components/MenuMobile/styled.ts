import styled, { css } from 'styled-components';

interface visibleProps {
  readonly isVisible: boolean;
}

export const Container = styled('div')<visibleProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.body};

  pointer-events: none;
  opacity: 0;
  transform: translateY(50px);

  transform: scale(0.7);
  transition: 0.7s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;
