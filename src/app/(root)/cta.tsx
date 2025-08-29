import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Elevate Your Workspace?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Get a customized cleaning solution tailored to your business needs.
          Contact us today for a free consultation and quote.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Browse our services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleMore />
              Contact us now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
