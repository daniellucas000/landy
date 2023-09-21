import { InputContainer } from './styled';

export interface InputProps {
  type?: string;
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={name}>{name}</label>
      <input type="text" placeholder={placeholder} name={name} id={name} />
    </InputContainer>
  );
}
