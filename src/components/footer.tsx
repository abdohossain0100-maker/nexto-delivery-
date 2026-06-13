import { Link } from "wouter";
import { MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 z-0" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-4xl tracking-wider text-primary mb-6 inline-block">
              nexto.
            </Link>
            <p className="text-foreground/60 text-lg max-w-sm mb-8 font-light leading-relaxed">
              Marrakech's premier delivery concierge. Operating 24/7 for those who demand the absolute best.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/212638913733" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:+212638913733" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground/40 font-medium mb-8">Services</h4>
            <ul className="space-y-4">
              {['KFC', 'McDonald\'s', 'Pizza Hut', 'Pharmacy', 'Grocery', 'Laundry', 'Flowers', 'Golf'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/[^a-z]/g, '')}`} className="text-foreground/80 hover:text-primary transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground/40 font-medium mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/destination" className="text-foreground/80 hover:text-primary transition-colors">Marrakech Guide</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-foreground/80 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Nexto. All rights reserved.</p>
          <p>Excellence in every delivery.</p>
        </div>
      </div>
    </footer>
  );
}
