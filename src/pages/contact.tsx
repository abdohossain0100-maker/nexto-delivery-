import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import SEO from "@/components/seo";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-32">
      <SEO
        title="Contact Nexto — Order via WhatsApp in Marrakech"
        description="Reach Nexto 24/7 via WhatsApp +212638913733. English-speaking concierge delivers food, pharmacy, groceries and more across Marrakech in under 45 minutes."
        path="/contact"
      />
      <div className="grain-overlay" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-medium tracking-tight mb-6"
          >
            Always <span className="italic text-primary">Here.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/60 font-light max-w-2xl mx-auto"
          >
            Need something? Don't hesitate. Our concierge team is standing by 24/7 to handle your requests.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 rounded-3xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-medium mb-4">WhatsApp</h3>
            <p className="text-foreground/60 mb-10 text-lg">The fastest way to reach us. Perfect for orders, lists, and special requests.</p>
            <a 
              href="https://wa.me/212638913733" 
              className="mt-auto bg-primary text-primary-foreground w-full py-5 rounded-full font-medium text-lg hover:bg-white transition-colors"
            >
              Message +212 638-913733
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-12 rounded-3xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-foreground mb-8 group-hover:scale-110 group-hover:border-primary transition-all duration-500">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-medium mb-4">Call Us</h3>
            <p className="text-foreground/60 mb-10 text-lg">Prefer to speak to someone? Our English-speaking team is ready to help.</p>
            <a 
              href="tel:+212638913733" 
              className="mt-auto border border-white/20 w-full py-5 rounded-full font-medium text-lg hover:bg-white/5 transition-colors"
            >
              Call +212 638-913733
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/30 border border-white/5 p-8 rounded-2xl flex gap-6">
            <Clock className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-medium mb-2">Availability</h4>
              <p className="text-foreground/60 leading-relaxed">Open 24 hours a day, 7 days a week, 365 days a year. We never sleep so you can get what you need, when you need it.</p>
            </div>
          </div>
          <div className="bg-card/30 border border-white/5 p-8 rounded-2xl flex gap-6">
            <MapPin className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-xl font-medium mb-2">Service Area</h4>
              <p className="text-foreground/60 leading-relaxed">Operating exclusively in Marrakech: The Medina, Gueliz, Hivernage, Palmeraie, Route de l'Ourika, and all major Golf Resorts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}