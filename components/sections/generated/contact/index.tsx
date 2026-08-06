import Hero from './Hero';
import Support from './Support';
import DigitalPresence from './DigitalPresence';
import FaqS from './FaqS';

export default function ContactSections() {
  return (
    <>
      <Hero />
      <div className="pageShell pageShellFlush">
        <Support />
        <DigitalPresence />
        <FaqS />
      </div>
    </>
  );
}
