import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Book, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

interface SimplifiedPersonaCardProps {
  title: string;
  description: string;
  cta_text: string;
  persona: string;
  journey_stage: string;
}

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

const LandingPageCard = ({
  title,
  description,
  cta_text,
  persona,
  journey_stage,
}: SimplifiedPersonaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-[350px] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
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

export default LandingPageCard;
