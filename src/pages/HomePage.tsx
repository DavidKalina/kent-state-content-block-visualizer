import HeroSection from "@/components/HeroSection";
import LandingCard from "@/components/LandingPageCard";
import SocialProof from "@/components/SocialProof";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "@/data/resultsTwo.json";

export const personaColors = {
  Employee: "bg-gradient-to-r from-[#fffcf7] via-[#fffbf2] to-[#fffcf7]", // Very subtle warm
  "Business Owner": "bg-gradient-to-r from-[#f7fcff] via-[#f2faff] to-[#f7fcff]", // Very subtle cool
  "Employee Owner Member": "bg-gradient-to-r from-[#f7fcff] via-[#f2faff] to-[#f7fcff]", // Very subtle cool
  Promo: "bg-gradient-to-r from-[#fcf7ff] via-[#f9f2ff] to-[#fcf7ff]", // Very subtle purple
  General: "bg-gradient-to-r from-[#f7fffa] via-[#f2fff7] to-[#f7fffa]", // Very subtle mint
};

export const getRankedContent = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  startRank = 1,
  persona: string | null = null,
  count?: number
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results = data.map((item: any) => item.result);

  // Filter by persona if specified
  const filteredResults = persona
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      results.filter((item: any) => item.persona === persona)
    : results;

  // Sort by relevance score in descending order
  const sortedContent = [...filteredResults].sort((a, b) => b.relevance_score - a.relevance_score);

  // Adjust rank to 0-based index
  const adjustedStart = Math.min(startRank - 1, sortedContent.length - 1);

  // If count is specified, return a slice of items
  if (count !== undefined) {
    return sortedContent.slice(adjustedStart, adjustedStart + count);
  }

  // Otherwise return single item at rank (original behavior)
  return sortedContent[adjustedStart] || null;
};

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

  const ownerData = useMemo(() => getRankedContent(data, 1, "Employee Owner Member"), []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16">
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
              cardClassName={personaColors["General"]}
              {...generalData}
              onClick={() =>
                navigate(
                  `/article/${generalData.title}?title=${generalData.title}&description=${generalData.optimized_content}`
                )
              }
              cta_text="Read More"
            />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard
              cardClassName={personaColors["Business Owner"]}
              {...ownerData}
              description={ownerData.optimized_content}
              cta_text="Read More"
              onClick={() => navigate("/owner")}
            />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard
              cardClassName={personaColors["Promo"]}
              {...promoData}
              onClick={() => navigate("/promo")}
              cta_text="Read More"
            />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <LandingCard
              cardClassName={personaColors["Employee"]}
              {...getRankedContent(data, 1, "Employee")}
              cta_text="Read More"
              onClick={() => navigate("/employee")}
            />
          </div>
        </div>
      </div>
      <SocialProof />
    </div>
  );
};

export default HomePage;
