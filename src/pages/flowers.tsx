import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function Flowers() {
  return (
    <>
      <SEO
        title="Flower Delivery Marrakech — Bouquets & Gift Arrangements | Nexto"
        description="Luxury flower delivery in Marrakech. Bespoke bouquets, Moroccan florals, anniversary and birthday arrangements delivered to your Riad or hotel. Order via WhatsApp."
        path="/flowers"
      />
      <ServiceLayout
        title="Luxury Flowers"
        subtitle="Bespoke arrangements for every occasion."
        image="/images/services-flowers.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Elegance in Bloom.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Celebrating an anniversary, making a grand gesture, or simply bringing life into your Riad suite. We source the finest stems and deliver dramatic, elegant arrangements directly to your location.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Signature Arrangements</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Classic Red Rose Bouquets</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Local Moroccan Florals</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Anniversary & Birthday Specials</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Custom Gift Wrapping & Cards</li>
            </ul>
          </div>
          <p className="text-foreground/60 italic">
            We can include a handwritten card with your delivery. Let us know the message on WhatsApp. For surprise restaurant deliveries, we coordinate with the maitre d'.
          </p>
        </div>
      </ServiceLayout>
    </>
  );
}
