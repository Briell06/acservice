import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by industry leaders across various sectors
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-600"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot; ACservices has transformed our office environment. Their
                attention to detail and professional approach has impressed both
                our staff and clients.&quot;
              </p>
              <div>
                <div className="text-foreground font-semibold">
                  Sarah Johnson
                </div>
                <div className="text-muted-foreground text-sm">
                  Facilities Manager, TechCorp
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-600"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The specialized cleaning protocols for our medical
                facility exceed industry standards. We couldn&apos;t be happier
                with their service.&quot;
              </p>
              <div>
                <div className="text-foreground font-semibold">
                  Dr. Michael Chen
                </div>
                <div className="text-muted-foreground text-sm">
                  Director, Metro Medical Center
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-600"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Reliable, efficient, and always professional. ACservices
                has been our trusted partner for facility management for over 5
                years.&quot;
              </p>
              <div>
                <div className="text-foreground font-semibold">
                  Robert Martinez
                </div>
                <div className="text-muted-foreground text-sm">
                  Operations Director, Global Industries
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
