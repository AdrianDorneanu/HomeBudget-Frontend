import { IoTrashBinOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { useExpense } from "@/app/contexts";

import "react-toastify/ReactToastify.min.css";

interface ExpenseCardActionButtonsProps {
  id: string;
}
export function ExpenseCardActionButtons({
  id,
}: ExpenseCardActionButtonsProps) {
  const { deleteExpense }: any = useExpense();

  function handleRemove() {
    deleteExpense(id);
  }

  return (
    <>
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
