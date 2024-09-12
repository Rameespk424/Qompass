import React, { useState } from "react";
import PickupPopup from "./PickupPopup";

const PickupDetails = ({ orderDetails, setOrderDetails }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedDetails) => {
    setOrderDetails((prev) => ({ ...prev, ...updatedDetails }));
    setIsEditing(false);
  };

  return (
    <div className="p-3 bg-gray-50 border rounded-md space-y-2">
      <div>
        <strong>Pickup Address: </strong>
        <button
          onClick={handleEditClick}
          className="ml-4 text-blue-500 hover:underline"
        >
          (Edit)
        </button>
        <p>{orderDetails.pickupAddress || "Not provided"}</p>
      </div>
      <div>
        <strong>Pickup Contact: </strong>
        <p>{orderDetails.pickupContact || "Not provided"}</p>
      </div>
      <div>
        <strong>Pickup Date & Time: </strong>
        <p>
          {orderDetails.pickupDate || "Not provided"}{" "}
          {orderDetails.pickupTime || "Not provided"}
        </p>
      </div>
      <PickupPopup
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSaveClick}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default PickupDetails;
