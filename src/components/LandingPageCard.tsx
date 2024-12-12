import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SimplifiedPersonaCardProps {
  title: string;
  description: string;
  cta_text: string;
  persona: string;
  journey_stage: string;
  onClick?: () => void;
}

const LandingPageCard = ({ title, description, cta_text, onClick }: SimplifiedPersonaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-[300px] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex-none">
        <h3 className="font-semibold text-xl leading-tight line-clamp-2">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="flex-none pt-4">
        <Button
          onClick={() => onClick && onClick()}
          className="w-full group"
          variant={isHovered ? "default" : "secondary"}
        >
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
