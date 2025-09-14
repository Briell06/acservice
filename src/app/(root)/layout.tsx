import Footer from "@/components/footer";
import NavBar from "../navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
