import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Book, Briefcase, GraduationCap, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Helper functions remain the same
const getPersonaIcon = (persona: string) => {
  switch (persona) {
    case "Business Owner":
      return <Briefcase className="h-4 w-4" />;
    case "Employee":
      return <Book className="h-4 w-4" />;
    case "Educator":
      return <GraduationCap className="h-4 w-4" />;
    default:
      return <Book className="h-4 w-4" />;
  }
};

const getJourneyStageColor = (stage: string) => {
  switch (stage.toLowerCase()) {
    case "awareness":
      return "bg-blue-100 text-blue-800";
    case "consideration":
      return "bg-purple-100 text-purple-800";
    case "decision":
      return "bg-green-100 text-green-800";
    case "adoption":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Enhanced technical level component with tooltip
const TechnicalLevelIndicator = ({ level }: { level: number }) => {
  const levels = ["Basic", "Intermediate", "Advanced", "Technical", "Expert"];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    i < level ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              ))}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Technical Level: {levels[level - 1]}</p>
          <p className="text-xs text-gray-400">({level}/5)</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface PersonaContentCardProps {
  title: string;
  description: string;
  cta_text: string;
  persona: string;
  journey_stage: string;
  technical_level: number;
  relevance_score: number;
  diversity_score: number;
  transformation_rationale?: string;
  optimized_content: string;
  total_persona_stage_content: number;
}

const PersonaContentCard = ({
  title,
  description,
  cta_text,
  persona,
  journey_stage,
  technical_level,
  relevance_score,
  diversity_score,
  transformation_rationale,
  // optimized_content,
  total_persona_stage_content,
}: PersonaContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-[400px] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Diversity score indicator */}
      <div
        className="absolute top-0 right-0 w-16 h-16 -translate-y-8 translate-x-8 rotate-45"
        style={{
          background: `linear-gradient(to bottom right, 
            ${diversity_score > 0.7 ? "rgb(59, 130, 246)" : "rgb(156, 163, 175)"} 0%,
            transparent 70%)`,
        }}
      />

      <CardHeader className="flex-none">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {getPersonaIcon(persona)}
            <span className="text-sm font-medium text-gray-500">{persona}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className={`${getJourneyStageColor(journey_stage)} text-xs capitalize`}
            >
              {journey_stage}
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="text-xs">
                    {total_persona_stage_content} available
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total content pieces for this persona and stage</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <h3 className="font-semibold text-xl leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <TechnicalLevelIndicator level={technical_level} />
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {Math.round(relevance_score * 100)}% relevant
            </span>
            {transformation_rationale && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{transformation_rationale}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-6">{description}</p>
      </CardContent>

      <CardFooter className="flex-none pt-4">
        <Button className="w-full group" variant={isHovered ? "default" : "secondary"}>
          <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-8px]">
            {cta_text}
            <ArrowRight
              className={`h-4 w-4 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PersonaContentCard;
