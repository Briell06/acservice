import type React from "react";
import ContactHero from "@/app/(root)/about/contact-hero";
import AboutSection from "@/app/(root)/about/about-section";
import AboutCta from "@/app/(root)/about/about-cta";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <ContactHero />
      <AboutSection />
      {/* CTA Section */}
      <AboutCta />
    </div>
  );
}
