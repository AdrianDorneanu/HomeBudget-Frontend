import { CgDetailsMore } from "react-icons/cg";
import { IoTrashBinOutline } from "react-icons/io5";

import "./budgetCardActionButtons.css";
import Link from "next/link";

interface BudgetCardActionButtonsProps {
  id: string;
}
export function BudgetCardActionButtons({ id }: BudgetCardActionButtonsProps) {
  return (
    <>
      <div className="view-more-details-wrapper">
        <Link href={`/budgets/${id}`}>
          <CgDetailsMore className="budget-card-action-icon" />
        </Link>
      </div>
      <div className="remove-icon-wrapper">
        <IoTrashBinOutline className="budget-card-action-icon" />
      </div>
    </>
  );
}
