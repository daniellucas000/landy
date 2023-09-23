import styled from 'styled-components';

export const MiddleBlockContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5rem 0px 3rem;

  @media (min-width: 576px) {
    text-align: center;
  }

  div {
    max-width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 1.75rem 0;
    }
  }
`;
