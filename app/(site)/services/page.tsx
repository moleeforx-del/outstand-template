import type { Metadata } from 'next';

import ServicesSections from '@/components/sections/generated/services';

export const metadata: Metadata = {
  title: 'Explore Our Services',
  description:
    'Explore our services in design and development for stunning websites, branding to elevate your identity, and digital marketing to boost your online presence and drive growth.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Explore Our Services',
    description:
      'Explore our services in design and development for stunning websites, branding to elevate your identity, and digital marketing to boost your online presence and drive growth.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesSections />;
}
