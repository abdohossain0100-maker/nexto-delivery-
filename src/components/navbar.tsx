import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

const services = [
  { name: "KFC", path: "/kfc" },
  { name: "McDonald's", path: "/mcdonalds" },
  { name: "Pizza Hut", path: "/pizzahut" },
  { name: "Pharmacy", path: "/pharmacy" },
  { name: "Grocery", path: "/grocery" },
  { name: "Laundry", path: "/laundry" },
  { name: "Flowers", path: "/flowers" },
  { name: "Golf & Concierge", path: "/golf" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'var(--app-font-display)' }}>
          nexto<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-foreground/80'}`}>
            Home
          </Link>
          
          <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${location.match(/^\/(kfc|mcdonalds|pizzahut|pharmacy|grocery|laundry|flowers|golf)$/) ? 'text-primary' : 'text-foreground/80'}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/destination" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/destination' ? 'text-primary' : 'text-foreground/80'}`}>
            Marrakech
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/about' ? 'text-primary' : 'text-foreground/80'}`}>
            About
          </Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/contact' ? 'text-primary' : 'text-foreground/80'}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground/80"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="https://wa.me/212638913733"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,0,0.2)]"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-foreground/80"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <Link href="/" className="text-lg font-medium">Home</Link>
              <div className="py-2 border-y border-border/50">
                <p className="text-sm text-muted-foreground mb-3 font-semibold uppercase tracking-wider">Services</p>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link key={service.path} href={service.path} className="text-foreground/80 hover:text-primary">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/destination" className="text-lg font-medium">Marrakech Guide</Link>
              <Link href="/about" className="text-lg font-medium">About Nexto</Link>
              <Link href="/contact" className="text-lg font-medium">Contact Us</Link>
              <a
                href="https://wa.me/212638913733"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground text-center py-3 rounded-xl mt-4 font-semibold"
              >
                Order via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
