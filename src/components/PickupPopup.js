import React, { useState, useEffect } from "react";

const PickupPopup = ({ isOpen, onClose, onSave, orderDetails }) => {
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
    <div className="fixed top-36 right-0 m-4 p-4 h-3/4 bg-white shadow-lg border border-gray-300 rounded">
      <div className="bg-white rounded-lg p-6 space-y-4 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Pickup Details</h2>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block">Pickup Time</label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block">Pickup Address</label>
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Contact Details</h3>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block">Pickup Contact Name</label>
              <input
                type="text"
                name="pickupContactName"
                value={formData.pickupContactName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block">Email</label>
              <input
                type="email"
                name="pickupEmail"
                value={formData.pickupEmail}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label className="block">Pickup Contact Number</label>
              <input
                type="tel"
                name="pickupContact"
                value={formData.pickupContact}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block">PAN Number</label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block">GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickupPopup;
