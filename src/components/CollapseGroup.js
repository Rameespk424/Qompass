import React, { useState } from "react";
import Collapse from "./Collapse";

const CollapseGroup = ({ items }) => {
  const [openCollapse, setOpenCollapse] = useState(null);

  const handleToggle = (id) => {
    setOpenCollapse(openCollapse === id ? null : id);
  };

  return (
    <div>
      {items.map((item) => (
        <Collapse
          key={item.id}
          title={item.title}
          isOpen={openCollapse === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </Collapse>
      ))}
    </div>
  );
};

export default CollapseGroup;
