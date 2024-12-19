import LevelTwoComponent from "@/components/LevelTwoComponent";
import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import topicData from "@/data/resultsTwo.json";
import { useNavigate } from "react-router-dom";
import { getRankedContent } from "./HomePage";
import { useAuth } from "@/hooks/useAuth";

const EmployeeOwnerLevelTwoPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();
  return (
    <LevelTwoComponent
      heroCtaClick={() => navigate("/conference-registration")}
      heroImages={[imageOne, imageTwo, imageThree, imageFour, imageFive]}
      heroHeadline={"National Employee Owner Summit 2025"}
      heroDescription="Transform your ESOP journey through hands-on learning and peer connection. Join 40 fellow employee-owners for an intensive two-day experience featuring interactive simulations, financial literacy training, and ownership culture building."
      heroCtaText={"Register Now"}
      heroPricing={{
        member: {
          type: "member",
          firstPerson: 795,
          additional: 650,
        },
        nonMember: {
          type: "non-member",
          firstPerson: 1050,
          additional: 900,
        },
      }}
      mainContent={getRankedContent(
        topicData,
        1,
        isAuthenticated ? "Employee Owner Member" : "Business Owner"
      )}
      topicData={topicData}
      persona={isAuthenticated ? "Employee Owner Member" : "Business Owner"}
    />
  );
};

export default EmployeeOwnerLevelTwoPage;
