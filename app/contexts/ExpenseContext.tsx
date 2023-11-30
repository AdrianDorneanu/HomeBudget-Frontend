"use client";

import { createContext, useContext, useReducer, useCallback } from "react";
import { toast } from "react-toastify";
import expenseReducer, {
  Expense,
  REDUCER_ACTION_TYPE_EXPENSES,
  expensesInitialState,
} from "../reducers/ExpenseReducer";
import { deleteExpenseById } from "../datalayer";

const ExpenseContext = createContext(expensesInitialState);

interface ExpenseProviderProps {
  children: React.ReactNode;
}
export function ExpenseProvider({ children }: ExpenseProviderProps) {
  const [state, dispatch] = useReducer(expenseReducer, expensesInitialState);

  const setExpenses = useCallback((expenses: Expense[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE_EXPENSES.SET_EXPENSES,
      payload: { expenses },
    });
  }, []);

  const deleteExpense = useCallback(
    async (id: string) => {
      const { expenses } = state;

      /**
       * Remove the expenses from the database
       */
      const deletedExpense = await deleteExpenseById(id);

      /**
       * Remove the expenses from the global state
       */
      let updatedExpenses: Expense[] = [];
      if (deletedExpense) {
        updatedExpenses = expenses.filter(
          (expense: Expense) => expense.id !== deletedExpense.id
        );

        toast(`Successfully deleted budget ${deletedExpense.name}`, {
          type: "success",
        });

        dispatch({
          type: REDUCER_ACTION_TYPE_EXPENSES.DELETE_EXPENSE,
          payload: { expenses: updatedExpenses },
        });
      }
    },
    [state]
  );

  const value = {
    expenses: state.expenses,
    setExpenses,
    deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export const useExpense = () => {
  const context = useContext(ExpenseContext);

  if (context === undefined) {
    throw new Error("useContext must be used within ExpenseContext!");
  }

  return context;
};
