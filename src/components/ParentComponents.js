import React, { useState } from 'react';
import ProductCategory from './ProductCategory';
import Sidebar from './Sidebar';

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

  return (
    <div>
      {/* Pass the onCategorySelect prop to ProductCategory */}
      <ProductCategory onCategorySelect={setSelectedCategory} />
      {/* Pass the selectedCategory as a prop to Sidebar */}
      <Sidebar selectedCategory={selectedCategory} />
    </div>
  );
};

export default ParentComponent;
