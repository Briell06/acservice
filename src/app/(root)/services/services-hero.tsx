import { Badge } from "@/components/ui/badge";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 lg:py-32">
      <div className="from-muted/50 to-background absolute inset-0 bg-gradient-to-br"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Professional Services Portfolio
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold text-balance md:text-6xl">
            Our Comprehensive Service Solutions
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl text-pretty">
            From commercial buildings to residential spaces, we deliver
            exceptional cleaning and maintenance services that enhance your
            environment and protect your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
