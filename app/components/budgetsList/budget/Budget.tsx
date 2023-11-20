export interface BudgetProps {
  name: string;
  totalAmount: number;
  amountSpent: number;
  date: Date;
}
export function Budget({ name, totalAmount, amountSpent, date}: BudgetProps) {
  return <span>Budget component</span>;
}
