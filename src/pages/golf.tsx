import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function Golf() {
  return (
    <>
      <SEO
        title="Golf Concierge Delivery Marrakech — Al Maaden, Royal Golf | Nexto"
        description="Golf concierge and delivery service across Marrakech's finest courses — Al Maaden, Royal Golf, Amelkis, Samanah, Palmeraie. Food, equipment & more delivered to the clubhouse."
        path="/golf"
      />
      <ServiceLayout
        title="Golf Concierge"
        subtitle="Elevating your game across Marrakech's finest courses."
        image="/images/golf.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Uninterrupted Play.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Marrakech hosts some of the most stunning golf courses in the world. Our dedicated golf concierge ensures your focus remains entirely on your swing. From emergency deliveries to the clubhouse to post-game coordination, we handle the logistics.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Concierge Services</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Food & Beverage delivery to the clubhouse</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Emergency Sunscreen or Equipment</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Premium Cigar Delivery</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Post-game Riad/Villa dinner planning</li>
            </ul>
          </div>
          <p className="text-foreground/60 italic">
            We proudly service Royal Golf, Al Maaden, Amelkis, Samanah, Assoufid, and Palmeraie Golf. Deliveries are made to the clubhouse to respect course regulations.
          </p>
        </div>
      </ServiceLayout>
    </>
  );
}
