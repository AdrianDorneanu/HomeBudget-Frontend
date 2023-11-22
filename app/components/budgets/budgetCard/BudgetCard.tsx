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
      <div className="budget-card-content-wrapper">
        <h1 className="budget-name">{name}</h1>
        <div className="budget-informations-list">
          <div className="budget-information">
            <AiOutlineArrowUp className="budget-total-amount-arrow" />
            <span>{totalAmount} RON</span>
          </div>
          <div className="budget-information">
            <AiOutlineArrowDown className="budget-amount-spent-arrow" />
            <span>{amountSpent} RON</span>
          </div>
        </div>
      </div>

      <div className="budget-card-icons-wrapper">
        <BudgetCardActionButtons id={id} />
      </div>
    </Card>
  );
}
