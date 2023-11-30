"use client";

import { useCallback, useEffect, useState } from "react";
import { useExpense } from "@/app/contexts";
import { getExpensesByBudgetId } from "@/app/datalayer";
import { Loader } from "../../common";
import { ExpenseCard, ExpenseCardProps } from "../expenseCard";

interface ExpensesListProps {
  budgetId: string;
}
export function ExpensesList({ budgetId }: ExpensesListProps) {
  const [loading, setLoading] = useState(true);
  const { expenses, setExpenses }: any = useExpense();

  const fetchData = useCallback(async () => {
    try {
      const data = await getExpensesByBudgetId(budgetId);

      setExpenses(data);
      setLoading(false);
    } catch (error) {
      console.error(error);

      setLoading(false);

      throw new Error("Something went wrong - ExpensesList.ts");
    }
  }, [budgetId, setExpenses]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}

      {!loading && expenses.length === 0 && (
        <span
          data-testid="no-budgets-created-text"
          className="no-budgets-created-text"
        >
          No expenses created yet for this budget!
        </span>
      )}

      {expenses.map((expense: ExpenseCardProps) => (
        <ExpenseCard key={expense.id} {...expense} />
      ))}
    </>
  );
}
