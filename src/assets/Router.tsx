import Navbar from "@/components/Navbar";
import ContentBlocksPage from "@/pages/ContentBlocks";
import EmployeeArticlePage from "@/pages/EmployeeArticlePage";
import EmployeePage from "@/pages/EmployeePage";
import GeneralArticlePage from "@/pages/GeneralArticlePage";
import GeneralPage from "@/pages/GeneralPage";
import HomePage from "@/pages/HomePage";
import OwnerPage from "@/pages/OwnerPage";
import PromoArticlePage from "@/pages/PromoArticlePage";
import PromoPage from "@/pages/PromoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general" element={<GeneralPage />} />
        <Route path="/general/1" element={<GeneralArticlePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/employee/1" element={<EmployeePage />} />
        <Route path="/owner" element={<OwnerPage />} />
        <Route path="/owner/1" element={<EmployeeArticlePage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/promo/1" element={<PromoArticlePage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
