import React from 'react';
import SEO from "@/components/seo";

export default function Terms() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <SEO
        title="Terms of Service | Nexto Marrakech"
        description="Read Nexto's terms of service. Understand our delivery conditions, service areas, and customer commitments."
        path="/terms"
      />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--app-font-display)' }}>Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>Last updated: January 2026</p>
          
          <h3 className="text-foreground">1. Acceptance of Terms</h3>
          <p>By placing an order with Nexto via WhatsApp or phone, you agree to be bound by these Terms of Service.</p>

          <h3 className="text-foreground">2. Service Description</h3>
          <p>Nexto acts as a premium concierge and delivery service operating in Marrakech, Morocco. We purchase goods on your behalf and deliver them to your specified location.</p>

          <h3 className="text-foreground">3. Pricing and Fees</h3>
          <p>All prices quoted via our WhatsApp concierge are final and include the cost of the goods plus our delivery/concierge fee. You will always be informed of the total cost before confirming your order.</p>

          <h3 className="text-foreground">4. Delivery Times</h3>
          <p>While we strive for a 45-minute average delivery time, times are estimates and not guarantees. Delays may occur due to traffic, restaurant preparation times, or extreme weather.</p>

          <h3 className="text-foreground">5. Payment</h3>
          <p>Payment must be made either via secure payment link prior to delivery, or in cash (MAD, EUR, USD) upon delivery. Failure to pay may result in denial of future service.</p>
          
          <h3 className="text-foreground">6. Refunds and Issues</h3>
          <p>If there is an issue with your order, please contact our concierge immediately upon receipt. We will work to resolve any discrepancies or provide partial/full refunds on a case-by-case basis at our discretion.</p>
        </div>
      </div>
    </div>
  );
}
