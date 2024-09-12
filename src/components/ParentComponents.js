import React, { useState } from "react";
import ProductCategory from "./ProductCategory";
import Sidebar from "./Sidebar";

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <ProductCategory onCategorySelect={setSelectedCategory} />

      <Sidebar selectedCategory={selectedCategory} />
    </div>
  );
};

export default ParentComponent;
