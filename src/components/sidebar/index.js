import React from "react";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col px-10 border-red-500">
        <div className="flex flex-row space-x-6 py-10">
          <div className="flex justify-center items-center text-xl text-white  bg-gray-500 align-items-center justify-content-center py-8 rounded-full w-16 h-16 border-gray-500">
            Logo
          </div>
          <div className=" justify-content-center align-items-center py-6">
            DoughRise
          </div>
        </div>

        {/* Underneath */}
        <div className="flex flex-col mt-8">
          <text>Home</text>
          <text>Transaction</text>
          <text>Goals</text>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
