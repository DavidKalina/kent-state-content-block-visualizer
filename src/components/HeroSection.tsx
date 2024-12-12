import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="mb-4">
            <Users className="h-3 w-3 mr-1" />
            <span>Built for Every Employee</span>
          </Badge>

          {/* Unified benefit statement */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Transform Your Workplace Through
              <span className="block text-blue-600">Employee Ownership</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600">
              One platform to educate, empower, and guide your entire organization through
              successful employee ownership transition — increasing engagement, retention, and
              shared success.
            </p>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-8">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Simplified Learning</h3>
              <p className="text-sm text-gray-600">Curated resources for every knowledge level</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Guided Journey</h3>
              <p className="text-sm text-gray-600">Step-by-step transition support</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Measurable Impact</h3>
              <p className="text-sm text-gray-600">Track progress and engagement</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="gap-2">
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
