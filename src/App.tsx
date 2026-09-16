import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { LexUz } from "./pages/LexUz";
import { LegalSearch } from "./pages/LegalSearch";
import { CourtPractice } from "./pages/CourtPractice";
import { MyGov } from "./pages/MyGov";
import { DueDiligence } from "./pages/DueDiligence";
import { YuristAcademy } from "./pages/YuristAcademy";
import { CaseSimulator } from "./pages/CaseSimulator";
import { AIAssistant } from "./pages/AIAssistant";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="lexuz" element={<LexUz />} />
        <Route path="search" element={<LegalSearch />} />
        <Route path="court" element={<CourtPractice />} />
        <Route path="mygov" element={<MyGov />} />
        <Route path="due-diligence" element={<DueDiligence />} />
        <Route path="academy" element={<YuristAcademy />} />
        <Route path="simulator" element={<CaseSimulator />} />
        <Route path="assistant" element={<AIAssistant />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
