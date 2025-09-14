import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, CheckCircle, Home, Paintbrush } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center" id="building-maintenance">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Our Three Core Services
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Specialized solutions designed to meet the unique needs of every
            space we serve.
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Building Maintenance & Cleaning */}
          <Card className="border-border group transition-all duration-300 hover:shadow-xl">
            <CardHeader className="pb-4 text-center">
              <div className="bg-accent/10 group-hover:bg-accent/20 mx-auto mb-6 w-fit rounded-full p-4 transition-colors">
                <Building2 className="stroke-primary h-16 w-16" />
              </div>
              <CardTitle className="mb-3 text-2xl">
                Building Maintenance & Cleaning
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Comprehensive facility management services that ensure your
                commercial buildings maintain the highest standards of
                cleanliness, safety, and operational efficiency.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Enhanced professional image and first impressions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Improved employee health and productivity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Extended building lifespan and asset protection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Compliance with health and safety regulations
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Services Include:
                </h4>
                <div
                  id="house-maintenance"
                  className="text-muted-foreground grid grid-cols-2 gap-2 text-sm"
                >
                  <div>• Daily office cleaning</div>
                  <div>• Floor maintenance</div>
                  <div>• Window cleaning</div>
                  <div>• HVAC maintenance</div>
                  <div>• Restroom sanitization</div>
                  <div>• Common area upkeep</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* House & Apartment Cleaning */}
          <Card className="border-border group transition-all duration-300 hover:shadow-xl">
            <CardHeader className="pb-4 text-center">
              <div className="bg-accent/10 group-hover:bg-accent/20 mx-auto mb-6 w-fit rounded-full p-4 transition-colors">
                <Home className="text-primary h-16 w-16" />
              </div>
              <CardTitle className="mb-3 text-2xl">
                House & Apartment Cleaning
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Professional residential cleaning services that transform your
                living spaces into pristine, comfortable environments where you
                can truly relax and enjoy your home.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      More time for family and personal activities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Healthier living environment for your family
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Reduced stress and improved quality of life
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="stroke-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Professional-grade cleaning equipment and products
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Services Include:
                </h4>
                <div
                  id="painting-services"
                  className="text-muted-foreground grid grid-cols-2 gap-2 text-sm"
                >
                  <div>• Deep cleaning</div>
                  <div>• Kitchen sanitization</div>
                  <div>• Bathroom cleaning</div>
                  <div>• Bedroom organization</div>
                  <div>• Living area maintenance</div>
                  <div>• Move-in/out cleaning</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interior Painting */}
          <Card
            className="border-border group transition-all duration-300 hover:shadow-xl"
            id="painting-services"
          >
            <CardHeader className="pb-4 text-center">
              <div className="bg-accent/10 group-hover:bg-accent/20 mx-auto mb-6 w-fit rounded-full p-4 transition-colors">
                <Paintbrush className="text-primary h-16 w-16" />
              </div>
              <CardTitle className="mb-3 text-2xl">
                Interior Painting Services
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Expert interior painting solutions that refresh and revitalize
                your spaces with precision, quality materials, and attention to
                detail that transforms any environment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Instant aesthetic transformation and modernization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Increased property value and market appeal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Protection against wear, moisture, and damage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Professional finish with long-lasting durability
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3 font-semibold">
                  Services Include:
                </h4>
                <div className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
                  <div>• Color consultation</div>
                  <div>• Surface preparation</div>
                  <div>• Premium paint application</div>
                  <div>• Trim & detail work</div>
                  <div>• Texture repair</div>
                  <div>• Post-project cleanup</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
