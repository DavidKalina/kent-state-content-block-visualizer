import AuthModal from "@/components/AuthModal";
import Navbar from "@/components/Navbar";
import SplitHeroSection from "@/components/SplitHeroSection";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GeneralPage = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Alternative without smooth scrolling:
    // window.scrollTo(0, 0);
  }, [pathname]);

  const data = {
    persona: "Employee Member",
    journey_stage: "awareness",
    title: "Employee Ownership: Your Guide to Building Wealth Through Workplace Ownership",
    description:
      "Discover how employee ownership can transform your career and financial future. Learn about proven benefits like better pay, stronger job security, and real opportunities to build lasting wealth.",
    optimized_content:
      "Employee ownership is transforming workplaces across America, creating stronger companies and more prosperous employees. Over 14 million Americans already benefit from employee ownership – here's why it matters for your future.\n\nAt its core, employee ownership means having a real stake in your company's success. Research consistently shows that employee-owned companies outperform their competitors, offering significant advantages:\n\n- Higher wages and better benefits than traditional companies\n- Increased job security and satisfaction\n- Opportunities to build substantial retirement wealth\n- Stronger company performance during economic challenges\n\nThere are several ways to become an employee-owner. The most common is through an Employee Stock Ownership Plan (ESOP), which works like a retirement benefit but invests in your company's stock. You don't have to pay anything to participate – your company contributes stock to a trust for your benefit.\n\nWorker cooperatives offer another path, where employees directly own and help run the business. A newer option, Employee Ownership Trusts (EOTs), focuses on profit-sharing and long-term employee benefit.\n\nThe impact is real: Employee-owned companies create more resilient local economies, preserve jobs, and help employees build significant wealth over time. When employees have an ownership stake, everyone benefits from the company's success.",
    cta_text: "Schedule a Free Consultation to Learn More",
    relevance_score: 0.9,
    technical_level: 1,
    transformation_rationale:
      "Content has been structured to address common questions and concerns of those new to employee ownership, emphasizing personal benefits while keeping technical details minimal. The progressive disclosure model allows readers to grasp key concepts before diving deeper into specific ownership structures. Language is accessible and encouraging, focusing on real-world benefits and outcomes.",
    diversity_score: 0.0128,
    total_persona_stage_content: 108,
  };

  return (
    <>
      <AuthModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSuccess={() => {
          navigate("/employee/1");
        }}
      />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <Navbar />

        <SplitHeroSection
          rightSideContent={{
            heading: data.title,
            text: data.optimized_content,
            buttonText: "Read More",
            onButtonClick: () => {
              setShowModal(true);
            },
          }}
          title={data.title}
          highlightedTitle=""
          description=""
        />
      </div>
    </>
  );
};

export default GeneralPage;
