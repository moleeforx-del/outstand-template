import BenefitsSection from './BenefitsSection';
import OurSolutionSection from './OurSolutionSection';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import OurExpertise from './OurExpertise';
import AboutSection from './AboutSection';
import Benefits from './Benefits';
import DigitalSolutions from './DigitalSolutions';
import PricingPlan from './PricingPlan';
import Process from './Process';
import Projects from './Projects';
import Values from './Values';
import LetSWorkTogether from './LetSWorkTogether';
import FaqS from './FaqS';
import Testimonials from './Testimonials';
import Cta from './Cta';
import ContactUs from './ContactUs';
import Section17 from './Section17';

export default function HomeSections() {
  return (
    <>
      <Section17 />
      <div className="pageShell">
        <BenefitsSection />
        <OurSolutionSection />
        <FeaturesSection />
        <WhyChooseUs />
        <OurExpertise />
        <AboutSection />
        <Benefits />
        <DigitalSolutions />
        <PricingPlan />
        <Process />
        <Projects />
        <Values />
        <LetSWorkTogether />
        <FaqS />
        <Testimonials />
        <Cta />
        <ContactUs />
      </div>
    </>
  );
}
