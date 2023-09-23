import styled from 'styled-components';

export const ContactFormContainer = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const IntroContent = styled('div')`
  max-width: 495px;

  @media (max-width: 576px) {
    margin-bottom: 5rem;
  }

  h3 {
    font-family: 'Motiva Sans Bold', serif;
    color: ${(props) => props.theme.fontColor};
    font-size: 56px;
    line-height: 1.18;
    margin-bottom: 1.75rem;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 21px;
    line-height: 1.41;
  }
`;

export const FormContainer = styled('form')`
  width: 100%;
  max-width: 520px;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
