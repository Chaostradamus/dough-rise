import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function CategoryCard() {
  return (
    <div>
      <div className="flex justify-between ">
        <span className="">Category</span>
        <span className="flex ">
          <FaPlusCircle />
        </span>
      </div>
    </div>
  );
}

export default CategoryCard;
