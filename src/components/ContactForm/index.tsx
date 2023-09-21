import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { ContactFormContainer, FormContainer, IntroContent } from './styles';

interface ContactProps {
  title: string;
  content: string;
  id: string;
}

export function ContactForm({ title, content, id }: ContactProps) {
  return (
    <ContactFormContainer id={id}>
      <IntroContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </IntroContent>

      <FormContainer>
        <Input type="text" name="name" placeholder="Your Name" />
        <Input type="email" name="email" placeholder="Your Email" />
        <TextArea name="message" placeholder="Your Message" />

        <Button>Submit</Button>
      </FormContainer>
    </ContactFormContainer>
  );
}
