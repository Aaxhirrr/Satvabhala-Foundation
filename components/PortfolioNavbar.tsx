"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Awareness",
    href: "/awareness",
  },
  {
    name: "Statistics",
    href: "/statistics",
  },
  {
    name: "Beyond the Diagnosis",
    href: "/beyond-the-diagnosis",
  },
  {
    name: "Sources",
    href: "/sources",
  },
  {
    name: "About Us",
    href: "/about",
  },
] as any[];

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const router = useRouter(); // specific import needed
  const handleLinkClick = (href: string) => {
    closeMobileMenu();
    router.push(href);
  };

  // @return
  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#E8EFE3]/5 backdrop-blur-[3px] md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/30 backdrop-blur-md border-b border-white/40 shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <button
                onClick={() => handleLinkClick("/")}
                className="text-3xl font-bold font-serif text-foreground hover:text-primary transition-colors duration-200 tracking-tight"
              >
                <span>Satvabhala</span>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-6 lg:space-x-8">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-foreground hover:text-primary px-2 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
                  >
                    <span>{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => handleLinkClick("/contact")}
                className="bg-primary text-primary-foreground px-[18px] rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-200 hover:rounded-2xl shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-[15px]"
              >
                <span
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Contact / Get Help
                </span>
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="md:hidden border-t border-white/20"
            >
              <div className="px-6 py-6 space-y-4">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <button
                    onClick={() => handleLinkClick("/contact")}
                    className="w-full bg-primary text-primary-foreground px-[18px] py-[15px] rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-200"
                  >
                    <span>Contact / Get Help</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
