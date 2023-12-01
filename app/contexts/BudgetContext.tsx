"use client";

import { createContext, useReducer, useContext, useCallback } from "react";
import budgetReducer, {
  initialState,
  Budget,
  REDUCER_ACTION_TYPE,
} from "../reducers/BudgetReducer";

interface Context {
  budgets: Budget[];
  date: Date;
  addBudget: (budget: Budget) => void;
  setBudgets: (budgets: Budget[]) => void;
  deleteBudget: (id: string) => void;
  setDate: (date: Date) => void;
}

const BudgetContext = createContext<Context>(initialState as any);

interface BudgetProviderProps {
  children: React.ReactNode;
}
export function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const setBudgets = useCallback((budgets: Budget[]) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_BUDGETS,
      payload: { budgets },
    });
  }, []);

  const addBudget = useCallback(
    (budget: Budget) => {
      const { budgets } = state;

      const updatedBudgets = [...budgets, budget];

      dispatch({
        type: REDUCER_ACTION_TYPE.ADD_BUDGET,
        payload: {
          budgets: updatedBudgets,
        },
      });
    },
    [state]
  );

  const deleteBudget = useCallback(
    (id: string) => {
      const { budgets } = state;

      const updatedBudgets = budgets.filter(
        (budget: Budget) => budget.id !== id
      );

      dispatch({
        type: REDUCER_ACTION_TYPE.REMOVE_BUDGET,
        payload: {
          budgets: updatedBudgets,
        },
      });
    },
    [state]
  );

  const setDate = useCallback((date: Date) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_DATE,
      payload: {
        date,
      },
    });
  }, []);

  const value: Context = {
    budgets: state.budgets,
    date: state.date,
    addBudget,
    setBudgets,
    deleteBudget,
    setDate,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}

export const useBudget = () => {
  const context = useContext(BudgetContext);

  if (context === undefined) {
    throw new Error("useBudget must be used within BudgetContext!");
  }

  return context;
};
