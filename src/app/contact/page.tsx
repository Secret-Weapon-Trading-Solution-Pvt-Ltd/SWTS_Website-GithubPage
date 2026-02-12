import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import {
  ContactHero,
  ContactForm,
  ContactFAQ,
} from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Us | Secret Weapon Trading Solution',
  description:
    'Get in touch with Secret Weapon Trading Solution. Reach out via phone, WhatsApp, email, or Telegram for custom algo trading solutions and strategy automation.',
  keywords: [
    'contact SWTS',
    'algo trading consultation',
    'trading automation inquiry',
    'custom trading solution',
    'trading strategy help',
    'secret weapon contact',
  ],
  openGraph: {
    title: 'Contact Us | Secret Weapon Trading Solution',
    description:
      'Reach out to discuss your trading automation needs. Free consultation available.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </MainLayout>
  );
}
