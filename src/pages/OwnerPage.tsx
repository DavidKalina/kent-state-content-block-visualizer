import AuthModal from "@/components/AuthModal";
import SplitHeroSection from "@/components/SplitHeroSection";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OwnerPage = () => {
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
    persona: "Employee Owner",
    journey_stage: "consideration",
    title: "Understanding Your Company's Transition to Employee Ownership",
    description:
      "Learn about the pathways to employee ownership and what they mean for your company's future. Discover how ESOPs and worker cooperatives can preserve jobs while creating sustainable business transitions.",
    optimized_content:
      "As an employee owner, understanding the transition process to employee ownership helps you make informed decisions about your company's future. There are two primary paths to employee ownership, each with distinct advantages for different business situations.\n\nThe Employee Stock Ownership Plan (ESOP) is the most widely used method, particularly well-suited for:\n- Companies with 20+ employees\n- Capital-intensive businesses\n- Situations where partial ownership transfer is desired\n- Organizations seeking significant tax advantages\n\nESOPs function as qualified retirement plans but differ in crucial ways: they invest primarily in company stock and can borrow money to finance ownership transitions. This structure provides flexibility in succession planning and can work alongside other ownership strategies.\n\nWorker cooperatives offer an alternative approach, ideal for:\n- Smaller companies\n- Businesses planning complete ownership transfer\n- Organizations seeking lower implementation costs\n- Companies valuing direct employee participation\n\nBoth models preserve jobs and maintain company independence while offering tax benefits. For sellers, the '1042 Rollover' provision can shelter capital gains when selling 30% or more of the company to either an ESOP or cooperative.\n\nThe choice between these models often depends on company size, financial structure, and desired level of employee participation. Understanding these options helps you engage more effectively in your company's ownership journey.",
    cta_text: "Schedule a Consultation to Learn More",
    relevance_score: 0.95,
    technical_level: 3,
    transformation_rationale:
      "Content has been structured to address employee owners' need for deeper understanding of ownership transition options. The technical level is higher than introductory content, reflecting the audience's existing familiarity with employee ownership concepts. The progressive disclosure model allows readers to grasp key differences between ownership models before exploring specific details.",
    diversity_score: 0.0132,
    total_persona_stage_content: 116,
  };

  return (
    <>
      <AuthModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSuccess={() => {
          navigate("/owner/1");
        }}
      />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <SplitHeroSection
          rightSideContent={{
            heading: data.title,
            text: data.optimized_content,
            buttonText: "Read More",
            onButtonClick: () => {
              setShowModal(true);
            },
          }}
          title="Build Lasting Value Together"
          highlightedTitle="Your Voice Matters"
          description="Take an active role in shaping your company's future through our specialized training programs and employee-owner network. Join fellow owners in building stronger businesses through shared knowledge and proven strategies."
          callout={{
            description: "asd",
            buttonText: "Join Our Network",
            onButtonClick: () => navigate("/webinars-page"),
          }}
        />
      </div>
    </>
  );
};

export default OwnerPage;
