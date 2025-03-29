import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Index from "./components/Pages/Index";
import Dashboard from "./components/Pages/Dashboard";
import Courses from "./components/Courses/Courses";
import MathCourse from "./components/Courses/MathCourse";
import MusicCourse from "./components/Courses/MusicTheory";
import EnglishCourse from "./components/Courses/EnglishCourse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/math" element={<MathCourse />} />
          <Route path="/courses/music" element={<MusicCourse />} />
          <Route path="/courses/english" element={<EnglishCourse />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
