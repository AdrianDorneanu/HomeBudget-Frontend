import Link from "next/link";
import { BudgetsList, ContentLayout, Title, ActionButton } from "../components";
import { getAllBudgets } from "../datalayer";

export default async function BudgetsPage() {
  const budgets = await getAllBudgets();

  return (
    <>
      <Title title="Budgets" />
      <ContentLayout>
        <BudgetsList budgets={budgets} />
      </ContentLayout>
      <ActionButton href="/budgets/add-new" text="Add new" />
    </>
  );
}
