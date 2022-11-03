// import React from "react";

// import totals from '../../data'

// function BudgetCard() {
//   return (
//     <div className="flex flex-col bg-slate-200 justify-between">
//       {/* top */}
//       <div className="flex justify-between">
//         <span className="">Active Budget</span>
//         <span className="">See All</span>
//       </div>

//       {/* mid */}
//       <div className="flex justify-between">
//         <span>April Budget</span>
//         <span className="">4.11 - 5.10</span>
//       </div>

//       {/* mid */}
//       <div className="flex justify-between">
//         <span>Budget</span>
//         <span className="">Left</span>
//       </div>

//       {/* mid */}
//       <div className="flex justify-between">
//         <span>2000</span>
//         <span className="">800</span>
//       </div>

//       {/* bar */}
//       <span className="">You spent {} of $2,000</span>
//     </div>
//   );
// }

// export default BudgetCard;

export const BudgetCard = ({ title, description, site }) => {
  return (
    <div>
      <div>
      <p>Test</p>
        <h4>{title}</h4>
        <span>{description}</span>
        <span>{site}</span>
        <br />
      </div>
    </div>
  );
};
