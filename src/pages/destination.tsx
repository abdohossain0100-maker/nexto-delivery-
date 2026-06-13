import { motion } from "framer-motion";
import SEO from "@/components/seo";

export default function Destination() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <SEO
        title="Marrakech Guide — Things to Do & See | Nexto"
        description="Discover the best of Marrakech — the Medina, Koutoubia Mosque, Jemaa el-Fnaa, luxury Riads, and top golf courses. Nexto delivers everything you need during your stay."
        path="/destination"
      />
      <div className="grain-overlay" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-xs font-medium mb-6">The Red City</p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
            Marrakech. <br /><span className="italic text-foreground/70">Elevated.</span>
          </h1>
          <p className="text-2xl text-foreground/60 font-light max-w-2xl leading-relaxed">
            The city is magic, but navigating its logistics shouldn't break the spell. Nexto is your key to a frictionless stay.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[500px] md:h-[700px] rounded-3xl overflow-hidden relative mb-24 border border-white/10"
        >
          <img src="/images/destination.png" alt="Marrakech Koutoubia at Sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none mb-20 text-foreground/80">
            <h2 className="text-4xl font-medium text-white mb-6">The Tourist's Secret Weapon</h2>
            <p>
              A collision of ancient history and modern luxury. From the labyrinthine souks of the Medina to the manicured greens of the Palmeraie golf courses, Marrakech offers a sensory overload unlike anywhere else on earth.
            </p>
            <p>
              Nexto was designed specifically with international visitors in mind. You don't need local apps, you don't need to struggle with French or Arabic over the phone, and you don't need Moroccan payment methods. One WhatsApp message in English, and it's handled.
            </p>
          </div>

          <h2 className="text-4xl font-medium text-white mb-10">Where We Operate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-medium mb-3 text-primary">The Medina & Riads</h4>
              <p className="text-foreground/70">Navigating the narrow alleys is our specialty. We deliver right to your Riad's heavy wooden door.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-medium mb-3 text-primary">The Palmeraie</h4>
              <p className="text-foreground/70">Enjoying a secluded villa? We bring the city's best straight to your poolside without breaking your relaxation.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-medium mb-3 text-primary">Gueliz & Hivernage</h4>
              <p className="text-foreground/70">The modern heart of the city. Ultra-fast delivery to all apartments and luxury hotels.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-2xl font-medium mb-3 text-primary">Golf Resorts</h4>
              <p className="text-foreground/70">Al Maaden, Amelkis, Royal Golf. Forgotten your sunscreen or need a mid-game snack? We've got you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}