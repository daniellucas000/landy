import styled from 'styled-components';

export const HeaderContainer = styled('header')`
  padding: 1rem 0.5rem;
`;

export const HeaderWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;

  > a {
    display: flex;
  }
`;

export const MenuContainer = styled('ul')`
  display: flex;
  align-items: center;
  width: 100%;

  li a {
    font-size: 1.2rem;
    color: rgb(24, 33, 109);
    transition: color 0.2s ease-in 0s;
    margin: 0 2rem;
  }
`;
