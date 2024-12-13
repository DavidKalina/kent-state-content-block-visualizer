import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CalloutGroup {
  price: string;
  label: string;
}

export interface SplitHeroSectionProps {
  title?: string;
  showPrice?: boolean;
  highlightedTitle?: string;
  description?: string;
  rightSideContent?: {
    heading: string;
    text: string;
    buttonText: string;
    onButtonClick?: () => void;
  };
  callout?: {
    groupA?: { price: string; label: string };
    groupB?: { price: string; label: string };
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
  };
}

const PriceCallout = ({
  groupA,
  groupB,
  buttonText,
  onButtonClick,
}: {
  groupA: CalloutGroup;
  groupB: CalloutGroup;
  buttonText: string;
  onButtonClick?: () => void;
}) => (
  <div className="space-y-8">
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="text-4xl font-bold text-blue-600">{groupA.price}</div>
        <div className="text-gray-600">{groupA.label}</div>
      </div>
      <div className="space-y-2">
        <div className="text-4xl font-bold text-blue-600">{groupB.price}</div>
        <div className="text-gray-600">{groupB.label}</div>
      </div>
    </div>
    <Button
      className="w-full gap-2 py-6 text-base bg-black hover:bg-gray-800"
      onClick={onButtonClick}
    >
      {buttonText}
      <ArrowRight className="h-5 w-5" />
    </Button>
  </div>
);

const SplitHeroSection = ({
  showPrice = false,
  title = "Transform Your Workplace",
  highlightedTitle = "Through Innovation",
  description = "One platform to educate, empower, and guide your entire organization through successful employee ownership transition — increasing engagement, retention, and shared success.",
  rightSideContent = {
    heading: "Discover More About Our Platform",
    text: "Our comprehensive solution offers cutting-edge tools and resources designed to streamline your organization's transition to employee ownership. With expert guidance and proven methodologies, we ensure a smooth and successful transformation process.",
    buttonText: "Read More",
    onButtonClick: () => {},
  },
  callout = {
    groupA: { price: "$49.99", label: "Members" },
    groupB: { price: "$69.99", label: "Non Members" },
    description:
      "Simple, transparent pricing for organizations of all sizes. Save 15% with annual billing.",
    buttonText: "Register",
    onButtonClick: () => {},
  },
}: SplitHeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {title}
              <span className="block text-blue-600">{highlightedTitle}</span>
            </h1>

            <p className="text-lg text-gray-600">{description}</p>

            {!showPrice && (
              <Button
                onClick={callout.onButtonClick}
                size="lg"
                className="mt-2 px-8 font-semibold"
                variant="default"
              >
                {callout.buttonText}
              </Button>
            )}
            {showPrice && (
              <PriceCallout
                groupA={callout.groupA!}
                groupB={callout.groupB!}
                buttonText={callout.buttonText!}
              />
            )}
          </div>

          {/* Right side - Content */}
          <Card className="p-8 space-y-6 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900">{rightSideContent.heading}</h2>
            <p className="text-lg text-gray-600 line-clamp-4">{rightSideContent.text}</p>
            <Button
              className="gap-2 bg-blue-600 hover:bg-blue-700"
              onClick={rightSideContent.onButtonClick}
            >
              {rightSideContent.buttonText}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SplitHeroSection;
