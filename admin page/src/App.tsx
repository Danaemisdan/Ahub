
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/DashboardLayout";
import { StudentActivity } from "./components/StudentActivity";
import { Leaderboard } from "./components/Leaderboard";
import { UploadVideos } from "./components/UploadVideos";
import { DeactivateStudents } from "./components/DeactivateStudents";
import { DeleteCourse } from "./components/DeleteCourse";
import { AddCourse } from "./components/AddCourse";
import { AddQuiz } from "./components/AddQuiz";
import { LiveSection } from "./components/LiveSection";
import { AddMarks } from "./components/AddMarks";
import { ViewAllStudents } from "./components/ViewAllStudents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-activity" element={<DashboardLayout><StudentActivity /></DashboardLayout>} />
          <Route path="/leaderboard" element={<DashboardLayout><Leaderboard /></DashboardLayout>} />
          <Route path="/upload-videos" element={<DashboardLayout><UploadVideos /></DashboardLayout>} />
          <Route path="/deactivate-students" element={<DashboardLayout><DeactivateStudents /></DashboardLayout>} />
          <Route path="/delete-course" element={<DashboardLayout><DeleteCourse /></DashboardLayout>} />
          <Route path="/add-course" element={<DashboardLayout><AddCourse /></DashboardLayout>} />
          <Route path="/add-quiz" element={<DashboardLayout><AddQuiz /></DashboardLayout>} />
          <Route path="/live-section" element={<DashboardLayout><LiveSection /></DashboardLayout>} />
          <Route path="/add-marks" element={<DashboardLayout><AddMarks /></DashboardLayout>} />
          <Route path="/all-students" element={<DashboardLayout><ViewAllStudents /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
