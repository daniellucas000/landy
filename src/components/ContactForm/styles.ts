import styled from 'styled-components';

export const ContactFormContainer = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-bottom: 5rem;
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

export const FormContainer = styled('form')`
  width: 100%;
  max-width: 520px;
`;
