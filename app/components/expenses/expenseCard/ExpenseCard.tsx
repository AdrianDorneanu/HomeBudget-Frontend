import { Card, CardTitle } from "../../common";

export interface ExpenseCardProps {
  id: string;
  name: string;
  buyer: string;
  amount: number;
  dateOfBuying: Date;
}
export function ExpenseCard({
  name,
  buyer,
  amount,
  dateOfBuying,
}: ExpenseCardProps) {
  return (
    <Card>
      <div>
        <CardTitle name={name} />
      </div>
    </Card>
  );
}
