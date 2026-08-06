import Section0 from './Section0';
import Projects from './Projects';
import Portfolio from './Portfolio';
import Execllence from './Execllence';
import Testimonials from './Testimonials';
import Patners from './Patners';
import ContactUs from './ContactUs';

export default function WorksSections() {
  return (
    <>
      <Section0 />
      <div className="pageShell pageShellFlush">
        <Projects />
        <Portfolio />
        <Execllence />
        <Testimonials />
        <Patners />
        <ContactUs />
      </div>
    </>
  );
}
