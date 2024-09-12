import React, { useState, useEffect } from "react";

const DeliveryPopup = ({ isOpen, onClose, onSave, orderDetails }) => {
  const [formData, setFormData] = useState(orderDetails);

  useEffect(() => {
    setFormData(orderDetails);
  }, [orderDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 space-y-4 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Delivery Details</h2>
        {/* Delivery Form Fields */}
        {/* Similar to PickupPopup */}
        <div>
          <label className="block">Delivery Address</label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Other fields like Delivery Contact, etc. */}
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPopup;
