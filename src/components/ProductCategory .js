import React, { useState, useEffect } from "react";
import categoriesData from "../data/categories.json";
import { FiCpu, FiCoffee, FiSmartphone, FiBox } from "react-icons/fi";

const iconsMap = {
  FiCpu: <FiCpu />,
  FiCoffee: <FiCoffee />,
  FiSmartphone: <FiSmartphone />,
  FiBox: <FiBox />,
};

const ProductCategory = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    if (onCategorySelect) {
      onCategorySelect(category.name);
    }
  };

  return (
    <div className="">
      <div className="flex space-x-4 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 flex items-center space-x-2 rounded-md font-semibold ${
              selectedCategory === category.name
                ? "bg-blue-50 text-white"
                : "bg-white border"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="flex flex-col  items-center">
              <span className="text-blue-950 text-2xl  text-center pb-4">
                {iconsMap[category.icon]}
              </span>

              <span className="  text-gray-500 text-sm w-24 text-center">
                {category.name}
              </span>
            </div>
          </button>
        ))}
      </div>
      {selectedCategory && (
        <p className="mt-4 text-gray-700">
          Selected Category:{" "}
          <span className="font-semibold">{selectedCategory}</span>
        </p>
      )}
    </div>
  );
};

export default ProductCategory;
