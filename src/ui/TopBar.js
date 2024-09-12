import React from "react";

const TopBar = () => {
  return (
    <section>
      <div className="bg-white text-black px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <h1 className="text-xl k font-semibold">Logistic Dashboard</h1>
        </div>

        <div className="flex items-center space-x-6">
          <div>
            <p className="text-sm k">Support: +123 456 789</p>
          </div>
          <div>
            <p className="text-sm k">Email: support@logistic.com</p>
          </div>
        </div>
      </div>
      <div className="area px-6 py-2 flex justify-between items-center border border-l-0 border-r-0">
        <div className="">Order Mangement System</div>
        <div className="">Welcome Gues</div>
      </div>
    </section>
  );
};

export default TopBar;
