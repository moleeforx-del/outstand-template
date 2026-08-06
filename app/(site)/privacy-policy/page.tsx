import type { Metadata } from 'next';

import PrivacySections from '@/components/sections/generated/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy and Security',
  description:
    'Review our Privacy Policy to understand how we collect, use, and protect your personal information. This policy outlines your rights and our commitments to safeguarding your data.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy and Security',
    description:
      'Review our Privacy Policy to understand how we collect, use, and protect your personal information. This policy outlines your rights and our commitments to safeguarding your data.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPage() {
  return <PrivacySections />;
}
