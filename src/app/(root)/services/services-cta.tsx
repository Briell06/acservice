import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesCTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Transform Your Space?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Contact ACServices today for a personalized consultation and discover
          how our professional services can enhance your environment.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Get Free Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary-foreground/80 bg-transparent"
          >
            <Link href="/contact">Contact us now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
