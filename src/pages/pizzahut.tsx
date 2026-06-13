import ServiceLayout from "@/components/service-layout";
import SEO from "@/components/seo";

export default function PizzaHut() {
  return (
    <>
      <SEO
        title="Pizza Hut Delivery Marrakech — Hot to Your Riad | Nexto"
        description="Order Pizza Hut in Marrakech delivered piping hot to your Riad or Villa. Stuffed crust, party orders, dessert pizzas — via WhatsApp in under 45 minutes."
        path="/pizzahut"
      />
      <ServiceLayout
        title="Pizza Hut"
        subtitle="Perfectly baked, delivered piping hot to your Riad."
        image="/images/pizzahut.png"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-4xl font-medium mb-8 text-white">The Ultimate Share.</h2>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Hosting a gathering at your villa? Enjoying a quiet night in? Our express Pizza Hut delivery guarantees that the cheese is still melting when you open the box.
          </p>
          <div className="bg-card/50 border border-white/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-primary">Menu Highlights</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Stuffed Crust Specials</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Large Party Orders</li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Cheesy Bread & Sides</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary"></span>Dessert Pizzas</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
