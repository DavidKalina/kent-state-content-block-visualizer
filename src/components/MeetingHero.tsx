import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface MeetingHeroProps {
  images: string[];
  description: string;
  headline: string;
  ctaText: string;
}

const MeetingHero = ({
  images,
  headline,
  description,
  ctaText = "Register Now",
}: MeetingHeroProps) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {headline}
          </h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-lg text-gray-600 text-left">{description}</p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <Button size="lg" className="px-8">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingHero;
