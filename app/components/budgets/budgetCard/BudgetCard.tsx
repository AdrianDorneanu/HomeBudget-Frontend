import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Card } from "../../common";
import { BudgetCardActionButtons } from "./budgetCardActionButtons";

import "./budgetCard.css";

export interface BudgetCardProps {
  id: string;
  name: string;
  totalAmount: number;
  amountSpent: number;
}
export function BudgetCard({
  id,
  name,
  totalAmount,
  amountSpent,
}: BudgetCardProps) {
  return (
    <Card>
      <div>
        <h1 data-testid="budget-name" className="budget-name">
          {name}
        </h1>
        <div className="budget-informations-list">
          <div className="budget-information">
            <AiOutlineArrowUp className="budget-total-amount-arrow" />
            <span data-testid="budget-total-amount">{totalAmount} RON</span>
          </div>
          <div className="budget-information">
            <AiOutlineArrowDown className="budget-amount-spent-arrow" />
            <span data-testid="budget-amount-spent">{amountSpent} RON</span>
          </div>
        </div>
      </div>

      <div className="budget-card-icons-wrapper">
        <BudgetCardActionButtons id={id} />
      </div>
    </Card>
  );
}
