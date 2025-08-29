import CTA from "./cta";
import Hero from "./hero";
import Overview from "./services-overview";
import Testimonials from "./testimonials";
import WhyChooseUs from "./why-choose-us";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <Overview />
        <WhyChooseUs />
        <Testimonials />
      </div>
      <CTA />
    </>
  );
}
