"use client";

import { createContext, useContext, useReducer, useCallback } from "react";
import { toast } from "react-toastify";
import expenseReducer, {
  Expense,
  REDUCER_ACTION_TYPE_EXPENSES,
  expensesInitialState,
} from "../reducers/ExpenseReducer";
import { deleteExpenseById, addNewExpense } from "../datalayer";
import { isObjectEmpty } from "../utils";

const ExpenseContext = createContext(expensesInitialState);

interface ExpenseProviderProps {
  children: React.ReactNode;
}
export function ExpenseProvider({ children }: ExpenseProviderProps) {
  const [state, dispatch] = useReducer(expenseReducer, expensesInitialState);

  const setExpenses = useCallback((expenses: Expense[]): void => {
    dispatch({
      type: REDUCER_ACTION_TYPE_EXPENSES.SET_EXPENSES,
      payload: { expenses },
    });
  }, []);

  const deleteExpense = useCallback(
    async (id: string): Promise<void> => {
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

        toast(`Successfully deleted expense ${deletedExpense.name}`, {
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

  const addExpense = useCallback(async (newExpense: Expense): Promise<void> => {
    const { expenses } = state;

    /**
     * Add expense to the database
     */
    const data = await addNewExpense(newExpense);

    /**
     * Add expense to the global state
     */
    if (isObjectEmpty(data)) {
      toast("Something went wrong!", { type: "error" });
    } else {
      const updatedExpenses = [...expenses, newExpense];

      dispatch({
        type: REDUCER_ACTION_TYPE_EXPENSES.ADD_EXPENSE,
        payload: { expenses: updatedExpenses }
      });

      toast(`Successfully added expense ${newExpense.name}`, {
        type: "success",
      });
    }
  }, [state]);

  const value = {
    expenses: state.expenses,
    setExpenses,
    deleteExpense,
    addExpense,
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
