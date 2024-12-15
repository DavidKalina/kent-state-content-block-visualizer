import LevelTwoComponent from "@/components/LevelTwoComponent";
import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import topicData from "@/data/results.json";
import { useNavigate } from "react-router-dom";

const data = {
  persona: "Business Owner",
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

const EmployeeOwnerLevelTwoPage = () => {
  const navigate = useNavigate();
  return (
    <LevelTwoComponent
      heroCtaClick={() => navigate("/conference-registration")}
      heroImages={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
      heroHeadline={"National Employee Owner Summit 2025"}
      heroDescription="Transform your ESOP journey through hands-on learning and peer connection. Join 40 fellow employee-owners for an intensive two-day experience featuring interactive simulations, financial literacy training, and ownership culture building."
      heroCtaText={"Register Now"}
      heroPricing={{
        member: {
          type: "member",
          firstPerson: 795,
          additional: 650,
        },
        nonMember: {
          type: "non-member",
          firstPerson: 1050,
          additional: 900,
        },
      }}
      mainContent={data}
      topicData={topicData}
      persona={"Business Owner"}
    />
  );
};

export default EmployeeOwnerLevelTwoPage;
