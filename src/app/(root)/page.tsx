import Hero from "./hero";
import Overview from "./services-overview";
import Testimonials from "./testimonials";
import WhyChooseUs from "./why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
