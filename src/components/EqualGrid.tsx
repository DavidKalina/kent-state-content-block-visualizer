import React from "react";

const FourPanelGrid = ({ children }: { children: React.ReactNode[] }) => {
  // Ensure we only use the first 4 children
  const panels = React.Children.toArray(children).slice(0, 4);

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-2 grid-rows-2 h-full gap-4 px-16 py-12">
        {panels.map((panel, index) => (
          <div key={index}>{panel}</div>
        ))}
      </div>
    </div>
  );
};

export default FourPanelGrid;
