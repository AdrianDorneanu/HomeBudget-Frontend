"use client";

import { createContext, useReducer, useContext } from "react";
import budgetReducer, {
  initialState,
  Budget,
  REDUCER_ACTION_TYPE,
} from "../reducers/BudgetReducer";

const BudgetContext = createContext(initialState);

interface BudgetProviderProps {
  children: React.ReactNode;
}
export function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  function setBudgets(budgets: Budget[]) {
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_BUDGETS,
      payload: { budgets: budgets },
    });
  }

  function addBudget(budget: Budget) {
    const updatedBudgets = state.budgets.concat(budget);

    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_BUDGET,
      payload: {
        budgets: updatedBudgets,
      },
    });
  }

  const value = {
    budgets: state.budgets,
    addBudget,
    setBudgets,
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
