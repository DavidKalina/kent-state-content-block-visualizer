import ContentBlocksPage from "@/pages/ContentBlocks";
import HomePage from "@/pages/HomePage";
import OwnerPage from "@/pages/OwnerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerPage />} />
        <Route path="/employee" element={<OwnerPage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
