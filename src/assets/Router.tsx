import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArticlePage from "@/pages/ArticlePage";
import ConferenceRegistration from "@/pages/ConferenceRegistrationPage";
import ContentBlocksPage from "@/pages/ContentBlocks";
import EmployeeOwnerLevelTwoPage from "@/pages/EmployeeOwnerLevelTwoPage";
import EmployeePage from "@/pages/EmployeePage";
import HomePage from "@/pages/HomePage";
import NetworkSignupPage from "@/pages/NetworkSignupPage";
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
        <Route path="/article/:title" element={<ArticlePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/owner" element={<EmployeeOwnerLevelTwoPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
