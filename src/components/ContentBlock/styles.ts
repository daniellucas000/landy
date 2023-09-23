import styled from 'styled-components';

export const ContentBlockContainer = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  padding: 10rem 0px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const LeftContentContainer = styled('section')`
  /* display: grid; */
  display: flex;
  flex-direction: row-reverse;
  /* grid-template-columns: 1fr 1fr; */
  gap: 90px;
  padding: 10rem 0px;

  @media (max-width: 576px) {
    display: block;
    text-align: center;
  }

  div:nth-child(2) {
    width: 100%;
  }
`;

export const IntroContent = styled('div')`
  max-width: 495px;

  h3 {
    font-family: 'Motiva Sans Bold', serif;
    color: ${(props) => props.theme.fontColor};
    font-size: 56px;
    line-height: 1.18;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 21px;
    line-height: 1.41;
    margin: 1.75rem 0;
  }
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  gap: 36px;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
