import AuthModal from "@/components/AuthModal";
import Navbar from "@/components/Navbar";
import SplitHeroSection from "@/components/SplitHeroSection";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JointPage = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

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

  // const data = [
  //   {
  //     persona: "Business Owner",
  //     journey_stage: "consideration",
  //     title:
  //       "Maximize Your Business's Potential with Employee Ownership: OEOC's Comprehensive Programs",
  //     description:
  //       "Explore the Ohio Employee Ownership Center's diverse offerings designed to empower business owners considering employee ownership. From comprehensive training to insightful conferences, discover how these resources can transform your business.",
  //     optimized_content:
  //       "As a business owner, the decision to transition into an employee-owned company can be both exciting and overwhelming. The Ohio Employee Ownership Center (OEOC) is dedicated to assisting you through this transformative journey by offering a range of programs tailored to meet your needs at the consideration stage.\n\n### Why Consider Employee Ownership?\n\nEmployee ownership can provide numerous benefits, including increased employee engagement, retention, and productivity. It also offers a viable succession plan for business owners looking to secure their legacy while rewarding their employees.\n\n### OEOC's Key Offerings\n\n#### 1. **Annual Ohio Employee Ownership Conference (April)**  \nJoin one of the largest state-based employee ownership conferences to network with peers and learn from industry experts. Sessions cover crucial topics like HR, CEO, and CFO roundtables, and how to effectively transition to employee ownership.\n\n#### 2. **Certificate Program for Non-Professional ESOP Fiduciaries (October)**  \nThis intensive program equips you with essential skills and knowledge to manage an Employee Stock Ownership Plan (ESOP) effectively. Aimed at in-house fiduciaries, this program ensures you are prepared to handle the complexities of ESOPs.\n\n#### 3. **Webinar Series (Year-Round)**  \nEngage with ESOP experts through our series of webinars, covering a wide array of issues pertinent to new, maturing, and prospective ESOP companies. These sessions are ideal for gaining insights and addressing specific concerns.\n\n#### 4. **CEO/CFO and HR Roundtables (Year-Round)**  \nParticipate in open discussions with fellow business leaders to address challenges and share innovative solutions. These roundtables provide a collaborative space to explore strategic planning and communication enhancements.\n\n#### 5. **In-Company Training Services (Year-Round)**  \nTailor your employee ownership training to fit your company's unique needs. OEOC offers customizable sessions that ensure your team is well-prepared for the transition, with exclusive discounts for Member Companies.\n\nBy joining the OEOC’s Employee-Owned Network, you benefit from reduced rates on programs and gain access to an invaluable community of like-minded business leaders. Whether you're just starting to explore employee ownership or ready to dive deeper, OEOC has the resources and expertise to guide you.",
  //     cta_text: "Explore OEOC Programs",
  //     relevance_score: 0.9,
  //     technical_level: 3,
  //     transformation_rationale:
  //       "The content has been optimized to cater to business owners at the consideration stage by highlighting the practical benefits and structured programs that address their specific concerns. By focusing on the comprehensive nature of OEOC's offerings, the content emphasizes real-world applicability and expert guidance, which are crucial for decision-making. The inclusion of webinars, conferences, and roundtables provides varied formats to suit different learning preferences and needs. The technical level is set at 3 to ensure accessibility while providing sufficient depth to engage an informed audience.",
  //     diversity_score: 0.0114754098360643,
  //     total_persona_stage_content: 122,
  //   },
  //   {
  //     persona: "Business Owner",
  //     journey_stage: "consideration",
  //     title: "Preparing Your Business for Succession: Expert Insights from Industry Leaders",
  //     description:
  //       "Explore the essentials of business succession planning through insights from seasoned investment bankers. Discover how early preparation can enhance your company's performance and secure a successful transition.",
  //     optimized_content:
  //       "In the journey of entrepreneurship, planning for the future is crucial. Many business owners see succession planning as a distant concern, often putting it off due to its perceived complexity. However, understanding and preparing for this transition can significantly impact your business's current performance and long-term success.\n\nIn this episode of the Owners at Work Podcast, Chris Cooper delves into the intricacies of succession planning with Eric Zaleski and Michael Rosendahl from PCE Investment Bankers. They break down the process into two primary options: inside sale and outside sale, each offering unique pathways and implications for your business transition.\n\nEric Zaleski, with over two decades of experience in advising middle-market clients, emphasizes the benefits of employee stock ownership plans (ESOPs) as a strategic option. His insights into liquidity and growth financing initiatives highlight how ESOPs can align with your business goals, providing a structured approach to succession.\n\nMichael Rosendahl, leading PCE’s investment banking practice, shares his perspective on the critical timing of transactions. His expertise in corporate development offers a lens into making deals that serve the best interests of your business, ensuring a seamless transition.\n\nThe episode further outlines actionable steps business owners can start implementing now to prepare for succession. These proactive measures can enhance your company's operational efficiency and pave the way for a smooth transition when the time comes.",
  //     cta_text: "Listen to the Podcast",
  //     relevance_score: 0.9,
  //     technical_level: 3,
  //     transformation_rationale:
  //       "The optimization focuses on providing a clear and structured overview of the podcast's key themes, aligning with the business owner's need for actionable insights at the consideration stage. The content prioritizes expert insights, as this aligns with the persona's requirement for professional advice to make informed decisions. By highlighting the benefits of early preparation and the strategic options available, the content addresses potential concerns and motivates the persona to engage further with the resources offered, such as listening to the podcast for a deeper understanding. The technical level is set at 3 to ensure the content is accessible while still offering substantial professional insights.",
  //     diversity_score: 0.0114754098360643,
  //     total_persona_stage_content: 122,
  //   },
  // ];

  const data = {
    persona: "Employee",
    journey_stage: "awareness",
    title: "Exploring Ohio's Initiatives",
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
  };

  return (
    <>
      <AuthModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSuccess={() => {
          navigate("/employee/1");
        }}
      />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <Navbar />

        <SplitHeroSection
          rightSideContent={{
            heading: data.title,
            text: data.optimized_content,
            buttonText: "Read More",
            onButtonClick: () => {
              setShowModal(true);
            },
          }}
          title={data.title}
          highlightedTitle=""
          description=""
        />
      </div>
    </>
  );
};

export default JointPage;
