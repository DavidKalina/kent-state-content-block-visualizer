import LevelTwoComponent from "@/components/LevelTwoComponent";
import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import topicData from "@/data/resultsTwo.json";
import { useNavigate } from "react-router-dom";
import { getRankedContent } from "./HomePage";

const EmployeeOwnerLevelTwoPage = () => {
  const navigate = useNavigate();
  return (
    <LevelTwoComponent
      heroCtaClick={() => navigate("/network-signup")}
      heroImages={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
      heroHeadline="39th Annual Ohio Employee Ownership Conference 2025"
      heroDescription="Join Ohio's largest gathering of employee-owners and business leaders for a transformative day of learning and connection. Experience 20+ expert-led sessions, interactive workshops, and meaningful networking opportunities designed to strengthen your ownership journey."
      heroCtaText="Register Now"
      heroPricing={{
        member: {
          type: "member",
          firstPerson: 49.99,
        },
        nonMember: {
          type: "non-member",
          firstPerson: 69.99,
        },
      }}
      mainContent={getRankedContent(topicData, 1, "Employee")}
      topicData={topicData}
      persona="Employee"
    />
  );
};

export default EmployeeOwnerLevelTwoPage;
