import Footer from "@/components/footer";
import NavBar from "../navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
