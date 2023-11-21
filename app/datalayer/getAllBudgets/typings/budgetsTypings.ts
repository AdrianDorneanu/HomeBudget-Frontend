import { ExpensesAPIOutput } from "./expensesTypings";

export interface BudgetAPIOutput {
  id: string;
  name: string;
  totalAmount: number;
  amountSpent: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  expenses: ExpensesAPIOutput[];
}
