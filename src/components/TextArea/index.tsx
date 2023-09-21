import { InputProps } from '../Input';
import { TextAreaContainer } from './styled';

export function TextArea({ name, placeholder }: InputProps) {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{name}</label>
      <textarea name={name} id={name} placeholder={placeholder}></textarea>
    </TextAreaContainer>
  );
}
