import styled from 'styled-components';

export const TextAreaContainer = styled('div')`
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: -0.625rem;

  label {
    display: block;
    padding-bottom: 10px;
    text-transform: capitalize;
    text-transform: capitalize;
    color: ${(props) => props.theme.fontColor};
  }

  textarea {
    resize: none;
    font-size: 0.875rem;
    height: 185px;
  }
`;
