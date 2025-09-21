import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";

function ContactInfo() {
  return (
    <div className="mx-auto w-[95%] space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
          <CardDescription>
            Reach out to us directly through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 rounded-lg">
              <Phone className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-foreground mb-1 font-semibold">Phone</h3>
              <p className="text-muted-foreground">+1 (786) 961-0028</p>
              <p className="text-muted-foreground text-sm">
                Available 7 days a week, 8 AM - 8 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent/10 rounded-lg">
              <Mail className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-foreground mb-1 font-semibold">Email</h3>
              <p className="text-muted-foreground text-sm">
                areliscacerescleaningsolutions@gmail.com
              </p>
              <p className="text-muted-foreground text-sm">
                We respond within 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent/10 rounded-lg">
              <MapPin className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-foreground mb-1 font-semibold">
                Service Areas
              </h3>
              <p className="text-muted-foreground">
                Proudly serving South Florida, including Miami-Dade, Broward,
                and Palm Beach counties. Our extensive coverage ensures
                top-quality cleaning services across major metropolitan areas
                and surrounding communities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-accent/5">
        <CardHeader>
          <CardTitle className="text-xl">Why Choose ACServices?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                Specialized in luxury residential buildings
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                1+ years of proven experience
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                Licensed and insured professionals
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                Flexible scheduling to fit your needs
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span className="text-muted-foreground text-sm">
                Free consultations and estimates
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactInfo;
