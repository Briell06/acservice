import type React from "react";
import ContactForm from "@/app/(root)/contact/contact-form";
import ContactInfo from "@/app/(root)/contact/contact-info";

const ContactPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
