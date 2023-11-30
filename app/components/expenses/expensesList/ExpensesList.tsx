import { getExpensesByBudgetId } from "@/app/datalayer";
import { ExpenseCard, ExpenseCardProps } from "../expenseCard";

interface ExpensesListProps {
  budgetId: string;
}
export async function ExpensesList({ budgetId }: ExpensesListProps) {
  const expenses = await getExpensesByBudgetId(budgetId);

  return (
    <>
      {expenses.map((expense: ExpenseCardProps) => (
        <ExpenseCard key={expense.id} {...expense} />
      ))}
    </>
  );
}
