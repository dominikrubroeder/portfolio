import { Container } from '@/components/atoms/container';
import { ContactButton } from '@/components/organisms/contact/contact-button';

export function ContactSection() {
  return (
    <Container className="flex items-center" id="contact">
      <ContactButton />
    </Container>
  );
}
