import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";

interface PricingTier {
  type: "member" | "non-member";
  firstPerson: number;
  additional?: number;
}

interface MeetingHeroProps {
  onClick?: () => void;
  images: string[];
  description: string;
  headline: string;
  ctaText: string;
  pricing?: {
    member: PricingTier;
    nonMember: PricingTier;
  };
}

const MeetingHero = ({
  images,
  headline,
  description,
  ctaText = "Register Now",
  pricing,
  onClick,
}: MeetingHeroProps) => {
  return (
    <div className="rounded-lg p-6 h-full relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 rounded-lg" />

      <div className="relative w-full mx-auto space-y-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carousel Section */}
          <div className="w-full md:h-[180px]">
            <Carousel
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="h-full">
                {images.map((src, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`Meeting slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">{headline}</h2>
            <p className="text-base text-gray-600 line-clamp-6">{description}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Pricing Section */}
          {pricing && (
            <div className="flex gap-4 flex-1">
              {/* Member Pricing */}
              <div className="flex-1 p-2.5 rounded-lg border border-blue-200 bg-blue-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Members</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-[10px]">
                    OEOC/NCEO
                  </Badge>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">
                    <span className="text-lg font-bold">${pricing.member.firstPerson}</span>
                  </p>
                  {pricing.member.additional && (
                    <p className="text-gray-700">
                      <span className="font-bold">${pricing.member.additional}</span>
                      <span className="text-xs text-gray-500"> each additional person</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Non-Member Pricing */}
              <div className="flex-1 p-2.5 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Non-Members</h3>
                  <Badge variant="secondary" className="bg-gray-100 text-[10px]">
                    Standard
                  </Badge>
                </div>
                <div className="mt-1">
                  <p className="text-gray-700">
                    <span className="text-lg font-bold">${pricing.nonMember.firstPerson}</span>
                  </p>
                  {pricing.nonMember.additional && (
                    <p className="text-gray-700">
                      <span className="font-bold">${pricing.nonMember.additional}</span>
                      <span className="text-xs text-gray-500"> each additional person</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-end mt-auto">
            <Button onClick={onClick} className="px-6 whitespace-nowrap">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingHero;
