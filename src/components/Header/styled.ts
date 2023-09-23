import styled from 'styled-components';

export const HeaderContainer = styled('header')`
  padding: 1rem 0.5rem;
`;

export const HeaderWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;

  @media (max-width: 576px) {
    grid-template-columns: 31fr 1fr;
  }

  > a {
    font-size: 2.5rem;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const MenuContainer = styled('ul')`
  display: flex;
  align-items: center;
  width: 100%;

  li,
  button {
    @media (max-width: 576px) {
      display: none;
    }
  }

  li a {
    font-size: 1.2rem;
    color: ${(props) => props.theme.fontColor};
    transition: color 0.2s ease-in 0s;
    margin: 0 2rem;
  }

  li:last-child {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }
`;
