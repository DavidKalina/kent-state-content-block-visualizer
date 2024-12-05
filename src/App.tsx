import { useState } from "react";
import PersonaContentCard from "./components/PersonaCard";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import data from "./data/results.json";

const personas = ["All", "Business Owner", "Employee", "Educator"];

export default function App() {
  console.log("Data:", data); // Add this line

  const [selectedPersona, setSelectedPersona] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const filteredContent = data.filter(
    (content) => selectedPersona === "All" || content.persona === selectedPersona
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Employee Ownership Resources</h1>
          <p className="text-gray-600 mb-6">
            Discover content tailored for your role in employee ownership
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {personas.map((persona) => (
                <Button
                  key={persona}
                  variant={selectedPersona === persona ? "default" : "outline"}
                  onClick={() => setSelectedPersona(persona)}
                  className="whitespace-nowrap"
                >
                  {persona}
                </Button>
              ))}
            </div>

            <Select value={viewMode} onValueChange={(value: string) => setViewMode(value)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">Grid View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Grid */}
        <div
          className={`
          ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        `}
        >
          {filteredContent.map((content, index) => (
            <div key={index} className={viewMode === "list" ? "max-w-3xl mx-auto w-full" : ""}>
              <PersonaContentCard {...content} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No content available for the selected persona.</p>
          </div>
        )}
      </div>
    </div>
  );
}
