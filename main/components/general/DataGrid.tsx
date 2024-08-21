import React from "react";

// Define the types for the model
type FocusArea = {
  title: string;
  description: string;
};

type Model = {
  focusAreas: FocusArea[];
};

// The DataGrid component receives a model prop
const DataGrid: React.FC<{ model: Model }> = ({ model }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary dark:text-white mt-8 p-8">Focus areas</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {model.focusAreas.map((area, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-md shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white">{area.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{area.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataGrid;
