import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePlaceholder from "./pages/ServicePlaceholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-and-system" element={<ServicePlaceholder />} />
          <Route path="/ai-automation" element={<ServicePlaceholder />} />
          <Route path="/website-design" element={<ServicePlaceholder />} />
          <Route path="/video-editing" element={<ServicePlaceholder />} />
          <Route path="/digital-marketing" element={<ServicePlaceholder />} />
          <Route path="/ui-ux" element={<ServicePlaceholder />} />
          <Route path="/graphic-design" element={<ServicePlaceholder />} />
          <Route path="/content-development" element={<ServicePlaceholder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
