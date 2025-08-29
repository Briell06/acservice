import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./color-mode-switch";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={50}
            height={50}
            className="mb-5 inline-block aspect-square rounded object-cover"
          />
          <div className="flex justify-between">
            <SheetTitle className="text-primary inline-block text-2xl font-bold">
              ACService
            </SheetTitle>
            <ModeToggle />
          </div>
          <SheetDescription>
            Professional cleaning solutions for businesses and organizations,
            ensuring spotless environments and exceptional service quality.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <SheetClose key={link.href} asChild>
              <Button variant="link" asChild>
                <Link {...link} />
              </Button>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
