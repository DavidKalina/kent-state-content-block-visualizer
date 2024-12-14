import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ConferenceRegistration from "@/pages/ConferenceRegistrationPage";
import ContentBlocksPage from "@/pages/ContentBlocks";
import EmployeeArticlePage from "@/pages/EmployeeArticlePage";
import EmployeeOwnerLevelTwoPage from "@/pages/EmployeeOwnerLevelTwoPage";
import EmployeePage from "@/pages/EmployeePage";
import GeneralArticlePage from "@/pages/GeneralArticlePage";
import GeneralPage from "@/pages/GeneralPage";
import HomePage from "@/pages/HomePage";
import NetworkSignupPage from "@/pages/NetworkSignupPage";
import PromoArticlePage from "@/pages/PromoArticlePage";
import PromoPage from "@/pages/PromoPage";
import WebinarsPage from "@/pages/WebinarsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conference-registration" element={<ConferenceRegistration />} />
        <Route path="/webinars-page" element={<WebinarsPage />} />
        <Route path="/network-signup" element={<NetworkSignupPage />} />
        <Route path="/general" element={<GeneralPage />} />
        <Route path="/general/1" element={<GeneralArticlePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/employee/1" element={<EmployeePage />} />
        <Route path="/owner" element={<EmployeeOwnerLevelTwoPage />} />
        <Route path="/owner/1" element={<EmployeeArticlePage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/promo/1" element={<PromoArticlePage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
