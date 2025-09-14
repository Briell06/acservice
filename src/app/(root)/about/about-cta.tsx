import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutCta = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Contact us today for a free consultation and discover how ACServices
          can transform your space.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href={"/contact"}>Contact us now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AboutCta;
