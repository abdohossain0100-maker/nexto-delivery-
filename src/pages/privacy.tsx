import React from 'react';
import SEO from "@/components/seo";

export default function Privacy() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <SEO
        title="Privacy Policy | Nexto Marrakech"
        description="Read Nexto's privacy policy. We respect your data and never share your personal information with third parties."
        path="/privacy"
      />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--app-font-display)' }}>Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p>Last updated: January 2026</p>
          
          <h3 className="text-foreground">1. Introduction</h3>
          <p>Nexto ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Nexto.</p>

          <h3 className="text-foreground">2. Information We Collect</h3>
          <p>When you use our services via WhatsApp, we collect information necessary to fulfill your order, including:</p>
          <ul>
            <li>Your phone number (via WhatsApp)</li>
            <li>Your name or alias</li>
            <li>Delivery address or GPS coordinates</li>
            <li>Order details and history</li>
          </ul>

          <h3 className="text-foreground">3. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and deliver your orders</li>
            <li>Communicate with you regarding your service</li>
            <li>Improve our delivery operations and customer service</li>
          </ul>

          <h3 className="text-foreground">4. Data Sharing</h3>
          <p>We do not sell your personal data. We may share necessary details (like your address and order specifics) only with our delivery riders and partner vendors (restaurants, pharmacies) strictly for the purpose of fulfilling your order.</p>

          <h3 className="text-foreground">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp at +212 638-913733.</p>
        </div>
      </div>
    </div>
  );
}
