import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Clock } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  image?: string;
  children: React.ReactNode;
}

export default function ServiceLayout({ title, subtitle, image, children }: ServiceLayoutProps) {
  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-card to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Nexto Delivery
            </p>
            <h1
              className="text-5xl md:text-7xl font-medium text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--app-font-display)' }}
            >
              {title}
            </h1>
            <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-32 bg-card border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                  Available Now · 24/7
                </span>
              </div>

              <h3
                className="text-2xl font-medium text-white mb-2"
                style={{ fontFamily: 'var(--app-font-display)' }}
              >
                Order {title}
              </h3>
              <p className="text-foreground/50 text-sm mb-8 leading-relaxed">
                Send your order via WhatsApp and our concierge will confirm in minutes. Average delivery: 35–45 min.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/212638913733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-background py-4 rounded-2xl font-semibold text-base hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>

                <a
                  href="tel:+212638913733"
                  className="w-full flex items-center justify-center gap-3 bg-card border border-white/10 text-foreground py-4 rounded-2xl font-semibold text-base hover:bg-white/5 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call +212 638 913 733
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-foreground/40">
                <Clock className="w-3.5 h-3.5" />
                English-speaking concierge
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
