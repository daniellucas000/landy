/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../Button';
import { SvgIcon } from '../../SvgIcon';
import { ButtonWrapper, IntroContent, LeftContentContainer } from '../styles';

import { ContentBlockProps } from '../types';

export function LeftContentBlock({
  icon,
  title,
  content,
  button,
  id,
}: ContentBlockProps) {
  return (
    <LeftContentContainer id={id}>
      <IntroContent>
        <h3>{title}</h3>
        <p>{content}</p>
        <ButtonWrapper>
          {button &&
            button.map((item: any, index: number) => (
              <Button key={index} color={item.color}>
                {item.title}
              </Button>
            ))}
        </ButtonWrapper>
      </IntroContent>
      <div>
        <SvgIcon src={icon} width="100%" height="100%" />
      </div>
    </LeftContentContainer>
  );
}
