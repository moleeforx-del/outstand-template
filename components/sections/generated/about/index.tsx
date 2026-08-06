import Hero from './Hero';
import OurStory from './OurStory';
import Features from './Features';
import TeamMembers from './TeamMembers';
import Container from './Container';
import Execllence from './Execllence';
import Testimonials from './Testimonials';
import Careers from './Careers';
import Cta from './Cta';

export default function AboutSections() {
  return (
    <>
      <Hero />
      <div className="pageShell pageShellFlush">
        <OurStory />
        <Features />
        <TeamMembers />
        <Container />
        <Execllence />
        <Testimonials />
        <Careers />
        <Cta />
      </div>
    </>
  );
}
