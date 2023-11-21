import { BudgetProps } from "./budget";

import "./budgetsList.css";

interface BudgetsListProps {
  budgets: BudgetProps[];
}
export function BudgetsList({ budgets }: BudgetsListProps) {
  if (budgets.length === 0) {
    return (
      <span className="no-budgets-created-text">No budgets created yet!</span>
    );
  }

  return null;
}
