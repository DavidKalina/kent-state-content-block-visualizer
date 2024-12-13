import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Briefcase, Building2, LineChart } from "lucide-react";

const HeroSection = () => {
  // Array of image sources - replace with your actual image imports
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Unified benefit statement */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Unlock the Full Value of
                <span className="block text-blue-600">Employee Ownership</span>
              </h1>

              <p className="max-w-2xl text-lg md:text-xl text-gray-600">
                Employee ownership is key to any organization's overall success and long-term
                growth. See how employee ownership not only increases engagement it also increases
                retention leading to increased production and lower costs due to less turnover.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors duration-300">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Saves & Creates New Jobs</h3>
                  {/* <p className="text-sm text-gray-600">
                    Strengthen job security and create new opportunities for growth within the
                    organization.
                  </p> */}
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors duration-300">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Increase Worker Engagement</h3>
                  {/* <p className="text-sm text-gray-600">
                    Boost productivity and satisfaction through meaningful employee participation.
                  </p> */}
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors duration-300">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Regional Economic Impact</h3>
                  {/* <p className="text-sm text-gray-600">
                    Drive local economic development through sustainable business practices.
                  </p> */}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/general/1">
                <Button size="lg" className="gap-2">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div> */}
          </div>

          {/* Carousel Column */}
          <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
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
                    <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden">
                      <img
                        src={src}
                        alt={`Employee ownership slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent mix-blend-overlay" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
