import styled from 'styled-components';

export const FooterContainer = styled('footer')`
  background: ${(props) => props.theme.footerColor};
  padding: 2.5rem 0px;
`;

export const FooterWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 60px;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  div ul li {
    color: ${(props) => props.theme.fontColor};
    font-size: 14px;
    width: 70%;
    margin-bottom: 5px;
  }

  div ul li a {
    font-size: 16px;
    color: ${(props) => props.theme.fontLinkFooter};
    cursor: pointer;
    text-transform: capitalize;
    line-height: 24px;
    display: block;
    margin-bottom: 0.625rem;
    transition: all 0.3s ease-in-out 0s;
    max-width: max-content;
  }
`;
