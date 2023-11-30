export interface Expense {
  id: string;
  name: string;
  buyer: string;
  amount: string;
  dateOfBuying: string;
}
interface State {
  expenses: Expense[];
}
interface ReducerAction {
  type: REDUCER_ACTION_TYPE_EXPENSES;
  payload?: any;
}
export enum REDUCER_ACTION_TYPE_EXPENSES {
  SET_EXPENSES,
  DELETE_EXPENSE,
}

export const expensesInitialState: State = {
  expenses: [],
};

function expenseReducer(
  state: typeof expensesInitialState,
  action: ReducerAction
) {
  const { type, payload } = action;

  switch (type) {
    case REDUCER_ACTION_TYPE_EXPENSES.SET_EXPENSES: {
      return { ...state, expenses: payload.expenses };
    }
    case REDUCER_ACTION_TYPE_EXPENSES.DELETE_EXPENSE: {
      return { ...state, expenses: payload.expenses };
    }
    default: {
      return { ...state };
    }
  }
}

export default expenseReducer;
