import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, CheckCircle, Clock, Shield } from "lucide-react";

const Overview = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            From daily maintenance to specialized deep cleaning, we provide
            complete facility management services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border transition-shadow hover:shadow-lg">
            <CardHeader>
              <Building2 className="text-primary mb-4 h-12 w-12" />
              <CardTitle>Office Cleaning</CardTitle>
              <CardDescription>
                Daily, weekly, and monthly office cleaning services tailored to
                your schedule and requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Workstation sanitization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Common area maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Restroom deep cleaning
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border transition-shadow hover:shadow-lg">
            <CardHeader>
              <Shield className="text-primary mb-4 h-12 w-12" />
              <CardTitle>Facility Management</CardTitle>
              <CardDescription>
                Complete facility oversight including maintenance, security, and
                environmental management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  24/7 monitoring systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Preventive maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Emergency response
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border transition-shadow hover:shadow-lg">
            <CardHeader>
              <Clock className="text-primary mb-4 h-12 w-12" />
              <CardTitle>Specialized Services</CardTitle>
              <CardDescription>
                Industry-specific cleaning solutions for healthcare,
                manufacturing, and high-security environments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Medical-grade sanitization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Industrial equipment cleaning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  Cleanroom maintenance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;
