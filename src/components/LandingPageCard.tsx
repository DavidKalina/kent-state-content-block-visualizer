import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SimplifiedPersonaCardProps {
  title: string;
  description: string;
  cta_text: string;
  persona: string;
  journey_stage: string;
  onClick?: () => void;
  clamp?: number;
  className?: string;
  cardClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

const LandingPageCard = ({
  title,
  description,
  cta_text,
  onClick,
  clamp = 2,
  className,
  cardClassName,
  headerClassName,
  contentClassName,
  footerClassName,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}: SimplifiedPersonaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={className}>
      <Card
        className={cn(
          "flex flex-col min-h-[300px] transition-all duration-300 hover:shadow-lg relative overflow-hidden",
          cardClassName
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className={cn("flex-none pt-6 pb-4", headerClassName)}>
          <h3
            className={cn(
              "font-semibold text-xl leading-tight min-h-[3rem] flex items-center",
              titleClassName
            )}
          >
            {title}
          </h3>
        </CardHeader>

        <CardContent className={cn("flex-grow py-2", contentClassName)}>
          <p
            className={cn(
              "text-gray-600",
              {
                "line-clamp-1": clamp === 1,
                "line-clamp-2": clamp === 2,
                "line-clamp-3": clamp === 3,
                "line-clamp-4": clamp === 4,
                "line-clamp-5": clamp === 5,
                "line-clamp-6": clamp === 6,
              },
              descriptionClassName
            )}
          >
            {description}
          </p>
        </CardContent>

        <CardFooter className={cn("flex-none pt-4 pb-6", footerClassName)}>
          <Button
            onClick={() => onClick && onClick()}
            className={cn("w-full group", buttonClassName)}
            variant={isHovered ? "default" : "secondary"}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-8px]">
              {cta_text}
              <ArrowRight
                className={`h-4 w-4 transition-all duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LandingPageCard;
