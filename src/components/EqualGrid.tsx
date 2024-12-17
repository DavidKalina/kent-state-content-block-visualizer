import React from "react";

const FourPanelGrid = ({ children }: { children: React.ReactNode[] }) => {
  // Ensure we only use the first 4 children
  const panels = React.Children.toArray(children).slice(0, 4);

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-full gap-4 md:px-16 md:py-12 md:pb-24">
        {panels.map((panel, index) => (
          <div key={index}>{panel}</div>
        ))}
      </div>
    </div>
  );
};

export default FourPanelGrid;
