import { ModeToggle } from "@/components/color-mode-switch";
import NavSheet from "@/components/nav-sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="aspect-square rounded-full object-cover"
            />
            <span className="text-primary text-2xl font-bold">ACServices</span>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Button
                key={link.children}
                className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link {...link} />
              </Button>
            ))}
          </nav>
          <div className="max-md:hidden">
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <NavSheet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
