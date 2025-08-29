import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="from-muted/50 to-background absolute inset-0 bg-gradient-to-br"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mx-auto mb-6">
            Trusted by 100+ Enterprises
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold text-balance md:text-6xl">
            Elevate Your Workspace with Professional Cleaning Services
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl text-pretty">
            Reliable, scalable, and tailored solutions for your business. We
            maintain pristine environments that enhance productivity and create
            lasting impressions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Browse our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              About us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
