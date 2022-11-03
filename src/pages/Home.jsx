import React from "react";
import {BudgetCard} from "../components/BudgetCard";
import CategoryCard from "../components/categoryCard";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <div className="justify-center">
          <BudgetCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
