import { Card } from "../../common";

export interface ExpenseCardProps {
  name: string;
  buyer: string;
  amount: number;
  dateOfBuying: Date;
}
export function ExpenseCard() {
  return (
    <Card>
      <div>
        <h1 data-testid="expense-name" className="expense-name">
          Pantaloni munte
        </h1>
      </div>
    </Card>
  );
}
