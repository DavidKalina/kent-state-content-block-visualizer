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

const JointPage = () => {
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
      persona: "Business Owner",
      journey_stage: "consideration",
      title:
        "Maximize Your Business's Potential with Employee Ownership: OEOC's Comprehensive Programs",
      description:
        "Explore the Ohio Employee Ownership Center's diverse offerings designed to empower business owners considering employee ownership. From comprehensive training to insightful conferences, discover how these resources can transform your business.",
      optimized_content:
        "As a business owner, the decision to transition into an employee-owned company can be both exciting and overwhelming. The Ohio Employee Ownership Center (OEOC) is dedicated to assisting you through this transformative journey by offering a range of programs tailored to meet your needs at the consideration stage.\n\n### Why Consider Employee Ownership?\n\nEmployee ownership can provide numerous benefits, including increased employee engagement, retention, and productivity. It also offers a viable succession plan for business owners looking to secure their legacy while rewarding their employees.\n\n### OEOC's Key Offerings\n\n#### 1. **Annual Ohio Employee Ownership Conference (April)**  \nJoin one of the largest state-based employee ownership conferences to network with peers and learn from industry experts. Sessions cover crucial topics like HR, CEO, and CFO roundtables, and how to effectively transition to employee ownership.\n\n#### 2. **Certificate Program for Non-Professional ESOP Fiduciaries (October)**  \nThis intensive program equips you with essential skills and knowledge to manage an Employee Stock Ownership Plan (ESOP) effectively. Aimed at in-house fiduciaries, this program ensures you are prepared to handle the complexities of ESOPs.\n\n#### 3. **Webinar Series (Year-Round)**  \nEngage with ESOP experts through our series of webinars, covering a wide array of issues pertinent to new, maturing, and prospective ESOP companies. These sessions are ideal for gaining insights and addressing specific concerns.\n\n#### 4. **CEO/CFO and HR Roundtables (Year-Round)**  \nParticipate in open discussions with fellow business leaders to address challenges and share innovative solutions. These roundtables provide a collaborative space to explore strategic planning and communication enhancements.\n\n#### 5. **In-Company Training Services (Year-Round)**  \nTailor your employee ownership training to fit your company's unique needs. OEOC offers customizable sessions that ensure your team is well-prepared for the transition, with exclusive discounts for Member Companies.\n\nBy joining the OEOC’s Employee-Owned Network, you benefit from reduced rates on programs and gain access to an invaluable community of like-minded business leaders. Whether you're just starting to explore employee ownership or ready to dive deeper, OEOC has the resources and expertise to guide you.",
      cta_text: "Explore OEOC Programs",
      relevance_score: 0.9,
      technical_level: 3,
      transformation_rationale:
        "The content has been optimized to cater to business owners at the consideration stage by highlighting the practical benefits and structured programs that address their specific concerns. By focusing on the comprehensive nature of OEOC's offerings, the content emphasizes real-world applicability and expert guidance, which are crucial for decision-making. The inclusion of webinars, conferences, and roundtables provides varied formats to suit different learning preferences and needs. The technical level is set at 3 to ensure accessibility while providing sufficient depth to engage an informed audience.",
      diversity_score: 0.0114754098360643,
      total_persona_stage_content: 122,
    },
    {
      persona: "Business Owner",
      journey_stage: "consideration",
      title: "Preparing Your Business for Succession: Expert Insights from Industry Leaders",
      description:
        "Explore the essentials of business succession planning through insights from seasoned investment bankers. Discover how early preparation can enhance your company's performance and secure a successful transition.",
      optimized_content:
        "In the journey of entrepreneurship, planning for the future is crucial. Many business owners see succession planning as a distant concern, often putting it off due to its perceived complexity. However, understanding and preparing for this transition can significantly impact your business's current performance and long-term success.\n\nIn this episode of the Owners at Work Podcast, Chris Cooper delves into the intricacies of succession planning with Eric Zaleski and Michael Rosendahl from PCE Investment Bankers. They break down the process into two primary options: inside sale and outside sale, each offering unique pathways and implications for your business transition.\n\nEric Zaleski, with over two decades of experience in advising middle-market clients, emphasizes the benefits of employee stock ownership plans (ESOPs) as a strategic option. His insights into liquidity and growth financing initiatives highlight how ESOPs can align with your business goals, providing a structured approach to succession.\n\nMichael Rosendahl, leading PCE’s investment banking practice, shares his perspective on the critical timing of transactions. His expertise in corporate development offers a lens into making deals that serve the best interests of your business, ensuring a seamless transition.\n\nThe episode further outlines actionable steps business owners can start implementing now to prepare for succession. These proactive measures can enhance your company's operational efficiency and pave the way for a smooth transition when the time comes.",
      cta_text: "Listen to the Podcast",
      relevance_score: 0.9,
      technical_level: 3,
      transformation_rationale:
        "The optimization focuses on providing a clear and structured overview of the podcast's key themes, aligning with the business owner's need for actionable insights at the consideration stage. The content prioritizes expert insights, as this aligns with the persona's requirement for professional advice to make informed decisions. By highlighting the benefits of early preparation and the strategic options available, the content addresses potential concerns and motivates the persona to engage further with the resources offered, such as listening to the podcast for a deeper understanding. The technical level is set at 3 to ensure the content is accessible while still offering substantial professional insights.",
      diversity_score: 0.0114754098360643,
      total_persona_stage_content: 122,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Navbar />
      <SplitHeroSection
        images={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
        title="2024 Ohio Employee Owner Retreat: Empowering Educators in Employee Ownership"
        highlightedTitle=""
        description="The 2024 Ohio Employee Owner Retreat offers a distinctive opportunity for educators and non-managerial employees to engage deeply with the principles of employee ownership. Hosted by the Ohio Employee Ownership Center, this two-day retreat is crafted to enhance understanding and leadership capabilities among ESOP participants"
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
              <ArticleCard {...content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JointPage;
