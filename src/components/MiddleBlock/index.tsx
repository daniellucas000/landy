/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../Button';
import { MiddleBlockContainer } from './style';

interface MiddleBoxProps {
  icon?: string;
  title: string;
  content?: string;
  id?: string;
  button?: any;
}

export function MiddleBlock({ title, content, button }: MiddleBoxProps) {
  return (
    <MiddleBlockContainer>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        {button && <Button>{button}</Button>}
      </div>
    </MiddleBlockContainer>
  );
}
