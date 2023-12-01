export interface Expense {
  name: string;
  amount: number;
  buyer: string;
  dateOfBuying: Date;
  budgetId: string;
}

export interface Expenses {
  expenses: Expense[];
}
