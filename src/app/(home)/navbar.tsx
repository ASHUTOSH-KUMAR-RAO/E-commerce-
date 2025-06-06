"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
        "hover:text-pink-600 hover:bg-pink-50",
        isActive
          ? "text-pink-600 bg-pink-50"
          : "text-gray-600 hover:text-pink-600"
      )}
    >
      {children}
      {/* Active indicator */}
      <span
        className={cn(
          "absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300 transform -translate-x-1/2",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathName = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav className="sticky top-0 z-50 h-20 flex items-center justify-between px-6 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <span
          className={cn(
            "text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105",
            poppins.className
          )}
        >
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {/* Desktop Navigation */}
      <div className="flex items-center gap-2">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathName === item.href}
          />
        ))}
      </div>

      {/* Desktop Auth Buttons */}
      <div className="flex items-center gap-3">
        <Button
          asChild
          variant="ghost"
          className="text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 font-medium"
        >
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button
          asChild
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-6"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
