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
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Carousel Section */}
        <div className="relative h-[300px]">
          <Carousel
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt={`Meeting slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent mix-blend-overlay" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{headline}</h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-lg text-gray-600 text-left">{description}</p>
        </div>

        {/* Pricing Section */}
        {pricing && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Member Pricing */}
            <div className="p-6 rounded-lg border border-blue-200 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Members</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  OEOC/NCEO
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl">${pricing.member.firstPerson}</span>
                </p>
                {pricing.member.additional ? (
                  <p className="text-gray-700">
                    <span className="font-bold text-xl">${pricing.member.additional}</span>
                    <span className="text-sm text-gray-500"> each additional person</span>
                  </p>
                ) : null}
              </div>
            </div>

            {/* Non-Member Pricing */}
            <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Non-Members</h3>
                <Badge variant="secondary" className="bg-gray-100">
                  Standard
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl">${pricing.nonMember.firstPerson}</span>
                </p>
                {pricing.member.additional ? (
                  <p className="text-gray-700">
                    <span className="font-bold text-xl">${pricing.nonMember.additional}</span>
                    <span className="text-sm text-gray-500"> each additional person</span>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-start">
          <Button size="lg" className="px-8" onClick={onClick && onClick}>
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingHero;
