import type { Metadata } from 'next';

import WorksSections from '@/components/sections/generated/works';

export const metadata: Metadata = {
  title: 'Works',
  description:
    'Discover our latest projects and success stories. Explore our portfolio to see how we deliver outstanding results, innovative solutions, and impactful designs across various industries.',
  alternates: { canonical: '/works' },
  openGraph: {
    title: 'Works',
    description:
      'Discover our latest projects and success stories. Explore our portfolio to see how we deliver outstanding results, innovative solutions, and impactful designs across various industries.',
    url: '/works',
  },
};

export default function WorksPage() {
  return <WorksSections />;
}
