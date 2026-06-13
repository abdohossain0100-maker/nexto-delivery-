import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function Laundry() {
  return (
    <>
      <SEO
        title="Laundry & Dry Cleaning Delivery Marrakech | Nexto"
        description="Premium laundry and dry cleaning pickup & delivery in Marrakech. Wash & fold, ironing, stain removal, express 24-hour return. Order via WhatsApp."
        path="/laundry"
      />
      <ServiceLayout
        title="Premium Laundry"
        subtitle="Impeccable care for your wardrobe."
        image="/images/laundry.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Crisp & Clean.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Don't spend your holiday doing chores. We pick up your garments, have them professionally cleaned by our trusted luxury dry cleaning partners, and return them crisp, folded, or perfectly pressed on hangers.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Our Services</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Standard Wash & Fold</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Premium Dry Cleaning</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Ironing & Pressing</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Stain Removal</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Express 24-Hour Return</li>
            </ul>
          </div>
          <p className="text-foreground/60 italic">
            Standard turnaround is 48 hours. Express 24-hour service is available for an additional premium. Let us know your requirements on WhatsApp.
          </p>
        </div>
      </ServiceLayout>
    </>
  );
}
