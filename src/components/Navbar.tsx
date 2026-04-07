import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons ke liye
import cocobinoLogo from "@/assets/cocobino-logo.png";

const navItems = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Process", id: "process" },
  { name: "FAQ", id: "faq" },
  { name: "Policies", id: "policies", isPage: true }, // Policies as separate page
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = (id, isPage = false) => {
    setIsOpen(false);
    if (!isPage && id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ">
          
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <img src={cocobinoLogo} alt="Cocobino Media" className="w-8 h-8 rounded-lg" />
            <span className="font-heading text-xl font-bold text-gradient hidden sm:inline">
              Cocobino Media
            </span>
            <span className="font-heading text-xl font-bold text-gradient sm:hidden">
               Cocobino Media
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isPage ? (
                <NavLink
                  key={item.name}
                  to="/policies"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </NavLink>
              ) : (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Hamburger Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-background border-l border-border z-40 md:hidden shadow-xl"
            >
              <div className="flex flex-col pt-24 px-6 gap-4">
                {navItems.map((item) => (
                  item.isPage ? (
                    <NavLink
                      key={item.name}
                      to="/policies"
                      onClick={() => handleLinkClick(null, true)}
                      className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <a
                      key={item.name}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.id);
                      }}
                      className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;