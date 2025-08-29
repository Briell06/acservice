import Footer from "@/components/footer";
import NavBar from "../navbar";
import CTA from "./cta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground container mx-auto min-h-screen px-4">
        {children}
      </main>
      <CTA />
      <Footer />
    </>
  );
}
