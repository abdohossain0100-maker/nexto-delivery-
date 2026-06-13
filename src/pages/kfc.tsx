import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function KFC() {
  return (
    <>
      <SEO
        title="KFC Delivery Marrakech — Hot & Crispy in 45 Min | Nexto"
        description="Order KFC in Marrakech delivered to your Riad, Villa or hotel in under 45 minutes. Family buckets, Zinger meals, wings — hot and fresh via WhatsApp."
        path="/kfc"
      />
      <ServiceLayout
        title="KFC Delivery"
        subtitle="The iconic taste, delivered hot to your door in Marrakech."
        image="/images/kfc.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Crispy, Hot, Fast.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Whether you're relaxing by the pool at your Palmeraie villa or ending a long night in the Medina, our dedicated riders ensure your KFC arrives exactly as it should—hot, crispy, and flawless.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Popular Orders</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Family Buckets & Sharers</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Zinger Meals</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Hot Wings & Tenders</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Midnight Cravings</li>
            </ul>
          </div>
          <p className="text-foreground/60 italic">Message our concierge with your exact order, and we'll handle the rest. We verify every item before dispatch to guarantee perfection.</p>
        </div>
      </ServiceLayout>
    </>
  );
}
