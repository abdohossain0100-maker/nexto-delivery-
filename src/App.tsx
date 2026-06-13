import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { Layout } from "@/components/layout";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Destination from "@/pages/destination";

// Service Pages
import KFC from "@/pages/kfc";
import McDonalds from "@/pages/mcdonalds";
import PizzaHut from "@/pages/pizzahut";
import Pharmacy from "@/pages/pharmacy";
import Grocery from "@/pages/grocery";
import Laundry from "@/pages/laundry";
import Flowers from "@/pages/flowers";
import Golf from "@/pages/golf";

// Legal Pages
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/destination" component={Destination} />
        
        <Route path="/kfc" component={KFC} />
        <Route path="/mcdonalds" component={McDonalds} />
        <Route path="/pizzahut" component={PizzaHut} />
        <Route path="/pharmacy" component={Pharmacy} />
        <Route path="/grocery" component={Grocery} />
        <Route path="/laundry" component={Laundry} />
        <Route path="/flowers" component={Flowers} />
        <Route path="/golf" component={Golf} />
        
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexto-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
