import Navbar from "@/components/Navbar";
import SplitHeroSection from "@/components/SplitHeroSection";

const JointPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Navbar />
      <SplitHeroSection
        title="2024 Ohio Employee Ownership Conference"
        highlightedTitle=""
        description="Explore the benefits and implementation strategies of employee ownership models in educational settings. This guide is tailored for educators looking to adopt these innovative approaches to enhance school management and culture."
      />
      <div className="mx-auto max-w-4xl"></div>
    </div>
  );
};

export default JointPage;
