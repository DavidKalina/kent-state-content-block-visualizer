/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TopicRecommendationsProps {
  data: any;
  showBadge?: boolean;
  persona: string;
}

interface TopicCardProps {
  title: string;
  description: string;
  optimized_content: string;
}

const TopicCard = ({ title, description, optimized_content }: TopicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Encode the parameters for URL safety
  const urlParams = new URLSearchParams({
    title: title,
    description: optimized_content,
  }).toString();

  return (
    <Card className="group hover:shadow-md transition-shadow duration-200">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-md">{title}</CardTitle>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <Link to={`/article/${encodeURIComponent(title)}?${urlParams}`}>
          <Button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full group"
            variant={isHovered ? "default" : "secondary"}
          >
            <span className="text-xs relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-8px]">
              Read More
              <ArrowRight
                className={`h-4 w-4 transition-all duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const TopicRecommendations = ({ data, persona, showBadge = true }: TopicRecommendationsProps) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <h2 className="text-lg font-semibold">Recommended Topics</h2>
        {showBadge && (
          <Badge variant="secondary" className="text-xs">
            For {persona}s
          </Badge>
        )}
      </div>

      <div className="grid gap-2 md:max-h-[340px] flex-1 overflow-y-auto">
        {data.map((item: any, index: number) => (
          <TopicCard
            key={index}
            description={item.description}
            optimized_content={item.optimized_content}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicRecommendations;
