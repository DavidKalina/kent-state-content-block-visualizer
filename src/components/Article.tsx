import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, ShareIcon, Clock, Calendar, ThumbsUp } from "lucide-react";

interface ArticleProps {
  title?: string;
  subtitle?: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate?: string;
  readTime?: string;
  content?: string;
  featuredImage?: string;
}

const Article = ({
  title = "The Future of Employee Ownership: A Comprehensive Guide",
  subtitle = "Understanding the key trends and strategies shaping workplace transformation",
  author = {
    name: "Sarah Johnson",
    avatar: "/api/placeholder/40/40",
    role: "Senior Workplace Strategist",
  },
  publishDate = "March 15, 2024",
  readTime = "8 min read",
  content = `Employee ownership is rapidly becoming one of the most significant trends in modern business structure. This comprehensive guide explores the various models, benefits, and implementation strategies that organizations can utilize to successfully transition to employee ownership.

  The concept of employee ownership has evolved significantly over the past decade, with new models emerging that offer greater flexibility and accessibility for organizations of all sizes. This transformation has been driven by a combination of factors, including:

  Recent studies have shown that companies with employee ownership structures typically experience higher productivity levels, increased employee satisfaction, and better long-term financial performance. These benefits extend beyond the immediate organizational context, contributing to broader economic stability and reduced wealth inequality.

  However, implementing an employee ownership structure requires careful planning and consideration of various factors. Organizations must navigate legal requirements, establish clear governance structures, and develop comprehensive communication strategies to ensure successful transitions.

  The future of employee ownership looks increasingly promising, with new technologies and frameworks making it easier than ever for organizations to implement these structures. As we move forward, we can expect to see continued innovation in this space, with more organizations recognizing the value of shared ownership models.`,
  featuredImage = "/api/placeholder/1200/600",
}: ArticleProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-96 relative bg-black">
        <img src={featuredImage} alt={title} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-sm text-gray-500">{author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <BookmarkIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {publishDate}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {readTime}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer */}
        <Separator className="my-8" />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              Helpful
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <BookmarkIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ShareIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="p-4">
                <img
                  src="/api/placeholder/400/200"
                  alt="Related article thumbnail"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">Employee Ownership Success Stories</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how companies have successfully implemented employee ownership models...
                </p>
                <Button variant="link" className="p-0">
                  Read More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
