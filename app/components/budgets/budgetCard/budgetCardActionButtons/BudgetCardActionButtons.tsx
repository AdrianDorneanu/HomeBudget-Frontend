import Link from "next/link";
import { CgDetailsMore } from "react-icons/cg";
import { IoTrashBinOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { removeBudget } from "@/app/datalayer";
import { useBudget } from "@/app/contexts";

import "./budgetCardActionButtons.css";
import "react-toastify/ReactToastify.min.css";

interface BudgetCardActionButtonsProps {
  id: string;
}
export function BudgetCardActionButtons({ id }: BudgetCardActionButtonsProps) {
  const { deleteBudget }: any = useBudget();

  async function handleRemove() {
    await removeBudget(id);

    deleteBudget(id);
  }
  return (
    <>
      <div className="view-more-details-wrapper">
        <Link href={`/budgets/${id}`}>
          <CgDetailsMore className="budget-card-action-icon" />
        </Link>
      </div>
      <div className="remove-icon-wrapper">
        <IoTrashBinOutline
          onClick={handleRemove}
          className="budget-card-action-icon"
        />
      </div>

      <ToastContainer position="top-right" newestOnTop />
    </>
  );
}
