export interface Budget {
  id: string;
  name: string;
  totalAmount: number;
  amountSpent: number;
}
interface State {
  budgets: Budget[];
  date: Date;
}
interface ReducerAction {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
}

export enum REDUCER_ACTION_TYPE {
  SET_BUDGETS,
  ADD_BUDGET,
  REMOVE_BUDGET,
  SET_DATE,
}

export const initialState: State = {
  budgets: [],
  date: new Date(),
};

function budgetReducer(state: State, action: ReducerAction) {
  const { type, payload } = action;

  switch (type) {
    case REDUCER_ACTION_TYPE.SET_BUDGETS: {
      return { ...state, budgets: payload.budgets };
    }
    case REDUCER_ACTION_TYPE.ADD_BUDGET: {
      return { ...state, budgets: payload.budgets };
    }
    case REDUCER_ACTION_TYPE.REMOVE_BUDGET: {
      return { ...state, budgets: payload.budgets };
    }
    case REDUCER_ACTION_TYPE.SET_DATE: {
      return { ...state, date: payload.date };
    }
    default: {
      return { ...state };
    }
  }
}

export default budgetReducer;
