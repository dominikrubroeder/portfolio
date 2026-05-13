import { Container } from '@/components/organisms/layout';
import { ContactButton } from '@/components/organisms/contact/contact-button';

export function ContactSection() {
  return (
    <Container className="flex items-center" id="contact">
      <ContactButton />
    </Container>
  );
}
