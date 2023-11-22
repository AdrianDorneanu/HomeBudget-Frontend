import { IoTrashBinOutline } from "react-icons/io5";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { Card } from "../../common";

import "./budgetCard.css";

export interface BudgetCardProps {
  id: string;
  name: string;
  totalAmount: number;
  amountSpent: number;
  date: string;
}
export function BudgetCard({
  name,
  totalAmount,
  amountSpent,
  date,
}: BudgetCardProps) {
  const formattedDate = new Date(date)
    .toLocaleDateString("ro-RO")
    .substring(0, 10);

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
          <div className="budget-information">
            <MdDateRange className="budget-date-icon" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="remove-icon-wrapper">
        <IoTrashBinOutline className="remove-icon" />
      </div>
    </Card>
  );
}
