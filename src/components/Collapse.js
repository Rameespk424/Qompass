import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle collapse open/close state
  };

  return (
    <div  className="mb-3">
      {/* Collapse Header */}
      <button
        className="w-full text-left p-3 bg-gray-100 rounded-md font-semibold"
        onClick={toggleCollapse}
      >
        {title}
      </button>

      {/* Collapse Content */}
      {isOpen && <div className="p-3 bg-gray-50 border rounded-md">{children}</div>}
    </div>
  );
};

export default Collapse;
