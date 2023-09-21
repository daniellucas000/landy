import { ReactNode } from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  color?: string;
  children: ReactNode;
}

export function Button({ color, children }: ButtonProps) {
  return <StyledButton color={color}>{children}</StyledButton>;
}
