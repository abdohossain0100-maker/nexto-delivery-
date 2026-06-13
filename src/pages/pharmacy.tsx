import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function Pharmacy() {
  return (
    <>
      <SEO
        title="24/7 Pharmacy Delivery Marrakech — Night & Emergency | Nexto"
        description="Need medicine in Marrakech at 3 AM? Nexto finds the duty pharmacy and delivers to your Riad or hotel 24/7. Painkillers, prescriptions, first aid — English-speaking concierge."
        path="/pharmacy"
      />
      <ServiceLayout
        title="24/7 Pharmacy"
        subtitle="Emergency essentials, when you need them most."
        image="/images/pharmacy-stock.jpg"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">Peace of Mind.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Fell ill during your trip? Need basic health supplies at 3 AM? We navigate the duty pharmacies (Pharmacie de Garde) across Marrakech so you don't have to leave your bed.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Common Requests</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Painkillers & Fever Relief</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Digestion & Stomach Relief</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Sunburn Care (Aloe Vera)</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>First Aid Supplies</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Prescription Collection (with photo)</li>
            </ul>
          </div>
          <p className="text-foreground/60 italic">
            If you don't know the Moroccan name for your medicine, just tell our English-speaking concierge what you take at home. We'll consult the pharmacist for the exact local equivalent.
          </p>
        </div>
      </ServiceLayout>
    </>
  );
}
