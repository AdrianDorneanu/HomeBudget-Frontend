import {
  BudgetsList,
  ContentLayout,
  Title,
  AddNewBudgetForm,
} from "../components";

export default function BudgetsPage() {
  return (
    <>
      <Title title="Budgets" />
      <ContentLayout>
        <div>
          <AddNewBudgetForm />
        </div>
        <div>
          <BudgetsList />
        </div>
      </ContentLayout>
    </>
  );
}
