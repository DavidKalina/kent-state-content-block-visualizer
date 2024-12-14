/* eslint-disable @typescript-eslint/no-explicit-any */
import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import topicData from "@/data/results.json";
import { useAuth } from "@/hooks/useAuth";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";
import LandingPageCard from "./LandingPageCard";
import MeetingHero from "./MeetingHero";
import TopicRecommendations from "./TopicRecommendations";

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

const LevelTwoLayout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const orderedTopicData = useMemo(
    () =>
      topicData
        .filter((item: any) => item.persona === "Business Owner")
        .sort((a: any, b: any) => b.relevance_score - a.relevance_score)
        .slice(1, 4),
    []
  );
  useScrollToTop();
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8 md:p-16">
        <div className="mx-auto max-w-7xl space-y-24">
          <div className="flex">
            <div className="flex-1">
              <MeetingHero
                headline="Build Lasting Value Together!"
                images={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
                description={
                  "Take an active role in shaping your company's future through our specialized training programs and employee-owner network. Join fellow owners in building stronger businesses through shared knowledge and proven strategies."
                }
                ctaText={"Register Now"}
              />
            </div>
            <div className="flex-1">
              <LandingPageCard
                {...data}
                onClick={() => {
                  if (!isAuthenticated) {
                    setShowModal(true);
                  } else {
                    navigate("/owner/1");
                  }
                }}
                clamp={6}
                description={data.optimized_content}
                cta_text="Read More"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-1">
              {isAuthenticated && (
                <TopicRecommendations data={orderedTopicData} persona="Business Owner" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">More Content</h2>
              <LandingPageCard {...data} />
            </div>
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSuccess={() => {
          setShowModal(false);
          navigate("/owner/1");
        }}
      />
    </>
  );
};

export default LevelTwoLayout;
