import React from "react";

function BudgetCard() {
  return (
    <div className="flex flex-col bg-slate-200">
      {/* top */}
      <div>
        <span className="">Active Budget</span>
        <span className="">See All</span>
      </div>

      {/* mid */}
      <div>
        <span>April Budget</span>
        <span>4.11 - 5.10</span>
      </div>

      {/* mid */}
      <div>
        <span>Budget</span>
        <span>Left</span>
      </div>

      {/* mid */}
      <div>
        <span>2000</span>
        <span>800</span>
      </div>

      {/* bar */}
      <span>You spent $1,200 of $2,000</span>

      {/* second */}
      {/* top */}
      <div>
        <span className="">Active Budget</span>
        <span className="">See All</span>
      </div>

      {/* mid */}
      <div>
        <span>April Budget</span>
        <span>4.11 - 5.10</span>
      </div>

      {/* mid */}
      <div>
        <span>Budget</span>
        <span>Left</span>
      </div>

      {/* mid */}
      <div>
        <span>2000</span>
        <span>800</span>
      </div>

      {/* bar */}
      <span>You spent $1,200 of $2,000</span>
    </div>
  );
}

export default BudgetCard;
