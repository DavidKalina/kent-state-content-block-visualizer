import HeroSection from "@/components/HeroSection";
import LandingCard from "@/components/LandingPageCard";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [viewMode] = useState<"grid" | "list">("grid");

  const navigate = useNavigate();

  const generalData = {
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

  const promoData = {
    persona: "Employee Member",
    journey_stage: "awareness",
    title: "Join Us at the 39th Annual Ohio Employee Ownership Conference",
    description:
      "Connect with fellow employee-owners and industry experts at Ohio's premier employee ownership event. Experience a day of learning, networking, and celebration at the Akron-Fairlawn Hilton on April 10th, 2025.",
    optimized_content:
      "Mark your calendars for the biggest employee ownership event of the year! The 39th Annual Ohio Employee Ownership Conference brings together the entire employee ownership community for a power-packed day of learning and connection.\n\nThis year's conference features over 20 specialized breakout sessions covering essential topics for everyone in the employee ownership community. From technical insights to culture-building strategies, you'll find sessions that speak directly to your interests and needs.\n\nKey Focus Areas:\n- Legal and Technical Updates: Stay current with the latest in employee ownership law and finance\n- Governance and Leadership: Learn best practices for managing employee-owned companies\n- Culture and Communications: Discover strategies to build and maintain a strong ownership culture\n- Essential Education: Engage with interactive sessions perfect for both new and experienced employee-owners\n- Business Owner Insights: Explore pathways to employee ownership transition\n\nPre-conference activities begin Wednesday, April 9th, with the main conference following on Thursday, April 10th, 2025. Join us at the Akron-Fairlawn Hilton for this can't-miss opportunity to connect with peers, celebrate successes, and strengthen your employee ownership journey.",
    cta_text: "Register Now for Early Bird Pricing",
    relevance_score: 0.85,
    technical_level: 1,
    transformation_rationale:
      "While maintaining broad appeal, the content emphasizes the event's value for all attendees while keeping technical details accessible. The structure moves from immediate appeal (date and location) to specific benefits (session topics) to create urgency and interest. The progressive disclosure model allows for quick scanning of key details with deeper information available on demand.",
    diversity_score: 0.0135,
    total_persona_stage_content: 98,
  };

  const employeeData = {
    persona: "Employee Member",
    journey_stage: "consideration",
    title: "Understanding Your Path to Ownership: A Guide to Employee Ownership Models",
    description:
      "Discover how employee ownership can benefit you and your colleagues. Learn about different ownership structures and how they can create opportunities for wealth building and workplace participation.",
    optimized_content:
      "As an employee, you have exciting opportunities to become an owner in your workplace through various employee ownership models. Each model offers unique benefits and ways to build long-term wealth while contributing to your company's success.\n\nThe most common path to employee ownership is through an Employee Stock Ownership Plan (ESOP). Think of an ESOP as a special retirement benefit where instead of just contributing your own money like in a 401(k), your company contributes its stock to a trust for your benefit. You don't have to pay anything to participate, and you can build significant wealth over time as your company grows.\n\nWorker cooperatives offer a different approach, where you can become a direct owner-member of your company. While less common in the US, cooperatives provide opportunities for direct participation in company decisions and annual profit sharing through what's called patronage dividends.\n\nA newer option gaining attention is the Employee Ownership Trust (EOT). While you don't own shares directly in an EOT, you benefit from profit sharing and have assurance that the company will continue to operate for employees' benefit.\n\nEach model has its own advantages, from tax benefits to wealth-building opportunities. The key is understanding how these structures can work for you and your colleagues.",
    cta_text: "Learn More About Employee Ownership Options",
    relevance_score: 0.95,
    technical_level: 2,
    transformation_rationale:
      "The content has been transformed to address the Employee Member persona by focusing on personal benefits and opportunities rather than technical implementation details. The language is accessible but informative, emphasizing the practical aspects of ownership that matter most to employees: wealth building, participation, and long-term benefits. The content progression allows for initial understanding while hinting at deeper information available in full view.",
    diversity_score: 0.0125,
    total_persona_stage_content: 115,
  };

  const ownerData = {
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
    <div className="min-h-screen bg-gray-50 p-8 md:p-16">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Featured</h2>

        <div
          className={`
            ${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                : "flex flex-col gap-6"
            }
          `}
        >
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard
              {...generalData}
              onClick={() => navigate("/general/1")}
              cta_text="Read More"
            />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard {...ownerData} onClick={() => navigate("/owner")} />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard {...promoData} onClick={() => navigate("/promo")} />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard {...employeeData} onClick={() => navigate("/employee")} />
          </div>
        </div>
      </div>
      <SocialProof />
    </div>
  );
};

export default HomePage;
