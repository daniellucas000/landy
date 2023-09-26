import { FooterContainer, FooterWrapper } from './styled';

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">Tell Us Everything</a>
            </li>
            <li>Do you have any question? Feel free to reach out.</li>
            <li>
              <a href="#">Let's Chat</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Policy</h4>
          <ul>
            <li>
              <a href="#">Application Security</a>
            </li>
            <li>
              <a href="#">Software Principles</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
          </ul>
        </div>
      </FooterWrapper>

      <FooterWrapper>
        <div>
          <h4>Address</h4>
          <ul>
            <li>Rancho Santa Margarita</li>
            <li>2131 Elk Street</li>
            <li>California</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Careers & Culture</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Language</h4>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
}
