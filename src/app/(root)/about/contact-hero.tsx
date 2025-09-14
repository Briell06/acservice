import React from "react";

const ContactHero = () => {
  return (
    <section className="from-muted/50 to-background bg-gradient-to-br py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold text-balance md:text-5xl">
            Get in Touch with ACServices
          </h1>
          <p className="text-muted-foreground mb-8 text-xl text-pretty">
            Ready to transform your space? Contact our cleaning specialists
            today for a personalized consultation and free quote.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
