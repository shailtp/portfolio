
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import MobileBlock from "@/components/MobileBlock";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider defaultTheme="light">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MobileBlock>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MobileBlock>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
