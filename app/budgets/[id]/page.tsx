import {
  AddNewExpenseForm,
  ContentLayout,
  ExpensesList,
  Title,
} from "@/app/components";
import { getBudgetById } from "@/app/datalayer";

interface BudgetDetailsPageProps {
  params: {
    id: string;
  };
}
export default async function BudgetDetailsPage({
  params: { id },
}: BudgetDetailsPageProps) {
  const budget = await getBudgetById(id);

  const { name, date } = budget;

  return (
    <>
      <Title title={name} />
      <ContentLayout>
        <div>
          <AddNewExpenseForm budgetId={id} dateOfBudgetCreation={date} />
        </div>
        <div>
          <ExpensesList budgetId={id} />
        </div>
      </ContentLayout>
    </>
  );
}
