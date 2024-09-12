import React from "react";
import CollapseGroup from "./CollapseGroup";
import ProductCategory from "../components/ProductCategory ";

const MainComponent = () => {
  const collapseItems = [
    {
      id: "1",
      title: "Select Product category",
      content: (
        <>
          <ProductCategory />
        </>
      ),
    },
    {
      id: "2",
      title: "Select Load Type",
      content: (
        <>
          <ProductCategory />
        </>
      ),
    },
  ];

  return (
    <div>
      <CollapseGroup items={collapseItems} />
    </div>
  );
};

export default MainComponent;
