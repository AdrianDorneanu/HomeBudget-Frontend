import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {
  Card,
  CardButtonsWrapper,
  CardInformations,
  CardTitle,
} from "../../common";
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
      IconComponent: () => <AiOutlineArrowUp className="total-amount-arrow" />,
      TextComponent: () => (
        <span data-testid="total-amount">{totalAmount} RON</span>
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

      <CardButtonsWrapper>
        <BudgetCardActionButtons id={id} />
      </CardButtonsWrapper>
    </Card>
  );
}
