import React from "react";

// Define a type for panel configuration
type PanelConfig = {
  content: React.ReactNode;
  rowSpan?: 1 | 2;
};

const FourPanelGrid = ({ panels }: { panels: PanelConfig[] }) => {
  // Ensure we only use the first 4 panels
  const validPanels = panels
    .filter((panel): panel is PanelConfig => panel.content != null)
    .slice(0, 4);
  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-full gap-4 md:px-16 md:py-12 md:pb-24">
        {validPanels.map((panel, index) => (
          <div key={index} className={`${panel.rowSpan === 2 ? "md:row-span-2" : ""}`}>
            {panel.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourPanelGrid;
