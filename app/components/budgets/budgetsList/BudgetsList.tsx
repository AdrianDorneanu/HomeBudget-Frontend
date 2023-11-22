import { BudgetCard, BudgetCardProps } from "../budgetCard";

import "./budgetsList.css";

interface BudgetsListProps {
  budgets: BudgetCardProps[];
}
export function BudgetsList({ budgets }: BudgetsListProps) {
  if (budgets.length === 0) {
    return (
      <span
        data-testid="no-budgets-created-text"
        className="no-budgets-created-text"
      >
        No budgets created yet!
      </span>
    );
  }

  return (
    <>
      {budgets.map(
        ({ id, name, totalAmount, amountSpent, date }: BudgetCardProps) => (
          <BudgetCard
            key={name}
            id={id}
            name={name}
            totalAmount={totalAmount}
            amountSpent={amountSpent}
            date={date}
          />
        )
      )}
    </>
  );
}
