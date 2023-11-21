export interface BudgetProps {
  id: string;
  name: string;
  totalAmount: number;
  amountSpent: number;
  date: Date;
  /**
   * TODO: apply the correct types for expenses
   */
  expenses: any;
}
export function Budget({ name, totalAmount, amountSpent, date }: BudgetProps) {
  return <span>Budget component</span>;
}
