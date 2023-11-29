import { BudgetsList, ContentLayout, Title, ActionButton } from "../components";

export default function BudgetsPage() {
  return (
    <>
      <Title title="Budgets" />
      <ContentLayout>
        <div>
          <span>Add new budget form</span>
        </div>
        <div>
          <BudgetsList />
        </div>
      </ContentLayout>
    </>
  );
}
