import { Clock, Shield, Users } from "lucide-react";

function ServicesWhyChooseUs() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Why Choose ACServices
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Our commitment to excellence and customer satisfaction sets us apart
            in every service we provide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-accent/10 mx-auto mb-6 w-fit rounded-full p-4">
              <Users className="text-primary h-12 w-12" />
            </div>
            <h3 className="text-foreground mb-4 text-xl font-semibold">
              Expert Team
            </h3>
            <p className="text-muted-foreground">
              Trained, certified, and experienced professionals who take pride
              in delivering exceptional results for every project, big or small.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent/10 mx-auto mb-6 w-fit rounded-full p-4">
              <Shield className="text-primary h-12 w-12" />
            </div>
            <h3 className="text-foreground mb-4 text-xl font-semibold">
              Fully Insured
            </h3>
            <p className="text-muted-foreground">
              Complete insurance coverage and bonding for your peace of mind,
              with strict safety protocols and quality assurance measures.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent/10 mx-auto mb-6 w-fit rounded-full p-4">
              <Clock className="text-primary h-12 w-12" />
            </div>
            <h3 className="text-foreground mb-4 text-xl font-semibold">
              Flexible Scheduling
            </h3>
            <p className="text-muted-foreground">
              Services available on your schedule, including evenings and
              weekends, with minimal disruption to your daily routine or
              business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesWhyChooseUs;
