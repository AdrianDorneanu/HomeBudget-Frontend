import Link from "next/link";
import { BudgetsList, ContentLayout, Title, ActionButton } from "../components";
import { getAllBudgets } from "../datalayer";

export default async function BudgetsPage() {
  const budgets = await getAllBudgets();

  return (
    <>
      <Title title="Budgets" />
      <ContentLayout>
        <div>
          <span>Add new budget form</span>
        </div>
        <div>
          <BudgetsList budgets={budgets} />
        </div>
      </ContentLayout>
    </>
  );
}
