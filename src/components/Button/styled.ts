import styled from 'styled-components';

export const StyledButton = styled('button')`
  background: ${(p) => p.color || '#2e186a'};
  
  color: ${(p) => (p.color ? '#2E186A' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100% !important;
  max-width: 180px !important;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 20px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
