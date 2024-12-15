import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, Calendar, Clock, ShareIcon, ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useSearchParams, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface ArticleProps {
  defaultTitle?: string;
  defaultSubtitle?: string;
  defaultAuthor?: {
    name: string;
    avatar: string;
    role: string;
  };
  defaultPublishDate?: string;
  defaultReadTime?: string;
  defaultContent?: string;
  defaultFeaturedImage?: string;
}

const Article = ({
  defaultTitle = "The Future of Employee Ownership: A Comprehensive Guide",
  defaultSubtitle = "Understanding the key trends and strategies shaping workplace transformation",
  defaultAuthor = {
    name: "Sarah Johnson",
    avatar: "/api/placeholder/40/40",
    role: "Senior Workplace Strategist",
  },
  defaultPublishDate = "March 15, 2024",
  defaultReadTime = "8 min read",
  defaultContent = `Employee ownership is rapidly becoming...`,
  defaultFeaturedImage = "/api/placeholder/1200/600",
}: ArticleProps) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { title: urlTitle } = useParams();

  const title = urlTitle ? decodeURIComponent(urlTitle) : defaultTitle;
  const description = searchParams.get("description") || defaultContent;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-96 relative bg-black">
        <img
          src={defaultFeaturedImage}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl opacity-90">{defaultSubtitle}</p>
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
                <AvatarImage src={defaultAuthor.avatar} alt={defaultAuthor.name} />
                <AvatarFallback>{defaultAuthor.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{defaultAuthor.name}</p>
                <p className="text-sm text-gray-500">{defaultAuthor.role}</p>
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
              {defaultPublishDate}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {defaultReadTime}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Article Body with Markdown Rendering */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Customize heading styles
              h4: ({ ...props }) => <h4 className="text-xl font-semibold mb-4 mt-6" {...props} />,
              // Style paragraphs
              p: ({ ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
              // Style lists
              ul: ({ ...props }) => <ul className="space-y-6 list-disc pl-4" {...props} />,
              // Style list items
              li: ({ ...props }) => <li className="pl-2" {...props} />,
              // Style strong text (bold)
              strong: ({ ...props }) => (
                <strong className="font-semibold text-gray-900" {...props} />
              ),
              // Style paragraphs within list items
              // Style bold text
            }}
          >
            {description}
          </ReactMarkdown>
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
      </div>
    </div>
  );
};

export default Article;
