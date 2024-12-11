import ContentBlocksPage from "@/pages/ContentBlocks";
import HomePage from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<ContentBlocksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
