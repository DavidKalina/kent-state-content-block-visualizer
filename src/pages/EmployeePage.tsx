import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import SplitHeroSection from "@/components/SplitHeroSection";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EmployeePage = () => {
  const [viewMode] = useState<"grid" | "list">("grid");

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Alternative without smooth scrolling:
    // window.scrollTo(0, 0);
  }, [pathname]);

  const data = [
    {
      persona: "Employee",
      journey_stage: "awareness",
      title: "Introduction to Employee Ownership: Exploring the Benefits and Opportunities",
      description:
        "Discover the basics of employee ownership and how it can transform your workplace. Learn about the benefits, success stories, and the potential impact on your career and company culture.",
      optimized_content:
        "Employee ownership is a powerful concept that can reshape the dynamics of a workplace. At its core, employee ownership involves employees acquiring an ownership stake in the company they work for. This model not only aligns the interests of employees and employers but also fosters a culture of shared responsibility and motivation.\n\nImagine working in an environment where your contributions directly impact your share of the company's success. This is the reality for many employee-owned businesses. Studies have shown that such companies often experience higher productivity, improved job satisfaction, and greater resilience in economic downturns.\n\nA compelling example of this is Hamill Manufacturing, a company that transitioned from family-owned to employee-owned. Jeff Kelly, the former CEO, chose to sell the company to its employees, valuing legacy and loyalty. This shift not only preserved the company's ethos but also empowered employees to take ownership of their work and future.\n\nUnderstanding the fundamentals of employee ownership can open up new possibilities for your career and your organization. Whether you're an employee, a business owner, or someone interested in innovative business models, exploring employee ownership might be the key to unlocking untapped potential.",
      cta_text: "Explore Employee Ownership",
      relevance_score: 0.9,
      technical_level: 3,
      transformation_rationale:
        "The content has been optimized for employees at the awareness stage of their journey. The title and description are crafted to pique curiosity and provide a clear overview of what employee ownership entails. The content is structured to be informative yet engaging, using relatable examples like Hamill Manufacturing to illustrate the concept's impact. The language is kept simple to ensure accessibility, given the technical level of 2, suitable for individuals with little to no prior knowledge of employee ownership. The call-to-action encourages further exploration, aligning with the goal of increasing awareness.",
      diversity_score: 0.185245901639343,
      total_persona_stage_content: 122,
    },
    {
      persona: "Employee",
      journey_stage: "awareness",
      title: "Introduction to Employee Ownership: Exploring Ohio's Initiatives",
      description:
        "Discover the basics of employee ownership and how Ohio is leading the way with innovative programs and events designed to enhance employee engagement and business success.",
      optimized_content:
        "Employee ownership is an empowering business model where employees hold significant ownership stakes in the companies they work for. This structure fosters a sense of responsibility and motivation, contributing to a thriving workplace culture and business growth.\n\nIn Ohio, the Ohio Employee Ownership Center (OEOC) serves as a pivotal resource, offering a wealth of programs, events, and training to promote and support employee ownership. The OEOC's annual conference is a key event that brings together industry experts, business leaders, and employees to explore the latest trends and strategies in employee ownership.\n\nThe OEOC provides various resources, including:\n- **Employee Ownership 101**: A foundational guide for understanding the basics of employee ownership.\n- **Succession Planning**: Helping businesses transition to employee ownership smoothly.\n- **Networking Events**: Opportunities for employees and business leaders to connect and share insights.\n\nBy engaging with these programs, employees can gain a deeper understanding of their roles as business owners, leading to enhanced job satisfaction and organizational success. Whether you're new to the concept or looking to expand your knowledge, the OEOC offers tools and guidance tailored to your needs.",
      cta_text: "Explore Programs",
      relevance_score: 0.8,
      technical_level: 3,
      transformation_rationale:
        "The content has been optimized to cater to employees at the awareness stage of their journey. The simplified overview of employee ownership concepts helps introduce the idea to those unfamiliar with it. By highlighting Ohio's initiatives, the content aligns with regional interests, making it more relevant to the target audience. The structured format, focusing on key offerings from the OEOC, provides clear, digestible information, supporting the suggestion to use guide formats. The technical level is set at 2, ensuring accessibility for employees without prior technical knowledge. The CTA encourages further exploration, aligning with the goal of increasing awareness and engagement.",
      diversity_score: 0.0852459016393429,
      total_persona_stage_content: 122,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Navbar />
      <SplitHeroSection
        images={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
        title="2024 Ohio Employee Ownership Conference"
        highlightedTitle=""
        description="Explore the benefits and implementation strategies of employee ownership models in educational settings. This guide is tailored for educators looking to adopt these innovative approaches to enhance school management and culture."
      />
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Articles</h2>
        <div
          className={`
      ${
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          : "flex flex-col gap-6"
      }
    `}
        >
          {data.map((content) => (
            <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
              <ArticleCard {...content} cta_text="Read More" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
