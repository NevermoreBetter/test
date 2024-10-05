// BudgetStats.tsx

import { useSelector } from "react-redux";
import "./statistics.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const BudgetStats = () => {
 const employeeCount = useSelector((state) => state.employees);
 const budgetAmount = 85125.0;
 return (
  <div className="budget-stats">
   <div className="budget-stats__header">
    <h2>Employee</h2>
    <span className="results-count">
     {employeeCount.employees.length} results found
    </span>
   </div>

   <div className="budget-stats__grid">
    <div className="budget-card">
     <div className="budget-card__content">
      <span className="budget-label">
       Total Budget <ChevronDown color="red" />
      </span>
      <span className="budget-amount">
       ${budgetAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
     </div>
    </div>

    <div className="budget-card ">
     <div className="budget-card__content">
      <span className="budget-label">
       Monthly Budget <ChevronDown color="red" />
      </span>
      <span className="budget-amount">
       ${budgetAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
     </div>
    </div>

    <div className="budget-card">
     <div className="budget-card__content">
      <span className="budget-label">
       Weekly Budget <ChevronUp color="green" />
      </span>
      <span className="budget-amount">
       ${budgetAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
     </div>
    </div>

    <div className="budget-card">
     <div className="budget-card__content">
      <span className="budget-label">
       Today&apos;s Budget <ChevronUp color="green" />
      </span>
      <span className="budget-amount">
       ${budgetAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
     </div>
    </div>
   </div>
  </div>
 );
};

export default BudgetStats;
