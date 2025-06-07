import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ShoppingBag, LogIn } from "lucide-react";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 w-80 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-700"
      >
        {/* Clean Header */}
        <SheetHeader className="p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-none">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          {/* Hidden title for accessibility - screen readers ke liye */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 h-full">
          <div className="p-4 space-y-2">
            {/* Main Navigation Items */}
            <div className="space-y-1">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center gap-3 w-full text-left p-4 rounded-xl
                    text-gray-700 dark:text-gray-300 
                    hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                    dark:hover:from-blue-900/20 dark:hover:to-purple-900/20
                    hover:text-blue-700 dark:hover:text-blue-300
                    transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1
                    font-medium text-base overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-transparent before:via-white/10 before:to-transparent
                    before:translate-x-[-100%] hover:before:translate-x-[100%]
                    before:transition-transform before:duration-700 before:ease-in-out"
                  onClick={() => onOpenChange(false)}
                >
                  {item.icon && (
                    <div
                      className="relative p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 
                      dark:from-gray-700 dark:to-gray-600
                      group-hover:from-blue-100 group-hover:to-purple-100 
                      dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30
                      transition-all duration-300 group-hover:rotate-12 group-hover:scale-110
                      shadow-sm group-hover:shadow-md"
                    >
                      <div className="relative z-10">{item.icon}</div>
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 
                        rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                      ></div>
                    </div>
                  )}
                  <span className="flex-1 relative z-10">{item.children}</span>
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                      group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse"
                    />
                    <div
                      className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 
                      group-hover:opacity-75 transition-all duration-500 delay-100"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

            {/* Auth Section */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Account
              </div>

              <Link
                href="/sign-in"
                className="group relative flex items-center gap-3 w-full text-left p-4 rounded-xl
                  text-gray-700 dark:text-gray-300 
                  hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 
                  dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20
                  hover:text-emerald-700 dark:hover:text-emerald-300
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1
                  font-medium text-base overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-transparent before:via-white/10 before:to-transparent
                  before:translate-x-[-100%] hover:before:translate-x-[100%]
                  before:transition-transform before:duration-700"
                onClick={() => onOpenChange(false)}
              >
                <div
                  className="relative p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 
                  dark:from-gray-700 dark:to-gray-600
                  group-hover:from-emerald-100 group-hover:to-teal-100 
                  dark:group-hover:from-emerald-800/30 dark:group-hover:to-teal-800/30
                  transition-all duration-300 group-hover:rotate-12 group-hover:scale-110
                  shadow-sm group-hover:shadow-md"
                >
                  <LogIn className="h-5 w-5 relative z-10" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  ></div>
                </div>
                <span className="flex-1 relative z-10">Log In</span>
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 
                    group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse"
                  />
                  <div
                    className="w-1 h-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 
                    group-hover:opacity-75 transition-all duration-500 delay-100"
                  />
                </div>
              </Link>

              <Link
                href="/sign-up"
                className="group relative flex items-center gap-3 w-full text-left p-4 rounded-xl
                  text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500
                  hover:from-orange-600 hover:via-pink-600 hover:to-red-600
                  hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-[1.05] hover:-translate-y-2
                  transition-all duration-300 ease-in-out
                  font-semibold text-base overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-transparent before:via-white/20 before:to-transparent
                  before:translate-x-[-100%] hover:before:translate-x-[100%]
                  before:transition-transform before:duration-1000
                  animate-pulse hover:animate-none"
                onClick={() => onOpenChange(false)}
              >
                <div
                  className="relative p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20
                  group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-12
                  transition-all duration-300 shadow-lg"
                >
                  <ShoppingBag className="h-5 w-5 relative z-10 drop-shadow-sm" />
                  <div
                    className="absolute inset-0 bg-white/10 rounded-xl blur-sm group-hover:bg-white/20 
                    transition-all duration-300"
                  ></div>
                </div>
                <span className="flex-1 relative z-10 drop-shadow-sm">
                  Start Selling
                </span>
                <div className="flex space-x-1">
                  <div
                    className="w-3 h-3 rounded-full bg-white/80 group-hover:bg-white 
                    transition-all duration-300 group-hover:scale-125 animate-bounce"
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white/80 
                    transition-all duration-500 delay-75 animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
