import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Card, CardInformations, CardTitle } from "../../common";
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
  const informations = [
    {
      IconComponent: () => (
        <AiOutlineArrowUp className="budget-total-amount-arrow" />
      ),
      TextComponent: () => (
        <span data-testid="budget-total-amount">{totalAmount} RON</span>
      ),
    },
    {
      IconComponent: () => (
        <AiOutlineArrowDown className="budget-amount-spent-arrow" />
      ),
      TextComponent: () => (
        <span data-testid="budget-amount-spent">{amountSpent} RON</span>
      ),
    },
  ];

  return (
    <Card>
      <div>
        <CardTitle name={name} />
        <CardInformations informations={informations} />
      </div>

      <div className="budget-card-icons-wrapper">
        <BudgetCardActionButtons id={id} />
      </div>
    </Card>
  );
}
