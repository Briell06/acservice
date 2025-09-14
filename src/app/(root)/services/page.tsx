import ServicesCTA from "./services-cta";
import ServicesHero from "./services-hero";
import ServicesSection from "./services-section";
import ServicesWhyChooseUs from "./services-why-chose-us";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <ServicesHero />
      <ServicesSection />
      <ServicesWhyChooseUs />
      <ServicesCTA />
      <Button size="lg" asChild className="fixed right-6 bottom-6">
        <Link href="/contact">
          Contact Us Now <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
