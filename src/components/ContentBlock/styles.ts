import styled from 'styled-components';

export const ContentBlockContainer = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  padding: 10rem 0px;
`;

export const LeftContentContainer = styled('section')`
  /* display: grid; */
  display: flex;
  flex-direction: row-reverse;
  /* grid-template-columns: 1fr 1fr; */
  gap: 90px;
  padding: 10rem 0px;

  div:nth-child(2) {
    width: 100%;
  }
`;

export const IntroContent = styled('div')`
  max-width: 495px;

  h3 {
    font-family: 'Motiva Sans Bold', serif;
    color: rgb(24, 33, 109);
    font-size: 56px;
    line-height: 1.18;
    margin-bottom: 1.75rem;
  }

  p {
    color: rgb(24, 33, 109);
    font-size: 21px;
    line-height: 1.41;
  }
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  gap: 36px;
`;
