import CustomAnimatedNumber from "@/components/animated-number";
import { Clock, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mx-auto mb-2 text-center text-3xl font-bold md:text-4xl">
              Why Leading Companies Choose ACServices?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We understand that your facility is more than just a
              workspace—it’s a reflection of your brand and values.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-lg p-2">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Trained Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    Background-checked, insured, and continuously trained staff
                    who understand enterprise standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-lg p-2">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Compliance & Security
                  </h3>
                  <p className="text-muted-foreground">
                    Full compliance with industry regulations and strict
                    security protocols for sensitive environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-lg p-2">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Flexible Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Services available 24/7 with minimal disruption to your
                    business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-primary mb-2 text-3xl font-bold">
                  <CustomAnimatedNumber to={100} />+
                </div>
                <div className="text-muted-foreground text-sm">
                  Enterprise Clients
                </div>
              </div>
              <div>
                <div className="text-primary mb-2 text-3xl font-bold">
                  <CustomAnimatedNumber to={98} />%
                </div>
                <div className="text-muted-foreground text-sm">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-primary mb-2 text-3xl font-bold">
                  <CustomAnimatedNumber to={1} />+
                </div>
                <div className="text-muted-foreground text-sm">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-primary mb-2 text-3xl font-bold">
                  <CustomAnimatedNumber to={24} />
                  /
                  <CustomAnimatedNumber to={7} />
                </div>
                <div className="text-muted-foreground text-sm">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
