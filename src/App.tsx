import { useState, useMemo } from "react";
import PersonaContentCard from "./components/PersonaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";
import data from "./data/results.json";

const journeyStages = ["All", "Awareness", "Consideration", "Decision", "Adoption"];
const personas = ["All", "Business Owner", "Employee", "Educator"];
const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "technical", label: "Technical Level" },
  { value: "diversity", label: "Diversity Score" },
];

export default function App() {
  // Filters state
  const [selectedPersona, setSelectedPersona] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [minTechnicalLevel, setMinTechnicalLevel] = useState(1);
  const [minRelevance, setMinRelevance] = useState(0.6);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  // Memoized filtered and sorted content
  const filteredContent = useMemo(() => {
    let filtered = [...data];

    // Apply filters
    if (selectedPersona !== "All") {
      filtered = filtered.filter((content) => content.persona === selectedPersona);
    }
    if (selectedStage !== "All") {
      filtered = filtered.filter(
        (content) => content.journey_stage.toLowerCase() === selectedStage.toLowerCase()
      );
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (content) =>
          content.title.toLowerCase().includes(query) ||
          content.description.toLowerCase().includes(query)
      );
    }
    filtered = filtered.filter(
      (content) =>
        content.technical_level >= minTechnicalLevel && content.relevance_score >= minRelevance
    );

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "relevance":
          return b.relevance_score - a.relevance_score;
        case "technical":
          return b.technical_level - a.technical_level;
        case "diversity":
          return b.diversity_score - a.diversity_score;
        default:
          return 0;
      }
    });

    return filtered;
  }, [data, selectedPersona, selectedStage, searchQuery, minTechnicalLevel, minRelevance, sortBy]);

  // Stats for the current filter set
  const stats = useMemo(
    () => ({
      totalItems: filteredContent.length,
      avgRelevance:
        filteredContent.reduce((acc, curr) => acc + curr.relevance_score, 0) /
        filteredContent.length,
      avgTechnicalLevel:
        filteredContent.reduce((acc, curr) => acc + curr.technical_level, 0) /
        filteredContent.length,
    }),
    [filteredContent]
  );

  // Active filters for display
  const activeFilters = useMemo(() => {
    const filters = [];
    if (selectedPersona !== "All") filters.push({ label: selectedPersona, type: "persona" });
    if (selectedStage !== "All") filters.push({ label: selectedStage, type: "stage" });
    if (minTechnicalLevel > 1)
      filters.push({ label: `Min Technical: ${minTechnicalLevel}`, type: "technical" });
    if (minRelevance > 0.6)
      filters.push({
        label: `Min Relevance: ${Math.round(minRelevance * 100)}%`,
        type: "relevance",
      });
    if (searchQuery) filters.push({ label: `Search: ${searchQuery}`, type: "search" });
    return filters;
  }, [selectedPersona, selectedStage, minTechnicalLevel, minRelevance, searchQuery]);

  const clearFilter = (type: string) => {
    switch (type) {
      case "persona":
        setSelectedPersona("All");
        break;
      case "stage":
        setSelectedStage("All");
        break;
      case "technical":
        setMinTechnicalLevel(1);
        break;
      case "relevance":
        setMinRelevance(0.6);
        break;
      case "search":
        setSearchQuery("");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Employee Ownership Resources</h1>
          <p className="text-gray-600 mb-6">
            Discover content tailored for your role in employee ownership
          </p>

          {/* Search and Primary Controls */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilters.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilters.length}
                  </Badge>
                )}
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="View Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">Grid View</SelectItem>
                  <SelectItem value="list">List View</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Active filters:</span>
                {activeFilters.map((filter, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {filter.label}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => clearFilter(filter.type)}
                    />
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedPersona("All");
                    setSelectedStage("All");
                    setMinTechnicalLevel(1);
                    setMinRelevance(0.6);
                    setSearchQuery("");
                  }}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Persona</h3>
                  <div className="flex flex-wrap gap-2">
                    {personas.map((persona) => (
                      <Button
                        key={persona}
                        size="sm"
                        variant={selectedPersona === persona ? "default" : "outline"}
                        onClick={() => setSelectedPersona(persona)}
                      >
                        {persona}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Journey Stage</h3>
                  <div className="flex flex-wrap gap-2">
                    {journeyStages.map((stage) => (
                      <Button
                        key={stage}
                        size="sm"
                        variant={selectedStage === stage ? "default" : "outline"}
                        onClick={() => setSelectedStage(stage)}
                      >
                        {stage}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Technical Level (Min)</h3>
                  <Slider
                    value={[minTechnicalLevel]}
                    onValueChange={(values) => setMinTechnicalLevel(values[0])}
                    min={1}
                    max={5}
                    step={1}
                  />
                  <div className="text-sm text-gray-500">Level {minTechnicalLevel} or higher</div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Relevance Score (Min)</h3>
                  <Slider
                    value={[minRelevance * 100]}
                    onValueChange={(values) => setMinRelevance(values[0] / 100)}
                    min={60}
                    max={100}
                    step={5}
                  />
                  <div className="text-sm text-gray-500">
                    {Math.round(minRelevance * 100)}% or higher
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Stats Bar */}
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm mb-6">
            <div className="text-sm text-gray-600">Showing {filteredContent.length} results</div>
            <div className="flex gap-6">
              <div className="text-sm">
                <span className="text-gray-500">Avg. Relevance:</span>{" "}
                <span className="font-medium">{Math.round(stats.avgRelevance * 100)}%</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Avg. Technical Level:</span>{" "}
                <span className="font-medium">{stats.avgTechnicalLevel.toFixed(1)}</span>
              </div>
            </div>
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
            <p className="text-gray-500 text-lg">No content matches your current filters.</p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedPersona("All");
                setSelectedStage("All");
                setMinTechnicalLevel(1);
                setMinRelevance(0.6);
                setSearchQuery("");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
