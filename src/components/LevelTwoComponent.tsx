/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/hooks/useAuth";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";
import LandingPageCard from "./LandingPageCard";
import MeetingHero from "./MeetingHero";
import TopicRecommendations from "./TopicRecommendations";
import FourPanelGrid from "./EqualGrid";

interface PricingTier {
  type: "member" | "non-member";
  firstPerson: number;
  additional?: number;
}

interface ContentData {
  persona: string;
  journey_stage: string;
  title: string;
  description: string;
  optimized_content: string;
  cta_text: string;
  relevance_score: number;
  technical_level: number;
  transformation_rationale: string;
  diversity_score: number;
  total_persona_stage_content: number;
}

interface LevelTwoComponentProps {
  showBadge?: boolean;
  heroImages: string[];
  heroHeadline: string;
  heroDescription: string;
  heroCtaText: string;
  heroPricing: {
    member: PricingTier;
    nonMember: PricingTier;
  };
  heroCtaClick?: () => void;
  mainContent: ContentData;
  topicData: any[]; // Replace 'any' with proper type if available
  persona: string;
}

const LevelTwoComponent = ({
  heroImages,
  heroHeadline,
  heroDescription,
  heroCtaText,
  heroPricing,
  mainContent,
  topicData,
  heroCtaClick,
  showBadge = true,
  persona,
}: LevelTwoComponentProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [pendingRedirect, setPendingRedirect] = useState<string | null>(null);

  const orderedTopicData = useMemo(
    () =>
      topicData
        .filter((item) => item.persona === persona)
        .sort((a, b) => b.relevance_score - a.relevance_score)
        .slice(3, 6),
    [topicData, persona]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, secondaryData] = useMemo(
    () =>
      topicData
        .filter((item) => item.persona === persona)
        .sort((a, b) => b.relevance_score - a.relevance_score),
    [persona, topicData]
  );

  useScrollToTop();

  const handleArticleClick = (content: ContentData) => {
    const targetUrl = `/article/${content.title}?title=${content.title}&description=${content.optimized_content}`;

    if (!isAuthenticated) {
      setPendingRedirect(targetUrl);
      setShowModal(true);
    } else {
      navigate(targetUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <FourPanelGrid>
        <MeetingHero
          onClick={heroCtaClick}
          images={heroImages}
          headline={heroHeadline}
          description={heroDescription}
          ctaText={heroCtaText}
          pricing={heroPricing}
        />
        <LandingPageCard
          {...mainContent}
          onClick={() => handleArticleClick(mainContent)}
          clamp={6}
          className="h-full"
          cardClassName="h-full"
          titleClassName="text-md"
          contentClassName="text-base"
          description={mainContent.optimized_content}
          cta_text="Read More"
        />
        {isAuthenticated && (
          <TopicRecommendations showBadge={showBadge} data={orderedTopicData} persona={persona} />
        )}
        <LandingPageCard
          {...secondaryData}
          description={secondaryData.optimized_content}
          cta_text="Read More"
          clamp={5}
          onClick={() => handleArticleClick(secondaryData)}
          className="h-full"
          titleClassName="text-md"
          contentClassName="text-base"
          buttonClassName="text-sm"
          cardClassName="h-full"
        />
      </FourPanelGrid>
      <AuthModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setPendingRedirect(null);
        }}
        onSuccess={() => {
          setShowModal(false);
          if (pendingRedirect) {
            navigate(pendingRedirect);
            setPendingRedirect(null);
          }
        }}
      />
    </div>
  );
};

export default LevelTwoComponent;
