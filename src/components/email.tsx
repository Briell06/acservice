import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { CSSProperties } from "react";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";

type EmailTemplateProps = z.infer<typeof formSchema>;
export function ContactFormEmailTemplate({
  name,
  email,
  phoneNumber,
  service,
  message,
}: EmailTemplateProps) {
  const previewText = `New inquiry from ${name} about ${service === "building" ? "Building Maintenance & Cleaning" : service === "house" ? "House & Apartment Cleaning" : service === "painting" ? "Interior Painting Services" : "Multiple Services"}`;

  const brand = {
    primary: "#0f172a", // slate-900
    secondary: "#0ea5e9", // sky-500
    muted: "#64748b", // slate-500
    border: "#e2e8f0", // slate-200
    bg: "#f8fafc", // slate-50
    white: "#ffffff",
  };

  const containerStyle: CSSProperties = {
    width: "100%",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: brand.white,
    borderRadius: "14px",
    border: `1px solid ${brand.border}`,
    boxShadow:
      "0 2px 4px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
  };

  const labelStyle: CSSProperties = {
    color: brand.muted,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "6px",
  };

  const valueStyle: CSSProperties = {
    color: brand.primary,
    fontSize: "16px",
    lineHeight: "24px",
    margin: 0,
  };

  const fieldBlock: CSSProperties = {
    marginBottom: "16px",
  };

  const messageBox: CSSProperties = {
    backgroundColor: brand.bg,
    border: `1px solid ${brand.border}`,
    borderRadius: "12px",
    padding: "16px",
    color: brand.primary,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    marginTop: "8px",
  };

  const ctaHref = `mailto:${encodeURIComponent(
    email,
  )}?subject=${encodeURIComponent(
    `Re: Inquiry about ${service === "building" ? "Building Maintenance & Cleaning" : service === "house" ? "House & Apartment Cleaning" : service === "painting" ? "Interior Painting Services" : "Multiple Services"}`,
  )}&body=${encodeURIComponent(
    `Hello ${name},\n\nThank you for contacting us about "${service === "building" ? "Building Maintenance & Cleaning" : service === "house" ? "House & Apartment Cleaning" : service === "painting" ? "Interior Painting Services" : "Multiple Services"}".\n\n—`,
  )}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body
        style={{
          backgroundColor: brand.bg,
          margin: 0,
          padding: "32px 16px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        <Container style={containerStyle}>
          <Section style={{ marginBottom: "8px" }}>
            <Heading
              as="h2"
              style={{
                margin: 0,
                fontSize: "22px",
                lineHeight: "28px",
                color: brand.primary,
              }}
            >
              New Contact Request
            </Heading>
            <Text
              style={{
                margin: "6px 0 0",
                color: brand.muted,
                fontSize: "14px",
              }}
            >
              You have received a new message through the contact form.
            </Text>
          </Section>

          <Hr style={{ borderColor: brand.border, margin: "16px 0 24px" }} />

          <Section style={fieldBlock}>
            <div style={labelStyle}>Name</div>
            <p style={valueStyle}>{name}</p>
          </Section>

          <Section style={fieldBlock}>
            <div style={labelStyle}>Email</div>
            <p style={valueStyle}>
              <Link
                href={`mailto:${email}`}
                style={{ color: brand.secondary, textDecoration: "none" }}
              >
                {email}
              </Link>
            </p>
          </Section>

          {phoneNumber ? (
            <Section style={fieldBlock}>
              <div style={labelStyle}>Phone</div>
              <p style={valueStyle}>
                <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  style={{ color: brand.secondary, textDecoration: "none" }}
                >
                  {phoneNumber}
                </Link>
              </p>
            </Section>
          ) : null}

          <Section style={fieldBlock}>
            <div style={labelStyle}>Service</div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: brand.primary,
              }}
            >
              {service === "building" && "Building Maintenance & Cleaning"}
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: brand.primary,
              }}
            >
              {service === "house" && "House & Apartment Cleaning"}
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: brand.primary,
              }}
            >
              {service === "painting" && "Interior Painting Services"}
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: brand.primary,
              }}
            >
              {service === "multiple" && "Multiple Services"}
            </p>
          </Section>

          <Section style={{ marginTop: "20px" }}>
            <div style={labelStyle}>Message</div>
            <div style={messageBox}>{message}</div>
          </Section>

          <Section style={{ marginTop: "28px", textAlign: "center" }}>
            <Button
              href={ctaHref}
              style={{
                backgroundColor: brand.secondary,
                color: brand.white,
                padding: "12px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Reply to {name.split(" ")[0] || "sender"}
            </Button>
            <Text
              style={{
                color: brand.muted,
                fontSize: "12px",
                marginTop: "12px",
              }}
            >
              Clicking will open your email client to reply.
            </Text>
          </Section>

          <Hr style={{ borderColor: brand.border, margin: "20px 0" }} />

          <Section>
            <Text
              style={{
                color: brand.muted,
                fontSize: "12px",
                margin: 0,
                lineHeight: "18px",
              }}
            >
              You received this email because someone completed the contact
              form. If you weren&#39;t expecting this message, you can ignore
              it.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
