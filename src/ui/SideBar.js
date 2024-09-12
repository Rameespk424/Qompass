import React, { useState } from "react";
import Collapse from "../components/Collapse";
import PickupDetails from "../components/PickupDetails";
import DeliveryDetails from "../components/DeliveryDetails";

const Sidebar = ({ selectedCategory }) => {
  const [orderDetails, setOrderDetails] = useState({
    pickupAddress: "",
    pickupContact: "",
    pickupDate: "",
    pickupTime: "",
    deliveryAddress: "",
    deliveryContact: "",
  });


  console.log("Selected Category in Sidebar:", selectedCategory);

  return (
    <div className="p-4 space-y-6">
      <Collapse title="Order Summary">
        {/* Display selectedCategory */}
        <p>Selected Category: {selectedCategory || "No category selected"}</p>
        <PickupDetails orderDetails={orderDetails} setOrderDetails={setOrderDetails} />
        <DeliveryDetails orderDetails={orderDetails} setOrderDetails={setOrderDetails} />
      </Collapse>
    </div>
  );
};

export default Sidebar;
