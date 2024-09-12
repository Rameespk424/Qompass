import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3">
      <button
        className="w-full text-left p-3 bg-gray-100 rounded-md font-semibold"
        onClick={toggleCollapse}
      >
        {title}
      </button>

      {isOpen && (
        <div className="p-3 bg-gray-50 border rounded-md">{children}</div>
      )}
    </div>
  );
};

export default Collapse;
