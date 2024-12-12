import ContentBlocksPage from "@/pages/ContentBlocks";
import EmployeeArticlePage from "@/pages/EmployeeArticlePage";
import EmployeePage from "@/pages/EmployeePage";
import HomePage from "@/pages/HomePage";
import PromoPage from "@/pages/PromoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/employee/1" element={<EmployeeArticlePage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
