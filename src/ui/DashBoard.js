import React from "react";
import Button from "../components/buttons";
import MainComponent from "../components/MainComponent";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between align-middle mb-2">
        <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
        <Button variant="primary" size="sm">
          New Order
        </Button>
      </div>

      <div className="p-6 bg-white shadow-md rounded-md">
        <MainComponent title="Order Summary">
          {/* <ProductCategory /> */}
        </MainComponent>
      </div>
    </div>
  );
};

export default Dashboard;
