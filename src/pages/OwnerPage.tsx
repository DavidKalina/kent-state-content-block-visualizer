import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import SplitHeroSection from "@/components/SplitHeroSection";
import { useState } from "react";

const JointPage = () => {
  const [viewMode] = useState<"grid" | "list">("grid");

  const generalData = {
    persona: "Employee",
    journey_stage: "awareness",
    title: "Understanding Employee Ownership: A Guide for Ohio Workers",
    description:
      "Discover the essentials of employee ownership and how it can benefit you and your workplace. This guide is designed to introduce Ohio employees to the concept of employee ownership, its advantages, and resources available for further exploration.",
    optimized_content:
      "Employee ownership is a powerful concept that can transform workplaces and enhance job satisfaction. As an employee in Ohio, understanding this model can open up new opportunities for personal and professional growth.\n\n### What is Employee Ownership?\nEmployee ownership is a business model where employees hold a significant stake in the company they work for. This can take various forms, including Employee Stock Ownership Plans (ESOPs) and worker cooperatives.\n\n### Benefits of Employee Ownership\n1. **Increased Job Satisfaction:** Employees often experience a greater sense of responsibility and satisfaction due to their stake in the company.\n2. **Financial Rewards:** Employee ownership can lead to financial benefits through profit sharing and increased value of shares.\n3. **Enhanced Company Performance:** Companies with employee ownership often see improved performance and productivity.\n\n### Getting Started\nIf you're interested in exploring employee ownership, numerous resources are available:\n- **Ohio Employee Ownership Center (OEOC):** Offers programs and events to help employees and businesses transition to this model.\n- **Workshops and Training:** Attend sessions to learn more about the practical aspects of employee ownership.\n- **Networking Opportunities:** Connect with other employee-owned businesses and professionals in Ohio.\n\n### Upcoming Events\nStay informed about events like the Annual Ohio Employee Ownership Conference, where you can learn from experts and network with peers.",
    cta_text: "Discover More",
    relevance_score: 0.8,
    technical_level: 3,
    transformation_rationale:
      'The content is optimized for the "awareness" stage of the employee persona by introducing the concept of employee ownership in an engaging and straightforward manner. The focus is on explaining the fundamentals and benefits, encouraging further exploration through available resources and events. The technical level is kept low to ensure accessibility for all employees, regardless of their prior knowledge of employee ownership. The optimization makes use of structured guides and provides suggestions for further learning, aligning with the persona\'s stage of interest in understanding employee ownership.',
    diversity_score: 0.0852459016393429,
    total_persona_stage_content: 122,
  };

  const promoData = {
    persona: "Business Owner",
    journey_stage: "consideration",
    title: "2024 Ohio Employee Ownership Conference",
    description:
      "Explore the benefits and intricacies of employee ownership. Discover how the 2024 Ohio Employee Ownership Conference can empower business owners to make informed decisions about transitioning to an employee-owned model.",
    optimized_content:
      "As a business owner contemplating the future of your business, understanding the potential of employee ownership can be pivotal. The 2024 Ohio Employee Ownership Conference offers a comprehensive platform to explore this transformative approach. Hosted by the Ohio Employee Ownership Center (OEOC) at Kent State University, this event is designed to provide business owners with the tools, insights, and support needed to consider an employee-owned structure.\n\n### Why Consider Employee Ownership?\n\nEmployee ownership is not just a trend; it’s a strategic move that can enhance company culture, improve employee engagement, and potentially increase business resilience and profitability. Through employee ownership, businesses can create a sense of shared purpose and motivation among their workforce, driving both individual and organizational success.\n\n### What to Expect at the Conference\n\n- **Case Studies:** Gain access to real-life examples and success stories of businesses that have transitioned to employee ownership. Learn about the financial and operational impacts experienced by these companies and how they navigated the transition.\n  \n- **Expert Insights:** Hear from industry leaders and experts in employee ownership. These sessions will provide you with credible insights and address complex concerns, helping you to make informed decisions about the future of your business.\n\n- **Networking Opportunities:** Connect with other business owners, industry professionals, and potential partners. These interactions can provide valuable perspectives and foster collaborative opportunities.\n\n- **Workshops and Seminars:** Participate in hands-on workshops that offer practical guidance on the transition process, including feasibility studies, funding options, and legal considerations.\n\n- **Advisory Services:** Take advantage of one-on-one advisory sessions where you can discuss your specific business needs and get tailored advice from experts in the field.\n\n### Supporting Resources\n\nIn addition to the conference, the OEOC provides ongoing support through various resources such as webinars, training sessions, and publications. Whether you're just starting to explore employee ownership or are ready to initiate the transition, these resources are designed to support you every step of the way.",
    cta_text: "Explore the Conference Program",
    relevance_score: 0.9,
    technical_level: 3,
    transformation_rationale:
      "The content has been optimized to align with the consideration stage of the business owner's journey. At this stage, business owners are evaluating their options and seeking detailed information to guide their decision-making process. By including case studies and expert insights, the content addresses the need for concrete examples and credible advice, which are critical for understanding the implications of employee ownership. The use of workshops and advisory services in the content provides actionable steps, making it practical and relevant. The technical level is set at 3 to ensure accessibility while offering sufficient depth for informed decision-making.",
    diversity_score: 0.0114754098360643,
    total_persona_stage_content: 122,
  };

  const employeeData = {
    persona: "Employee",
    journey_stage: "awareness",
    title: "Discover the Ohio Employee Owner Retreat: Empowering Employee-Owners",
    description:
      "Unlock the potential of employee ownership at the Ohio Employee Owner Retreat. Learn, network, and grow with fellow employee-owners at this transformative event.",
    optimized_content:
      "The Ohio Employee Owner Retreat is a two-day immersive training program designed to empower non-managerial employees with the skills and insights needed to thrive in an employee-owned company. Hosted by the Ohio Employee Ownership Center, this event provides a unique opportunity to learn from experts and network with peers from other ESOP (Employee Stock Ownership Plan) companies.",
    cta_text: "Register Now",
    relevance_score: 0.9,
    technical_level: 3,
    transformation_rationale:
      'The content was optimized to align with the "awareness" stage of the employee persona\'s journey. This stage focuses on providing clear, accessible information about the benefits and opportunities of employee ownership. The original content was condensed and structured to highlight key aspects of the event, such as learning outcomes, networking opportunities, and practical details, ensuring it is engaging and easy to digest for employees who may not be familiar with ESOPs. The testimonials were retained to add credibility and encourage participation. The technical level was set to 2 to ensure the information is understandable to a broad audience without requiring specialized knowledge.',
    diversity_score: 0.185245901639343,
    total_persona_stage_content: 122,
  };

  const ownerData = {
    persona: "Business Owner",
    journey_stage: "consideration",
    title: "Unlocking the Power of Employee Ownership: A Guide for Business Owners",
    description:
      "Explore how the Ohio Employee Ownership Center (OEOC) can help transform your business through innovative training programs designed to enhance employee engagement and drive business performance.",
    optimized_content:
      "In today's competitive business environment, employee ownership can be a game-changer. As a business owner, understanding the potential of this model is crucial during the consideration stage. The Ohio Employee Ownership Center (OEOC) is your partner in this journey, offering tailored training programs that cater to the unique needs of your company. \n\nSince 1987, OEOC has been at the forefront of fostering an ownership culture, providing both in-company and multi-company training that delves into the intricacies of employee ownership. Our programs are designed to integrate seamlessly with your existing structures, ensuring that your employees understand their roles, rights, and responsibilities as owners. \n\nConsider the transformative power of our ESOP training programs, where employees learn through interactive experiences such as the ESOP Game, which simulates the management of a fictional company. This hands-on approach not only educates but also empowers employees to make informed decisions that benefit the company and themselves.\n\nFinancial literacy is another cornerstone of our offerings. Our financial training equips employee-owners with the knowledge to interpret financial statements, enhancing their ability to contribute to company success.\n\nBy joining Ohio's Employee-Owned Network, you gain access to exclusive events, webinars, and a wealth of resources that keep you connected with industry experts and other employee-owned businesses. These opportunities offer invaluable insights into best practices and innovative strategies for fostering an engaged and productive workforce.\n\nWhether you're exploring employee ownership for the first time or looking to enhance your current model, the OEOC provides the expertise and support you need to succeed.",
    cta_text: "Discover OEOC Programs",
    relevance_score: 0.8,
    technical_level: 3,
    transformation_rationale:
      "The content has been optimized to address the needs of a business owner in the consideration stage by highlighting the benefits and practical applications of employee ownership. The original text was dense and unfocused, so I streamlined it to focus on key offerings and benefits relevant to business owners considering employee ownership. The inclusion of specific programs like the ESOP Game and financial literacy training provides concrete examples of how OEOC can add value. The technical level is set to 3, assuming a moderate understanding of business and financial concepts. The call-to-action is clear and encourages further exploration of OEOC's services.",
    diversity_score: 0.0885245901639357,
    total_persona_stage_content: 122,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Navbar />
      <SplitHeroSection
        images={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
        title="2024 Ohio Employee Owner Retreat: Empowering Educators in Employee Ownership"
        highlightedTitle=""
        description="The 2024 Ohio Employee Owner Retreat offers a distinctive opportunity for educators and non-managerial employees to engage deeply with the principles of employee ownership. Hosted by the Ohio Employee Ownership Center, this two-day retreat is crafted to enhance understanding and leadership capabilities among ESOP participants"
      />
      <div className="mx-auto max-w-4xl">
        <div
          className={`
            ${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                : "flex flex-col gap-6"
            }
          `}
        >
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <ArticleCard {...generalData} />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <ArticleCard {...ownerData} />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <ArticleCard {...promoData} />
          </div>
          <div className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
            <ArticleCard {...employeeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointPage;
