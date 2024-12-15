import LevelTwoComponent from "@/components/LevelTwoComponent";
import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import topicData from "@/data/promoData.json";
import { useNavigate } from "react-router-dom";

const data = {
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

const PromoLevelTwoPage = () => {
  const navigate = useNavigate();
  return (
    <LevelTwoComponent
      heroCtaClick={() => navigate("/network-signup")}
      heroImages={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
      heroHeadline="39th Annual Ohio Employee Ownership Conference 2025"
      heroDescription="Join Ohio's largest gathering of employee-owners and business leaders for a transformative day of learning and connection. Experience 20+ expert-led sessions, interactive workshops, and meaningful networking opportunities designed to strengthen your ownership journey."
      heroCtaText="Register Now"
      heroPricing={{
        member: {
          type: "member",
          firstPerson: 49.99,
        },
        nonMember: {
          type: "non-member",
          firstPerson: 69.99,
        },
      }}
      mainContent={data}
      showBadge={false}
      topicData={topicData}
      persona="Promo"
    />
  );
};

export default PromoLevelTwoPage;
