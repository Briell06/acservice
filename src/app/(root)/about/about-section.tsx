import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                About ACServices
              </CardTitle>
              <CardDescription className="text-lg">
                Your trusted cleaning partner in South Florida
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-lg">
                We are a company specialized in the cleaning of residential
                buildings with two years of experience, located in Miami-Dade
                and Broward counties, and we have contracts with several luxury
                buildings.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="bg-accent/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
                    <Clock className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    1+ Years Experience
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Proven track record in residential cleaning
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
                    <MapPin className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Local Expertise
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Serving Miami-Dade and Broward counties
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
                    <Star className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Luxury Buildings
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Trusted by premium residential properties
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
