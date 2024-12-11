import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PriceCallout = ({ groupA, groupB, buttonText, onButtonClick }: any) => (
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
  images = [],
  title = "Transform Your Workplace",
  highlightedTitle = "Through Innovation",
  description = "One platform to educate, empower, and guide your entire organization through successful employee ownership transition — increasing engagement, retention, and shared success.",
  callout = {
    groupA: { price: "$49.99", label: "Members" },
    groupB: { price: "$69.99", label: "Non Members" },
    description:
      "Simple, transparent pricing for organizations of all sizes. Save 15% with annual billing.",
    buttonText: "Register",
    onButtonClick: () => {},
  },
}) => {
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="flex flex-col space-y-8 justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                {title}
                <span className="block text-blue-600">{highlightedTitle}</span>
              </h1>

              <p className="text-lg text-gray-600">{description}</p>
            </div>

            <PriceCallout {...callout} />
          </div>

          {/* Right side - Image or Carousel */}
          <div className="w-full h-full">
            {hasMultipleImages ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden border-0 shadow-lg">
                        <div className="aspect-square relative">
                          <img
                            src={image || "/api/placeholder/800/800"}
                            alt={`Slide ${index + 1}`}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-square relative">
                  <img
                    src={Array.isArray(images) ? images[0] : images || "/api/placeholder/800/800"}
                    alt="Hero"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitHeroSection;
