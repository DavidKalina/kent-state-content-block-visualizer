import HeroSection from "@/components/HeroSection";
import LandingCard from "@/components/LandingPageCard";
import Navbar from "@/components/Navbar";
import { useMemo, useState } from "react";
import data from "../data/results.json";

const HomePage = () => {
  const [viewMode] = useState<"grid" | "list">("grid");

  const filteredBusinessOwner = useMemo(() => {
    return data
      .filter((item) => item.relevance_score > 0.8 && item.persona === "Business Owner")
      .slice(0, 1);
  }, []);

  const filteredEmployee = useMemo(() => {
    return data
      .filter((item) => item.relevance_score > 0.8 && item.persona === "Employee")
      .slice(0, 2);
  }, []);

  const filteredEducator = useMemo(() => {
    return data
      .filter((item) => item.relevance_score > 0.8 && item.persona === "Educator")
      .slice(0, 1);
  }, []);

  const combinedData = useMemo(
    () => [...filteredBusinessOwner, ...filteredEmployee, ...filteredEducator],
    [filteredBusinessOwner, filteredEducator, filteredEmployee]
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Navbar />
      <HeroSection />
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
          {combinedData.map((content, index) => (
            <div key={index} className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
              <LandingCard {...content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
