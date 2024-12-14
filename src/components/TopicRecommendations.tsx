/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface TopicRecommendationsProps {
  data: any;
  persona: string;
}

const TopicRecommendations = ({ data, persona }: TopicRecommendationsProps) => {
  // Filter by persona and sort by relevance

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">Recommended Topics</h2>
        <Badge variant="secondary" className="text-sm">
          For {persona}s
        </Badge>
      </div>

      <div className="grid gap-4">
        {data.map((item: any, index: number) => (
          <Card key={index} className="group hover:shadow-md transition-shadow duration-200">
            <CardHeader className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <Badge variant="outline" className="whitespace-nowrap">
                  Score: {(item.relevance_score * 100).toFixed(0)}%
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {item.journey_stage}
                </Badge>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  {item.cta_text}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopicRecommendations;
