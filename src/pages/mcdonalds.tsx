import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function McDonalds() {
  return (
    <>
      <SEO
        title="McDonald's Delivery Marrakech — 24/7 | Nexto"
        description="Order McDonald's in Marrakech delivered to your Riad, Villa or hotel. Big Mac, McNuggets, McFlurries — fast delivery via WhatsApp, any time of day or night."
        path="/mcdonalds"
      />
      <ServiceLayout
        title="McDonald's"
        subtitle="Your global favorites, elevated by local luxury service."
        image="/images/mcdonalds.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Familiar Comfort.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            There are moments when only a Big Mac will do. Nexto bridges the gap between your luxury stay and your favorite comfort food. Fast delivery in thermal bags ensures the fries stay crisp and the shakes stay cold.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Available 24/7</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Big Mac & Quarter Pounder Meals</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>McNugget Share Boxes</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Late-night McFlurries</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Breakfast options (Morning only)</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
