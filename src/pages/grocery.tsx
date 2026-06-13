import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function Grocery() {
  return (
    <>
      <SEO
        title="Grocery Delivery Marrakech — Villa Stocking & Supermarket Runs | Nexto"
        description="Grocery delivery in Marrakech to your Riad, Villa or hotel. Send your shopping list via WhatsApp — water, fresh produce, breakfast essentials, full villa stocking."
        path="/grocery"
      />
      <ServiceLayout
        title="Grocery Runs"
        subtitle="Villa stocking and midnight cravings, sorted."
        image="/images/grocery-stock.jpg"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Effortless Provisioning.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Stocking up your villa? Just arrived and need the essentials? Send us your shopping list via WhatsApp and our team will handle the supermarket run with absolute precision.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Frequent Deliveries</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Bottled Water & Premium Beverages</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Fresh Local Produce & Fruits</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Gourmet Snacks & Chips</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Breakfast Essentials (Bread, Eggs, Milk)</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Full Villa Stocking</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
