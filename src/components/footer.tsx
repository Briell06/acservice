import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-bold">ACService Enterprise</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professional cleaning services for enterprise clients. Reliable,
              scalable, and tailored to your business needs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <Link
                  className="hover:underline"
                  href={"/services/#building-maintenance"}
                >
                  Building Maintenance & Cleaning
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href={"/services/#house-maintenance"}
                >
                  House & Apartment Cleaning
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/#painting-services"
                >
                  Interior Painting Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <Link className="hover:underline" href={"/about"}>
                  About Us
                </Link>
              </li>
              <li>Careers</li>
              <li>Certifications</li>
              <li>Case Studies</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <div className="text-primary-foreground/80 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@acservice.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-primary-foreground/20 text-primary-foreground/60 mt-12 border-t pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} ACService Enterprise. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
