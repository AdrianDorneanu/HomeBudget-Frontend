"use client";

import { createContext, useReducer, useContext } from "react";
import budgetReducer, {
  initialState,
  Budget,
  REDUCER_ACTION_TYPE,
} from "../reducers/BudgetReducer";

interface Context {
  budgets: Budget[];
  month: Date;
  addBudget: (budget: Budget) => void;
  setBudgets: (budgets: Budget[]) => void;
  deleteBudget: (id: string) => void;
  setMonth: (month: Date) => void;
}

const BudgetContext = createContext<Context>(initialState as any);

interface BudgetProviderProps {
  children: React.ReactNode;
}
export function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  function setBudgets(budgets: Budget[]) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_BUDGETS,
      payload: { budgets },
    });
  }

  function addBudget(budget: Budget) {
    const updatedBudgets = [...state.budgets, budget];

    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_BUDGET,
      payload: {
        budgets: updatedBudgets,
      },
    });
  }

  function deleteBudget(id: string) {
    const updatedBudgets = state.budgets.filter(
      (budget: Budget) => budget.id !== id
    );

    dispatch({
      type: REDUCER_ACTION_TYPE.REMOVE_BUDGET,
      payload: {
        budgets: updatedBudgets,
      },
    });
  }

  function setMonth(month: Date) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_MONTH,
      payload: {
        month,
      },
    });
  }

  const value: Context = {
    budgets: state.budgets,
    month: state.month,
    addBudget,
    setBudgets,
    deleteBudget,
    setMonth,
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
