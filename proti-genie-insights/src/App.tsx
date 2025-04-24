import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProteinExplorer from "./pages/ProteinExplorer";
import InteractionNetwork from "./pages/InteractionNetwork";
import VariantInfo from "./pages/VariantInfo";
import DiseaseAssociation from "./pages/DiseaseAssociation";
import FunctionalInsights from "./pages/FunctionalInsights";
import InteractiveExploration from "./pages/InteractiveExploration";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/:proteinId" element={<ProteinExplorer />} />
          <Route path="/network/:proteinId" element={<InteractionNetwork />} />
          <Route path="/variants/:proteinId" element={<VariantInfo />} />
          <Route path="/disease-association" element={<DiseaseAssociation />} />
          <Route path="/functional-insights" element={<FunctionalInsights />} />
          <Route path="/interactive-exploration" element={<InteractiveExploration />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
