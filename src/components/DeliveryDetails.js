import React, { useState } from "react";
import DeliveryPopup from "./DeliveryPopup";

const DeliveryDetails = ({ orderDetails, setOrderDetails }) => {
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
        <strong>Delivery Address: </strong>
        <button
          onClick={handleEditClick}
          className="ml-4 text-blue-500 hover:underline"
        >
          (Edit)
        </button>
        <p>{orderDetails.deliveryAddress || "Not provided"}</p>
      </div>
      <div>
        <strong>Delivery Contact: </strong>
        <p>{orderDetails.deliveryContact || "Not provided"}</p>
      </div>
      <DeliveryPopup
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSaveClick}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default DeliveryDetails;
