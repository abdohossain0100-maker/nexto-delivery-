import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, MapPin, Clock, Star, MessageCircle } from "lucide-react";
import SEO from "@/components/seo";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const services = [
    { id: "kfc", name: "KFC Delivery", desc: "Crispy chicken delivered hot, anytime.", img: "/images/kfc.png", cols: "col-span-1" },
    { id: "pizzahut", name: "Pizza Hut", desc: "Artisan and classic pizzas.", img: "/images/pizzahut.png", cols: "col-span-1 md:col-span-2" },
    { id: "flowers", name: "Luxury Flowers", desc: "Bespoke arrangements.", img: "/images/services-flowers.png", cols: "col-span-1 md:col-span-2" },
    { id: "golf", name: "Golf Concierge", desc: "Direct to the green.", img: "/images/golf.png", cols: "col-span-1" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Nexto — Premium 24/7 Delivery in Marrakech"
        description="Order food, pharmacy, groceries, flowers, laundry & concierge services delivered to your Riad, Villa or Golf Course in under 45 minutes. Available 24/7."
        path="/"
      />
      <div className="grain-overlay" />
      
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img src="/images/hero.png" alt="Marrakech at night" className="w-full h-full object-cover object-center" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">Marrakech's Premium Delivery</p>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.9] tracking-tight mb-8">
              Excellence,<br />
              <span className="italic text-foreground/80">Delivered.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-light max-w-2xl mx-auto mb-12">
              From midnight cravings to luxury concierge. The city's finest service, at your door in 45 minutes.
            </p>
            
            <a href="https://wa.me/212638913733" className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium hover:bg-white transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 relative z-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">
              We handle the logistics so you don't have to. A <span className="text-primary italic">five-star experience</span> brought to your Riad.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium mb-3">24/7 Service</h3>
                <p className="text-foreground/60">Operating around the clock for those who demand the very best, anytime.</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium mb-3">Anywhere</h3>
                <p className="text-foreground/60">Medina, Palmeraie, or the golf course. We know the city intimately.</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl font-medium mb-3">English Speaking</h3>
                <p className="text-foreground/60">Seamless communication. Zero friction. Absolute reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Editorial */}
      <section className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-medium">Curated<br /><span className="italic text-primary">Services.</span></h2>
            <Link href="/about" className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors pb-4 border-b border-white/10 hover:border-primary">
              Discover our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-xl h-[400px] md:h-[500px] ${service.cols}`}
              >
                <Link href={`/${service.id}`} className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                  <img 
                    src={service.img} 
                    alt={service.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                    <h3 className="text-3xl font-medium mb-3">{service.name}</h3>
                    <p className="text-foreground/80 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-background/50 z-10" />
        <img src="/images/services-food.png" alt="Luxury Food" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-6xl md:text-9xl font-medium text-white/90 mix-blend-overlay">Taste the Luxury.</h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-background text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-8">Ready to Order?</p>
          <h2 className="text-5xl md:text-7xl font-medium mb-12">Your evening,<br /><span className="italic text-foreground/60">perfected.</span></h2>
          <a href="https://wa.me/212638913733" className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-12 py-6 rounded-full text-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
            Contact Concierge
          </a>
        </div>
      </section>
    </div>
  );
}
