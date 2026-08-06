import type { Metadata } from 'next';

import ContactSections from '@/components/sections/generated/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with us for inquiries, support, or collaboration. Find our contact details, send us a message, and we will be happy to assist you.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us',
    description:
      'Get in touch with us for inquiries, support, or collaboration. Find our contact details, send us a message, and we will be happy to assist you.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactSections />;
}
