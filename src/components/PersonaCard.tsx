import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ArrowRight, Book, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

// Helper function to get icon by persona
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

// Technical level badge component
const TechnicalLevelBadge = ({ level }: { level: number }) => {
  const levels = Array(5).fill(0);
  return (
    <div className="flex items-center gap-1">
      {levels.map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i < level ? "bg-blue-600" : "bg-gray-200"}`}
        />
      ))}
    </div>
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
}

const PersonaContentCard = ({
  title,
  description,
  cta_text,
  persona,
  journey_stage,
  technical_level,
  relevance_score,
}: PersonaContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-[400px] transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex-none">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {getPersonaIcon(persona)}
            <span className="text-sm font-medium text-gray-500">{persona}</span>
          </div>
          <Badge
            variant="secondary"
            className={`${getJourneyStageColor(journey_stage)} text-xs capitalize`}
          >
            {journey_stage}
          </Badge>
        </div>
        <h3 className="font-semibold text-xl leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <TechnicalLevelBadge level={technical_level} />
          <span className="text-xs text-gray-500">
            Relevance: {Math.round(relevance_score * 100)}%
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-4">{description}</p>
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
