import { motion } from "framer-motion";
import SEO from "@/components/seo";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <SEO
        title="About Nexto — Marrakech's Premium Delivery"
        description="Learn about Nexto, Marrakech's most trusted 24/7 delivery service. Food, pharmacy, flowers and concierge — delivered with excellence."
        path="/about"
      />
      <div className="grain-overlay" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary tracking-widest uppercase text-xs font-medium mb-6">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
              Elevating <br /><span className="italic text-foreground/70">Marrakech.</span>
            </h1>
            <div className="prose prose-invert prose-lg text-foreground/80">
              <p>
                Nexto was born from a simple realization: visitors to Marrakech expect world-class service, but the local delivery ecosystem was fragmented, slow, and constrained by language barriers. We built Nexto to fix that.
              </p>
              <p>
                We provide a seamless, premium, English-first concierge and delivery experience that feels like an extension of a five-star hotel. Available to anyone, anywhere in the city.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10"
          >
            <img src="/images/about-rider.png" alt="Nexto Delivery Rider" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-medium mb-16 text-center">The Nexto Standard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/50 border border-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-primary mb-4">Zero Friction</h3>
              <p className="text-foreground/70 leading-relaxed">
                No language barriers. No confusing local apps. Our central dispatch handles everything in perfect English over WhatsApp.
              </p>
            </div>
            
            <div className="bg-card/50 border border-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-primary mb-4">Absolute Reliability</h3>
              <p className="text-foreground/70 leading-relaxed">
                We don't make promises we can't keep. If we say we'll get it there in 45 minutes, we optimize routing to ensure it happens.
              </p>
            </div>
            
            <div className="bg-card/50 border border-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-primary mb-4">Uncompromising Discretion</h3>
              <p className="text-foreground/70 leading-relaxed">
                Professional, polite riders who respect your privacy. We navigate complex Riad alleys and exclusive villa communities with ease.
              </p>
            </div>
            
            <div className="bg-card/50 border border-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-primary mb-4">24/7 Operations</h3>
              <p className="text-foreground/70 leading-relaxed">
                The city sleeps, but we don't. Our concierge and delivery teams are standing by at all hours to handle your requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}