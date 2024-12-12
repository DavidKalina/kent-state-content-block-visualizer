import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  cta_text: string;
  persona?: string;
  journey_stage?: string;
  onClick?: () => void;
}

const ArticleCard = ({
  title,
  description = "", // Provide default empty string
  cta_text,
  onClick,
}: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure description is a string and split into paragraphs
  const paragraphs = (description || "").split("\n").filter((p) => p.trim());
  const previewParagraphs = paragraphs.slice(0, 2);
  const remainingParagraphs = paragraphs.slice(2);
  const hasMoreContent = paragraphs.length > 2;

  return (
    <Card
      className={`flex flex-col transition-all duration-300 hover:shadow-lg relative overflow-hidden ${
        isExpanded ? "h-auto" : "h-[400px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex-none">
        <h3 className="font-semibold text-xl leading-tight">{title || "Untitled"}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-4">
          {previewParagraphs.length > 0 ? (
            previewParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-600">No content available</p>
          )}

          {isExpanded &&
            remainingParagraphs.map((paragraph, index) => (
              <p key={`expanded-${index}`} className="text-gray-600">
                {paragraph}
              </p>
            ))}
        </div>

        {hasMoreContent && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="flex items-center gap-2">
              {isExpanded ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show more
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </span>
          </Button>
        )}
      </CardContent>

      <CardFooter className="flex-none pt-4">
        <Button
          onClick={() => onClick && onClick()}
          className="w-full group"
          variant={isHovered ? "default" : "secondary"}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-8px]">
            {cta_text || "Read More"}
            <ArrowRight
              className={`h-4 w-4 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
