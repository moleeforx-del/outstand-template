import type { Metadata } from 'next';

import AboutSections from '@/components/sections/generated/about';

export const metadata: Metadata = {
  title: 'About Us - Meet the Team',
  description:
    'Learn about our goal-oriented, highly qualified team dedicated to delivering exceptional results. Discover our mission, values, and the expertise that drives us.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us - Meet the Team',
    description:
      'Learn about our goal-oriented, highly qualified team dedicated to delivering exceptional results. Discover our mission, values, and the expertise that drives us.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutSections />;
}
