import styled from 'styled-components';

export const InputContainer = styled('div')`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;

  label {
    display: block;
    padding-bottom: 10px;
    text-transform: capitalize;
    color: ${(props) => props.theme.fontColor};

    @media (max-width: 576px) {
      text-align: left;
    }
  }

  input {
    font-size: 0.875rem;
  }
`;
