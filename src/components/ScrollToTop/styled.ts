import styled from 'styled-components';

export const ScrollUpContainer = styled('button')`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out 0s;
  visibility: visible;
  opacity: 1;
  display: flex;
  border: none;

  &:hover {
    background: #a9abaf;
  }
`;
